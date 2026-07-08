import assert from 'node:assert/strict'
import { once } from 'node:events'
import { createApp } from './server.mjs'

const server = createApp()
server.listen(0)
await once(server, 'listening')
const { port } = server.address()
const baseUrl = `http://127.0.0.1:${port}`

async function postJson(body) {
  const response = await fetch(`${baseUrl}/api/analyze`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body),
  })
  return { response, data: await response.json() }
}

try {
  const success = await postJson({ image_url: 'https://example.com/demo.jpg', note: 'demo' })
  assert.equal(success.response.status, 200)
  assert.equal(success.data.analysis_status, 'completed')
  assert.equal(success.data.result.fallback_code, null)
  assert.equal(typeof success.data.result.score, 'number')

  const lowQuality = await postJson({ image_url: 'https://example.com/dark.jpg', mock_scenario: 'low_quality' })
  assert.equal(lowQuality.response.status, 200)
  assert.equal(lowQuality.data.analysis_status, 'completed_with_notes')
  assert.equal(lowQuality.data.result.fallback_code, 'LOW_QUALITY_IMAGE')

  const fallback = await postJson({ image_url: 'https://example.com/fail.jpg', mock_scenario: 'analysis_failed' })
  assert.equal(fallback.response.status, 200)
  assert.equal(fallback.data.analysis_status, 'fallback')
  assert.equal(fallback.data.result.fallback_code, 'MOCK_ANALYSIS_FALLBACK')

  const missingImage = await postJson({ note: 'missing image' })
  assert.equal(missingImage.response.status, 400)
  assert.equal(missingImage.data.result.fallback_code, 'MISSING_IMAGE')

  const form = new FormData()
  form.append('image', new Blob(['demo image bytes'], { type: 'image/plain' }), 'demo.txt')
  form.append('mock_scenario', 'success')
  const uploadResponse = await fetch(`${baseUrl}/api/analyze`, { method: 'POST', body: form })
  const uploadData = await uploadResponse.json()
  assert.equal(uploadResponse.status, 200)
  assert.equal(uploadData.analysis_status, 'completed')
  assert.ok(uploadData.input.uploaded_file.stored_name)

  console.log('All mock API checks passed')
} finally {
  server.close()
}
