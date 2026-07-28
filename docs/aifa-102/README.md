# AIFA-102 Community 栏间多余贴图

## 原因

`App.tsx` 内联样式把 `.community-post` 第三列锁成 `90px`，多图帖（Scan 样例 / Buddy 发型）溢出到 feed 与 rail 之间的 gutter，看起来像错位多余贴图。

## 修复

对齐 `docs/final-pages`：第三列改为 `auto`，媒体保留在帖卡内。

## 证据

- `before-bug.png` — 人类反馈截图（栏间溢出）
- `after-community-top.png` / `after-community-bottom.png` — 本地 1440×900 修复后
- `metrics.json` — `overflowCount: 0`（媒体均不在 gutter）
