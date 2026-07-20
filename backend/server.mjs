import { createServer } from 'node:http'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { existsSync, readFileSync } from 'node:fs'
import { dirname, extname, join } from 'node:path'
import { randomUUID } from 'node:crypto'
import { fileURLToPath, pathToFileURL } from 'node:url'

const MAX_BODY_BYTES = 8 * 1024 * 1024
const UPLOAD_DIR = fileURLToPath(new URL('./uploads/', import.meta.url))
let recordsWriteQueue = Promise.resolve()

loadDotEnv()

const RECORDS_FILE = process.env.RECORDS_FILE
  ? join(process.cwd(), process.env.RECORDS_FILE)
  : fileURLToPath(new URL('./data/records.json', import.meta.url))
const PORT = Number(process.env.PORT || 8787)
const PRIMARY_ANALYSIS_PATH = '/api/analyze'
const LEGACY_ANALYSIS_PATH = '/api/hair-analysis'
const CHAT_PATH = '/api/chat'
const SILICONFLOW_URL = 'https://api.siliconflow.cn/v1/chat/completions'
const SILICONFLOW_MODEL = process.env.SILICONFLOW_MODEL || 'Qwen/Qwen3-VL-32B-Instruct'
const SILICONFLOW_TIMEOUT_MS = Number(process.env.SILICONFLOW_TIMEOUT_MS || 30000)
const AI_PROVIDER = normalizeProvider(process.env.AI_PROVIDER || (process.env.OPENAI_API_KEY ? 'openai_compatible' : 'siliconflow'))
const OPENAI_BASE_URL = process.env.OPENAI_BASE_URL || 'https://claude-code.club/openai/v1'
const OPENAI_RESPONSES_URL = process.env.OPENAI_RESPONSES_URL || buildEndpointUrl(OPENAI_BASE_URL, 'responses')
const OPENAI_MODEL = process.env.OPENAI_MODEL || 'gpt-5.5'
const OPENAI_TIMEOUT_MS = Number(process.env.OPENAI_TIMEOUT_MS || process.env.SILICONFLOW_TIMEOUT_MS || 30000)

const SAFE_DISCLAIMER = '本结果仅用于娱乐和习惯记录，不构成医疗建议。'
const UNSAFE_AI_CONTENT = [
  /严重脱发|病理性脱发|雄激素性脱发|斑秃|秃了|秃头/u,
  /疾病|患病|病症|诊断|确诊|治疗|用药|药物|处方|就医|医院|医生/u,
  /发际线.{0,6}(明显)?后移|健康风险|疾病风险/u,
  /diagnos(?:is|e)|disease|treat(?:ment)?|medication|prescription|see a doctor/iu,
]

const SYSTEM_PROMPT =
  '你是“掉了么”的趣味头发记录陪伴员。用户会上传掉发或头发状态照片。' +
  '请只基于画面给出轻松、娱乐化、非医学的反馈，不要使用诊断、疾病风险、治疗建议、用药、就医等表达，也不要给出确定性健康判断。' +
  '请返回严格 JSON，不要返回 Markdown 或解释。JSON 字段为：' +
  '{"score":0-100,"title":"今日称号","summary":"轻松摘要","roast":"温和吐槽","encouragement":"鼓励",' +
  '"tags":["趣味标签"],"daily_task":"今日小任务","count":"少量|中等|偏多","thickness":"粗硬|正常|细软",' +
  '"suggestions":["建议1","建议2","建议3"],"disclaimer":"本结果仅用于轻松记录和娱乐反馈，不作为医疗用途。"}'

const CHAT_SYSTEM_PROMPT =
  '你是“掉了么”的网页客服式 AI 助手，面向健康年轻人的娱乐/社交/养发习惯养成 demo。' +
  '请用温柔、轻松、简洁的中文回答，帮助用户理解记录、任务、积分、伙伴成长和非医学的生活习惯建议。' +
  '不要做医疗诊断，不要提疾病风险、治疗、用药、就医建议，不要制造脱发焦虑。无法确定时，引导用户做轻量记录或完成一个小任务。'

