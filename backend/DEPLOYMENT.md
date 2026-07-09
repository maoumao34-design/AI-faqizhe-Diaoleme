# 掉了么 mock API 部署说明

当前后端是 demo mock API，不接真实 AI，不包含密钥。部署后前端只需要把 API base URL 指向线上服务即可调用 `POST /api/hair-analysis`。

## 服务信息

- 服务目录：`backend`
- 运行时：Node.js 18+（建议 20）
- 启动命令：`npm start`
- 本地开发：`npm run dev`
- 健康检查：`GET /api/health`
- 分析接口：`POST /api/hair-analysis`
- 环境变量：
  - `PORT`：平台通常自动注入；本地默认 `8787`
  - `NODE_ENV`：可设为 `production`

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
curl -X POST https://<render-service-host>/api/hair-analysis \
  -H "content-type: application/json" \
  -d '{"image_url":"https://example.com/demo.jpg","mock_scenario":"success"}'
```

## Railway 部署

仓库根目录已提供 `railway.json`，可直接连接 GitHub 仓库部署。

部署完成后验证：

```bash
curl https://<railway-service-host>/api/health
curl -X POST https://<railway-service-host>/api/hair-analysis \
  -H "content-type: application/json" \
  -d '{"image_url":"https://example.com/demo.jpg","mock_scenario":"success"}'
```

## Vercel 说明

当前后端是长驻 Node HTTP server，更适合 Render/Railway 这类 Web Service 平台。若必须使用 Vercel，需要把 `server.mjs` 拆成 serverless function 入口；为避免影响本次 demo 联调，当前不默认切换为 Vercel 结构。

## 前端联调口径

- Base URL：部署平台给出的域名，例如 `https://<service-host>`
- 请求路径：`POST /api/hair-analysis`
- JSON 请求示例：

```json
{
  "image_url": "https://example.com/demo.jpg",
  "mock_scenario": "success"
}
```

- FormData 请求字段：`image` 或 `file`，可选 `mock_scenario`
- 当前返回仍为 demo mock：用于娱乐记录和习惯养成展示，不代表医学判断。
