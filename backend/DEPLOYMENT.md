# 掉了么后端公网部署说明（AIFA-27）

目标：提供**固定 HTTPS** 的 `GET /api/health` 与 `POST /api/analyze`，供前端 gh-pages 绑定。  
**禁止**使用 localhost.run / `*.lhr.life` 等临时隧道作为验收地址。

仓库已备齐：

| 文件 | 用途 |
|------|------|
| `backend/Dockerfile` | 任意 Docker / Render Docker / Fly |
| `render.yaml` | Render Blueprint 一键 |
| `railway.json` | Railway 连接仓库一键 |
| `backend/DEPLOYMENT.md` | 本说明 |

---

## 人类 15 分钟一键部署（推荐 Render，可不交 API token）

### 方案 B（推荐）：网页连接 GitHub，约 10–15 分钟

1. 打开 [https://dashboard.render.com](https://dashboard.render.com)（免费注册即可）。
2. **New → Blueprint**，连接 GitHub 仓库 `maoumao34-design/AI-faqizhe-Diaoleme`（或你的 fork），选择包含最新 `render.yaml` 的分支（`main` 或已合并的 `feature/aifa-27-deploy-prep`）。
3. Render 会读取 `render.yaml`，创建 Web Service `diaoleme-ai-proxy`：
   - Root Directory：`backend`
   - Build：`npm install --omit=dev`
   - Start：`npm start`
   - Health Check：`/api/health`
4. 在 Environment 中按需填写（**demo 可先不填 AI key**，仍可用 `mock_scenario=success` 联调）：
   - 必填已由 Blueprint 写入：`NODE_ENV=production`
   - 可选：`OPENAI_API_KEY` / `OPENAI_BASE_URL` / `OPENAI_MODEL` 或 `SILICONFLOW_API_KEY`
5. 等待 Deploy live，复制服务域名，例如：`https://diaoleme-ai-proxy.onrender.com`
6. 本机验证：

```bash
curl -sS https://<你的域名>/api/health
# 期望：{"ok":true,"service":"diaoleme-ai-proxy"}

curl -sS -X POST https://<你的域名>/api/analyze \
  -H 'content-type: application/json' \
  -d '{"image_url":"https://example.com/demo.jpg","mock_scenario":"success"}'
# 期望：HTTP 200，success=true，含 analysisId / result
```

7. 把 **Base / Health / Analyze** 三个 URL 回传到群聊或 AIFA-27 评论；前端绑定：

```text
VITE_MODEL_API_URL=https://<你的域名>/api/analyze
# 或 config.js: apiBaseUrl=https://<你的域名>
```

### 方案 A：把 Render/Railway/Fly API token 发给后端 Agent

后端拿到 token 后执行 CLI 部署，同样验收 `GET /api/health`=200，并在 AIFA-27 评论写死 URL 后推 `in_review`。

### 方案 Railway（等价）

1. [railway.app](https://railway.app) → New Project → Deploy from GitHub repo。
2. Root / start 按 `railway.json`（`cd backend && npm install --omit=dev` / `npm start`）。
3. 生成公网域名 → 同上 curl 验收。

### 方案 Docker 本地构建自检（可选）

```bash
cd backend
docker build -t diaoleme-ai-proxy .
docker run --rm -p 8787:8787 -e NODE_ENV=production diaoleme-ai-proxy
curl -sS http://127.0.0.1:8787/api/health
```

---

## 服务信息

- 服务目录：`backend`
- 运行时：Node.js 20（Dockerfile）/ 18+（平台 Node runtime）
- 启动命令：`npm start` → `node server.mjs`
- 监听：`0.0.0.0:$PORT`（平台注入 `PORT`；本地默认 `8787`）
- 健康检查：`GET /api/health`
- 分析接口：`POST /api/analyze`（兼容 `POST /api/hair-analysis`）
- 历史接口：`POST /api/records`、`GET /api/records`、`GET /api/records/:id`
- CORS：`Access-Control-Allow-Origin: *`（GitHub Pages 可跨域）

### 环境变量

| 变量 | 说明 |
|------|------|
| `PORT` | 平台自动注入 |
| `NODE_ENV` | 建议 `production` |
| `AI_PROVIDER` | `openai_compatible` 或 `siliconflow` |
| `OPENAI_API_KEY` / `OPENAI_BASE_URL` / `OPENAI_MODEL` | OpenAI compatible |
| `SILICONFLOW_API_KEY` / `SILICONFLOW_MODEL` | SiliconFlow |
| `RECORDS_FILE` | 可选；默认 `data/records.json` |

真实密钥只通过平台 Environment 注入，**不要提交到仓库**。

注意：免费档临时磁盘重启可能清空 `uploads/` 与 JSON 记录；5 周 demo 可接受，长期存档需持久卷或数据库。

---

## 前端联调口径

- Base：`https://<service-host>`
- Analyze：`POST https://<service-host>/api/analyze`
- 不传 `mock_scenario` 时尝试真实 AI；`result.source=api` 且 `success=true` 才是真实成功
- `source=mock` / `fallback` 必须按非真实 AI 展示
- 所有结果仅娱乐 / 习惯养成，不代表医学判断
