# 掉了么 AI 代理部署说明

当前后端支持 OpenAI compatible / SiliconFlow 真实 AI 代理，也支持显式 demo mock 与失败 fallback。部署后前端把 API URL 指向线上服务的 `POST /api/analyze`；兼容入口 `POST /api/hair-analysis` 仍可用。真实密钥只通过部署平台环境变量注入，不提交到仓库。

## 服务信息

- 服务目录：`backend`
- 运行时：Node.js 18+（建议 20）
- 启动命令：`npm start`
- 本地开发：`npm run dev`
- 健康检查：`GET /api/health`
- 分析接口：`POST /api/analyze`（兼容 `POST /api/hair-analysis`）
- 历史接口：`POST /api/records`、`GET /api/records`、`GET /api/records/:id`
- 环境变量：
  - `PORT`：平台通常自动注入；本地默认 `8787`
  - `NODE_ENV`：可设为 `production`
  - `AI_PROVIDER`：`openai_compatible` 或 `siliconflow`
  - `OPENAI_BASE_URL` / `OPENAI_RESPONSES_URL` / `OPENAI_MODEL` / `OPENAI_API_KEY`：OpenAI compatible Responses API 配置
  - `SILICONFLOW_MODEL` / `SILICONFLOW_API_KEY`：SiliconFlow 配置
  - `RECORDS_FILE`：可选 JSON 存储路径；默认 `backend/data/records.json`

注意：Render/Railway 的临时文件系统可能在重启或重新部署时清空 JSON 记录。5 周 demo 可先使用此方案；需要长期保留时应挂载持久卷或替换为数据库.

## Render 部署

仓库根目录已提供 `render.yaml`，适合用 Render Blueprint 创建 Web Service。

配置等价项：

- Root Directory：`backend`
- Build Command：`npm install`
- Start Command：`npm start`
- Health Check Path：`/api/health`

部署完成后验证：

```bash
curl https://<render-service-host>/api/health
curl -X POST https://<render-service-host>/api/analyze \
  -H "content-type: application/json" \
  -d '{"image_url":"https://example.com/demo.jpg","mock_scenario":"success"}'
```

## Railway 部署

仓库根目录已提供 `railway.json`，可直接连接 GitHub 仓库部署。

部署完成后验证：

```bash
curl https://<railway-service-host>/api/health
curl -X POST https://<railway-service-host>/api/analyze \
  -H "content-type: application/json" \
  -d '{"image_url":"https://example.com/demo.jpg","mock_scenario":"success"}'
```

## Vercel 说明

当前后端是长驻 Node HTTP server，更适合 Render/Railway 这类 Web Service 平台。若必须使用 Vercel，需要把 `server.mjs` 拆成 serverless function 入口；为避免影响本次 demo 联调，当前不默认切换为 Vercel 结构。

## 前端联调口径

- Base URL：部署平台给出的域名，例如 `https://<service-host>`
- 请求路径：`POST /api/analyze`
- JSON 请求示例：

```json
{
  "image_url": "https://example.com/demo.jpg",
  "mock_scenario": "success"
}
```

- FormData 请求字段：`image` 或 `file`，可选 `mock_scenario`
- 不传 `mock_scenario` 时尝试真实 AI；只有 `result.source=api` 且 `success=true` 才表示真实成功。
- `result.source=mock` 表示显式联调 mock；`result.source=fallback` 与顶层 `fallbackCode` 表示降级结果，前端必须明确展示为非真实 AI。
- 所有结果只用于娱乐记录和习惯养成展示，不代表医学判断。
