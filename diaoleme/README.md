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
│       ├── config.ts            大模型 API 配置（url / apiKey / model）
│       └── model.ts             大模型调用 + mock 兜底
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

`src/services/config.ts` 中填入你的 API 信息：

```ts
export const MODEL_API_CONFIG = {
  url: 'https://api.siliconflow.cn/v1/chat/compatibles',  // 你的 API 地址
  apiKey: 'sk-xxx',              // 你的 API Key
  model: 'Qwen/Qwen3-VL-32B-Instruct',
  systemPrompt: '...',           // 系统提示词已预设，按需调整
  timeout: 30000,
  useBase64: true,
}
```

填好后，`analyzePhoto` 函数会自动调用真实接口；未配置时回退到本地 mock，不影响开发调试。

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
