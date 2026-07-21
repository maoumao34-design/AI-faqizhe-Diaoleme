# 人类一键部署清单（约 15 分钟）

目标：得到**固定**公网 HTTPS Base URL，使 `GET /api/health` → 200，供前端绑定 `POST /api/analyze`。

**禁止**使用 localhost.run / `*.lhr.life` / 其它匿名临时隧道作为验收地址。

仓库已含：

| 文件 | 用途 |
|---|---|
| `backend/Dockerfile` | Docker / Fly / 通用容器 |
| `render.yaml` | Render Blueprint 一键 |
| `railway.json` | Railway 部署 |
| `fly.toml` | Fly.io（可选） |
| `backend/.env.example` | 环境变量清单 |
| `backend/DEPLOYMENT.md` | 接口与变量说明 |

---

## 推荐路径 A：Render 网页（无需把 token 交给 Agent）

1. 打开 [https://dashboard.render.com](https://dashboard.render.com) 并登录（可用 GitHub 账号）。
2. **New** → **Blueprint** → 连接 GitHub 仓库 `maoumao34-design/AI-faqizhe-Diaoleme`（或已同步的 fork）。
   - 若 Blueprint 不可用：改用 **New** → **Web Service** → 选同一仓库。
3. Web Service 手填时用这些值：
   - **Root Directory**：`backend`
   - **Runtime**：Node
   - **Build Command**：`npm install`
   - **Start Command**：`npm start`
   - **Health Check Path**：`/api/health`
4. Environment（可先不填密钥，demo 仍可用 mock）：
   - `NODE_ENV=production`
   - 可选：`AI_PROVIDER=siliconflow` + `SILICONFLOW_API_KEY=...`
5. **Create Web Service** / Deploy，等待变绿。
6. 复制服务域名，例如 `https://diaoleme-ai-proxy.onrender.com`。
7. 本机验证（把 URL 换成你的）：

```bash
curl -sS https://<你的固定域名>/api/health
curl -sS -X POST https://<你的固定域名>/api/analyze \
  -H 'content-type: application/json' \
  -d '{"image_url":"https://example.com/demo.jpg","mock_scenario":"success"}'
```

8. 把 **固定 Base URL** 发回工作群 / AIFA-27 评论（不要发临时隧道）。

---

## 路径 B：Railway 网页

1. [https://railway.app](https://railway.app) → New Project → Deploy from GitHub → 选本仓库。
2. 若未自动识别：Settings → Root / Start 对齐 `railway.json`（`cd backend && npm install` / `cd backend && npm start`）。
3. Variables：至少 `NODE_ENV=production`；AI key 可选。
4. 生成 Public Domain 后，用上面同样的 `curl` 验 health / analyze。
5. 把固定 HTTPS Base 回群。

---

## 路径 C：Fly.io（已装 `flyctl` 时）

```bash
fly auth login
fly launch --no-deploy --copy-config   # 使用仓库根 fly.toml；app 名冲突就改名
fly secrets set SILICONFLOW_API_KEY=...   # 可选
fly deploy
curl -sS https://<app>.fly.dev/api/health
```

---

## 路径 D：把 token 交给后端 Agent（可选）

若不想自己点网页，可把 **Render / Railway / Fly 任一 API token** 写入后端 Agent `custom_env`（或私发给人类负责人再转发），Agent 会代为部署，并在 AIFA-27 评论写死：

- Base：`https://...`
- Health：`https://.../api/health`
- Analyze：`https://.../api/analyze`

然后把 issue 推到 `in_review`。

---

## 验收口径（后端）

- [ ] 域名是平台固定 HTTPS（如 `*.onrender.com` / `*.up.railway.app` / `*.fly.dev`），不是匿名隧道
- [ ] `GET /api/health` 公网 200，body 含 `"ok": true`
- [ ] `POST /api/analyze` + `mock_scenario=success` 公网 200
- [ ] CORS 已放开（服务端 `access-control-allow-origin: *`），GitHub Pages 可跨域调用

## 前端下一步（固定 URL 到位后）

在 AIFA-26 把 `apiBaseUrl` / Analyze URL 绑到该固定域名，重建 gh-pages，再交测试终验。
