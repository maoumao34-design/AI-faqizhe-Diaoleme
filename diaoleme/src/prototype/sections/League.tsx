export const leagueSection = `<section class="page" data-page="league">
          <div class="grid two-col">
            <div class="grid">
              <section class="league-season-hero">
                <img class="league-hero-bg" src="./league-assets/new_sky_and_flower_bg.png" alt="" aria-hidden="true">
                <div class="league-hero-copy">
                  <span class="league-season-kicker">本赛季</span>
                  <h2>春风吹发季 🌸</h2>
                  <p class="league-season-range"><span data-league-season-range>8.1 - 8.31</span> <small aria-label="赛季说明">ⓘ</small></p>
                  <small class="league-countdown-label">赛季结束倒计时</small>
                  <div class="league-countdown" data-league-countdown aria-live="polite">
                    <div class="league-flip-unit">
                      <div class="league-flip-card" data-unit="days" aria-label="剩余天数">
                        <div class="league-page-stack" aria-hidden="true"></div>
                        <div class="league-flip-shell">
                          <div class="league-half league-top league-static-top"><span>00</span></div>
                          <div class="league-half league-bottom league-static-bottom"><span>00</span></div>
                          <div class="league-half league-top league-flip-top"><span>00</span></div>
                          <div class="league-half league-bottom league-flip-bottom"><span>00</span></div>
                          <div class="league-hinge" aria-hidden="true"></div>
                        </div>
                      </div>
                      <span class="league-flip-label">天</span>
                    </div>
                    <div class="league-flip-unit">
                      <div class="league-flip-card" data-unit="hours" aria-label="剩余小时">
                        <div class="league-page-stack" aria-hidden="true"></div>
                        <div class="league-flip-shell">
                          <div class="league-half league-top league-static-top"><span>00</span></div>
                          <div class="league-half league-bottom league-static-bottom"><span>00</span></div>
                          <div class="league-half league-top league-flip-top"><span>00</span></div>
                          <div class="league-half league-bottom league-flip-bottom"><span>00</span></div>
                          <div class="league-hinge" aria-hidden="true"></div>
                        </div>
                      </div>
                      <span class="league-flip-label">时</span>
                    </div>
                    <div class="league-flip-unit">
                      <div class="league-flip-card" data-unit="minutes" aria-label="剩余分钟">
                        <div class="league-page-stack" aria-hidden="true"></div>
                        <div class="league-flip-shell">
                          <div class="league-half league-top league-static-top"><span>00</span></div>
                          <div class="league-half league-bottom league-static-bottom"><span>00</span></div>
                          <div class="league-half league-top league-flip-top"><span>00</span></div>
                          <div class="league-half league-bottom league-flip-bottom"><span>00</span></div>
                          <div class="league-hinge" aria-hidden="true"></div>
                        </div>
                      </div>
                      <span class="league-flip-label">分</span>
                    </div>
                    <div class="league-flip-unit">
                      <div class="league-flip-card" data-unit="seconds" aria-label="剩余秒数">
                        <div class="league-page-stack" aria-hidden="true"></div>
                        <div class="league-flip-shell">
                          <div class="league-half league-top league-static-top"><span>00</span></div>
                          <div class="league-half league-bottom league-static-bottom"><span>00</span></div>
                          <div class="league-half league-top league-flip-top"><span>00</span></div>
                          <div class="league-half league-bottom league-flip-bottom"><span>00</span></div>
                          <div class="league-hinge" aria-hidden="true"></div>
                        </div>
                      </div>
                      <span class="league-flip-label">秒</span>
                    </div>
                  </div>
                </div>
                <div class="league-hero-characters" aria-label="赛季前三名">
                  <div class="podium second">
                    <img class="podium-char" src="./league-assets/champion-2.png" alt="亚军">
                    <img class="podium-base" src="./league-assets/podium-2.png" alt="">
                  </div>
                  <div class="podium first">
                    <img class="podium-char" src="./league-assets/champion-1.png" alt="冠军">
                    <img class="podium-base" src="./league-assets/podium-1.png" alt="">
                  </div>
                  <div class="podium third">
                    <img class="podium-char" src="./league-assets/champion-3.png" alt="季军">
                    <img class="podium-base" src="./league-assets/podium-3.png" alt="">
                  </div>
                </div>
                <div class="league-hero-rank">
                  <button type="button" class="league-season-reward-btn" data-league-season-reward aria-expanded="false" aria-controls="leagueSeasonRewardPanel">🎁 赛季奖励预览</button>
                  <div class="league-season-reward-panel" id="leagueSeasonRewardPanel" data-league-season-reward-panel hidden>
                    <button type="button" class="league-season-reward-close" data-league-season-reward-close aria-label="关闭">×</button>
                    <div class="league-season-reward-card">
                      <img src="./rewards-assets/reward-sprout.png" alt="嫩芽发型" width="96" height="96">
                      <b>嫩芽发型</b>
                      <small>发型装扮 · 赛季限定奖励</small>
                      <p>完成本赛季（8.1 – 8.31）段位目标后可领取，先预览一下～</p>
                    </div>
                  </div>
                  <span>我的段位</span>
                  <img class="league-hero-badge" data-league-tier-badge src="./league-assets/shield-bronze.png" alt="段位徽章">
                  <b data-league-tier-name>青铜</b>
                  <small data-league-tier-progress>⭐ 0 / 1000</small>
                  <div class="league-hero-progress"><i data-league-tier-fill style="width:0%"></i></div>
                </div>
              </section>
              <section class="rank-area">
                <div class="rank-toolbar">
                  <div class="rank-tabs">
                    <button class="active" type="button" data-league-tab="排行榜">排行榜</button>
                    <button type="button" data-league-tab="我的联盟">我的联盟</button>
                    <button type="button" data-league-tab="好友排行">好友排行</button>
                    <button type="button" data-league-tab="段位晋升">段位晋升</button>
                  </div>
                  <label><span>◎</span><select aria-label="排行榜区域"><option selected>全球</option><option>亚洲</option><option>北美</option><option>欧洲</option></select></label>
                </div>
                <div id="leagueRankContent"></div>
              </section>
            </div>
            <aside class="league-right-rail">
              <section class="league-side-panel alliance-panel">
                <div class="league-panel-title"><strong>我的联盟</strong><button type="button">查看详情 ›</button></div>
                <div class="league-alliance-main"><img class="league-shield-placeholder" src="./league-assets/badge-ally.png" alt="联盟徽章"><div><b>蒲公英小分队 <em data-league-alliance-level>Lv.6</em></b></div></div>
                <div class="league-alliance-stats"><div><span>成员</span><b data-league-alliance-members>28 / 30</b></div><div><span>本周贡献</span><b data-league-my-contrib>0 XP</b></div></div>
                <div class="league-purple-progress"><i data-league-alliance-fill style="width:0%"></i></div><small class="league-center-note" data-league-alliance-note>距离下一等级还需 -- XP</small>
              </section>
              <section class="league-side-panel announcement-panel">
                <div class="league-panel-title"><strong>联盟公告</strong><button type="button">更多 ›</button></div>
                <button class="league-announcement" type="button"><span>• 本周联盟任务已更新，快来完成吧！</span><time>08-18</time></button>
                <button class="league-announcement" type="button"><span>• 联盟战即将开始，准备好了吗？</span><time>08-17</time></button>
                <button class="league-announcement" type="button"><span>• 欢迎新成员加入蒲公英小分队～</span><time>08-15</time></button>
              </section>
              <section class="league-side-panel battle-panel">
                <div class="league-panel-title"><strong>本周联盟战 <span class="league-live">进行中</span></strong></div>
                <div class="league-battle-grid">
                  <div><img class="league-battle-badge" src="./league-assets/badge-ally-sm.png" alt="我方"><b data-league-ally-name>蒲公英小分队</b><strong data-league-ally-xp>15,680</strong></div>
                  <img class="league-vs" src="./league-assets/vs-mark.png" alt="VS">
                  <div><img class="league-battle-badge" src="./league-assets/badge-enemy-sm.png" alt="对手"><b data-league-enemy-name>发光小队</b><strong data-league-enemy-xp>12,420</strong></div>
                </div>
                <small class="league-center-note" data-league-battle-remain>剩余 --</small>
              </section>
              <section class="league-side-panel awards-panel">
                <div class="league-panel-title"><strong>每周荣誉榜</strong><button type="button">更多 ›</button></div>
                <div class="league-awards-grid">
                  <div><img class="award-dot" src="./league-assets/honor-hair.png" alt="护发达人"><b>护发达人</b><small data-award-hair>--</small></div>
                  <div><img class="award-dot" src="./league-assets/honor-love.png" alt="爱心大使"><b>爱心大使</b><small data-award-kindness>--</small></div>
                  <div><img class="award-dot" src="./league-assets/honor-active.png" alt="活跃之星"><b>活跃之星</b><small data-award-active>--</small></div>
                </div>
              </section>
            </aside>
          </div>
        </section>`
