import axios from 'axios'
import type { AnalysisResult, AnalysisSource } from '../types'
import type { ReportRecord } from '../store/UserStore'
import { chatFallbackReply } from './apiWaitFeedback'
import { CHAT_API_CONFIG, MODEL_API_CONFIG, RECORDS_API_CONFIG } from './config'

export type AnalyzeMode = 'auto' | 'mock-success' | 'mock-fail' | 'mock-slow' | 'mock-slow-fail'


export interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

export interface ChatResult {
  reply: string
  source: AnalysisSource
  source_label: string
  fallback_code: string | null
}

/** Compact history summary for POST /api/chat (AIFA-50 / AIFA-52 / AIFA-68). */
export interface ReportContextItem {
  date: string
  title: string
  score: number
  summary: string
  score_delta?: number | null
  daily_task?: string
  tags?: string[]
}

/** Backend safety cap (AIFA-69); frontend must not exceed this. */
export const REPORT_CONTEXT_MAX = 40

/** Local natural week bounds: Mon 00:00 → Sun 23:59:59 as YYYY-MM-DD (AIFA-68). */
export function getLocalWeekDateBounds(now = new Date()): { start: string; end: string } {
  const localMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  const day = localMidnight.getDay() // 0=Sun … 6=Sat
  const mondayOffset = day === 0 ? -6 : 1 - day
  const monday = new Date(localMidnight)
  monday.setDate(localMidnight.getDate() + mondayOffset)
  const sunday = new Date(monday)
  sunday.setDate(monday.getDate() + 6)
  const fmt = (d: Date) => {
    const y = d.getFullYear()
    const m = String(d.getMonth() + 1).padStart(2, '0')
    const dayNum = String(d.getDate()).padStart(2, '0')
    return `${y}-${m}-${dayNum}`
  }
  return { start: fmt(monday), end: fmt(sunday) }
}

/**
 * Build chat report_context from this browser's reportHistory.
 * AIFA-68: only local natural-week Scan reports (not last-N), newest first, ≤40.
 */
export function buildReportContext(
  history: ReportRecord[],
  limit = REPORT_CONTEXT_MAX,
): ReportContextItem[] {
  const { start, end } = getLocalWeekDateBounds()
  const capped = Math.min(Math.max(0, limit), REPORT_CONTEXT_MAX)
  return history
    .filter((r) => typeof r.date === 'string' && r.date >= start && r.date <= end)
    .slice()
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))
    .slice(0, capped)
    .map((r) => {
      const item: ReportContextItem = {
        date: r.date,
        title: r.title,
        score: r.score,
        summary: r.summary,
      }
      if (r.score_delta != null) item.score_delta = r.score_delta
      if (r.daily_task) item.daily_task = r.daily_task
      if (Array.isArray(r.tags) && r.tags.length) item.tags = r.tags.slice(0, 4)
      return item
    })
}

export async function chatWithAssistant(
  messages: ChatMessage[],
  options?: { reportContext?: ReportContextItem[] },
): Promise<ChatResult> {
  try {
    // Live openai_compatible Responses upstream rejects assistant-role turns in
    // `input` (UPSTREAM_FAILED). Local widget keeps a greeting assistant bubble —
    // send user turns only (AIFA-47). Optionally attach local Journey report
    // summaries so the backend can ground answers (AIFA-52).
    const userMessages = messages
      .filter((m) => m.role === 'user' && m.content.trim())
      .slice(-8)
    const latest = userMessages[userMessages.length - 1]
    if (!latest) {
      return {
        reply: '先随便说一句想聊的内容就好，我在这儿陪你轻松记录。',
        source: 'fallback',
        source_label: '本地聊天 fallback（非真实 AI）',
        fallback_code: 'EMPTY_MESSAGE',
      }
    }
    const report_context = Array.isArray(options?.reportContext)
      ? options!.reportContext!.slice(0, REPORT_CONTEXT_MAX)
      : []
    const resp = await axios.post(
      CHAT_API_CONFIG.url,
      { messages: userMessages, message: latest.content, report_context },
      { timeout: CHAT_API_CONFIG.timeout },
    )
    return normalizeChatResponse(resp.data)
  } catch (err) {
    if (axios.isAxiosError(err) && err.response?.data) {
      return normalizeChatResponse(err.response.data)
    }
    console.warn('[model] 聊天接口暂不可达，返回本地客服兜底。', err)
    return {
      reply: chatFallbackReply('CHAT_BACKEND_UNREACHABLE'),
      source: 'fallback',
      source_label: '本地聊天 fallback（非真实 AI）',
      fallback_code: 'CHAT_BACKEND_UNREACHABLE',
    }
  }
}

