import assert from 'node:assert/strict'
import { once } from 'node:events'
import { createServer } from 'node:http'
import { rm } from 'node:fs/promises'

let upstreamRequest
const upstream = createServer(async (req, res) => {
  const chunks = []
  for await (const chunk of req) chunks.push(chunk)
  upstreamRequest = {
    url: req.url,
    body: JSON.parse(Buffer.concat(chunks).toString('utf8')),
  }
  res.writeHead(200, { 'content-type': 'application/json' })
  res.end(JSON.stringify({
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
  }))
})
upstream.listen(0)
await once(upstream, 'listening')
const upstreamPort = upstream.address().port

process.env.AI_PROVIDER = 'openai_compatible'
process.env.OPENAI_API_KEY = ' '
process.env.OPENAI_RESPONSES_URL = `http://127.0.0.1:${upstreamPort}/v1/responses`
process.env.RECORDS_FILE = `data/test-records-${process.pid}.json`

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
  const health = await fetch(`${baseUrl}/api/health`).then((res) => res.json())
  assert.equal(health.ok, true)

  const root = await fetch(`${baseUrl}/`)
  assert.equal(root.status, 200)
  const rootBody = await root.json()
  assert.equal(rootBody.ok, true)

  const mock = await postJson({ image_url: 'https://example.com/mock.jpg', mock_scenario: 'success' })
  assert.equal(mock.response.status, 200)
  assert.equal(mock.data.success, true)
  assert.equal(mock.data.ai_source, 'mock')
  assertStableContract(mock.data)

  const missingKey = await postJson({ image_url: 'https://example.com/fallback.jpg' })
  assert.equal(missingKey.response.status, 200)
  assert.equal(missingKey.data.success, false)
  assert.equal(missingKey.data.fallbackCode, 'MISSING_API_KEY')
  assertStableContract(missingKey.data)

  const missingImage = await postJson({})
  assert.equal(missingImage.response.status, 400)
  assert.equal(missingImage.data.fallbackCode, 'MISSING_IMAGE')
  assertStableContract(missingImage.data)

  process.env.OPENAI_API_KEY = 'test-key'
  const aiSuccess = await postJson({ image_url: 'https://example.com/real.jpg', note: 'responses' })
  assert.equal(aiSuccess.response.status, 200)
  assert.equal(aiSuccess.data.success, true)
  assert.equal(aiSuccess.data.fallbackCode, null)
  assert.equal(aiSuccess.data.record_status, 'ai_completed')
  assert.equal(aiSuccess.data.result.title, 'Responses API 守护者')
  assert.equal(upstreamRequest.url, '/v1/responses')
  assert.equal(upstreamRequest.body.model, 'gpt-5.5')
  assert.ok(Array.isArray(upstreamRequest.body.input))
  assertStableContract(aiSuccess.data)

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

  const records = await fetch(`${baseUrl}/api/records`).then((res) => res.json())
  assert.equal(records.success, true)
  assert.ok(records.total >= 3)

  console.log('All API checks passed')
} finally {
  await rm(process.env.RECORDS_FILE, { force: true })
  server.close()
  upstream.close()
}