const SCENARIOS = {
  success: {
    httpStatus: 200,
    success: true,
    fallbackCode: null,
    record_status: 'demo_mock_completed',
    score: 86,
    title: '今日发量守护者',
    summary: '这张记录看起来清爽有精神，今天的头发小伙伴状态在线。',
    roast: '发丝们开会很守秩序，没有上演离家出走大戏。',
    encouragement: '继续轻松记录就好，保持这个节奏很适合 demo 展示。',
    image_quality: 'clear',
    tags: ['清爽', '稳定', '元气在线'],
    task: {
      name: '今晚早点睡',
      description: '给头发小伙伴一点安静休息时间。',
      exp_reward: 12,
    },
    growthDelta: {
      exp_added: 12,
      current_level: 1,
      streak_days: 1,
    },
  },
  low_quality: {
    httpStatus: 200,
    success: true,
    fallbackCode: 'LOW_QUALITY_IMAGE',
    record_status: 'demo_mock_saved_with_notes',
    score: 58,
    title: '模糊也努力奖',
    summary: '图片有点暗或不够清楚，但这次记录已经成功保存。',
    roast: '镜头像刚睡醒，头发小伙伴也有点害羞。',
    encouragement: '下次试试靠近一点、光线亮一点，结果页会更好看。',
    image_quality: 'low_light_or_blurry',
    tags: ['已记录', '光线偏暗', '下次更清楚'],
    task: {
      name: '拍照补光挑战',
      description: '下次记录时找一盏温柔的灯帮忙。',
      exp_reward: 8,
    },
    growthDelta: {
      exp_added: 8,
      current_level: 1,
      streak_days: 1,
    },
  },
  analysis_failed: {
    httpStatus: 200,
    success: false,
    fallbackCode: 'MOCK_ANALYSIS_FALLBACK',
    record_status: 'demo_mock_fallback',
    score: 50,
    title: '发丝临时休息站',
    summary: '这次 demo mock 分析暂时开小差了，但记录没有丢，先给你一个轻量反馈。',
    roast: '分析小机器人去倒水了，回来继续营业。',
    encouragement: '不用担心，demo 场景会稳定返回可展示结果。',
    image_quality: 'unknown',
    tags: ['已保存', '临时反馈', '稍后可重试'],
    task: {
      name: '喝水打卡',
      description: '先喝一杯水，给今天加一点轻松感。',
      exp_reward: 5,
    },
    growthDelta: {
      exp_added: 5,
      current_level: 1,
      streak_days: 1,
    },
  },
}

function loadDotEnv() {
  const envPath = fileURLToPath(new URL('./.env', import.meta.url))
  if (!existsSync(envPath)) return

  for (const line of readFileSync(envPath, 'utf8').split(/\r?\n/)) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const separator = trimmed.indexOf('=')
    if (separator <= 0) continue
    const key = trimmed.slice(0, separator).trim()
    const rawValue = trimmed.slice(separator + 1).trim()
    const value = rawValue.replace(/^["']|["']$/g, '')
    if (!process.env[key]) process.env[key] = value
  }
}

function normalizeProvider(value) {
  return value === 'openai_compatible' ? 'openai_compatible' : 'siliconflow'
}

function activeProviderLabel() {
  return AI_PROVIDER === 'openai_compatible' ? 'OpenAI compatible' : 'SiliconFlow'
}

function buildEndpointUrl(baseUrl, endpoint) {
  return `${baseUrl.replace(/\/+$/, '')}/${endpoint}`
}

function buildChatCompletionUrl(baseUrl) {
  return buildEndpointUrl(baseUrl, 'chat/completions')
}

function jsonResponse(res, statusCode, payload) {
  res.writeHead(statusCode, {
    'content-type': 'application/json; charset=utf-8',
    'access-control-allow-origin': '*',
    'access-control-allow-methods': 'GET,POST,OPTIONS',
    'access-control-allow-headers': 'content-type',
  })
  res.end(JSON.stringify(payload, null, 2))
}

function buildAnalysisResponse(scenario, requestMeta = {}) {
  const data = SCENARIOS[scenario] || SCENARIOS.success
  const imageUrl = requestMeta.image_url || requestMeta.uploaded_file?.url || null
  return {
    success: data.success,
    fallbackCode: data.fallbackCode,
    record_id: `rec_${randomUUID()}`,
    analysisId: `ana_${randomUUID()}`,
    record_status: data.record_status,
    image_url: imageUrl,
    ai_source: 'mock',
    result: {
      score: data.score,
      title: data.title,
      summary: data.summary,
      task: data.task,
      growthDelta: data.growthDelta,
      tags: data.tags,
      disclaimer: SAFE_DISCLAIMER,
      roast: data.roast,
      encouragement: data.encouragement,
      image_quality: data.image_quality,
      source: 'mock',
      source_label: 'Demo mock 结果',
      daily_task: data.task.description,
      count: '中等',
      thickness: '正常',
      suggestions: [data.task.description],
    },
  }
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = []
    let size = 0
    let tooLarge = false
    req.on('data', (chunk) => {
      size += chunk.length
      if (size > MAX_BODY_BYTES) {
        tooLarge = true
        return
      }
      chunks.push(chunk)
    })
    req.on('end', () => {
      if (tooLarge) {
        reject(Object.assign(new Error('BODY_TOO_LARGE'), { code: 'BODY_TOO_LARGE' }))
        return
      }
      resolve(Buffer.concat(chunks))
    })
    req.on('error', reject)
  })
}

function parseJsonBody(buffer) {
  if (!buffer.length) return {}
  return JSON.parse(buffer.toString('utf8'))
}

