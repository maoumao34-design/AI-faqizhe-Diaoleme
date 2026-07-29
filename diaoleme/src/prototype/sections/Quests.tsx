export const questsSection = `<section class="page" data-page="quests">
          <div class="quest-shell">
            <header class="quest-head">
              <div><h1>Quests ✦</h1><p>完成护发任务，获得经验值和能量，解锁更多奖励！</p></div>
              <div class="quest-head-actions"><button class="quest-guide">ⓘ　任务指南</button><span>♧</span><img src="./assets/shared-brand/brand-avatar-tile.png" alt="我的头像"></div>
            </header>
            <div class="quest-layout">
              <div class="quest-main">
                <section class="quest-card reward-card">
                  <h2>今日活跃奖励</h2><p>完成今日任务，领取额外奖励！</p>
                  <div class="reward-days" id="weekRewards">
                    <button class="reward-day"><b>一</b><i>✓</i><strong>已领取</strong><small>+10 XP</small></button>
                    <button class="reward-day"><b>二</b><i>✓</i><strong>已领取</strong><small>+10 XP</small></button>
                    <button class="reward-day active"><b>三</b><i>☯</i><strong style="color:#8257e8">今天</strong><small>+15 XP</small></button>
                    <button class="reward-day"><b>四</b><i>⚡</i><span>+15 XP</span></button>
                    <button class="reward-day"><b>五</b><i>♥</i><span>+20 XP</span></button>
                    <button class="reward-day"><b>六</b><i>🎁</i><span>+20 XP</span></button>
                    <button class="reward-day"><b>日</b><i>☀</i><span>+25 XP</span></button>
                  </div>
                  <img class="reward-mascot" src="./assets/quests/reward-standing-mascot.png" alt="今日奖励伙伴">
                </section>
                <nav class="quest-tabs-new" role="tablist" aria-label="任务分类"><button type="button" class="quest-tab is-active" data-quest-category="daily">每日任务</button><button type="button" class="quest-tab" data-quest-category="weekly">每周任务</button><button type="button" class="quest-tab" data-quest-category="growth">成长任务</button><button type="button" class="quest-tab" data-quest-category="special">特别任务</button></nav>
                <section class="quest-list-new" id="questList">
                  <article class="quest-row"><img src="./assets/quests/icons/water.svg" alt=""><div class="quest-copy"><b>喝够 8 杯水</b><small>充足的水分让头发更健康</small></div><div class="quest-progress"><span class="quest-count">6/8</span><div class="quest-meter"><i style="width:75%"></i></div></div><span class="quest-xp">+50 XP</span><button class="quest-do" data-quest-action>去完成</button></article>
                  <article class="quest-row"><img src="./assets/quests/icons/sleep.svg" alt=""><div class="quest-copy"><b>23:30 前睡觉</b><small>早睡是头发的修复时间</small></div><div class="quest-progress"><span class="quest-count">0/1</span><div class="quest-meter"><i style="width:0"></i></div></div><span class="quest-xp">+60 XP</span><button class="quest-do" data-quest-action>去完成</button></article>
                  <article class="quest-row"><img src="./assets/quests/icons/meal.svg" alt=""><div class="quest-copy"><b>吃一份蔬果</b><small>补充维生素，滋养发根</small></div><div class="quest-progress"><span class="quest-count">1/1</span><div class="quest-meter"><i style="width:100%"></i></div></div><span class="quest-xp"></span><button class="quest-do done">✓ 已完成</button></article>
                  <article class="quest-row"><img src="./assets/quests/icons/massage.svg" alt=""><div class="quest-copy"><b>头皮按摩 5 分钟</b><small>促进头皮血液循环</small></div><div class="quest-progress"><span class="quest-count">2/5</span><div class="quest-meter"><i style="width:40%"></i></div></div><span class="quest-xp">+50 XP</span><button class="quest-do" data-quest-action>去完成</button></article>
                  <article class="quest-row"><img src="./assets/quests/icons/walk.svg" alt=""><div class="quest-copy"><b>散步 20 分钟</b><small>运动让身体和头发一起呼吸</small></div><div class="quest-progress"><span class="quest-count">1/1</span><div class="quest-meter"><i style="width:100%"></i></div></div><span class="quest-xp"></span><button class="quest-do done">✓ 已完成</button></article>
                </section>
              </div>
              <aside class="quest-side">
                <section class="quest-card progress-card-new card"><h2>我的任务进度</h2><div class="progress-content"><div><p>本周完成度</p><strong class="progress-big">78%</strong><div class="progress-line"><i></i></div><p>完成 11/14 个任务</p></div><div class="progress-ring"><img src="./assets/quests/reward-standing-mascot.png" alt=""></div></div></section>
                <section class="quest-card streak-card-new card"><div class="streak-top"><div><h2>连续打卡</h2><p>去 Rewards「每日签到」可点亮今天</p><strong data-quests-streak-days>7 <small>天</small></strong></div></div><img class="streak-mascot" src="./assets/quests/tip-sitting-mascot.png" alt=""><div class="streak-week" id="streak"><span class="pending"><b>🍬</b><small>一</small></span><span class="pending"><b>🧁</b><small>二</small></span><span class="pending"><b>🍪</b><small>三</small></span><span class="pending"><b>🍩</b><small>四</small></span><span class="pending"><b>🍦</b><small>五</small></span><span class="pending"><b>🍰</b><small>六</small></span><span class="gift"><b>🎁</b><small>日</small></span></div></section>
                <section class="quest-card tip-card-new card"><h2>任务小贴士</h2><p class="tip-lead"><b>定期护理 + 健康生活习惯 = 健康的头发！</b></p><p class="tip-body">保持好心情，规律作息，均衡饮食，<br>你的头发会越来越喜欢你哦～</p><img class="tip-mascot" src="./assets/quests/tip-sitting-mascot.png" alt=""></section>
                <section class="quest-card overview-card-new card"><h2>本周任务总览</h2><div class="overview"><div class="quest-donut" data-total="14"></div><ul><li><span><i class="dot done"></i> 已完成</span><b>11 (79%)</b></li><li><span><i class="dot progress"></i> 进行中</span><b>2 (14%)</b></li><li><span><i class="dot todo"></i> 未开始</span><b>1 (7%)</b></li></ul></div></section>
              </aside>
            </div>
          </div>
        </section>`