/**
 * Load archive history from GET /api/records (canonical history API, AIFA-30).
 * Supports both flat history_list_v1 fields and nested result.* for older deploys.
 */
export async function fetchHistoryRecords(limit = 20): Promise<ReportRecord[]> {
  try {
    const resp = await axios.get(RECORDS_API_CONFIG.url, {
      params: { limit },
      timeout: RECORDS_API_CONFIG.timeout,
    })
    const rows = Array.isArray(resp.data?.records) ? resp.data.records : []
    const normalized: ReportRecord[] = rows
      .map((row: unknown) => normalizeHistoryRecord(row))
      .filter((row: ReportRecord | null): row is ReportRecord => Boolean(row))
    // Backfill compare when public deploy still lacks history_list_v1 flat fields.
    return normalized.map((row: ReportRecord, index: number) => {
      if (row.score_delta != null) return row
      const older = normalized[index + 1]
      if (!older) return row
      return {
        ...row,
        score_delta: row.score - older.score,
        prev_title: older.title,
      }
    })
  } catch (err) {
    console.warn('[model] 历史接口不可达，保留本地记录。', err)
    return []
  }
}

function normalizeHistoryRecord(raw: any): ReportRecord | null {
  if (!raw || typeof raw !== 'object') return null
  const result = raw.result && typeof raw.result === 'object' ? raw.result : {}
  const scoreValue = typeof raw.fun_score === 'number'
    ? raw.fun_score
    : typeof raw.score === 'number'
      ? raw.score
      : typeof result.score === 'number'
        ? result.score
        : typeof result.fun_score === 'number'
          ? result.fun_score
          : null
  if (typeof scoreValue !== 'number') return null

  const createdAt = typeof raw.created_at === 'string' ? raw.created_at : ''
  const date = createdAt.slice(0, 10) || new Date().toISOString().slice(0, 10)
  const recordId = typeof raw.record_id === 'string' ? raw.record_id : null
  const compare = raw.compare && typeof raw.compare === 'object' ? raw.compare : null
  const growth = raw.growth && typeof raw.growth === 'object'
    ? raw.growth
    : result.growthDelta && typeof result.growthDelta === 'object'
      ? result.growthDelta
      : {}

  let scoreDelta = typeof compare?.score_delta === 'number' ? compare.score_delta : null
  const prevTitle = typeof compare?.prev_title === 'string' ? compare.prev_title : null

  const analysis = normalizeResponse({
    ...raw,
    result: {
      ...result,
      score: scoreValue,
      title: raw.title || result.title,
      source: result.source || raw.ai_source,
      source_label: result.source_label,
    },
    record_id: recordId,
    record_status: raw.record_status,
    fallbackCode: raw.fallbackCode ?? raw.fallback_code,
    ai_source: raw.ai_source,
    success: raw.success,
  })

  return {
    id: recordId || `remote_${date}_${scoreValue}`,
    date,
    score: analysis.score,
    title: analysis.title,
    summary: analysis.summary,
    roast: analysis.roast,
    encouragement: analysis.encouragement,
    tags: analysis.tags,
    daily_task: analysis.daily_task,
    disclaimer: analysis.disclaimer,
    source: analysis.source,
    source_label: analysis.source_label,
    fallback_code: analysis.fallback_code,
    record_status: analysis.record_status,
    record_id: analysis.record_id,
    count: analysis.count,
    thickness: analysis.thickness,
    suggestions: analysis.suggestions,
    score_delta: scoreDelta,
    prev_title: prevTitle,
    exp_added: typeof growth.exp_added === 'number' ? growth.exp_added : undefined,
  }
}

function normalizeChatResponse(payload: any): ChatResult {
  const source = normalizeSource(payload?.source, payload?.ai_source, payload?.success)
  return {
    reply: safeText(payload?.reply, '我收到啦。今天先保持轻松记录，不做医学判断，只陪你养成一点点好习惯。'),
    source,
    source_label: safeText(payload?.source_label, sourceLabel(source)),
    fallback_code: safeNullableText(payload?.fallback_code ?? payload?.fallbackCode),
  }
}