function parseMultipart(buffer, contentType) {
  const boundary = contentType.match(/boundary=(?:"([^"]+)"|([^;]+))/)?.[1]
    || contentType.match(/boundary=(?:"([^"]+)"|([^;]+))/)?.[2]
    || contentType.match(/boundary=([^;]+)/)?.[1]
  if (!boundary) throw Object.assign(new Error('Missing multipart boundary'), { code: 'BAD_MULTIPART' })

  const raw = buffer.toString('binary')
  const parts = raw.split(`--${boundary}`)
  const fields = {}
  const files = []

  for (const part of parts) {
    if (!part || part === '--\r\n' || part === '--') continue
    const separator = part.indexOf('\r\n\r\n')
    if (separator < 0) continue
    const headerText = part.slice(0, separator)
    let valueBinary = part.slice(separator + 4)
    if (valueBinary.endsWith('\r\n')) valueBinary = valueBinary.slice(0, -2)
    if (valueBinary.endsWith('--')) valueBinary = valueBinary.slice(0, -2)

    const disposition = headerText.match(/content-disposition:\s*form-data;([^\r\n]+)/i)?.[1] || ''
    const name = disposition.match(/name="([^"]+)"/)?.[1]
    const filename = disposition.match(/filename="([^"]*)"/)?.[1]
    const contentTypeMatch = headerText.match(/content-type:\s*([^\r\n]+)/i)?.[1]
    if (!name) continue

    if (filename) {
      files.push({
        field: name,
        filename,
        contentType: contentTypeMatch || 'application/octet-stream',
        buffer: Buffer.from(valueBinary, 'binary'),
      })
    } else {
      fields[name] = Buffer.from(valueBinary, 'binary').toString('utf8')
    }
  }

  return { fields, files }
}

async function saveUploadedFile(file) {
  await mkdir(UPLOAD_DIR, { recursive: true })
  const safeExt = extname(file.filename).slice(0, 12) || '.bin'
  const storedName = `${Date.now()}-${randomUUID()}${safeExt}`
  await writeFile(join(UPLOAD_DIR, storedName), file.buffer)
  return {
    field: file.field,
    original_name: file.filename,
    stored_name: storedName,
    size: file.buffer.length,
    content_type: file.contentType,
    url: `/uploads/${storedName}`,
    buffer: file.buffer,
  }
}

async function persistRecordBestEffort(record) {
  try {
    await saveRecord(record)
  } catch (error) {
    console.warn(`[records] save failed: ${error?.message || 'unknown error'}`)
  }
}

function buildFallbackResponse(fallbackCode, message, imageUrl = null, options = {}) {
  return {
    success: false,
    fallbackCode,
    record_id: `rec_${randomUUID()}`,
    analysisId: `ana_${randomUUID()}`,
    record_status: options.record_status || 'demo_ai_fallback',
    image_url: imageUrl,
    ai_source: options.ai_source || 'fallback',
    error: { code: fallbackCode, message },
    result: {
      score: 50,
      title: options.title || '记录先收下',
      summary: message,
      task: {
        name: options.taskName || '轻松重试一下',
        description: options.taskDescription || '稍后换张清楚照片，或检查后端 API key 配置后再试。',
        exp_reward: 0,
      },
      growthDelta: {
        exp_added: 0,
        current_level: 1,
        streak_days: 0,
      },
      tags: options.tags || ['已记录', '可重试'],
      disclaimer: SAFE_DISCLAIMER,
      roast: options.roast || '分析小机器人暂时没连上外援，但结果页不会空手而归。',
      encouragement: '不用担心，照片记录已经进入演示链路，可以稍后再试真实 AI。',
      image_quality: options.image_quality || 'unknown',
      source: 'fallback',
      source_label: 'AI 兜底结果',
      daily_task: options.taskDescription || '稍后再试一次真实 AI 分析。',
      count: '中等',
      thickness: '正常',
      suggestions: [
        '确认 backend/.env 已配置当前 AI provider 的 API key',
        '确认后端服务正在运行',
        '稍后重新上传一张清楚照片',
      ],
    },
  }
}

