import assert from 'node:assert/strict'
import { once } from 'node:events'

process.env.AI_PROVIDER = 'openai_compatible'
process.env.OPENAI_API_KEY = ' '

const { createApp } = await import('./server.mjs')

const server = createApp()
server.listen(0)
await once(server, 'listening')
const { port } = server.address()
const baseUrl = `http://127.0.0.1:${port}`
const originalFetch = globalThis.fetch

async function postJson(body, path = '/api/analyze') {
  const response = await fetch(`${baseUrl}${path}`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body),
  })
  return { response, data: await response.json() }
}

function assertStableContract(data) {
  assert.equal(typeof data.success, 'boolean')
  assert.ok('fallbackCode' in data)
  assert.match(data.record_id, /^rec_/)
  assert.match(data.analysisId, /^ana_/)
  assert.equal(typeof data.record_status, 'string')
  assert.ok('image_url' in data)
  assert.equal(typeof data.result.score, 'number')
  assert.equal(typeof data.result.title, 'string')
  assert.equal(typeof data.result.summary, 'string')
  assert.equal(typeof data.result.task.name, 'string')
  assert.equal(typeof data.result.growthDelta.exp_added, 'number')
  assert.ok(Array.isArray(data.result.tags))
  assert.match(data.result.disclaimer, /娱乐|demo/)
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

  process.env.OPENAI_API_KEY = 'test-key'
  let upstreamRequest
  globalThis.fetch = async (url, options) => {
    if (String(url).startsWith(baseUrl)) return originalFetch(url, options)
    upstreamRequest = { url: String(url), body: JSON.parse(options.body) }
    return new Response(JSON.stringify({
      output: [{
        type: 'message',
        role: 'assistant',
        content: [{
          type: 'output_text',
          text: JSON.stringify({
            score: 91,
            title: 'Responses API 守护者',
            summary: '真实上游返回已按 Responses API 解析。',
            roast: '发丝队形今天很会营业。',
            encouragement: '继续轻松记录就好。',
            tags: ['真实AI', 'Responses'],
            daily_task: '今晚早点睡',
            count: '少量',
            thickness: '正常',
            suggestions: ['保持轻松记录'],
            disclaimer: '本结果仅用于轻松记录和娱乐反馈，不作为医疗用途。',
          }),
        }],
      }],
    }), { status: 200, headers: { 'content-type': 'application/json' } })
  }
  const aiSuccess = await postJson({ image_url: 'https://example.com/real.jpg', note: 'responses' })
  assert.equal(aiSuccess.response.status, 200)
  assert.equal(aiSuccess.data.success, true)
  assert.equal(aiSuccess.data.fallbackCode, null)
  assert.equal(aiSuccess.data.record_status, 'ai_completed')
  assert.equal(aiSuccess.data.result.title, 'Responses API 守护者')
  assert.match(upstreamRequest.url, /\/responses$/)
  assert.equal(upstreamRequest.body.model, 'gpt-5.5')
  assert.ok(Array.isArray(upstreamRequest.body.input))
  assertStableContract(aiSuccess.data)

  globalThis.fetch = async (url, options) => String(url).startsWith(baseUrl)
    ? originalFetch(url, options)
    : new Response(JSON.stringify({ error: { message: 'forbidden' } }), { status: 403 })
  const authFallback = await postJson({ image_url: 'https://example.com/403.jpg' })
  assert.equal(authFallback.response.status, 200)
  assert.equal(authFallback.data.success, false)
  assert.equal(authFallback.data.fallbackCode, 'UPSTREAM_AUTH_FAILED')
  assertStableContract(authFallback.data)
  globalThis.fetch = originalFetch
  process.env.OPENAI_API_KEY = ' '

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
  globalThis.fetch = originalFetch
  server.close()
}
