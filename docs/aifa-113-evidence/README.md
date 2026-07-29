# AIFA-113 Diary 视觉对齐证据

- 对照：`docs/design-reference/` 12 + 18
- Live bundle：`index-CkR7gIQh.js`
- Pages：https://maoumao34-design.github.io/AI-faqizhe-Diaoleme/ （aihpj 同步）
- PR：https://github.com/maoumao34-design/AI-faqizhe-Diaoleme/pull/166

## 本地自验（清空 history）

- [diary-full.png](./diary-full.png) / [diary-shell.png](./diary-shell.png)
- [diary-hero.png](./diary-hero.png) — 日落横幅 + 角色，height 290，无旧 `.hero` 盖回
- [diary-content.png](./diary-content.png) — 日历心情点 + 筛选 SVG + 甜甜圈 + 5 条 demo 列表
- [diary-side.png](./diary-side.png) — 趋势 Y 轴 / 关键词「护理」最大 / 回忆精选

## 现网硬刷（maoumao34）

- [live-diary-full.png](./live-diary-full.png)
- [live-diary-shell.png](./live-diary-shell.png)
- [live-diary-hero.png](./live-diary-hero.png)
- [live-diary-content.png](./live-diary-content.png)

## 修复摘要

1. 去掉 Diary `card hero`，避免 PrototypeStyle 旧皮盖回横幅
2. 停止 PrototypeScript 覆盖 `#calendar`
3. 无 Scan 历史时保留 design-ref demo；有历史时水合日历/列表/分布
4. 心情筛选 SVG、日历点、列表心情标签、趋势轴对齐 12+18