export function buildAiResponse(modelData, requestMeta = {}, provider = AI_PROVIDER) {
  const imageUrl = requestMeta.image_url || requestMeta.uploaded_file?.url || null
  if (containsUnsafeAiContent(modelData)) {
    return buildFallbackResponse(
      'CONTENT_BLOCKED',
      '本次 AI 文案不符合轻松记录口径，已自动换成安全的娱乐化反馈。',
      imageUrl,
      {
        title: '轻松记录守门员',
        taskName: '继续轻松打卡',
        taskDescription: '换个稳定光线记录一次，今天不和头发较劲。',
        tags: ['娱乐参考', '安全改写', '继续记录'],
        roast: '文案守门员及时接球，焦虑表达没有进入结果页。',
      },
    )
  }

  const providerName = provider === 'openai_compatible' ? 'openai_compatible' : 'siliconflow'
  const providerLabel = provider === 'openai_compatible' ? 'CC club OpenAI compatible AI 分析结果' : 'SiliconFlow AI 分析结果'
  const score = clampScore(modelData.score)
  const suggestions = normalizeStringArray(modelData.suggestions, [modelData.daily_task || '今晚给自己留 30 分钟放松时间'])
  const dailyTask = safeText(modelData.daily_task, suggestions[0])

  return {
    success: true,
    fallbackCode: null,
    record_id: `rec_${randomUUID()}`,
    analysisId: `ana_${randomUUID()}`,
    record_status: 'ai_completed',
    image_url: imageUrl,
    ai_source: providerName,
    result: {
      score,
      title: safeText(modelData.title, score >= 70 ? '发丝巡逻队长' : '头毛观察员'),
      summary: safeText(modelData.summary, '今天的头发记录已收到，整体反馈保持轻松观察就好。'),
      task: {
        name: dailyTask,
        description: dailyTask,
        exp_reward: 12,
      },
      growthDelta: {
        exp_added: 12,
        current_level: 1,
        streak_days: 1,
      },
      tags: normalizeStringArray(modelData.tags, buildTags(score)).slice(0, 4),
      disclaimer: SAFE_DISCLAIMER,
      roast: safeText(modelData.roast, '头发小伙伴今天也在认真营业。'),
      encouragement: safeText(modelData.encouragement, '继续轻松记录就好，保持节奏已经很棒。'),
      image_quality: safeText(modelData.image_quality, 'ai_observed'),
      source: 'api',
      source_label: providerLabel,
      daily_task: dailyTask,
      count: normalizeEnum(modelData.count, ['少量', '中等', '偏多'], '中等'),
      thickness: normalizeEnum(modelData.thickness, ['粗硬', '正常', '细软'], '正常'),
      suggestions,
    },
  }
}

function buildVisionMessages(imageContent, note) {
  return [
    { role: 'system', content: SYSTEM_PROMPT },
    {
      role: 'user',
      content: [
        {
          type: 'text',
          text: `请基于这张头发记录照片输出约定 JSON，语气轻松，不做医学判断。用户备注：${safeText(note, '无')}`,
        },
        { type: 'image_url', image_url: { url: imageContent } },
      ],
    },
  ]
}

function buildResponsesInput(imageContent, note) {
  return [
    {
      role: 'system',
      content: [{ type: 'input_text', text: SYSTEM_PROMPT }],
    },
    {
      role: 'user',
      content: [
        {
          type: 'input_text',
          text: `请基于这张头发记录照片输出约定 JSON，语气轻松，不做医学判断。用户备注：${safeText(note, '无')}`,
        },
        { type: 'input_image', image_url: imageContent },
      ],
    },
  ]
}

function buildChatResponsesInput(messages) {
  return [
    { role: 'system', content: [{ type: 'input_text', text: CHAT_SYSTEM_PROMPT }] },
    ...messages.map((message) => ({
      role: message.role,
      content: [{ type: 'input_text', text: message.content }],
    })),
  ]
}

async function postModelRequest({ url, apiKey, body, timeoutMs, provider, extractResponse }) {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), timeoutMs)
  try {
    console.log(`[hair-analysis] proxying request to ${provider}`)
    const response = await fetch(url, {
      method: 'POST',
      signal: controller.signal,
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(body),
    })

    const rawText = await response.text()
    if (!response.ok) {
      const err = new Error(`${provider} request failed: ${response.status}`)
      const lowerBody = rawText.toLowerCase()
      err.code = response.status === 401 || response.status === 403
        ? 'UPSTREAM_AUTH_FAILED'
        : lowerBody.includes('model not found') || lowerBody.includes('invalid model')
          ? 'UPSTREAM_MODEL_UNAVAILABLE'
          : 'UPSTREAM_FAILED'
      err.status = response.status
      err.provider = provider
      err.upstreamBody = rawText.slice(0, 300)
      throw err
    }

    let data
    try {
      data = JSON.parse(rawText)
    } catch {
      const err = new Error(`${provider} returned non-JSON response`)
      err.code = 'UPSTREAM_NON_JSON'
      err.provider = provider
      throw err
    }

    return extractResponse(data)
  } finally {
    clearTimeout(timeout)
  }
}

async function callAiProvider(args) {
  if (AI_PROVIDER === 'openai_compatible') return callOpenAICompatible(args)
  return callSiliconFlow(args)
}

async function callChatProvider(messages) {
  if (AI_PROVIDER === 'openai_compatible') return callOpenAICompatibleChat(messages)
  return callSiliconFlowChat(messages)
}

