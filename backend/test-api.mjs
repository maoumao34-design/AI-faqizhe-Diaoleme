import assert from 'node:assert/strict'
import { once } from 'node:events'
import { readFile } from 'node:fs/promises'

const schema = JSON.parse(await readFile(new URL('../docs/ai-analysis-schema.json', import.meta.url), 'utf8'))

process.env.AI_PROVIDER = 'openai_compatible'
process.env.OPENAI_API_KEY = ' '

const { buildAiResponse, createApp } = await import('./server.mjs')

const server = createApp()
server.listen(0)
await once(server, 'listening')
const { port } = server.address()
const baseUrl = `http://127.0.0.1:${port}`

async function postJson(body, path = '/api/analyze') {
  const response = await fetch(`${baseUrl}${path}`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body),
  })
  return { response, data: await response.json() }
}

function assertStableContract(data) {
  assertSchema(data, schema, '$')
}

function assertSchema(value, definition, path) {
  const allowedTypes = Array.isArray(definition.type) ? definition.type : [definition.type]
  if (definition.type) {
    const actualType = value === null ? 'null' : Array.isArray(value) ? 'array' : Number.isInteger(value) ? 'integer' : typeof value
    assert.ok(allowedTypes.includes(actualType) || (actualType === 'integer' && allowedTypes.includes('number')), `${path} has type ${actualType}`)
  }
  if (definition.const !== undefined) assert.deepEqual(value, definition.const, `${path} must match const`)
  if (definition.enum) assert.ok(definition.enum.includes(value), `${path} must match enum`)
  if (typeof value === 'string') {
    if (definition.minLength !== undefined) assert.ok(value.length >= definition.minLength, `${path} is too short`)
    if (definition.pattern) assert.match(value, new RegExp(definition.pattern), `${path} does not match pattern`)
  }
  if (typeof value === 'number') {
    if (definition.minimum !== undefined) assert.ok(value >= definition.minimum, `${path} is below minimum`)
    if (definition.maximum !== undefined) assert.ok(value <= definition.maximum, `${path} is above maximum`)
  }
  if (Array.isArray(value)) {
    if (definition.minItems !== undefined) assert.ok(value.length >= definition.minItems, `${path} has too few items`)
    if (definition.maxItems !== undefined) assert.ok(value.length <= definition.maxItems, `${path} has too many items`)
    if (definition.items) value.forEach((item, index) => assertSchema(item, definition.items, `${path}[${index}]`))
  }
  if (value && typeof value === 'object' && !Array.isArray(value)) {
    for (const key of definition.required || []) assert.ok(key in value, `${path}.${key} is required`)
    for (const [key, child] of Object.entries(definition.properties || {})) {
      if (key in value) assertSchema(value[key], child, `${path}.${key}`)
    }
  }
}

try {
  const missingKey = await postJson({ image_url: 'https://example.com/demo.jpg', note: 'demo' })
  assert.equal(missingKey.response.status, 200)
  assert.equal(missingKey.data.success, false)
  assert.equal(missingKey.data.fallbackCode, 'MISSING_API_KEY')
  assert.equal(missingKey.data.record_status, 'demo_ai_fallback')
  assert.equal(missingKey.data.ai_source, 'fallback')
  assert.match(missingKey.data.error.message, /OPENAI_API_KEY/)

  const success = await postJson({ image_url: 'https://example.com/demo.jpg', note: 'demo', mock_scenario: 'success' })
  assert.equal(success.response.status, 200)
  assert.equal(success.data.success, true)
  assert.equal(success.data.fallbackCode, null)
  assert.equal(success.data.record_status, 'demo_mock_completed')
  assertStableContract(success.data)

  const lowQuality = await postJson({ image_url: 'https://example.com/dark.jpg', mock_scenario: 'low_quality' })
  assert.equal(lowQuality.response.status, 200)
  assert.equal(lowQuality.data.success, true)
  assert.equal(lowQuality.data.fallbackCode, 'LOW_QUALITY_IMAGE')
  assert.equal(lowQuality.data.record_status, 'demo_mock_saved_with_notes')
  assert.equal(lowQuality.data.result.image_quality, 'low_light_or_blurry')
  assertStableContract(lowQuality.data)

  const fallback = await postJson({ image_url: 'https://example.com/fail.jpg', mock_scenario: 'analysis_failed' })
  assert.equal(fallback.response.status, 200)
  assert.equal(fallback.data.success, false)
  assert.equal(fallback.data.fallbackCode, 'MOCK_ANALYSIS_FALLBACK')
  assert.equal(fallback.data.record_status, 'demo_mock_fallback')
  assertStableContract(fallback.data)

  const missingImage = await postJson({ note: 'missing image' })
  assert.equal(missingImage.response.status, 400)
  assert.equal(missingImage.data.success, false)
  assert.equal(missingImage.data.fallbackCode, 'MISSING_IMAGE')
  assertStableContract(missingImage.data)

  const unsafe = buildAiResponse({
    score: 80,
    title: '严重脱发预警',
    summary: '建议治疗并尽快就医',
    roast: '测试',
    encouragement: '测试',
    tags: ['疾病风险'],
    daily_task: '使用药物',
    suggestions: ['去医院'],
    disclaimer: '建议咨询医生进行诊断',
  })
  assert.equal(unsafe.success, false)
  assert.equal(unsafe.fallbackCode, 'CONTENT_BLOCKED')
  assert.equal(unsafe.ai_source, 'fallback')
  assertStableContract(unsafe)
  assert.doesNotMatch(JSON.stringify(unsafe.result), /严重脱发|治疗|就医|疾病风险|使用药物|去医院/)

  const safe = buildAiResponse({
    score: 78,
    title: '稳稳当当观察员',
    summary: '本次照片看起来状态轻松。',
    roast: '头发今天挺配合。',
    encouragement: '继续轻松记录。',
    tags: ['状态在线'],
    daily_task: '今晚早点睡',
    suggestions: ['少刷一会儿手机'],
  })
  assert.equal(safe.success, true)
  assert.equal(safe.result.disclaimer, '本结果仅用于娱乐和习惯记录，不构成医疗建议。')
  assertStableContract(safe)

  const form = new FormData()
  form.append('image', new Blob(['demo image bytes'], { type: 'image/plain' }), 'demo.txt')
  form.append('mock_scenario', 'success')
  const uploadResponse = await fetch(`${baseUrl}/api/analyze`, { method: 'POST', body: form })
  const uploadData = await uploadResponse.json()
  assert.equal(uploadResponse.status, 200)
  assert.equal(uploadData.success, true)
  assert.match(uploadData.image_url, /^\/uploads\//)
  assertStableContract(uploadData)

  console.log('All mock API checks passed')
} finally {
  server.close()
}
