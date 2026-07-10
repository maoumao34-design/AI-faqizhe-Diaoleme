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
  assert.match(data.result.disclaimer, /demo/)
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
