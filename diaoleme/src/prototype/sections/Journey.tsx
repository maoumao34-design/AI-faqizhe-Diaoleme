export const journeySection = `<section class="page" data-page="journey">
          <div class="journey-shell">
            <header class="journey-head"><div><h1>My Journey ✦</h1><p>每一步成长，都值得被记录 ✨</p></div><div class="journey-head-actions"><button class="journey-share" data-action="journey-share">⇪　分享我的旅程</button><span class="journey-bell" aria-label="通知">🔔<i>1</i></span><img src="./assets/shared-brand/brand-avatar-tile.png" alt="我的头像"></div></header>
            <div class="journey-layout">
              <div class="journey-main">
                <section class="journey-glass milestone-hero-new">
                  <div class="milestone-copy"><h2>见证成长的每一步 🌱</h2><p>你的每一个好习惯，都会让小发球变得更强壮，<br>让我们一起继续前进吧！</p></div>
                  <svg class="milestone-curve-svg" viewBox="0 0 1146 150" preserveAspectRatio="none"><path d="M0 110 C150 150 210 42 340 62 S540 122 675 72 S850 104 980 60 S1080 28 1146 40" fill="none" stroke="#a483f1" stroke-width="3" stroke-dasharray="7 6" opacity=".72"/></svg>
                  <div class="milestone-nodes-new" id="milestones">
                    <div class="milestone-node"><img src="./assets/journey/icons/milestone-flag.svg" alt=""><b>开始记录</b><small>5/1</small></div>
                    <div class="milestone-node"><img src="./assets/journey/icons/milestone-sprout.svg" alt=""><b>坚持打卡</b><small>5/4</small></div>
                    <div class="milestone-node"><img src="./assets/journey/icons/milestone-task.svg" alt=""><b>完成任务</b><small>5/7</small></div>
                    <div class="milestone-node"><img src="./assets/journey/icons/milestone-drop.svg" alt=""><b>头皮改善</b><small>5/18</small></div>
                    <div class="milestone-node active"><img src="./assets/journey/icons/milestone-scissors.svg" alt=""><b>解锁新发型</b><small>5/24</small></div>
                    <div class="milestone-node"><img src="./assets/journey/icons/milestone-heart.svg" alt=""><b>持续成长中</b><small>未来可期</small></div>
                  </div>
                </section>
                <section class="journey-glass journey-timeline"><h2>我的旅程时间线　<small>全部事件⌄</small></h2><div class="timeline-list-new" id="timeline">
                  <article class="timeline-row-new"><div class="timeline-date"><b>5/18</b><small>周六 10:30</small></div><img src="./assets/journey/icons/timeline-health.svg" alt=""><div class="timeline-copy"><b>头皮健康评分提升</b><small>你的头皮健康评分从 72 提升到 82，继续保持哦！</small></div><span class="timeline-reward green">+10 健康分</span></article>
                  <article class="timeline-row-new"><div class="timeline-date"><b>5/15</b><small>周三 21:45</small></div><img src="./assets/journey/icons/timeline-moon.svg" alt=""><div class="timeline-copy"><b>早睡打卡</b><small>你在 22:30 前入睡，睡眠质量很棒！</small></div><span class="timeline-reward">+60 XP</span></article>
                  <article class="timeline-row-new selected"><div class="timeline-date"><b>5/12</b><small>周日 09:20</small></div><img src="./assets/journey/icons/timeline-streak.svg" alt=""><div class="timeline-copy"><b>连续打卡 7 天</b><small>太棒了！你已经连续 7 天坚持记录和护理！</small></div><span class="timeline-reward">+200 XP</span></article>
                  <article class="timeline-row-new"><div class="timeline-date"><b>5/10</b><small>周五 14:15</small></div><img src="./assets/journey/icons/timeline-food.svg" alt=""><div class="timeline-copy"><b>健康饮食</b><small>你记录了健康餐饮，营养均衡，头发需要的能量满满！</small></div><span class="timeline-reward">+40 XP</span></article>
                  <article class="timeline-row-new"><div class="timeline-date"><b>5/8</b><small>周三 19:30</small></div><img src="./assets/journey/icons/timeline-exercise.svg" alt=""><div class="timeline-copy"><b>运动 20 分钟</b><small>运动可以促进血液循环，头发会更健康哦！</small></div><span class="timeline-reward">+50 XP</span></article>
                  <article class="timeline-row-new"><div class="timeline-date"><b>5/7</b><small>周二 16:05</small></div><img src="./assets/journey/icons/milestone-task.svg" alt=""><div class="timeline-copy"><b>完成第一个任务</b><small>你完成了“头皮按摩 5 分钟”任务，真棒！</small></div><span class="timeline-reward">+100 XP</span></article>
                </div><button class="load-more">加载更多　⌄</button></section>
              </div>
              <aside class="journey-side">
                <nav class="period-switch"><button class="active">This Month</button><button>All Time</button></nav>
                <section class="journey-glass journey-side-card journey-summary-new"><h2>旅程总览</h2><div class="journey-metrics"><div><i>📅</i><strong>32</strong><small>记录天数</small></div><div><i>⭐</i><strong>1,620</strong><small>总 XP</small></div><div><i>🔥</i><strong>12</strong><small>连续天数</small></div></div></section>
                <section class="journey-glass journey-side-card mood-card"><h2>心情轨迹　<small>更多分析 ›</small></h2>
                  <div class="mood-chart-wrap">
                    <div class="mood-chart-emojis" aria-hidden="true"><span>😄</span><span>😊</span><span>😐</span><span>😔</span><span>😢</span></div>
                    <svg class="mood-chart-svg" viewBox="0 0 410 145"><defs><linearGradient id="moodArea" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#9e74f1" stop-opacity=".28"/><stop offset="1" stop-color="#9e74f1" stop-opacity="0"/></linearGradient></defs><path d="M10 102 C40 96 55 44 85 70 S120 112 147 87 S175 52 207 72 S235 105 260 79 S305 68 330 76 S360 30 400 42 L400 135 L10 135Z" fill="url(#moodArea)"/><path d="M10 102 C40 96 55 44 85 70 S120 112 147 87 S175 52 207 72 S235 105 260 79 S305 68 330 76 S360 30 400 42" fill="none" stroke="#8b64eb" stroke-width="3"/><circle cx="330" cy="76" r="6" fill="#fff" stroke="#8b64eb" stroke-width="3"/></svg>
                    <div class="mood-tooltip">5/18 心情很好 😊</div>
                    <div class="mood-chart-dates" aria-hidden="true"><span>5/1</span><span>5/5</span><span>5/10</span><span>5/15</span><span>5/20</span></div>
                  </div>
                </section>
                <section class="journey-glass journey-side-card highlights-card-new"><h2>本月高光时刻　<small>查看全部 ›</small></h2><div class="highlight-row"><img src="./assets/shared-brand/brand-avatar-tile.png" alt=""><div><small>5/12</small><b>连续打卡 7 天</b><span>坚持就是胜利！你做到了！</span></div></div><div class="highlight-row"><img src="./assets/shared-brand/brand-avatar-tile.png" alt=""><div><small>5/18</small><b>健康评分提升</b><span>头皮状态越来越好啦！</span></div></div><div class="highlight-row"><img src="./assets/buddy/hairstyles/blue-bob.png" alt=""><div><small>5/24</small><b>解锁新发型</b><span>恭喜解锁「星光短发」！</span></div></div></section>
                <section class="journey-glass journey-side-card quote-card-new"><h2>旅程感悟</h2><p>“每一次小小的坚持，都是在为未来的自己种下一颗生命的种子。”<br><br>— 小发球 💜</p><img src="./assets/buddy/buddy-hero.png" alt=""></section>
              </aside>
            </div>
          </div>
        </section>`
