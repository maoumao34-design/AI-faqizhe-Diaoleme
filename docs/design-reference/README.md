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

## Notes For Implementation

- The current React demo already includes most desktop pages in `diaoleme/src/prototypeHtml.ts`.
- These references should be used to reduce the gap between the prototype implementation and the original Figma visual direction.
- Future agent tasks should review this folder before changing UI layout, colors, page structure, or interaction flow.
- Keep original PNGs in this folder as visual source-of-truth assets; use optimized runtime assets separately if the frontend needs production images.
