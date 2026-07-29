# AIFA-114 Me 视觉对齐证据

对照：`docs/design-reference/images/14-desktop-me-profile.png`

## 本轮范围（可简化）

对齐主结构，不做账户体系：

- 页头「我」+ 文案 + 编辑/设置入口（演示 toast）
- 左栏：资料横幅 / XP 进度 / 我的数据 / 最近解锁 / 我的小目标
- 右栏：我的伙伴 / 成就徽章 / 打卡日历 / 快捷设置
- **未做**「我的收藏」文章卡：缺少 Me 专用文章缩略图素材（勿瞎造），见下方澄清

## 本地验收

- Bundle：`index-D1d0uC8q.js` + `index-R_oGqsss.css`
- 截图：`me-viewport.png` / `me-full.png` / `me-profile.png` / `me-data.png` / `me-side.png` / `me-goals.png`
- 对照缩略：`design-ref-14-overview.png`
- 度量：`measure.json`（双栏、无横向溢出；League/Rewards smoke OK）

## [需澄清]

设计稿「我的收藏」三张文章缩略图暂无仓库素材。是否：

A) 后续补 asset 再加该区块  
B) 允许用现有 Diary/Scan 样图占位  
C) demo 阶段永久省略

成就徽章目前为 CSS 六边形 + 星标，非设计系统切图（仓库无 Me 成就切图）。


## Live Pages

- URL: https://maoumao34-design.github.io/AI-faqizhe-Diaoleme/
- Bundle: `index-D1d0uC8q.js` + `index-R_oGqsss.css`
- Screenshots: `live-me-viewport.png` / `live-me-full.png`
- 未推 aihpj Pages（保留 108/112/113/115 合并包）
