# Diaoleme Design Reference

This directory keeps the original visual references for the Diaoleme demo. The images were exported from the early Figma design and are used as implementation references for aligning the React prototype with the intended visual direction.

> 中文说明：这里保存「掉了么 Diaoleme」初期设计图，作为后续实现 Demo 时对齐视觉、页面结构和交互模块的参考。

## Image Index

| File | Chinese Description | Related Implementation |
|---|---|---|
| [`00-product-overview-poster.png`](images/00-product-overview-poster.png) | 产品总览海报 / 功能板：品牌、用户旅程、AI 扫描、成长报告、任务、奖励、AI Agent 等全功能概览 | Overall product concept |
| [`01-desktop-home-dashboard.png`](images/01-desktop-home-dashboard.png) | 桌面端首页 Dashboard：主视觉、毛发伙伴、今日报告、任务、成长旅程、排行榜 | `diaoleme/src/prototypeHtml.ts` home page |
| [`02-visual-background-meadow.png`](images/02-visual-background-meadow.png) | 纯场景背景图：天空、草坡、蒲公英氛围，无角色 | Global visual/background asset |
| [`03-visual-hero-buddy-meadow.png`](images/03-visual-hero-buddy-meadow.png) | 品牌主视觉 KV：蒲公英伙伴坐在草坡上的治愈场景 | Home hero / mascot visual reference |
| [`04-desktop-all-pages-board.png`](images/04-desktop-all-pages-board.png) | 桌面端全页面设计总览：Home、Scan、Buddy、Quests、Journey、League、Rewards、Diary、Community | Full desktop page overview |
| [`05-mobile-buddy-profile.png`](images/05-mobile-buddy-profile.png) | 移动端 My Buddy / 伙伴详情页：角色状态、亲密度、能量、心情、发型解锁、伙伴功能入口 | Mobile Buddy / Me / Hairstyle reference |
| [`06-desktop-buddy-profile.png`](images/06-desktop-buddy-profile.png) | 桌面端 Buddy 伙伴页：大角色展示、状态条、发型解锁、今日报告、伙伴功能入口 | `diaoleme/src/prototypeHtml.ts` buddy page |
| [`07-desktop-scan-analysis.png`](images/07-desktop-scan-analysis.png) | 桌面端 AI 扫描页：上传/拍照扫描、扫描引导、扫描结果、历史记录和数据统计 | `diaoleme/src/prototypeHtml.ts` scan page; `Scan.tsx`; `Report.tsx` |
| [`08-desktop-page-gallery.png`](images/08-desktop-page-gallery.png) | 桌面端页面缩略总览：多页面缩略图网格，可作为设计系统/页面索引 | Full prototype page gallery |
| [`09-desktop-quests-tasks.png`](images/09-desktop-quests-tasks.png) | 桌面端 Quests / 任务页：每日任务、打卡、任务进度、连续打卡、任务小贴士 | `diaoleme/src/prototypeHtml.ts` quests page; `Tasks.tsx` |
| [`10-desktop-league-leaderboard.png`](images/10-desktop-league-leaderboard.png) | 桌面端 League / 排行榜页：赛季、联盟、好友排行、联盟战、排名信息 | `diaoleme/src/prototypeHtml.ts` league page |
| [`11-desktop-rewards-shop.png`](images/11-desktop-rewards-shop.png) | 桌面端 Rewards / 奖励商城页：积分、商品兑换、签到、兑换记录 | `diaoleme/src/prototypeHtml.ts` rewards page |
| [`12-desktop-diary-journal.png`](images/12-desktop-diary-journal.png) | 桌面端 Diary / 日记页：日历、心情趋势、日记列表、关键词、回忆精选 | `diaoleme/src/prototypeHtml.ts` diary page |
| [`13-desktop-community-feed.png`](images/13-desktop-community-feed.png) | 桌面端 Community / 社区页：故事分享、帖子流、热门话题、社区活动、推荐小组 | `diaoleme/src/prototypeHtml.ts` community page |
| [`14-desktop-me-profile.png`](images/14-desktop-me-profile.png) | 桌面端 Me / 个人主页：用户资料、积分/等级、徽章、兑换/收藏/个人数据、日历记录 | `Me.tsx` and future profile page reference |
| [`15-design-system-components-v2.png`](images/15-design-system-components-v2.png) | 更新版设计系统组件总览：IP 形象、背景/装饰、侧边栏图标、顶部按钮、主标题文案、CTA、小组件卡片、进度条、勋章、状态指示等通用 UI 资产 | Global design system / reusable UI components reference |
| [`16-visual-hero-buddy-camera.png`](images/16-visual-hero-buddy-camera.png) | 品牌主视觉插画：蒲公英伙伴手持相机，搭配粉紫天空、云朵与飞舞蒲公英种子的治愈背景 | Hero illustration / scan page mascot visual |
| [`17-asset-overview-characters-icons.png`](images/17-asset-overview-characters-icons.png) | 综合视觉资产板：角色头像/坐姿、花草背景、待解锁伙伴剪影、功能图标、趋势图、花朵与蒲公英装饰元素 | Shared character, icon, decoration, and chart assets |
| [`18-diary-design-system-components.png`](images/18-diary-design-system-components.png) | Diary 日记页组件规范：日记 IP 形象、横幅场景、心情筛选、月历、日记列表、内容缩略图、心情趋势、关键词统计与底部元素 | Diary page component reference |
| [`19-journey-design-system-components.png`](images/19-journey-design-system-components.png) | Journey 旅程页组件规范：旅程角色、花草/天空场景、成长路径节点、里程碑图标、时间线、奖励状态、统计卡与分享元素 | Journey page component reference |
| [`20-rewards-design-system-components.png`](images/20-rewards-design-system-components.png) | Rewards 奖励页组件规范：奖励角色、可兑换发型、实体护理商品、陪伴道具、商品卡状态、积分组件、签到、成长等级奖励与顶部元素 | Rewards page component reference |
| [`21-league-design-system-components.png`](images/21-league-design-system-components.png) | League 联盟页组件规范：联赛角色、领奖台、段位盾牌、联盟徽章、排名奖牌、荣誉徽章、倒计时、筛选排行与对战进度组件 | League page component reference |
| [`22-community-design-system-components.png`](images/22-community-design-system-components.png) | Community 社区页组件规范：社区角色、横幅场景、用户头像组、互动图标、内容缩略图、话题筛选、活动卡、推荐小组与排行榜元素 | Community page component reference |
| [`23-quests-design-system-components.png`](images/23-quests-design-system-components.png) | Quests 任务页组件规范：任务角色、场景装饰、每日活跃奖励、任务类型图标、进度状态、连续打卡、奖励图表、标签按钮与新增侧边栏图标 | Quests page component reference |
| [`24-scan-design-system-components.png`](images/24-scan-design-system-components.png) | Scan 扫描页组件规范：拍照/扫描角色、蒲公英装饰、扫描进度环、扫描条件提示、示例记录素材、功能图标、侧边栏图标与扫描入口卡片 | Scan page component reference |
| [`25-buddy-design-system-components.png`](images/25-buddy-design-system-components.png) | Buddy 伙伴页组件规范：伙伴角色、主场景元素、已解锁/待解锁发型、生命/能量/心情状态、伙伴功能入口、发型操作、导航与植物装饰 | Buddy page component reference |
| [`26-visual-buddy-sitting-transparent.png`](images/26-visual-buddy-sitting-transparent.png) | 透明背景角色素材：橙色服装蒲公英伙伴坐姿，可用于 Buddy、Home、卡片插画或空状态 | Mascot transparent character asset |
| [`27-visual-background-meadow-wide.png`](images/27-visual-background-meadow-wide.png) | 宽幅纯场景背景：粉紫天空、云朵、草坡、花朵与蒲公英种子，无角色 | Wide global background / hero backdrop asset |
| [`28-desktop-scan-page-updated.png`](images/28-desktop-scan-page-updated.png) | 更新版桌面端 Scan 扫描页：侧边栏导航、扫描进度环、拍照/相册上传入口、扫描条件说明、周扫描数据、贴士与历史记录 | Updated desktop scan page reference |

## Notes For Implementation

- The current React demo already includes most desktop pages in `diaoleme/src/prototypeHtml.ts`.
- These references should be used to reduce the gap between the prototype implementation and the original Figma visual direction.
- Future agent tasks should review this folder before changing UI layout, colors, page structure, or interaction flow.
- Keep original PNGs in this folder as visual source-of-truth assets; use optimized runtime assets separately if the frontend needs production images.
