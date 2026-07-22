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

  const isChat = Array.isArray(upstreamRequest.body?.input)
    && upstreamRequest.body.input.some((item) => item?.role === 'user')
    && !upstreamRequest.body.input.some((item) => Array.isArray(item?.content)
      && item.content.some((part) => part?.type === 'input_image'))

  const text = isChat
    ? '根据你提供的历史报告，最近一次是「今日发量守护者」82 分，状态挺轻松。'
    : JSON.stringify({
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
    })

  res.writeHead(200, { 'content-type': 'application/json' })
  res.end(JSON.stringify({
    output: [{
      type: 'message',
      role: 'assistant',
      content: [{
        type: 'output_text',
        text,
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

const { buildAiResponse, createApp, normalizeReportContext, buildChatSystemPrompt } = await import('./server.mjs')

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
  assert.equal(typeof health.ai_provider, 'string')
  assert.equal(typeof health.ai_key_configured, 'boolean')

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

  const lowQuality = await postJson({ image_url: 'https://example.com/low.jpg', mock_scenario: 'low_quality' })
  assert.equal(lowQuality.response.status, 200)
  assert.equal(lowQuality.data.result.score, 58)

  const records = await fetch(`${baseUrl}/api/records`).then((res) => res.json())
  assert.equal(records.success, true)
  assert.equal(records.contract, 'history_list_v1')
  assert.equal(records.history_api, 'GET /api/records')
  assert.ok(typeof records.persistence_note === 'string' && records.persistence_note.length > 0)
  assert.ok(records.total >= 4)
  assert.ok(Array.isArray(records.records) && records.records.length >= 2)

  const newest = records.records[0]
  const older = records.records[1]
  assert.equal(newest.record_id, lowQuality.data.record_id)
  assert.equal(newest.score, 58)
  assert.equal(newest.fun_score, 58)
  assert.equal(newest.title, '模糊也努力奖')
  assert.equal(newest.thumbnail_url, newest.image_url)
  assert.equal(typeof newest.growth.exp_added, 'number')
  assert.ok(newest.compare)
  assert.equal(newest.compare.prev_record_id, older.record_id)
  assert.equal(typeof newest.compare.score_delta, 'number')
  assert.equal(typeof newest.compare.title_changed, 'boolean')

  const detail = await fetch(`${baseUrl}/api/records/${encodeURIComponent(newest.record_id)}`).then((res) => res.json())
  assert.equal(detail.success, true)
  assert.equal(detail.contract, 'history_detail_v1')
  assert.equal(detail.record.fun_score, 58)
  assert.ok(detail.record.compare)

  // --- report_context normalization (unit) ---
  const normalized = normalizeReportContext([
    {
      date: '2026-07-20',
      title: '今日发量守护者',
      score: 82,
      summary: '看起来挺精神',
      score_delta: 12,
      daily_task: '早点睡',
      tags: ['清爽', '稳定'],
    },
    {
      date: '2026-07-19',
      title: '模糊也努力奖',
      score: '999',
      summary: 'x'.repeat(500),
      tags: Array.from({ length: 20 }, (_, i) => `tag${i}`),
      junk: 'ignored',
    },
    null,
    'bad',
    {},
    { title: '第三条' },
    { title: '第四条' },
    { title: '第五条' },
    { title: '第六条也应保留' },
  ])
  assert.equal(normalized.length, 6)
  assert.equal(normalized[0].title, '今日发量守护者')
  assert.equal(normalized[0].score, 82)
  assert.equal(normalized[1].score, 100)
  assert.equal(normalized[1].summary.length, 300)
  assert.equal(normalized[1].tags.length, 8)
  assert.equal(normalized[5].title, '第六条也应保留')
  assert.equal(normalizeReportContext(null).length, 0)
  assert.equal(normalizeReportContext('nope').length, 0)
  assert.equal(
    normalizeReportContext(Array.from({ length: 45 }, (_, i) => ({ title: `t${i}` }))).length,
    40,
  )
  assert.match(buildChatSystemPrompt(normalized), /今日发量守护者/)
  assert.match(buildChatSystemPrompt(normalized), /禁止编造/)
  assert.match(buildChatSystemPrompt(normalized), /本周 Scan 报告摘要/)
  assert.equal(buildChatSystemPrompt([]).includes('本周 Scan 报告摘要'), false)

  // --- chat without report_context (compat) ---
  const chatPlain = await postJson({ message: '你好' }, '/api/chat')
  assert.equal(chatPlain.response.status, 200)
  assert.equal(chatPlain.data.success, true)
  assert.equal(chatPlain.data.report_context_count, 0)
  assert.equal(typeof chatPlain.data.reply, 'string')
  const plainSystem = upstreamRequest.body.input.find((item) => item.role === 'system')?.content?.[0]?.text || ''
  assert.equal(plainSystem.includes('本周 Scan 报告摘要'), false)

  // --- chat with 2 fake reports ---
  const chatWithReports = await postJson({
    message: '我上次报告称号和分数是什么？',
    report_context: [
      {
        date: '2026-07-21',
        title: '今日发量守护者',
        score: 82,
        summary: '挺精神',
        score_delta: 10,
        daily_task: '早点睡',
        tags: ['清爽'],
      },
      {
        date: '2026-07-20',
        title: '模糊也努力奖',
        score: 58,
        summary: '光线偏暗',
      },
      // extras beyond 40 should be ignored if many; here only 2
    ],
  }, '/api/chat')
  assert.equal(chatWithReports.response.status, 200)
  assert.equal(chatWithReports.data.success, true)
  assert.equal(chatWithReports.data.report_context_count, 2)
  assert.match(chatWithReports.data.reply, /今日发量守护者|82/)
  const withSystem = upstreamRequest.body.input.find((item) => item.role === 'system')?.content?.[0]?.text || ''
  assert.match(withSystem, /今日发量守护者/)
  assert.match(withSystem, /趣味分=82/)
  assert.match(withSystem, /模糊也努力奖/)
  assert.match(withSystem, /禁止编造/)

  // oversized / illegal fields must not break chat
  const chatTruncated = await postJson({
    messages: [{ role: 'user', content: '最近怎么样' }],
    report_context: [
      { title: 't'.repeat(200), summary: 's'.repeat(999), score: -5, tags: [1, null, { x: 1 }, 'ok'] },
    ],
  }, '/api/chat')
  assert.equal(chatTruncated.response.status, 200)
  assert.equal(chatTruncated.data.success, true)
  assert.equal(chatTruncated.data.report_context_count, 1)
  const truncSystem = upstreamRequest.body.input.find((item) => item.role === 'system')?.content?.[0]?.text || ''
  assert.ok(truncSystem.includes('称号=' + 't'.repeat(80)))
  assert.ok(!truncSystem.includes('称号=' + 't'.repeat(81)))

  console.log('All API checks passed')
} finally {
  await rm(process.env.RECORDS_FILE, { force: true })
  server.close()
  upstream.close()
}
