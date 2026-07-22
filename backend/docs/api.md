# 掉了么图片分析后端代理 API

## 本地启动

在 `backend/.env` 配置真实 key（不要提交）：

```bash
AI_PROVIDER=openai_compatible
OPENAI_BASE_URL=https://claude-code.club/openai/v1
# 可选；默认会请求 ${OPENAI_BASE_URL}/responses
# OPENAI_RESPONSES_URL=https://claude-code.club/openai/v1/responses
OPENAI_MODEL=gpt-5.5
OPENAI_API_KEY=sk-xxx
OPENAI_TIMEOUT_MS=30000
PORT=8787
```

如果 CC club 返回 `model not found` / `invalid model`，可临时改为：

```bash
OPENAI_MODEL=gpt-5.4
```

仍需使用旧 SiliconFlow 配置时可设置：

```bash
AI_PROVIDER=siliconflow
SILICONFLOW_API_KEY=sk-xxx
SILICONFLOW_MODEL=Qwen/Qwen3-VL-32B-Instruct
SILICONFLOW_TIMEOUT_MS=30000
```

启动后端：

```bash
cd backend
npm run dev
```

默认地址：`http://localhost:8787`。

## 健康检查

- 接口路径：`GET /api/health`
- 返回示例：

```json
{
  "ok": true,
  "service": "diaoleme-ai-proxy",
  "ai_provider": "siliconflow",
  "ai_key_configured": false
}
```

说明：`ai_key_configured` 仅为布尔值，用于部署验收；永不返回密钥明文。

## 图片分析

- 接口名称：头发记录图片分析接口
- 前端公开入口：`POST /api/analyze`
- 兼容旧入口：`POST /api/hair-analysis`
- 请求格式：`application/json` 或 `multipart/form-data`
- 存档行为：每次成功解析请求后会把 mock / AI / fallback 分析结果写入后端轻量 JSON 存储，供历史接口读取。
- 是否真实 AI：后端按 `AI_PROVIDER` 读取配置；推荐 `openai_compatible`，代理请求 Responses API（默认 `${OPENAI_BASE_URL}/responses`，也可用 `OPENAI_RESPONSES_URL` 精确覆盖），默认试跑 CC club `gpt-5.5`。
- 降级策略：缺少 key、401/403、模型不可用、超时、上游返回非 JSON、模型输出无法解析或触发医疗化文案拦截时，返回 `success:false` + `fallbackCode` + 可展示 `result`，不让结果页崩溃。
- 旧 SiliconFlow provider 仍使用 `/chat/completions`；CC club OpenAI compatible provider 不再请求 `/chat/completions`.

## 请求字段

### JSON

```json
{
  "image_url": "https://example.com/demo-hair.jpg",
  "note": "今天洗头后记录一下"
}
```

### FormData

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `image` / `file` | File | 上传图片文件，demo 阶段保存到本地 `backend/uploads/` 后转 base64 给当前 AI provider |
| `image_url` | string | 可选，图片地址；没有文件时必填 |
| `note` | string | 可选，用户备注 |
| `mock_scenario` | string | 可选：`success`、`low_quality`、`analysis_failed`，仅用于联调 mock |

## 统一响应契约

顶层固定字段：`success/fallbackCode/record_id/analysisId/record_status/image_url/ai_source/result`。
展示字段固定放在 `result`：`score/title/summary/task/growthDelta/tags/disclaimer/roast/encouragement/image_quality/source/source_label/daily_task/count/thickness/suggestions`。

`docs/ai-analysis-schema.json` 是当前唯一 canonical 响应契约；`POST /api/analyze` 与兼容入口 `POST /api/hair-analysis` 均按该 schema 返回。历史文档中的 `analysis_id/entertainment_result/fallback_code` 不再作为运行时字段。

### AI 成功示例

