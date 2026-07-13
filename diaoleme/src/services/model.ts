import axios from 'axios'
import type { AnalysisResult, AnalysisSource } from '../types'
import { MODEL_API_CONFIG } from './config'

export type AnalyzeMode = 'auto' | 'mock-success' | 'mock-fail'

interface ApiEnvelope {
  success?: boolean
  fallbackCode?: string | null
  error?: { message?: string }
  result?: Record<string, unknown>
}

const DEFAULT_DISCLAIMER = '本结果仅用于轻松记录和娱乐反馈，不作为医疗用途；接入分析接口时，图片仅用于本次分析请求。'

/** Calls the backend proxy; API keys always remain server-side. */
export async function analyzePhoto(file: File, mode: AnalyzeMode = getAnalyzeMode()): Promise<AnalysisResult> {
  validateImageFile(file)

  if (mode === 'mock-fail') {
    await wait(900)
    throw new Error('mock_fail')
  }

  if (mode === 'mock-success') {
    return mockResult(file, 'mock', '演示模式已开启，当前展示本地 mock 反馈。')
  }

  try {
    const form = new FormData()
    form.append('image', file)
    const resp = await axios.post<ApiEnvelope>(MODEL_API_CONFIG.url, form, {
      timeout: MODEL_API_CONFIG.timeout,
    })
    const source = resp.data?.success === false ? 'fallback' : 'api'
    return normalize(parseResponse(resp.data), source, fallbackNotice(resp.data))
  } catch (err) {
    console.warn('[model] 后端分析代理暂时不可用，使用 demo 兜底结果。', err)
    return mockResult(file, 'fallback', requestFailureNotice(err))
  }
}

export function getAnalyzeMode(): AnalyzeMode {
  const params = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null
  const mode = params?.get('mock')
  if (mode === 'success') return 'mock-success'
  if (mode === 'fail') return 'mock-fail'
  return 'auto'
}

export function validateImageFile(file: File) {
  if (!file) throw new Error('empty_file')
  if (!file.type.startsWith('image/')) throw new Error('not_image')
  if (file.size <= 0) throw new Error('empty_file')
}

/** Extracts result while retaining compatibility with the legacy direct-result response. */
function parseResponse(data: ApiEnvelope | Record<string, unknown>): Partial<AnalysisResult> & Record<string, unknown> {
  const response = data as Record<string, unknown>
  if (response.result && typeof response.result === 'object') {
    return response.result as Partial<AnalysisResult> & Record<string, unknown>
  }
  return response
}

function normalize(
  data: Partial<AnalysisResult> & Record<string, unknown>,
  source: AnalysisSource = data.source || 'api',
  serviceNotice?: string,
): AnalysisResult {
  const score = typeof data.score === 'number' ? Math.max(0, Math.min(100, Math.round(data.score))) : 66
  const task = data.task && typeof data.task === 'object' ? data.task as Record<string, unknown> : undefined
  const taskText = safeText(data.daily_task, safeText(task?.description, safeText(task?.name, '今晚给自己留 30 分钟放松时间')))
  const suggestions = Array.isArray(data.suggestions) && data.suggestions.length > 0
    ? data.suggestions.slice(0, 5).map(String)
    : [taskText]
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
    daily_task: taskText,
    disclaimer: safeText(data.disclaimer, DEFAULT_DISCLAIMER),
    source,
    source_label: sourceLabel(source, typeof data.source_label === 'string' ? data.source_label : undefined),
    service_notice: serviceNotice,
    count: data.count === '少量' || data.count === '偏多' ? data.count : '中等',
    thickness: data.thickness === '粗硬' || data.thickness === '细软' ? data.thickness : '正常',
    suggestions,
  }
}

function safeText(value: unknown, fallback: string) {
  return typeof value === 'string' && value.trim() ? value.trim() : fallback
}

function buildTags(score: number) {
  if (score >= 75) return ['队形稳定', '心态在线', '今日好梳']
  if (score >= 50) return ['轻微波动', '继续观察', '早点睡派']
  return ['需要抱抱', '从容记录', '温柔养成']
}

function sourceLabel(source: AnalysisSource, label?: string) {
  if (label) return label
  if (source === 'api') return '真实 AI 趣味反馈'
  if (source === 'fallback') return 'Demo 降级反馈'
  return 'Demo mock 结果'
}

function fallbackNotice(data: ApiEnvelope) {
  if (data.success !== false) return undefined
  const message = safeText(data.error?.message, '后端暂时返回了保底结果。')
  return `${message} 本次记录仍已完成，可稍后再试真实分析。`
}

function requestFailureNotice(err: unknown) {
  if (axios.isAxiosError(err) && err.code === 'ECONNABORTED') {
    return '分析等待时间有点久，已自动切换为 demo 反馈，本次记录不会中断。'
  }
  return '真实分析服务暂时没有连上，已自动切换为 demo 反馈，本次记录不会中断。'
}

function mockResult(file?: File, source: AnalysisSource = 'mock', serviceNotice?: string): Promise<AnalysisResult> {
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
        service_notice: serviceNotice,
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
