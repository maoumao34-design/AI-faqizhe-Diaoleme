export const meSection = `<section class="page" data-page="me">
          <div class="me-shell">
            <header class="me-head">
              <div>
                <h1>我</h1>
                <p>每一根头发，都是生命力的见证 ✨</p>
              </div>
              <div class="me-head-actions">
                <button class="me-head-btn" type="button" data-action="me-edit-profile" aria-label="编辑资料">✎　编辑资料</button>
                <button class="me-head-btn" type="button" data-action="me-settings" aria-label="设置">⚙　设置</button>
                <span class="me-bell" aria-label="通知">🔔<i>1</i></span>
                <img class="shared-profile-avatar" src="./assets/shared-brand/brand-avatar-tile.png" alt="我的头像">
              </div>
            </header>

            <div class="me-layout">
              <div class="me-main">
                <section class="me-glass me-profile">
                  <div class="me-profile-banner" aria-hidden="true"></div>
                  <div class="me-profile-body">
                    <div class="me-avatar-wrap">
                      <img class="me-avatar" src="./assets/shared-brand/brand-avatar-tile.png" alt="小蒲公英">
                      <span class="me-avatar-edit" aria-hidden="true">✎</span>
                    </div>
                    <div class="me-profile-copy">
                      <div class="me-name-row">
                        <h2>小蒲公英</h2>
                        <span class="me-lv-pill" data-me-level-badge>Lv.5</span>
                      </div>
                      <span class="me-role-tag">头发健康守护者 🌱</span>
                      <p class="me-bio">爱生活，爱自己，正在成为更好的自己～</p>
                      <div class="me-meta-row">
                        <span>📅　加入时间 2024/05/12</span>
                        <span>📍　来自 星球 B-612</span>
                        <span>💜　能量口号 慢慢来，也挺好 🌈</span>
                      </div>
                    </div>
                  </div>
                </section>

                <section class="me-glass me-xp-card">
                  <span class="me-lv-hex" data-me-level-hex>Lv.5</span>
                  <div class="me-xp-track-wrap">
                    <div class="me-xp-labels">
                      <b data-me-xp-label>0 / 200 XP</b>
                      <span data-me-xp-need>还差 200 XP 升级</span>
                    </div>
                    <div class="me-xp-track"><i data-me-xp-fill style="width:0%"></i></div>
                  </div>
                  <button class="me-xp-reward" type="button" data-go="rewards">🎁　升级奖励</button>
                </section>

                <section class="me-glass me-data">
                  <h3>我的数据</h3>
                  <div class="me-data-grid">
                    <article class="me-data-card">
                      <i class="me-data-ico scan">▣</i>
                      <div>
                        <small>累计扫描</small>
                        <b><span data-me-scan-count>0</span> 次</b>
                        <em data-me-scan-delta>本月 +0 次</em>
                      </div>
                    </article>
                    <article class="me-data-card">
                      <i class="me-data-ico health">♡</i>
                      <div>
                        <small>平均健康分</small>
                        <b><span data-me-avg-score>—</span> 分</b>
                        <em data-me-score-delta>较上月 —</em>
                      </div>
                    </article>
                    <article class="me-data-card">
                      <i class="me-data-ico task">✎</i>
                      <div>
                        <small>任务完成</small>
                        <b><span data-me-task-count>0</span> 个</b>
                        <em data-me-task-delta>本月 +0 个</em>
                      </div>
                    </article>
                    <article class="me-data-card">
                      <i class="me-data-ico xp">★</i>
                      <div>
                        <small>累计 XP</small>
                        <b data-me-total-xp>0</b>
                        <em data-me-xp-delta>本月 +0</em>
                      </div>
                    </article>
                  </div>
                </section>

                <section class="me-glass me-unlocks">
                  <h3>最近解锁</h3>
                  <div class="me-unlock-grid">
                    <article class="me-unlock-card">
                      <img src="./rewards-assets/reward-flower.png" alt="樱花发箍">
                      <div><small>装扮</small><b>樱花发箍</b><em>Lv.3 解锁</em></div>
                    </article>
                    <article class="me-unlock-card">
                      <img src="./rewards-assets/reward-serum.png" alt="生发精华液">
                      <div><small>道具</small><b>生发精华液</b><em>Lv.5 解锁</em></div>
                    </article>
                    <article class="me-unlock-card">
                      <img src="./rewards-assets/reward-vip.png" alt="7天特权卡">
                      <div><small>特权</small><b>7天特权卡</b><em>Lv.4 解锁</em></div>
                    </article>
                  </div>
                </section>

                <section class="me-glass me-goals">
                  <h3>我的小目标</h3>
                  <div class="me-goal-grid">
                    <article class="me-goal-card">
                      <i>🌱</i>
                      <div>
                        <b>改善头皮环境</b>
                        <small>健康分达到 90 分</small>
                        <div class="me-goal-bar"><i style="width:91%"></i></div>
                        <em>82 / 90</em>
                      </div>
                    </article>
                    <article class="me-goal-card">
                      <i>🔥</i>
                      <div>
                        <b>坚持打卡</b>
                        <small>连续打卡 14 天</small>
                        <div class="me-goal-bar"><i data-me-goal-streak-fill style="width:50%"></i></div>
                        <em><span data-me-streak-count>7</span> / 14</em>
                      </div>
                    </article>
                    <article class="me-goal-card">
                      <i>🛡</i>
                      <div>
                        <b>养成好习惯</b>
                        <small>完成 20 个护发任务</small>
                        <div class="me-goal-bar"><i data-me-goal-task-fill style="width:90%"></i></div>
                        <em><span data-me-goal-task-num>18</span> / 20</em>
                      </div>
                    </article>
                    <button class="me-goal-add" type="button" data-action="me-add-goal">
                      <span>＋</span>
                      <b>添加新目标</b>
                      <small>为自己设定一个新目标吧</small>
                    </button>
                  </div>
                </section>
              </div>

              <aside class="me-side">
                <section class="me-glass me-buddy-card">
                  <h3>我的伙伴</h3>
                  <div class="me-buddy-body">
                    <img src="./assets/buddy/buddy-hero.png" alt="蒲蒲">
                    <div>
                      <b>蒲蒲</b>
                      <small data-me-buddy-days>陪伴我 0 天</small>
                      <em>状态：元气满满 ✨</em>
                    </div>
                    <button class="me-buddy-go" type="button" data-go="buddy">去看看 ›</button>
                  </div>
                </section>

                <section class="me-glass me-badges">
                  <div class="me-side-head">
                    <h3>我的成就</h3>
                    <button type="button" class="me-link" data-go="journey">全部成就 ›</button>
                  </div>
                  <div class="me-badge-row">
                    <div class="me-badge c1"><span>★</span><b>初识掉了么</b><small>完成首次扫描</small></div>
                    <div class="me-badge c2"><span>★</span><b>坚持打卡</b><small>连续打卡 7 天</small></div>
                    <div class="me-badge c3"><span>★</span><b>头皮守护者</b><small>累计健康分 500+</small></div>
                    <div class="me-badge c4"><span>★</span><b>成长见证</b><small>完成 10 个任务</small></div>
                    <div class="me-badge c5"><span>★</span><b>分享达人</b><small>分享 5 次</small></div>
                  </div>
                </section>

                <section class="me-glass me-calendar-card">
                  <div class="me-side-head">
                    <h3>本月打卡日历</h3>
                    <span data-me-streak>已连续打卡 0 天</span>
                  </div>
                  <div class="me-cal-week"><span>一</span><span>二</span><span>三</span><span>四</span><span>五</span><span>六</span><span>日</span></div>
                  <div class="me-cal-grid" id="meCalendar" data-me-calendar></div>
                </section>

                <section class="me-glass me-settings item-list">
                  <button class="item" type="button" data-action="me-notify"><span>🔔</span><b>通知设置</b><span>›</span></button>
                  <button class="item" type="button" data-action="me-privacy"><span>🛡</span><b>隐私设置</b><span>›</span></button>
                  <button class="item" type="button" data-action="me-help"><span>💬</span><b>帮助与反馈</b><span>›</span></button>
                  <button class="item" type="button" data-action="reset-progress"><span>ℹ️</span><b>关于掉了么</b><span>›</span></button>
                </section>
              </aside>
            </div>
          </div>
        </section>`
