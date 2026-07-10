# 掉了么图片分析后端代理 API

## 本地启动

在 `backend/.env` 配置真实 key（不要提交）：

```bash
AI_PROVIDER=openai_compatible
OPENAI_BASE_URL=https://claude-code.club/openai/v1
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
  "service": "diaoleme-ai-proxy"
}
```

## 图片分析

- 接口名称：头发记录图片分析接口
- 前端公开入口：`POST /api/hair-analysis`
- 请求格式：`application/json` 或 `multipart/form-data`
- 是否真实 AI：后端按 `AI_PROVIDER` 读取配置；推荐 `openai_compatible`，代理请求 `${OPENAI_BASE_URL}/chat/completions`，默认试跑 CC club `gpt-5.5`。
- 降级策略：缺少 key、401/403、模型不可用、超时、上游返回非 JSON 时，返回 `success:false` + `fallbackCode` + 可展示 `result`，不让结果页崩溃。
- 路径兜底：当 `OPENAI_BASE_URL=https://claude-code.club/openai/v1` 返回 404 时，会再尝试 `https://claude-code.club/openai/chat/completions`，方便联调判断 `/openai/v1` 与 `/openai` 路径差异。

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

顶层固定字段：`success/fallbackCode/record_id/analysisId/record_status/image_url/ai_source`。
展示字段固定放在 `result`：`score/title/summary/task/growthDelta/tags/disclaimer/roast/encouragement/source/source_label/daily_task/count/thickness/suggestions`。

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
    "disclaimer": "本结果仅用于轻松记录和娱乐反馈，不作为医疗用途。",
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
    "disclaimer": "当前为 demo fallback，仅用于娱乐记录和习惯养成展示，不代表医学判断。"
  }
}
```

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
curl -X POST http://localhost:8787/api/hair-analysis \
  -H "content-type: application/json" \
  -d '{"image_url":"https://example.com/demo.jpg","note":"今天记录一下"}'
```

### FormData 上传

```bash
curl -X POST http://localhost:8787/api/hair-analysis \
  -F "image=@./demo.jpg"
```

### Mock

```bash
curl -X POST http://localhost:8787/api/hair-analysis \
  -H "content-type: application/json" \
  -d '{"image_url":"https://example.com/demo.jpg","mock_scenario":"success"}'
```

## 前端联调说明

- 前端只调用 `/api/hair-analysis`，Vite dev server 会把 `/api` 代理到 `http://localhost:8787`。
- 前端不读取、不保存真实 API key；真实 key 只放在 `backend/.env`。
- 结果页可用 `result.source_label` 区分 `CC club OpenAI compatible AI 分析结果`、`AI 兜底结果`、`Demo mock 结果`。
- 如果 `success=false` 或 `fallbackCode` 不为空，可展示轻量提示，但不要阻断结果页。
- 所有文案保持娱乐记录和习惯养成语气，不输出医疗诊断或治疗建议。

## 本地测试

```bash
cd backend
npm test
```
