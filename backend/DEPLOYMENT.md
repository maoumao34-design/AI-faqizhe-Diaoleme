# 掉了么 AI 代理部署说明

当前后端支持 OpenAI compatible / SiliconFlow 真实 AI 代理，也支持显式 demo mock 与失败 fallback。部署后前端把 API URL 指向线上服务的 `POST /api/analyze`；兼容入口 `POST /api/hair-analysis` 仍可用。真实密钥只通过部署平台环境变量注入，不提交到仓库。

**人类 15 分钟上线步骤**见仓库根目录旁：[`docs/ONE_CLICK_DEPLOY.md`](../docs/ONE_CLICK_DEPLOY.md)。

## 服务信息

- 服务目录：`backend`
- 运行时：Node.js 20（Dockerfile 与 engines 对齐）
- 启动命令：`npm start`
- 本地开发：`npm run dev`
- 健康检查：`GET /api/health`
- 分析接口：`POST /api/analyze`（兼容 `POST /api/hair-analysis`）
- 历史接口（唯一契约，无 `/api/history`）：`POST /api/records`、`GET /api/records`、`GET /api/records/:id`（列表含 `fun_score` / `compare` / `growth` 摘要）
- 容器：`backend/Dockerfile`

## 环境变量清单

完整模板见 [`backend/.env.example`](./.env.example)。

| 变量 | 必填 | 说明 |
|---|---|---|
| `PORT` | 平台通常注入 | 本地默认 `8787` |
| `NODE_ENV` | 建议 | 生产设 `production` |
| `AI_PROVIDER` | 否 | `openai_compatible` 或 `siliconflow`；无 key 时走 mock/fallback |
| `SILICONFLOW_API_KEY` | 真实 AI 时 | SiliconFlow |
| `SILICONFLOW_MODEL` | 否 | 默认 `Qwen/Qwen3-VL-32B-Instruct` |
| `OPENAI_API_KEY` | 真实 AI 时 | OpenAI compatible |
| `OPENAI_BASE_URL` / `OPENAI_MODEL` | 否 | 配套 OpenAI compatible |
| `RECORDS_FILE` | 否 | JSON 存储路径；免费 PaaS 磁盘可能随重启清空 |

注意：Render/Railway/Fly 免费档临时文件系统可能在重启时清空 JSON 记录。5 周 demo 可先接受；长期保留需持久卷或数据库。

## 平台配置文件

| 文件 | 平台 |
|---|---|
| 仓库根 `render.yaml` | Render Blueprint |
| 仓库根 `railway.json` | Railway |
| 仓库根 `fly.toml` | Fly.io |
| `backend/Dockerfile` | 任意 Docker / Fly |

### Render 等价手填项

- Root Directory：`backend`
- Build Command：`npm install`
- Start Command：`npm start`
- Health Check Path：`/api/health`

### 部署后验证

```bash
curl -sS https://<fixed-host>/api/health
curl -sS -X POST https://<fixed-host>/api/analyze \
  -H 'content-type: application/json' \
  -d '{"image_url":"https://example.com/demo.jpg","mock_scenario":"success"}'
```

## 前端联调口径

- Base URL：平台固定域名，例如 `https://<service>.onrender.com`
- 请求路径：`POST /api/analyze`
- JSON 示例：

```json
{
  "image_url": "https://example.com/demo.jpg",
  "mock_scenario": "success"
}
```

- FormData 字段：`image` 或 `file`，可选 `mock_scenario`
- 不传 `mock_scenario` 时尝试真实 AI；只有 `result.source=api` 且 `success=true` 才表示真实成功
- `result.source=mock` / `fallback` 为联调或降级，前端须明确展示为非真实 AI
- 结果仅用于娱乐与习惯养成，不构成医疗建议

## 验收禁止项

- 不使用匿名反向隧道域名作为生产绑定
- 不把 API key 提交进仓库或写进 PR 正文
