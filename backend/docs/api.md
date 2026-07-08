# 掉了么图片分析 mock API

## 本地启动

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
  "service": "diaoleme-mock-api"
}
```

## 图片分析

- 接口名称：头发记录图片分析 mock 接口
- 前端公开入口：`POST /api/hair-analysis`
- 请求格式：`application/json` 或 `multipart/form-data`
- 是否真实 AI：否。当前统一返回 demo mock / fallback，用于前端联调和 demo 展示。

## 请求字段

### JSON

```json
{
  "image_url": "https://example.com/demo-hair.jpg",
  "note": "今天洗头后记录一下",
  "mock_scenario": "success"
}
```

### FormData

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `image` / `file` | File | 上传图片文件，demo 阶段保存到本地 `backend/uploads/` |
| `image_url` | string | 可选，图片地址；没有文件时必填 |
| `note` | string | 可选，用户备注 |
| `mock_scenario` | string | 可选：`success`、`low_quality`、`analysis_failed` |

## 统一响应契约

顶层固定字段：`success/fallbackCode/record_id/analysisId/record_status/image_url`。
展示字段固定放在 `result`：`score/title/summary/task/growthDelta/tags/disclaimer`，可选 `roast/encouragement/image_quality`。

```json
{
  "success": true,
  "fallbackCode": null,
  "record_id": "rec_xxx",
  "analysisId": "ana_xxx",
  "record_status": "demo_mock_completed",
  "image_url": "https://example.com/demo-hair.jpg",
  "result": {
    "score": 86,
    "title": "今日发量守护者",
    "summary": "这张记录看起来清爽有精神，今天的头发小伙伴状态在线。",
    "task": {
      "name": "今晚早点睡",
      "description": "给头发小伙伴一点安静休息时间。",
      "exp_reward": 12
    },
    "growthDelta": {
      "exp_added": 12,
      "current_level": 1,
      "streak_days": 1
    },
    "tags": ["清爽", "稳定", "元气在线"],
    "disclaimer": "当前为 demo mock 结果，仅用于娱乐记录和习惯养成展示，不代表医学判断。",
    "roast": "发丝们开会很守秩序，没有上演离家出走大戏。",
    "encouragement": "继续轻松记录就好，保持这个节奏很适合 demo 展示。",
    "image_quality": "clear"
  }
}
```

## mock / fallback 场景

| `mock_scenario` | HTTP | `success` | `fallbackCode` | `record_status` | 用途 |
| --- | --- | --- | --- | --- | --- |
| `success` | 200 | `true` | `null` | `demo_mock_completed` | 正常成功 mock |
| `low_quality` | 200 | `true` | `LOW_QUALITY_IMAGE` | `demo_mock_saved_with_notes` | 图片质量差但可保存 |
| `analysis_failed` | 200 | `false` | `MOCK_ANALYSIS_FALLBACK` | `demo_mock_fallback` | 分析失败 fallback，前端仍可展示 |

## 本地调用示例

### success

```bash
curl -X POST http://localhost:8787/api/hair-analysis \
  -H "content-type: application/json" \
  -d '{"image_url":"https://example.com/demo.jpg","mock_scenario":"success"}'
```

### 低质量可保存

```bash
curl -X POST http://localhost:8787/api/hair-analysis \
  -H "content-type: application/json" \
  -d '{"image_url":"https://example.com/dark.jpg","mock_scenario":"low_quality"}'
```

### 失败 fallback

```bash
curl -X POST http://localhost:8787/api/hair-analysis \
  -H "content-type: application/json" \
  -d '{"image_url":"https://example.com/fail.jpg","mock_scenario":"analysis_failed"}'
```

### FormData 上传

```bash
curl -X POST http://localhost:8787/api/hair-analysis \
  -F "image=@./demo.jpg" \
  -F "mock_scenario=success"
```

## 错误 fallback

缺少图片或图片地址时返回 `400`，但仍保留可展示的 `result`：

```json
{
  "success": false,
  "fallbackCode": "MISSING_IMAGE",
  "record_id": "rec_xxx",
  "analysisId": "ana_xxx",
  "record_status": "demo_mock_fallback",
  "image_url": null,
  "error": {
    "code": "MISSING_IMAGE",
    "message": "请上传 image 文件，或在请求体中提供 image_url。"
  },
  "result": {
    "score": 50,
    "title": "记录先收下",
    "summary": "请上传 image 文件，或在请求体中提供 image_url。",
    "task": {
      "name": "重新记录一下",
      "description": "选择一张更清楚的照片再来一次。",
      "exp_reward": 0
    },
    "growthDelta": {
      "exp_added": 0,
      "current_level": 1,
      "streak_days": 0
    },
    "tags": ["待补图", "可重试"],
    "disclaimer": "当前为 demo mock fallback，仅用于娱乐记录和习惯养成展示，不代表医学判断。",
    "image_quality": "missing_or_unreadable"
  }
}
```

## 前端联调说明

- 前端只调用 `POST /api/hair-analysis`，不要再接 `/api/analyze`、`/api/analysis` 或 `/api/records`。
- 开发时可先传 `image_url`，不依赖真实云存储。
- 上传文件会写入本地 `backend/uploads/`，该目录已忽略提交；第一阶段不代表真实对象存储能力。
- 展示优先读取 `result`；如果 `fallbackCode` 不为空，可展示轻量提示但不要阻断结果页。
- 所有文案保持娱乐记录和习惯养成语气，不输出医疗诊断或治疗建议。

## 本地测试

```bash
cd backend
npm test
```