async function callOpenAICompatibleChat(messages) {
  const apiKey = process.env.OPENAI_API_KEY?.trim()
  if (!apiKey) {
    const err = new Error('Missing OPENAI_API_KEY')
    err.code = 'MISSING_API_KEY'
    err.provider = 'openai_compatible'
    throw err
  }

  return postModelRequest({
    url: OPENAI_RESPONSES_URL,
    apiKey,
    body: {
      model: OPENAI_MODEL,
      input: buildChatResponsesInput(messages),
    },
    timeoutMs: OPENAI_TIMEOUT_MS,
    provider: 'openai_compatible_chat',
    extractResponse: extractResponsesText,
  })
}

async function callSiliconFlowChat(messages) {
  const apiKey = process.env.SILICONFLOW_API_KEY?.trim()
  if (!apiKey) {
    const err = new Error('Missing SILICONFLOW_API_KEY')
    err.code = 'MISSING_API_KEY'
    err.provider = 'siliconflow'
    throw err
  }

  return postModelRequest({
    url: SILICONFLOW_URL,
    apiKey,
    body: {
      model: SILICONFLOW_MODEL,
      messages: [
        { role: 'system', content: CHAT_SYSTEM_PROMPT },
        ...messages,
      ],
      temperature: 0.7,
    },
    timeoutMs: SILICONFLOW_TIMEOUT_MS,
    provider: 'siliconflow_chat',
    extractResponse: extractChatCompletionText,
  })
}

async function callOpenAICompatible({ imageUrl, uploadedFile, note }) {
  const apiKey = process.env.OPENAI_API_KEY?.trim()
  if (!apiKey) {
    const err = new Error('Missing OPENAI_API_KEY')
    err.code = 'MISSING_API_KEY'
    err.provider = 'openai_compatible'
    throw err
  }

  const imageContent = uploadedFile
    ? `data:${uploadedFile.content_type || 'image/jpeg'};base64,${uploadedFile.buffer.toString('base64')}`
    : imageUrl

  return postModelRequest({
    url: OPENAI_RESPONSES_URL,
    apiKey,
    body: {
      model: OPENAI_MODEL,
      input: buildResponsesInput(imageContent, note),
    },
    timeoutMs: OPENAI_TIMEOUT_MS,
    provider: 'openai_compatible',
    extractResponse: extractResponsesModelJson,
  })
}

async function callSiliconFlow({ imageUrl, uploadedFile, note }) {
  const apiKey = process.env.SILICONFLOW_API_KEY?.trim()
  if (!apiKey) {
    const err = new Error('Missing SILICONFLOW_API_KEY')
    err.code = 'MISSING_API_KEY'
    err.provider = 'siliconflow'
    throw err
  }

  const imageContent = uploadedFile
    ? `data:${uploadedFile.content_type || 'image/jpeg'};base64,${uploadedFile.buffer.toString('base64')}`
    : imageUrl

  return postModelRequest({
    url: SILICONFLOW_URL,
    apiKey,
    body: {
      model: SILICONFLOW_MODEL,
      messages: buildVisionMessages(imageContent, note),
      temperature: 0.7,
    },
    timeoutMs: SILICONFLOW_TIMEOUT_MS,
    provider: 'siliconflow',
    extractResponse: extractChatCompletionModelJson,
  })
}

function parseModelJson(content, provider) {
  if (typeof content === 'object' && content) return content
  if (typeof content !== 'string') {
    const err = new Error(`${provider} response missing model output text`)
    err.code = 'UPSTREAM_BAD_SHAPE'
    throw err
  }

  const cleaned = content.replace(/```json\s*|```/g, '').trim()
  try {
    return JSON.parse(cleaned)
  } catch {
    const match = cleaned.match(/\{[\s\S]*\}/)
    if (match) {
      try {
        return JSON.parse(match[0])
      } catch {
        // Fall through to the stable content parsing fallback.
      }
    }
    const err = new Error(`${provider} output is not JSON`)
    err.code = 'UPSTREAM_CONTENT_NOT_JSON'
    throw err
  }
}

function extractChatCompletionModelJson(data) {
  return parseModelJson(data?.choices?.[0]?.message?.content, 'SiliconFlow')
}

function extractResponsesModelJson(data) {
  if (typeof data?.output_text === 'string') {
    return parseModelJson(data.output_text, 'OpenAI Responses')
  }

  const content = Array.isArray(data?.output)
    ? data.output.flatMap((item) => Array.isArray(item?.content) ? item.content : [])
    : []
  const output = content.find((item) => item?.type === 'output_text' && typeof item.text === 'string')
  return parseModelJson(output?.text, 'OpenAI Responses')
}

function extractChatCompletionText(data) {
  const text = data?.choices?.[0]?.message?.content
  if (typeof text === 'string' && text.trim()) return text.trim()
  const err = new Error('chat completion response missing text')
  err.code = 'UPSTREAM_BAD_SHAPE'
  throw err
}

