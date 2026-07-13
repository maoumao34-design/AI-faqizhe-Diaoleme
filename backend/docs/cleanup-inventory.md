# AIFA-8 重复结构清理清单

本清单记录本次对后端 / AI / 服务相关重复结构的盘点结论，目标是让后续 AIFA-7 的 OpenAI compatible 接入继续沿用现有 `backend` 单一入口，不再新增平行服务或新 schema。

## 保留

| 路径 | 结论 | 原因 |
| --- | --- | --- |
| `backend/server.mjs` | 保留为唯一后端服务入口 | 统一承载 `/api/health`、`/api/hair-analysis`、mock、fallback、OpenAI compatible 与 SiliconFlow provider。 |
| `backend/docs/api.md` | 保留为当前可执行接口文档 | 该文档与实际后端响应契约一致，前端联调优先看这里。 |
| `backend/test-api.mjs` | 保留为后端主链路自测 | 覆盖健康检查以外的 mock、fallback、缺图、上传链路。 |
| `diaoleme/src/services/model.ts` | 保留为前端唯一分析调用入口 | 前端继续只调 `/api/hair-analysis`，不直接接触 API key 或 provider。 |
| `docs/team-collaboration-protocol.md` | 保留 | 团队协作约定，不属于后端重复实现。 |

## 合并

| 来源 | 合并到 | 处理方式 |
| --- | --- | --- |
| `feature/aifa-7-openai-compatible-ai` 中的 OpenAI compatible provider 逻辑 | `backend/server.mjs` | 快进合并到本清理分支，沿用 `AI_PROVIDER=openai_compatible`，未另起新服务目录。 |
| OpenAI compatible 与 SiliconFlow 的请求发送逻辑 | `postChatCompletion` + `buildVisionMessages` | 删除 SiliconFlow 分支内重复的 fetch / messages / JSON 解析流程，两个 provider 共用同一请求与解析入口。 |
| provider 运行说明 | `backend/docs/api.md` 与 `diaoleme/README.md` | 统一说明后端按 `AI_PROVIDER` 选择 provider，默认推荐 OpenAI compatible，旧 SiliconFlow 作为可选回退。 |

## 删除

| 路径 | 处理方式 | 原因 |
| --- | --- | --- |
| 无 | 暂未删除代码文件 | 当前仓库没有独立旧后端目录、平行 AI 服务目录或重复 provider 文件；不确定用途的历史协议文档先不删。 |

## 暂不动

| 路径 | 原因 | 后续建议 |
| --- | --- | --- |
| `docs/ai-analysis-contract.md` | 已更新为当前 `analysisId` / `result` canonical 契约，并指向 `docs/ai-analysis-schema.json`。 | 后续随运行时接口一起维护。 |
| `docs/ai-analysis-schema.json` | 旧 schema 与当前可运行接口契约不一致，当前后端没有引入 schema 校验依赖。 | 后续若要做强校验，应基于 `backend/docs/api.md` 的当前响应重新生成，而不是直接复用旧 schema。 |
| `docs/ai-analysis-mocks.json` | 旧 mock 结构仍可作为产品文案参考，但不是运行时 mock 来源。 | 运行时 mock 以 `backend/server.mjs` 的 `SCENARIOS` 为准；后续可迁移为测试 fixture。 |
| `docs/ai-analysis-prompt.md` | 旧 prompt 结构比当前后端精细，暂不直接替换 AIFA-7 prompt，避免破坏已接入链路。 | AI Agent 确认模型 schema 后再统一更新。 |
| 前端页面与组件目录 | 本任务只做后端 / AI 结构收敛；未发现需要立即清理的明显重复前端实现。 | 较大前端结构调整另开 issue。 |

## 当前统一入口

- 后端服务：`backend/server.mjs`
- 分析接口：`POST /api/hair-analysis`
- 本地 mock：请求中传 `mock_scenario=success|low_quality|analysis_failed`
- provider 选择：`AI_PROVIDER=openai_compatible|siliconflow`
- 前端调用：`diaoleme/src/services/model.ts` -> `/api/hair-analysis`

## 验证

本次清理后需要至少运行：

```bash
cd backend
npm test
```

如需前端构建验证：

```bash
cd diaoleme
npm install
npm run build
```
