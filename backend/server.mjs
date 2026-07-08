import { createServer } from 'node:http'
import { mkdir, writeFile } from 'node:fs/promises'
import { extname, join } from 'node:path'
import { randomUUID } from 'node:crypto'
import { fileURLToPath } from 'node:url'

const MAX_BODY_BYTES = 8 * 1024 * 1024
const UPLOAD_DIR = fileURLToPath(new URL('./uploads/', import.meta.url))
const PORT = Number(process.env.PORT || 8787)
const PRIMARY_ANALYSIS_PATH = '/api/hair-analysis'

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
    result: {
      score: data.score,
      title: data.title,
      summary: data.summary,
      task: data.task,
      growthDelta: data.growthDelta,
      tags: data.tags,
      disclaimer: '当前为 demo mock 结果，仅用于娱乐记录和习惯养成展示，不代表医学判断。',
      roast: data.roast,
      encouragement: data.encouragement,
      image_quality: data.image_quality,
    },
  }
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = []
    let size = 0
    req.on('data', (chunk) => {
      size += chunk.length
      if (size > MAX_BODY_BYTES) {
        reject(Object.assign(new Error('BODY_TOO_LARGE'), { code: 'BODY_TOO_LARGE' }))
        req.destroy()
        return
      }
      chunks.push(chunk)
    })
    req.on('end', () => resolve(Buffer.concat(chunks)))
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
  }
}

function buildFallbackResponse(fallbackCode, message, imageUrl = null) {
  return {
    success: false,
    fallbackCode,
    record_id: `rec_${randomUUID()}`,
    analysisId: `ana_${randomUUID()}`,
    record_status: 'demo_mock_fallback',
    image_url: imageUrl,
    error: { code: fallbackCode, message },
    result: {
      score: 50,
      title: '记录先收下',
      summary: message,
      task: {
        name: '重新记录一下',
        description: '选择一张更清楚的照片再来一次。',
        exp_reward: 0,
      },
      growthDelta: {
        exp_added: 0,
        current_level: 1,
        streak_days: 0,
      },
      tags: ['待补图', '可重试'],
      disclaimer: '当前为 demo mock fallback，仅用于娱乐记录和习惯养成展示，不代表医学判断。',
      roast: '图片入口有点迷路，不过结果页不会空手而归。',
      encouragement: '换个图片或传入 image_url 再试一次就好。',
      image_quality: 'missing_or_unreadable',
    },
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
        : 'success'

    if (!imageUrl && !uploadedFile) {
      return jsonResponse(res, 400, buildFallbackResponse('MISSING_IMAGE', '请上传 image 文件，或在请求体中提供 image_url。'))
    }

    const response = buildAnalysisResponse(scenario, {
      image_url: imageUrl,
      uploaded_file: uploadedFile,
    })
    return jsonResponse(res, SCENARIOS[scenario]?.httpStatus || 200, response)
  } catch (error) {
    const code = error?.code === 'BODY_TOO_LARGE' ? 'BODY_TOO_LARGE' : 'BAD_REQUEST'
    const status = code === 'BODY_TOO_LARGE' ? 413 : 400
    const message = code === 'BODY_TOO_LARGE'
      ? '图片太大了，demo 接口当前最多接收 8MB。'
      : '请求内容解析失败，请检查 JSON 或表单字段。'
    return jsonResponse(res, status, buildFallbackResponse(code, message))
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
      return jsonResponse(res, 200, { ok: true, service: 'diaoleme-mock-api' })
    }

    if (req.method === 'POST' && url.pathname === PRIMARY_ANALYSIS_PATH) {
      return handleHairAnalysis(req, res)
    }

    return jsonResponse(res, 404, {
      success: false,
      fallbackCode: 'NOT_FOUND',
      error: { code: 'NOT_FOUND', message: `接口不存在，请使用 POST ${PRIMARY_ANALYSIS_PATH}。` },
    })
  })
}

if (import.meta.url === `file://${process.argv[1]?.replace(/\\/g, '/')}`) {
  createApp().listen(PORT, () => {
    console.log(`Diaoleme mock API listening on http://localhost:${PORT}`)
    console.log(`Primary analysis endpoint: POST ${PRIMARY_ANALYSIS_PATH}`)
  })
}