function extractResponsesText(data) {
  if (typeof data?.output_text === 'string' && data.output_text.trim()) return data.output_text.trim()

  const content = Array.isArray(data?.output)
    ? data.output.flatMap((item) => Array.isArray(item?.content) ? item.content : [])
    : []
  const output = content.find((item) => item?.type === 'output_text' && typeof item.text === 'string')
  if (typeof output?.text === 'string' && output.text.trim()) return output.text.trim()
  const err = new Error('responses output missing text')
  err.code = 'UPSTREAM_BAD_SHAPE'
  throw err
}

function containsUnsafeAiContent(modelData) {
  const displayValues = [
    modelData?.title,
    modelData?.summary,
    modelData?.roast,
    modelData?.encouragement,
    modelData?.daily_task,
    modelData?.image_quality,
    modelData?.disclaimer,
    ...(Array.isArray(modelData?.tags) ? modelData.tags : []),
    ...(Array.isArray(modelData?.suggestions) ? modelData.suggestions : []),
  ]

  return displayValues.some((value) => {
    if (typeof value !== 'string') return false
    return UNSAFE_AI_CONTENT.some((pattern) => pattern.test(value))
  })
}

function buildTags(score) {
  if (score >= 75) return ['队形稳定', '心态在线', '今日好梳']
  if (score >= 50) return ['轻微波动', '继续观察', '早点睡派']
  return ['需要抱抱', '从容记录', '温柔养成']
}

function clampScore(value) {
  return typeof value === 'number' ? Math.max(0, Math.min(100, Math.round(value))) : 66
}

function safeText(value, fallback) {
  return typeof value === 'string' && value.trim() ? value.trim() : fallback
}

function normalizeStringArray(value, fallback) {
  const items = Array.isArray(value) ? value.map(String).filter(Boolean) : []
  return items.length ? items : fallback
}

function normalizeEnum(value, allowed, fallback) {
  return allowed.includes(value) ? value : fallback
}

async function readRecords() {
  try {
    const raw = await readFile(RECORDS_FILE, 'utf8')
    const records = JSON.parse(raw)
    return Array.isArray(records) ? records : []
  } catch (error) {
    if (error?.code === 'ENOENT') return []
    throw error
  }
}

async function saveRecord(record) {
  const storedRecord = {
    ...record,
    record_id: record.record_id || `rec_${randomUUID()}`,
    created_at: record.created_at || new Date().toISOString(),
  }
  recordsWriteQueue = recordsWriteQueue.then(async () => {
    const records = await readRecords()
    const existingIndex = records.findIndex((item) => item.record_id === storedRecord.record_id)
    if (existingIndex >= 0) records[existingIndex] = storedRecord
    else records.unshift(storedRecord)
    await mkdir(dirname(RECORDS_FILE), { recursive: true })
    await writeFile(RECORDS_FILE, JSON.stringify(records, null, 2), 'utf8')
  })
  await recordsWriteQueue
  return storedRecord
}

async function handleCreateRecord(req, res) {
  try {
    const contentType = req.headers['content-type'] || ''
    if (!contentType.includes('application/json')) {
      return jsonResponse(res, 415, { success: false, error: { code: 'UNSUPPORTED_CONTENT_TYPE', message: '记录接口仅支持 application/json。' } })
    }
    const payload = parseJsonBody(await readBody(req))
    if (!payload || typeof payload !== 'object' || !payload.result || typeof payload.result !== 'object') {
      return jsonResponse(res, 400, { success: false, error: { code: 'INVALID_RECORD', message: '请提供包含 result 的分析记录。' } })
    }
    const record = await saveRecord(payload)
    return jsonResponse(res, 201, { success: true, record })
  } catch (error) {
    const tooLarge = error?.code === 'BODY_TOO_LARGE'
    return jsonResponse(res, tooLarge ? 413 : 400, {
      success: false,
      error: {
        code: tooLarge ? 'BODY_TOO_LARGE' : 'BAD_REQUEST',
        message: tooLarge ? '记录内容太大，当前最多接收 8MB。' : '记录内容解析失败，请检查 JSON。',
      },
    })
  }
}

async function handleListRecords(url, res) {
  const requestedLimit = Number(url.searchParams.get('limit') || 50)
  const limit = Number.isFinite(requestedLimit) ? Math.max(1, Math.min(100, Math.floor(requestedLimit))) : 50
  const records = await readRecords()
  return jsonResponse(res, 200, { success: true, records: records.slice(0, limit), total: records.length })
}

async function handleGetRecord(recordId, res) {
  const records = await readRecords()
  const record = records.find((item) => item.record_id === recordId)
  if (!record) {
    return jsonResponse(res, 404, { success: false, error: { code: 'RECORD_NOT_FOUND', message: '没有找到这条记录。' } })
  }
  return jsonResponse(res, 200, { success: true, record })
}

