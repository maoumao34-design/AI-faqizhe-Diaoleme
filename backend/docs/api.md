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

- 接口名称：图片上传 / 分析 mock 接口
- 接口路径：`POST /api/analyze`（兼容 `POST /api/analysis`）
- 请求格式：`application/json` 或 `multipart/form-data`
- 是否支持 mock：支持，使用 `mock_scenario` 切换场景

### JSON 请求字段

```json
{
  "image_url": "https://example.com/demo-hair.jpg",
  "note": "今天洗头后记录一下",
  "mock_scenario": "success"
}
```

### FormData 请求字段

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `image` / `file` | File | 上传图片文件，demo 阶段保存到本地 `backend/uploads/` |
| `image_url` | string | 可选，图片地址；没有文件时必填 |
| `note` | string | 可选，用户备注 |
| `mock_scenario` | string | 可选：`success`、`low_quality`、`analysis_failed` |

### 统一响应 schema

```json
{
  "request_id": "ana_xxx",
  "created_at": "2026-07-08T10:00:00.000Z",
  "analysis_status": "completed",
  "input": {
    "image_url": "https://example.com/demo-hair.jpg",
    "uploaded_file": null,
    "note": "今天洗头后记录一下"
  },
  "result": {
    "score": 86,
    "title": "今日发量守护者",
    "summary": "这张记录看起来清爽有精神，今天的头发小伙伴状态在线。",
    "roast": "发丝们开会很守秩序，没有上演离家出走大戏。",
    "encouragement": "继续轻松记录就好，保持这个节奏很适合 demo 展示。",
    "tags": ["清爽", "稳定", "元气在线"],
    "daily_task": {
      "name": "今晚早点睡",
      "description": "给头发小伙伴一点安静休息时间。",
      "exp_reward": 12
    },
    "disclaimer": "本结果仅用于娱乐记录和习惯养成展示，不代表医学判断。",
    "fallback_code": null
  }
}
```

### mock 场景

| `mock_scenario` | HTTP | `analysis_status` | `fallback_code` | 用途 |
| --- | --- | --- | --- | --- |
| `success` | 200 | `completed` | `null` | 正常成功 |
| `low_quality` | 200 | `completed_with_notes` | `LOW_QUALITY_IMAGE` | 图片质量差但可保存 |
| `analysis_failed` | 200 | `fallback` | `MOCK_ANALYSIS_FALLBACK` | 分析失败但前端仍可展示 fallback |

### 错误 fallback

缺少图片或图片地址时返回 `400`，但仍保留可展示的 `result`：

```json
{
  "analysis_status": "fallback",
  "error": {
    "code": "MISSING_IMAGE",
    "message": "请上传 image 文件，或在请求体中提供 image_url。"
  },
  "result": {
    "score": 50,
    "title": "记录先收下",
    "summary": "请上传 image 文件，或在请求体中提供 image_url。",
    "fallback_code": "MISSING_IMAGE"
  }
}
```

## 前端联调说明

- 开发时可先传 `image_url`，不依赖真实云存储。
- 上传文件会写入本地 `backend/uploads/`，该目录已忽略提交；第一阶段不代表真实对象存储能力。
- 前端展示优先读取 `result`，如 `fallback_code` 不为空，可展示轻量提示但不要阻断结果页。
- 所有文案保持娱乐记录和习惯养成语气，不输出医疗诊断或治疗建议。

## 本地测试

```bash
cd backend
npm test
```
