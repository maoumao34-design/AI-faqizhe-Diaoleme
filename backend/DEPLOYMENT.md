# 掉了么 AI 代理部署说明

当前后端支持 OpenAI compatible / SiliconFlow 真实 AI 代理，也支持显式 demo mock 与失败 fallback。部署后前端把 API URL 指向线上服务的 `POST /api/analyze`；兼容入口 `POST /api/hair-analysis` 仍可用。真实密钥只通过部署平台环境变量注入，不提交到仓库。

**人类 15 分钟上线步骤**见仓库根目录旁：[`docs/ONE_CLICK_DEPLOY.md`](../docs/ONE_CLICK_DEPLOY.md)。

## 服务信息

- 服务目录：`backend`
- 运行时：Node.js 20（Dockerfile 与 engines 对齐）
- 启动命令：`npm start`
- 本地开发：`npm run dev`
- 健康检查（推荐）：`GET /api/health`
- 根路径兼容：`GET /` 同样返回 `{ ok: true }`（防止平台默认 Health Check Path=`/` 因 404 误杀实例）
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
- **Health Check Path（必改）**：`/api/health`（不要用默认 `/`）
  - Dashboard：Service → Settings → Health Check Path → 填 `/api/health` → Save
  - Blueprint（`render.yaml`）已写 `healthCheckPath: /api/health`；手建服务不会自动继承，须在 UI 改一次

### 冷启动 / 演示前预热（Free 档）

Render Free 会休眠；首次请求可能 30–60s。演示前先预热，避免前端超时：

```bash
# 演示前 1 分钟执行一次即可
curl -sS -m 90 https://ai-faqizhe-diaoleme.onrender.com/api/health
# 期望：HTTP 200 且 body 含 "ok":true
```

稳定复验（唤醒后连续 5 次）：

```bash
for i in 1 2 3 4 5; do
  curl -sS -m 30 -w " try$i HTTP %{http_code}\n" \
    https://ai-faqizhe-diaoleme.onrender.com/api/health
  sleep 1
done
```

说明：代码侧 `GET /` 已返回 200 作兜底；Dashboard 仍应设为 `/api/health`，与 Blueprint / 验收口径一致。不擅自升级付费实例。

### 部署后验证

```bash
curl -sS https://<fixed-host>/api/health
curl -sS -X POST https://<fixed-host>/api/analyze \
  -H 'content-type: application/json' \
  -d '{"image_url":"https://example.com/demo.jpg","mock_scenario":"success"}'
```

### 真实 AI（非 mock）— Render 环境变量

Demo 无密钥也能跑（返回 `source=fallback` / mock）。公网要真实分析时，在 Render → Environment 配置（**密钥不要贴进群聊 / issue / 仓库**）：

| 变量 | 推荐值 | 说明 |
|---|---|---|
| `AI_PROVIDER` | `siliconflow` | 或 `openai_compatible` |
| `SILICONFLOW_API_KEY` | （人类填入） | `AI_PROVIDER=siliconflow` 时必填 |
| `SILICONFLOW_MODEL` | `Qwen/Qwen3-VL-32B-Instruct` | 可选 |
| `OPENAI_API_KEY` | （人类填入） | 仅当 `AI_PROVIDER=openai_compatible` |
| `OPENAI_BASE_URL` / `OPENAI_MODEL` | 按供应商 | 仅 openai_compatible |

保存后会触发重启。验收探测（**不要**带 `mock_scenario`）：

```bash
# 1) 是否已挂密钥（只看布尔，不含密钥明文）
curl -sS https://ai-faqizhe-diaoleme.onrender.com/api/health
# 期望含: "ai_key_configured": true

# 2) 真实 analyze
curl -sS -m 90 -X POST https://ai-faqizhe-diaoleme.onrender.com/api/analyze \
  -H 'content-type: application/json' \
  -d '{"image_url":"https://example.com/demo.jpg","note":"real-ai-check"}'
# 期望: success=true 且 result.source=api（或 ai_source 为 siliconflow/openai_compatible）
# 失败时应仍 200 + 可展示 fallback，且无医疗诊断式文案
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