function fallbackFromError(error, imageUrl) {
  const providerLabel = activeProviderLabel()

  if (error?.name === 'AbortError') {
    return buildFallbackResponse('UPSTREAM_TIMEOUT', `${providerLabel} 分析接口这次响应超时了，先给你一个可展示的轻量兜底。`, imageUrl)
  }

  switch (error?.code) {
    case 'MISSING_API_KEY':
      return buildFallbackResponse('MISSING_API_KEY', `后端还没有配置 ${AI_PROVIDER === 'openai_compatible' ? 'OPENAI_API_KEY' : 'SILICONFLOW_API_KEY'}，已返回可展示的 demo 兜底。`, imageUrl)
    case 'UPSTREAM_AUTH_FAILED':
      return buildFallbackResponse('UPSTREAM_AUTH_FAILED', `${providerLabel} API key 校验失败，请检查 backend/.env 中的 key。`, imageUrl)
    case 'UPSTREAM_MODEL_UNAVAILABLE':
      return buildFallbackResponse('UPSTREAM_MODEL_UNAVAILABLE', `${providerLabel} 当前模型不可用，可先改用 OPENAI_MODEL=gpt-5.4 后重试，页面已返回轻量兜底。`, imageUrl)
    case 'UPSTREAM_NON_JSON':
    case 'UPSTREAM_BAD_SHAPE':
    case 'UPSTREAM_CONTENT_NOT_JSON':
      return buildFallbackResponse('UPSTREAM_BAD_RESPONSE', `${providerLabel} 返回格式暂时不适合直接展示，先使用轻量兜底结果。`, imageUrl)
    default:
      return buildFallbackResponse('UPSTREAM_FAILED', `${providerLabel} 分析接口暂时没有连上，先返回可展示的 demo 兜底。`, imageUrl)
  }
}

async function handleHairAnalysis(req, res) {
  try {
    const contentType = req.headers['content-type'] || ''
    const body = await readBody(req)
    let payload = {}
    let uploadedFile = null

    if (contentType.includes('multipart/form-data')) {
      const { fields, files } = parseMultipart(body, contentType)
      payload = fields
      const imageFile = files.find((file) => file.field === 'image' || file.field === 'file')
      if (imageFile) uploadedFile = await saveUploadedFile(imageFile)
    } else if (contentType.includes('application/json') || !contentType) {
      payload = parseJsonBody(body)
    } else {
      return jsonResponse(res, 415, buildFallbackResponse('UNSUPPORTED_CONTENT_TYPE', '当前仅支持 JSON 或 multipart/form-data。'))
    }

    const imageUrl = typeof payload.image_url === 'string' ? payload.image_url.trim() : ''
    const scenario = typeof payload.mock_scenario === 'string'
      ? payload.mock_scenario
      : typeof payload.scenario === 'string'
        ? payload.scenario
        : 'ai'

    if (!imageUrl && !uploadedFile) {
      return jsonResponse(res, 400, buildFallbackResponse('MISSING_IMAGE', '请上传 image 文件，或在请求体中提供 image_url。', null, {
        record_status: 'demo_mock_fallback',
        image_quality: 'missing_or_unreadable',
      }))
    }

    if (scenario in SCENARIOS) {
      const response = buildAnalysisResponse(scenario, {
        image_url: imageUrl,
        uploaded_file: uploadedFile,
      })
      await persistRecordBestEffort(response)
      return jsonResponse(res, SCENARIOS[scenario]?.httpStatus || 200, response)
    }

    try {
      const modelData = await callAiProvider({
        imageUrl,
        uploadedFile,
        note: typeof payload.note === 'string' ? payload.note : '',
      })
      const response = buildAiResponse(modelData, {
        image_url: imageUrl,
        uploaded_file: uploadedFile,
      }, AI_PROVIDER)
      await persistRecordBestEffort(response)
      console.log(`[hair-analysis] proxied request to ${AI_PROVIDER} successfully`)
      return jsonResponse(res, 200, response)
    } catch (error) {
      console.warn(`[hair-analysis] ${AI_PROVIDER} fallback: ${error?.code || error?.name || 'UNKNOWN'}`)
      const response = fallbackFromError(error, imageUrl || uploadedFile?.url || null)
      await persistRecordBestEffort(response)
      return jsonResponse(res, 200, response)
    }
  } catch (error) {
    const code = error?.code === 'BODY_TOO_LARGE' ? 'BODY_TOO_LARGE' : 'BAD_REQUEST'
    const status = code === 'BODY_TOO_LARGE' ? 413 : 400
    const message = code === 'BODY_TOO_LARGE'
      ? '图片太大了，demo 接口当前最多接收 8MB。'
      : '请求内容解析失败，请检查 JSON 或表单字段。'
    return jsonResponse(res, status, buildFallbackResponse(code, message))
  }
}