```json
{
  "success": true,
  "fallbackCode": null,
  "record_id": "rec_xxx",
  "analysisId": "ana_xxx",
  "record_status": "ai_completed",
  "image_url": "/uploads/demo.jpg",
  "ai_source": "openai_compatible",
  "result": {
    "score": 82,
    "title": "今日发丝巡逻队长",
    "summary": "这张记录看起来状态挺轻松，继续保持观察节奏就好。",
    "task": {
      "name": "今晚早点睡",
      "description": "今晚早点睡",
      "exp_reward": 12
    },
    "growthDelta": {
      "exp_added": 12,
      "current_level": 1,
      "streak_days": 1
    },
    "tags": ["队形稳定", "心态在线"],
    "disclaimer": "本结果仅用于娱乐和习惯记录，不构成医疗建议。",
    "roast": "头发小伙伴今天也在认真营业。",
    "encouragement": "继续轻松记录就好，保持节奏已经很棒。",
    "source": "api",
    "source_label": "CC club OpenAI compatible AI 分析结果",
    "daily_task": "今晚早点睡",
    "count": "中等",
    "thickness": "正常",
    "suggestions": ["今晚提前 30 分钟进入休息模式"]
  }
}
```

### Fallback 示例

```json
{
  "success": false,
  "fallbackCode": "MISSING_API_KEY",
  "record_id": "rec_xxx",
  "analysisId": "ana_xxx",
  "record_status": "demo_ai_fallback",
  "image_url": "https://example.com/demo.jpg",
  "ai_source": "fallback",
  "error": {
    "code": "MISSING_API_KEY",
    "message": "后端还没有配置 OPENAI_API_KEY，已返回可展示的 demo 兜底。"
  },
  "result": {
    "score": 50,
    "title": "记录先收下",
    "summary": "后端还没有配置 OPENAI_API_KEY，已返回可展示的 demo 兜底。",
    "source": "fallback",
    "source_label": "AI 兜底结果",
    "disclaimer": "本结果仅用于娱乐和习惯记录，不构成医疗建议。"
  }
}
```

## 记录存档与历史查询（唯一历史 API）

**契约声明（AIFA-30）：** demo 阶段**不新建** `/api/history`。历史列表 / 详情 / 对比字段一律走：

| 用途 | 方法 | 路径 |
| --- | --- | --- |
| 创建补存 | `POST` | `/api/records` |
| 历史列表（对比/养成） | `GET` | `/api/records?limit=50` |
| 单条详情 | `GET` | `/api/records/:id` |

`POST /api/analyze` 成功或 fallback 后也会尽力落库；前端历史页只读 `GET /api/records` 即可。

**持久化说明：** 默认写入本地 JSON（`RECORDS_FILE` / `backend/data/records.json`）。Render Free 等临时磁盘在实例重启后可能清空记录；5 周 demo 可接受，文案勿承诺「永久存档」。

### 创建记录

- 接口路径：`POST /api/records`
- 请求格式：`application/json`
- 使用场景：前端如需主动补存一条已生成分析结果，可直接提交 `/api/analyze` 返回体。

返回示例：

```json
{
  "success": true,
  "record": {
    "record_id": "rec_xxx",
    "created_at": "2026-07-13T08:00:00.000Z",
    "image_url": "/uploads/demo.jpg",
    "record_status": "ai_completed",
    "result": {
      "score": 82,
      "title": "今日发丝巡逻队长"
    }
  }
}
```

### 历史列表（对比 / 养成反馈）

- 接口路径：`GET /api/records?limit=50`
- `limit` 范围：1–100，默认 50。
- 排序：按 `created_at` **新 → 旧**（与落库 `unshift` 一致）。
- 每条记录在完整存档字段之外，额外提供扁平摘要与相对**下一条（更旧）**的 `compare`，方便历史页展示分数/称号变化。

列表字段说明：

| 字段 | 说明 |
| --- | --- |
| `record_id` | 记录 ID |
| `created_at` | ISO 时间 |
| `image_url` / `thumbnail_url` | 照片 URL（demo 阶段缩略图同原图） |
| `title` | 娱乐化称号（来自 `result.title`） |
| `score` / `fun_score` | 趣味分，二者同值（兼容旧 `score` 与产品文档 `fun_score`） |
| `record_status` | 分析状态 |
| `growth.exp_added` / `current_level` / `streak_days` | 本次成长摘要 |
| `compare.score_delta` | 相对上一条（更旧）的分数差；最旧记录为 `null` |
| `compare.title_changed` | 称号是否相对上一条变化 |
| `compare.prev_*` | 上一条的 id / 时间 / 称号 / 分数 |
| `result` | 完整分析结果（详情页可复用） |
| `contract` | 固定 `history_list_v1` |
| `history_api` | 固定提示 `GET /api/records` |
| `persistence_note` | Free 盘可能丢数据的说明 |

