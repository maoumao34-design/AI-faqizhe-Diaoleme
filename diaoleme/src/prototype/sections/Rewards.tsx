export const rewardsSection = `<section class="page" data-page="rewards">
          <div class="rewards-dashboard">
            <main class="rewards-main">
              <section class="rewards-points-hero">
                <div class="rewards-points-copy">
                  <div class="rewards-points-copy-inner">
                    <span>我的积分</span>
                    <h2><span data-rewards-points></span><small>XP</small></h2>
                    <p data-rewards-next-level>距离下一等级还需 -- XP</p>
                    <div class="rewards-level-progress"><i data-rewards-level-fill style="width:0%"></i></div>
                  </div>
                </div>
                <div class="rewards-earn-card">
                  <h3>积分获取方式</h3>
                  <ul>
                    <li><img class="earn-icon" src="./rewards-assets/earn-task.png" alt=""><b>完成任务</b><strong>+2 ~ 35 XP</strong></li>
                    <li><img class="earn-icon" src="./rewards-assets/earn-checkin.png" alt=""><b>每日打卡</b><strong>+5 XP</strong></li>
                    <li><img class="earn-icon" src="./rewards-assets/earn-growth.png" alt=""><b>每日建议全完成</b><strong>+10 XP</strong></li>
                    <li><img class="earn-icon" src="./rewards-assets/earn-league.png" alt=""><b>参与联盟活动</b><strong>+100 ~ 500 XP</strong></li>
                  </ul>
                </div>
              </section>

              <section class="reward-market">
                <div class="market-toolbar">
                  <div class="category-tabs">
                    <button class="active" type="button">全部</button>
                    <button type="button">发型装扮</button>
                    <button type="button">护发好物</button>
                    <button type="button">陪伴道具</button>
                    <button type="button">成长特权</button>
                    <button type="button">定制周边</button>
                  </div>
                  <label class="sort-select"><select aria-label="奖励排序"><option>默认排序</option><option>积分从低到高</option><option>积分从高到低</option></select><span>⌄</span></label>
                </div>
                <div class="reward-grid" id="shop"></div>
              </section>

              <section class="growth-panel">
                <div class="growth-heading"><strong>成长等级奖励</strong><span>达到相应等级即可领取专属奖励</span></div>
                <div class="growth-carousel">
                  <button type="button" class="round-arrow" data-growth-scroll="-1" aria-label="上一页">‹</button>
                  <div class="growth-track" id="rewardsGrowth"></div>
                  <button type="button" class="round-arrow" data-growth-scroll="1" aria-label="下一页">›</button>
                </div>
              </section>
            </main>

            <aside class="rewards-right-rail">
              <section class="rewards-side-panel overview-panel">
                <div class="rewards-panel-heading">
                  <div>
                    <span class="panel-eyebrow">POINTS OVERVIEW</span>
                    <strong>积分总览</strong>
                  </div>
                  <b data-rewards-level-badge>Lv.1 成长中</b>
                </div>
                <div class="overview-content">
                  <div class="points-donut"><div><strong data-rewards-points></strong><span>总积分</span></div></div>
                  <ul class="legend"><li><i class="purple"></i><span>任务奖励</span><b>67%</b></li><li><i class="blue"></i><span>打卡奖励</span><b>18%</b></li><li><i class="orange"></i><span>活动奖励</span><b>10%</b></li><li><i class="gray"></i><span>其他</span><b>5%</b></li></ul>
                </div>
                <div class="overview-level-block">
                  <div class="overview-level-meta">
                    <span data-rewards-overview-next>距离下一等级还需 -- XP</span>
                    <span data-rewards-overview-ratio>-- / --</span>
                  </div>
                  <div class="overview-level-bar"><i data-rewards-overview-fill style="width:0%"></i></div>
                </div>
              </section>

              <section class="rewards-side-panel today-growth-panel">
                <div class="rewards-panel-heading">
                  <div>
                    <span class="panel-eyebrow">TODAY'S GROWTH</span>
                    <strong>今日成长</strong>
                  </div>
                  <b data-rewards-today-badge>3 / 5 已完成</b>
                </div>
                <div class="today-growth-stats">
                  <div><span>今日获得</span><strong data-rewards-today-xp>+5 XP</strong></div>
                  <div><span>完成任务</span><strong data-rewards-today-tasks>2 项</strong></div>
                  <div><span>专注效率</span><strong data-rewards-today-focus>80%</strong></div>
                </div>
                <div class="today-growth-list" id="rewardsTodayGrowth"></div>
              </section>

              <section class="rewards-side-panel checkin-panel">
                <div class="rewards-panel-heading"><div><strong>每日签到</strong><span>连续打卡可获得额外分哦！</span></div><b data-rewards-streak>已连续 0 天</b></div>
                <div class="checkin-week" id="rewardsCheckin"></div>
                <p data-rewards-checkin-hint>今日打卡可得 <b>+5 XP</b></p>
              </section>

              <section class="rewards-side-panel event-panel">
                <div class="rewards-panel-heading"><strong>限时活动</strong></div>
                <button type="button" class="event-banner"><img src="./rewards-assets/event-banner.png" alt="夏日养发计划"></button>
              </section>

              <section class="rewards-side-panel records-panel">
                <div class="rewards-panel-heading"><strong>兑换记录</strong></div>
                <div class="record-list" id="rewardsRecords"></div>
              </section>
            </aside>
          </div>
        </section>`