const DEFAULT_DISCLAIMER = '本结果仅用于轻松记录和娱乐反馈，不作为医疗用途；接入分析接口时，图片仅用于本次分析请求。'
export const MAX_IMAGE_SIZE_BYTES = 8 * 1024 * 1024

/**
 * 相册原图常比相机 canvas JPEG 更大/更杂（HEIC、超大尺寸），导致 multipart 超时或上游失败，
 * 前端误吞成 BACKEND_UNREACHABLE。上传前统一压成 JPEG，与拍照路径对齐（AIFA-61）。
 */
export async function prepareAnalyzeImage(file: File): Promise<File> {
  validateImageFile(file)
  const source = withInferredMime(file)
  // Already a modest JPEG — keep as-is to avoid quality loss (same class as camera canvas).
  if (source.type === 'image/jpeg' && source.size <= 1.5 * 1024 * 1024) {
    return ensureAsciiJpegName(source)
  }

  try {
    const bitmap = await createImageBitmap(source)
    const maxEdge = 1600
    const scale = Math.min(1, maxEdge / Math.max(bitmap.width, bitmap.height))
    const width = Math.max(1, Math.round(bitmap.width * scale))
    const height = Math.max(1, Math.round(bitmap.height * scale))
    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    const ctx = canvas.getContext('2d')
    if (!ctx) {
      bitmap.close()
      return ensureAsciiJpegName(source)
    }
    ctx.drawImage(bitmap, 0, 0, width, height)
    bitmap.close()
    const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, 'image/jpeg', 0.85))
    if (!blob) return ensureAsciiJpegName(source)
    return new File([blob], `diaoleme-album-${Date.now()}.jpg`, {
      type: 'image/jpeg',
      lastModified: Date.now(),
    })
  } catch (err) {
    console.warn('[model] 图片规范化失败，回退原文件上传。', err)
    return ensureAsciiJpegName(source)
  }
}

/**
 * 调用本地后端代理生成娱乐化反馈。真实 API key 只由后端读取，不进入前端代码。
 */
export async function analyzePhoto(file: File, mode: AnalyzeMode = getAnalyzeMode()): Promise<AnalysisResult> {
  validateImageFile(file)
  const uploadFile = mode === 'auto' ? await prepareAnalyzeImage(file) : withInferredMime(file)

  if (mode === 'mock-fail') {
    await wait(900)
    throw new Error('mock_fail')
  }

  // Demo: simulate Render cold-start delay so UI can show >3s wait copy (AIFA-86).
  if (mode === 'mock-slow') {
    await wait(4500)
    return mockResult(uploadFile, 'mock')
  }

  if (mode === 'mock-slow-fail') {
    await wait(4500)
    throw new Error('mock_fail')
  }

  if (mode === 'mock-success') {
    return mockResult(uploadFile, 'mock')
  }

  try {
    const form = new FormData()
    // Explicit filename keeps multipart Content-Disposition ASCII-stable (album paths).
    form.append('image', uploadFile, uploadFile.name || `diaoleme-album-${Date.now()}.jpg`)
    const resp = await axios.post(MODEL_API_CONFIG.url, form, {
      timeout: MODEL_API_CONFIG.timeout,
    })

    return normalizeResponse(resp.data)
  } catch (err) {
    // Prefer backend-authored fallback body over inventing BACKEND_UNREACHABLE.
    if (axios.isAxiosError(err) && err.response?.data && typeof err.response.data === 'object') {
      console.warn('[model] 分析接口返回非 2xx，使用响应体（非本地静默兜底）。', {
        status: err.response.status,
        name: uploadFile.name,
        type: uploadFile.type,
        size: uploadFile.size,
      })
      return normalizeResponse(err.response.data)
    }
    console.warn('[model] 后端分析代理不可达，返回明确的本地 fallback。', {
      err,
      name: uploadFile.name,
      type: uploadFile.type,
      size: uploadFile.size,
      originalName: file.name,
      originalType: file.type,
      originalSize: file.size,
    })
    return localFallbackResult(uploadFile)
  }
}

