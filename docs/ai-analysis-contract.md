# 掉了么 AI 图片分析协议 v1.0

本文档固定 Demo 当前运行时契约。`docs/ai-analysis-schema.json` 是唯一 canonical JSON Schema；后端、前端和测试均以该文件为准。

## 接口

- 主入口：`POST /api/analyze`
- 兼容入口：`POST /api/hair-analysis`
- 请求：`multipart/form-data` 的 `image` / `file`，或 JSON 的 `image_url`
- 可选字段：`note`、`mock_scenario`

完整请求、响应示例及启动方式见 `backend/docs/api.md`。

## Canonical 响应

顶层字段固定为：

- `success`
- `fallbackCode`
- `record_id`
- `analysisId`
- `record_status`
- `image_url`
- `ai_source`
- `result`
- `error`（仅失败或降级时出现）

展示数据固定放在 `result`，包括 `score/title/summary/task/growthDelta/tags/disclaimer/roast/encouragement/image_quality/source/source_label/daily_task/count/thickness/suggestions`。

早期草案中的 `analysis_id`、`entertainment_result`、`fallback_code`、`can_save_record` 不再作为运行时字段，避免前后端维护两套契约。

## 非医疗化边界

- 不做疾病、诊断、严重脱发或治疗需求判断。
- 不提供药物、治疗、处方、就医等建议。
- 模型展示字段命中上述表达时，服务端不透传原文，统一返回 `CONTENT_BLOCKED` 安全 fallback。
- disclaimer 固定为：`本结果仅用于娱乐和习惯记录，不构成医疗建议。`
- 低分优先解释为图片质量、角度或光线问题，不制造焦虑。

## 清洗与兜底

1. 分数 clamp 到 0-100 整数。
2. tags 最多保留 4 个。
3. 缺失展示字段使用安全默认值补齐。
4. 上游超时、鉴权失败、非 JSON 或结构异常时返回完整 fallback，不让结果页崩溃。
5. 所有成功、mock、fallback 响应必须通过 `docs/ai-analysis-schema.json`。

运行 `cd backend && npm test` 会对 success、low quality、analysis failed、缺 key、缺图片、multipart、真实 AI 清洗结果及医疗化内容拦截执行 schema 验证。
