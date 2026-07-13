# 「掉了么」

> 拍照获取掉发数据 · 大模型给建议 · 解锁发型 · 治愈插画风 Web App

---

## 🚀 快速启动

### 1. 确保 Node.js 已装

需要 **Node.js ≥ 18**。终端里跑：

```bash
node -v
```

看到类似 `v20.x.x` 就行。没有的话去 [nodejs.org](https://nodejs.org/zh-cn/download) 找到 **Windows 安装程序(.msl)** 安装即可

### 2. 安装依赖

```bash
cd diaoleme
npm install
```

> `node_modules` 没有提交到仓库，首次运行必须执行这一步。

### 3. 启动开发服务器

```bash
npm run dev
```

浏览器打开 `http://localhost:5173/`。

> 改代码后浏览器会自动热更新（HMR），无需手动重启。

---

## 📁 项目结构

```
diaoleme/
├── public/
│   └── favicon.svg
├── src/
│   ├── main.tsx                 React 入口
│   ├── App.tsx                  路由定义
│   ├── index.css                Tailwind 入口 + 主题配置
│   ├── types/index.ts           公共类型定义
│   ├── layouts/
│   │   ├── TabLayout.tsx        底部导航壳 + 页面切换动画
│   │   └── TabBar.tsx           底部导航指示器
│   ├── pages/
│   │   ├── Hello.tsx            首屏（标题 + 粘土脸 + CTA）
│   │   ├── Scan.tsx             拍摄页（上传 + 拍照 + 等待动画）
│   │   ├── Report.tsx           报告页（掉发指数 + 指标 + 建议折叠）
│   │   ├── Records.tsx          记录页（按日期聚类的历史报告）
│   │   ├── Tasks.tsx            今日任务（拍照后给建议，完成得分）
│   │   ├── Hairstyle.tsx        发型库（换发型 + 积分解锁）
│   │   └── Me.tsx               我的页（打卡 + 热力图 + 排行榜 + 分享卡）
│   ├── components/
│   │   ├── ClayAvatar/          粘土头像（SVG，表情随指数变化）
│   │   └── Layout/
│   │       ├── StickerCard.tsx  贴纸式卡片
│   │       ├── Heatmap.tsx      月度打卡热力图
│   │       └── RankList.tsx     发友排行榜
│   ├── store/
│   │   └── UserStore.ts         Zustand 状态（localStorage 持久化）
│   └── services/
│       ├── config.ts            本地后端代理地址配置
│       └── model.ts             后端代理调用 + mock 兜底
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🛠 常用命令

| 命令 | 作用 |
|---|---|
| `npm run dev` | 启动开发服务器（带热更新） |
| `npm run build` | 类型检查 + 生产构建（输出到 `dist/`） |
| `npm run preview` | 本地预览生产构建 |

---

## 🔌 接入大模型

前端不保存真实 API Key，只调用后端代理。分析入口统一为 `POST /api/hair-analysis`，地址按以下优先级解析：

1. `public/config.js` 的运行时 `apiBaseUrl`（部署后可直接替换，不用改页面业务代码或重新构建）
2. 构建变量 `VITE_API_BASE_URL`
3. 兼容旧配置 `VITE_MODEL_API_URL`（这里传完整接口 URL）
4. 默认 `http://localhost:8787/api/hair-analysis`

本地使用默认配置即可。GitHub Pages 联调公网后端时，将 `public/config.js` 改为：

```js
window.__DIAOLEME_CONFIG__ = {
  apiBaseUrl: 'https://your-backend.example.com',
}
```

`apiBaseUrl` 只配置 origin，不带 `/api/hair-analysis`。GitHub Pages 是 HTTPS 页面，公网后端也必须提供 HTTPS，否则浏览器会拦截混合内容。当前后端已对 `POST`/`OPTIONS` 返回 CORS 头；正式部署时建议再将 `Access-Control-Allow-Origin` 从 `*` 收紧到实际 Pages 域名。

真实 key 请放在 `backend/.env`：

```bash
AI_PROVIDER=openai_compatible
OPENAI_BASE_URL=https://claude-code.club/openai/v1
OPENAI_MODEL=gpt-5.5
OPENAI_API_KEY=sk-xxx
PORT=8787
```

如果 CC club 返回模型不可用，可临时改为 `OPENAI_MODEL=gpt-5.4`。同时启动 `backend` 和前端后，`analyzePhoto` 会请求后端代理 `/api/hair-analysis`，再由后端请求 OpenAI compatible provider。缺少 key、上游失败或后端不可用时，会安全降级为可展示的 demo/AI 兜底结果，并在结果页明确提示当前为降级反馈。

**期望返回 JSON 格式**（在 `src/types/index.ts` 中定义）：

```ts
interface AnalysisResult {
  score: number              // 掉发指数 0-100
  count: '少量' | '中等' | '偏多'
  thickness: '粗硬' | '正常' | '细软'
  suggestions: string[]      // 3-5 条建议
}
```

---

## 🐛 常见问题

**Q: `npm run dev` 提示 node 找不到**
A: Node 没加进 PATH。Windows 下需在「系统设置 → 环境变量 → Path」添加 Node 安装目录，保存后重启终端。

**Q: `npm install` 报错**
A: 确认 Node 版本 ≥ 18。可尝试 `npm install --force` 或 `npm install --legacy-peer-deps`。

**Q: 端口 5173 被占用**
A: `vite.config.ts` 里改 port，或运行时加 `--port 5174`。

**Q: 粘土脸表情没变**
A: 掉发指数来自 UserStore。先走一次「拍摄 → 报告」流程，指数才会写入。

**Q: 保存分享图报错 `oklab`**
A: 这是 html2canvas 的已知限制。当前已规避所有 Tailwind 透明度修饰符，若仍遇到，请检查新增的样式是否用了 Tailwind 的 `/透明度` 写法（如 `bg-xxx/50`），改为 inline `rgba()` 即可。