export function getAnalyzeMode(): AnalyzeMode {
  const params = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null
  const mode = params?.get('mock')
  if (mode === 'success') return 'mock-success'
  if (mode === 'fail') return 'mock-fail'
  if (mode === 'slow') return 'mock-slow'
  if (mode === 'slow-fail') return 'mock-slow-fail'
  return 'auto'
}

export function validateImageFile(file: File) {
  if (!file) throw new Error('empty_file')
  // Some album picks (esp. Windows / HEIC) report empty MIME; infer from extension.
  const mime = file.type || guessImageMime(file.name)
  if (!mime.startsWith('image/')) throw new Error('not_image')
  if (file.size <= 0) throw new Error('empty_file')
  if (file.size > MAX_IMAGE_SIZE_BYTES) throw new Error('file_too_large')
}

function guessImageMime(name: string) {
  const lower = name.toLowerCase()
  if (lower.endsWith('.jpg') || lower.endsWith('.jpeg')) return 'image/jpeg'
  if (lower.endsWith('.png')) return 'image/png'
  if (lower.endsWith('.webp')) return 'image/webp'
  if (lower.endsWith('.gif')) return 'image/gif'
  if (lower.endsWith('.heic') || lower.endsWith('.heif')) return 'image/heic'
  return ''
}

/** Rewrap album File when browser left type empty but extension is image. */
function withInferredMime(file: File): File {
  if (file.type) return file
  const mime = guessImageMime(file.name)
  if (!mime) return file
  return new File([file], file.name || `diaoleme-album-${Date.now()}.jpg`, {
    type: mime,
    lastModified: file.lastModified,
  })
}

function ensureAsciiJpegName(file: File): File {
  const asciiName = /^[\x20-\x7E]+$/.test(file.name || '') && /\.jpe?g$/i.test(file.name)
  if (file.type === 'image/jpeg' && asciiName) return file
  const type = file.type || 'image/jpeg'
  const ext = type === 'image/png' ? 'png' : type === 'image/webp' ? 'webp' : 'jpg'
  return new File([file], `diaoleme-album-${Date.now()}.${ext}`, {
    type,
    lastModified: file.lastModified || Date.now(),
  })
}

/** 保留后端顶层状态，避免把 fallback 或 mock 响应误标成真实 AI。 */
export function normalizeResponse(payload: any): AnalysisResult {
  const data = payload?.result && typeof payload.result === 'object'
    ? payload.result as Partial<AnalysisResult>
    : payload && typeof payload === 'object'
      ? payload as Partial<AnalysisResult>
      : {}
  const source = normalizeSource(data.source, payload?.ai_source, payload?.success)

  return normalize(data, source, {
    fallbackCode: safeNullableText(payload?.fallbackCode ?? payload?.fallback_code),
    recordStatus: safeText(payload?.record_status, source === 'api' ? 'ai_completed' : `${source}_result`),
    recordId: safeNullableText(payload?.record_id),
  })
}

function normalize(
  data: Partial<AnalysisResult>,
  source: AnalysisSource = data.source || 'api',
  meta: { fallbackCode?: string | null; recordStatus?: string; recordId?: string | null } = {},
): AnalysisResult {
  const score = typeof data.score === 'number' ? Math.max(0, Math.min(100, Math.round(data.score))) : 66
  const suggestions = Array.isArray(data.suggestions) && data.suggestions.length > 0
    ? data.suggestions.slice(0, 5).map(String)
    : [data.daily_task || '今晚给自己留 30 分钟放松时间']
  const tags = Array.isArray(data.tags) && data.tags.length > 0
    ? data.tags.slice(0, 4).map(String)
    : buildTags(score)

  return {
    score,
    title: safeText(data.title, score >= 70 ? '发丝巡逻队长' : score >= 45 ? '头毛观察员' : '发量守护实习生'),
    summary: safeText(data.summary, score >= 70 ? '今天的头毛队形挺稳，适合继续轻松记录。' : '今天有一点小波动，但已经被你认真捕捉到了。'),
    roast: safeText(data.roast, score >= 70 ? '发丝们排队下班，还挺讲秩序。' : '头发像开了早会，讨论得稍微热闹了一点。'),
    encouragement: safeText(data.encouragement, '别紧张，记录本身就很棒，黏土小人会陪你慢慢养成节奏。'),
    tags,
    daily_task: safeText(data.daily_task, suggestions[0]),
    disclaimer: safeText(data.disclaimer, DEFAULT_DISCLAIMER),
    source,
    source_label: sourceLabel(source, data.source_label),
    fallback_code: meta.fallbackCode ?? null,
    record_status: meta.recordStatus || `${source}_result`,
    record_id: meta.recordId ?? null,
    count: data.count === '少量' || data.count === '偏多' ? data.count : '中等',
    thickness: data.thickness === '粗硬' || data.thickness === '细软' ? data.thickness : '正常',
    suggestions,
  }
}

