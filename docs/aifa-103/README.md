# AIFA-103 Home 回退修复证据

## 根因
1. `finalPages.css` 顶部从 scan-page 合入的 `!important` 布局覆盖了 `body.reference-home`，打坏 Home 的 final-pages 画布/草地场景。
2. `renderHome` 水合把 Buddy 徽章写成 live XP、用建议文案覆盖 Quests，看起来像旧皮。
3. CSS 里 `url("./assets/...")` 在 Vite 产出到 `dist/assets/` 后解析成 `assets/assets/...`，草地背景 404。

## 修复
- 去掉对 `reference-home` 的早期 !important 覆盖；锁定 hero-mascot / 隐藏 buddy-stage
- `renderHome` 只更新 `[data-home-*]`，不再覆盖 quests/leaders/badge
- 导航点击统一走 `navigation.showPage`（保证 body class）
- CSS 资源路径改为相对 `dist/assets/`（`./generated/...`）
- Me 换成 `me-shell` 新皮；League/Rewards 未改

## 截图
- `live-home-before.png` — 现网回退态参考
- `after-home-1920.png` / `after-home-1440.png` — 修复后 Home
- `after-diary.png` / `after-community.png` / `after-scan.png` / `after-me.png` — 新皮自检
- `final-pages-home-1920.png` — docs/final-pages 对照