返回示例：

```json
{
  "success": true,
  "contract": "history_list_v1",
  "history_api": "GET /api/records",
  "persistence_note": "Free PaaS 磁盘可能在实例重启后丢失 JSON 记录；demo 可接受，长期需持久卷或数据库。",
  "total": 2,
  "records": [
    {
      "record_id": "rec_newer",
      "created_at": "2026-07-21T10:00:00.000Z",
      "image_url": "https://example.com/demo-a.jpg",
      "thumbnail_url": "https://example.com/demo-a.jpg",
      "title": "今日发量守护者",
      "score": 86,
      "fun_score": 86,
      "record_status": "demo_mock_completed",
      "growth": { "exp_added": 12, "current_level": 1, "streak_days": 1 },
      "compare": {
        "prev_record_id": "rec_older",
        "prev_created_at": "2026-07-21T09:00:00.000Z",
        "prev_title": "模糊也努力奖",
        "prev_score": 58,
        "score_delta": 28,
        "title_changed": true
      },
      "result": {
        "score": 86,
        "title": "今日发量守护者",
        "summary": "这张记录看起来清爽有精神，今天的头发小伙伴状态在线。",
        "growthDelta": { "exp_added": 12, "current_level": 1, "streak_days": 1 }
      }
    },
    {
      "record_id": "rec_older",
      "created_at": "2026-07-21T09:00:00.000Z",
      "image_url": "https://example.com/demo-b.jpg",
      "thumbnail_url": "https://example.com/demo-b.jpg",
      "title": "模糊也努力奖",
      "score": 58,
      "fun_score": 58,
      "record_status": "demo_mock_saved_with_notes",
      "growth": { "exp_added": 8, "current_level": 1, "streak_days": 1 },
      "compare": null,
      "result": { "score": 58, "title": "模糊也努力奖" }
    }
  ]
}
```

### 记录详情

- 接口路径：`GET /api/records/:id`
- 返回 `contract: history_detail_v1`，`record` 形状与列表项相同（含 `compare`）。
- 未找到返回 `404` + `RECORD_NOT_FOUND`。

### 前端联调步骤（历史页）

1. `GET https://<host>/api/records?limit=20`（公网示例：`https://ai-faqizhe-diaoleme.onrender.com/api/records`）。
2. 用 `records[0]` / `records[1]` 至少两条渲染列表；展示 `title`、`fun_score`（或 `score`）、`created_at`、`thumbnail_url`。
3. 对比/养成：读 `compare.score_delta`、`compare.title_changed`、`growth.exp_added`；不要自己再算一遍也可。
4. 点进详情：`GET /api/records/:id`，或直接用列表里的 `result`。
5. Cold start：若首次请求慢/失败，先 `GET /api/health` 预热后再拉历史。
6. 文案：保持娱乐养成语气；勿展示医疗化字段；可轻提示 Free 盘重启可能丢历史。

## AI 聊天（可选报告上下文）

- 接口名称：AI 助手聊天
- 接口路径：`POST /api/chat`
- 请求方法：POST
- 是否支持 mock / fallback：上游失败时返回 `success:false` + 可展示兜底文案；回复仍做医疗化内容清洗
- 兼容：旧客户端不传 `report_context` 时行为与现网一致

### 请求字段

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `message` | string | 可选，单轮用户消息（与 `messages` 可并用） |
| `messages` | array | 可选，最近对话；项为 `{ role: "user"\|"assistant", content }`，最多保留 10 条，单条 content 截到 800 |
| `report_context` | array | 可选，前端本机 `reportHistory` 本周摘要（自然周周一–周日），最多 40 条；非法/过长字段安全截断，不影响旧客户端 |

`report_context[]` 可选子字段：`date`、`title`、`score`、`summary`、`score_delta`、`daily_task`、`tags`。