function safeText(value: unknown, fallback: string) {
  return typeof value === 'string' && value.trim() ? value.trim() : fallback
}

function safeNullableText(value: unknown) {
  return typeof value === 'string' && value.trim() ? value.trim() : null
}

function normalizeSource(resultSource: unknown, aiSource: unknown, success: unknown): AnalysisSource {
  if (resultSource === 'api' || resultSource === 'mock' || resultSource === 'fallback') return resultSource
  if (success === false || aiSource === 'fallback') return 'fallback'
  if (aiSource === 'mock') return 'mock'
  return 'api'
}

function buildTags(score: number) {
  if (score >= 75) return ['队形稳定', '心态在线', '今日好梳']
  if (score >= 50) return ['轻微波动', '继续观察', '早点睡派']
  return ['需要抱抱', '从容记录', '温柔养成']
}

function sourceLabel(source: AnalysisSource, label?: string) {
  if (label) return label
  if (source === 'api') return 'CC club OpenAI compatible AI 分析结果'
  if (source === 'fallback') return 'AI 兜底结果'
  return 'Demo mock 结果'
}

function mockResult(file?: File, source: AnalysisSource = 'mock'): Promise<AnalysisResult> {
  const fileHint = file?.name ? `已读取「${file.name.slice(0, 18)}」` : '已读取今天的照片'
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({
        score: 72,
        title: '发际线守护者',
        summary: `${fileHint}，画面里的头发队伍整体比较淡定，今天适合给自己发一枚“坚持观察”小勋章。`,
        roast: '头发们像下班高峰的小电驴，数量有点存在感，但还没堵成一条街。',
        encouragement: '不用和每根头发较劲，能记录下来已经赢过昨天的自己啦。',
        tags: ['今日好梳', '轻松观察', '早睡加分'],
        daily_task: '今晚睡前做 2 分钟放松呼吸，再给手机设一个早睡提醒。',
        disclaimer: DEFAULT_DISCLAIMER,
        source,
        source_label: sourceLabel(source),
        fallback_code: null,
        record_status: 'frontend_demo_mock',
        record_id: null,
        count: '中等',
        thickness: '正常',
        suggestions: [
          '今晚提前 30 分钟进入休息模式',
          '洗头时水温尽量温和',
          '睡前做 2 分钟放松呼吸',
        ],
      })
    }, 1200),
  )
}

async function localFallbackResult(file: File): Promise<AnalysisResult> {
  const result = await mockResult(file, 'fallback')
  return {
    ...result,
    title: '本地兜底记录',
    summary: '后端分析服务暂时不可达，当前展示的是本地 demo fallback，不是真实 AI 结果。',
    disclaimer: '当前为本地 demo fallback，仅用于娱乐记录和习惯养成展示，不代表真实 AI 分析或医学判断。',
    source_label: '本地 Demo fallback（非真实 AI）',
    fallback_code: 'BACKEND_UNREACHABLE',
    record_status: 'frontend_local_fallback',
  }
}

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const HAIRSTYLE_CATALOG: {
  id: string
  name: string
  emoji: string
  cost: number
  description: string
}[] = [
  { id: 'none', name: '素颜', emoji: '🌱', cost: 0, description: '最真实的自己' },
  { id: 'short', name: '清爽短发', emoji: '✂️', cost: 0, description: '简单利落' },
  { id: 'medium', name: '自然中分', emoji: '💇', cost: 30, description: '邻家风格' },
  { id: 'long', name: '飘逸长发', emoji: '👸', cost: 80, description: '需要坚持打卡' },
  { id: 'curly', name: '羊毛卷', emoji: '🌀', cost: 120, description: '俏皮可爱' },
  { id: 'bun', name: '丸子头', emoji: '🎀', cost: 200, description: '终极成就' },
]