function normalizeChatMessages(value) {
  const raw = Array.isArray(value) ? value : []
  return raw
    .map((item) => ({
      role: item?.role === 'assistant' ? 'assistant' : 'user',
      content: safeText(item?.content, '').slice(0, 800),
    }))
    .filter((item) => item.content)
    .slice(-10)
}

function chatFallbackResponse(code, message) {
  return {
    success: false,
    ai_source: 'fallback',
    source: 'fallback',
    source_label: 'AI 聊天兜底结果',
    fallback_code: code,
    reply: message || 'AI 助手暂时开小差了。先轻松完成一次记录，再选一个小任务坚持一下就很好。',
    disclaimer: SAFE_DISCLAIMER,
  }
}

function sanitizeChatReply(text) {
  const reply = safeText(text, '')
  if (!reply || UNSAFE_AI_CONTENT.some((pattern) => pattern.test(reply))) {
    return '我不能做医学判断，但可以陪你做轻松记录：先完成一次 Scan，看看最近趋势，再选择早睡、喝水或头皮放松中的一个小任务。'
  }
  return reply.slice(0, 1200)
}

async function handleChat(req, res) {
  try {
    const payload = parseJsonBody(await readBody(req))
    const messages = normalizeChatMessages(payload.messages)
    const userText = safeText(payload.message, '')
    if (userText) messages.push({ role: 'user', content: userText.slice(0, 800) })
    if (!messages.length) {
      return jsonResponse(res, 400, chatFallbackResponse('EMPTY_MESSAGE', '请先输入一句想聊的内容。'))
    }

    try {
      const reply = await callChatProvider(messages)
      return jsonResponse(res, 200, {
        success: true,
        ai_source: AI_PROVIDER,
        source: 'api',
        source_label: `${activeProviderLabel()} AI 聊天结果`,
        fallback_code: null,
        reply: sanitizeChatReply(reply),
        disclaimer: SAFE_DISCLAIMER,
      })
    } catch (error) {
      console.warn('[chat] upstream failed, returning fallback:', error?.code || error?.message)
      const code = error?.code || 'CHAT_UPSTREAM_FAILED'
      const message = code === 'MISSING_API_KEY'
        ? `后端还没有配置 ${AI_PROVIDER === 'openai_compatible' ? 'OPENAI_API_KEY' : 'SILICONFLOW_API_KEY'}，当前返回 demo 兜底聊天。`
        : 'AI 聊天服务暂时不可用，当前返回 demo 兜底聊天。'
      return jsonResponse(res, 200, chatFallbackResponse(code, message))
    }
  } catch (error) {
    const code = error?.code === 'BODY_TOO_LARGE' ? 'BODY_TOO_LARGE' : 'BAD_REQUEST'
    const status = code === 'BODY_TOO_LARGE' ? 413 : 400
    return jsonResponse(res, status, chatFallbackResponse(code, code === 'BODY_TOO_LARGE' ? '消息太长了，请缩短后再发送。' : '聊天请求解析失败，请检查 JSON。'))
  }
}

export function createApp() {
  return createServer(async (req, res) => {
    const url = new URL(req.url || '/', `http://${req.headers.host || 'localhost'}`)

    if (req.method === 'OPTIONS') {
      res.writeHead(204, {
        'access-control-allow-origin': '*',
        'access-control-allow-methods': 'GET,POST,OPTIONS',
        'access-control-allow-headers': 'content-type',
      })
      res.end()
      return
    }

    if (req.method === 'GET' && url.pathname === '/api/health') {
      return jsonResponse(res, 200, { ok: true, service: 'diaoleme-ai-proxy' })
    }

    if (req.method === 'POST' && (url.pathname === PRIMARY_ANALYSIS_PATH || url.pathname === LEGACY_ANALYSIS_PATH)) {
      return handleHairAnalysis(req, res)
    }

    if (req.method === 'POST' && url.pathname === CHAT_PATH) {
      return handleChat(req, res)
    }

    if (req.method === 'POST' && url.pathname === '/api/records') {
      return handleCreateRecord(req, res)
    }

    if (req.method === 'GET' && url.pathname === '/api/records') {
      return handleListRecords(url, res)
    }

    if (req.method === 'GET' && url.pathname.startsWith('/api/records/')) {
      return handleGetRecord(decodeURIComponent(url.pathname.slice('/api/records/'.length)), res)
    }

    return jsonResponse(res, 404, {
      success: false,
      fallbackCode: 'NOT_FOUND',
      error: { code: 'NOT_FOUND', message: `接口不存在，请检查 /api/analyze、/api/chat 或 /api/records。` },
    })
  })
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  createApp().listen(PORT, '0.0.0.0', () => {
    console.log(`Diaoleme AI proxy listening on http://0.0.0.0:${PORT}`)
    console.log(`Primary analysis endpoint: POST ${PRIMARY_ANALYSIS_PATH}`)
  })
}