有 `report_context` 时，后端会注入系统提示：说明这些是用户本机本周 Scan 报告摘要，要求优先据此回答，禁止编造未提供的报告；无对应内容时引导去 Scan；仍不做医疗诊断。

### 请求示例（带 2 条假报告）

```json
{
  "message": "我上次报告称号和分数是什么？",
  "report_context": [
    {
      "date": "2026-07-21",
      "title": "今日发量守护者",
      "score": 82,
      "summary": "挺精神",
      "score_delta": 10,
      "daily_task": "早点睡",
      "tags": ["清爽"]
    },
    {
      "date": "2026-07-20",
      "title": "模糊也努力奖",
      "score": 58,
      "summary": "光线偏暗"
    }
  ]
}
```

### 返回示例

```json
{
  "success": true,
  "ai_source": "openai_compatible",
  "source": "api",
  "source_label": "CC club OpenAI compatible AI 聊天结果",
  "fallback_code": null,
  "reply": "根据你提供的历史报告，最近一次是「今日发量守护者」82 分……",
  "disclaimer": "本结果仅用于娱乐和习惯记录，不构成医疗建议。",
  "report_context_count": 2
}
```

### 前端使用说明

1. 从本机 `reportHistory` 按本地时区自然周（周一 00:00–周日 23:59:59，报告 `date` 字段）筛选本周记录，按日期新→旧排序，最多 40 条，映射为上述摘要字段后随聊天请求发送；本周 0 条则传空数组。
2. **不要**让后端自动 `GET /api/records` 全量塞进上下文（共享存储会串用户数据）。
3. 未做用户鉴权；上下文可信来源是前端本机会话。

## Mock 场景

如需不走真实 AI，可传 `mock_scenario`：

| `mock_scenario` | HTTP | `success` | `fallbackCode` | `record_status` | 用途 |
| --- | --- | --- | --- | --- | --- |
| `success` | 200 | `true` | `null` | `demo_mock_completed` | 正常成功 mock |
| `low_quality` | 200 | `true` | `LOW_QUALITY_IMAGE` | `demo_mock_saved_with_notes` | 图片质量差但可保存 |
| `analysis_failed` | 200 | `false` | `MOCK_ANALYSIS_FALLBACK` | `demo_mock_fallback` | 分析失败 fallback，前端仍可展示 |

## 本地调用示例

### 真实 AI 代理

```bash
curl -X POST http://localhost:8787/api/analyze \
  -H "content-type: application/json" \
  -d '{"image_url":"https://example.com/demo.jpg","note":"今天记录一下"}'

# 后端会转发到：${OPENAI_RESPONSES_URL:-${OPENAI_BASE_URL}/responses}
```

### FormData 上传

```bash
curl -X POST http://localhost:8787/api/analyze \
  -F "image=@./demo.jpg"
```

### Mock

```bash
curl -X POST http://localhost:8787/api/analyze \
  -H "content-type: application/json" \
  -d '{"image_url":"https://example.com/demo.jpg","mock_scenario":"success"}'
```

## 前端联调说明

- 前端默认调用 `http://localhost:8787/api/analyze`；如需跨环境联调，可用 `VITE_MODEL_API_URL` 覆盖。
- 前端不读取、不保存真实 API key；真实 key 只放在 `backend/.env`。
- 结果页可用 `result.source_label` 区分 `CC club OpenAI compatible AI 分析结果`、`AI 兜底结果`、`Demo mock 结果`。
- 如果 `success=false` 或 `fallbackCode` 不为空，可展示轻量提示，但不要阻断结果页。
- 所有文案保持娱乐记录和习惯养成语气；模型展示字段命中疾病、诊断、严重脱发、治疗、用药或就医等表达时，服务端统一返回 `CONTENT_BLOCKED` 安全 fallback。

## 结构清理说明

- 当前后端 / AI 主链路统一在 `backend/server.mjs`，不要再新增平行的 AI proxy 服务目录。
- OpenAI compatible 与 SiliconFlow 共用同一套请求、mock、fallback、响应清洗逻辑。
- 详细保留 / 合并 / 删除 / 暂不动清单见 `backend/docs/cleanup-inventory.md`。

## 本地测试

```bash
cd backend
npm test
```
