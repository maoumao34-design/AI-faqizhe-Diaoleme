import { Buddy } from './BuddyCharacter'

export const buddySection = `<section class="page" data-page="buddy">
          <div class="buddy-layout">
            <div class="buddy-main">
              <div class="card buddy-hero">
                <div class="buddy-hero-left">
                  <div class="buddy-identity">
                    <h2>Fluffy Seedling <span class="badge">Lv.5</span></h2>
                    <p>陪伴你已经 38 天啦 💗</p>
                    <div class="metric">
                      <div class="metric-row"><span style="font-size:32px">💗</span><b>生命值</b><div class="meter"><div class="fill" style="--w:86%;--c:#ff77a8"></div></div><b>86/100</b></div>
                      <div class="metric-row"><span style="font-size:32px">⚡</span><b>能量值</b><div class="meter"><div class="fill" style="--w:68%;--c:#ffad2f"></div></div><b>68/100</b></div>
                      <div class="metric-row"><span style="font-size:32px">😊</span><b>心情值</b><div class="meter"><div class="fill" style="--w:72%"></div></div><b>Happy</b></div>
                    </div>
                  </div>
                  <div class="card buddy-report" data-buddy-report>
                    <h3>今日头发报告</h3>
                    <div><span class="big-number">12</span> 根</div>
                    <p>大多是健康的毛发，状态很棒！</p>
                    <div class="chart" data-bars="24,30,28,33,59,47,65"><span class="bar" style="height:24%"></span><span class="bar" style="height:30%"></span><span class="bar" style="height:28%"></span><span class="bar" style="height:33%"></span><span class="bar" style="height:59%"></span><span class="bar" style="height:47%"></span><span class="bar" style="height:65%"></span></div>
                    <div class="buddy-tip">
                      <span class="buddy-tip-icon">✨</span>
                      <div>
                        <b>小提示</b>
                        <p>记得多喝水和好好睡觉，对头发的成长很重要哦！</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="buddy-stage"><div class="ground"></div>${Buddy({ scale: 1 })}</div>
              </div>

              <div class="card buddy-skins">
                <h3 class="section-title">解锁发型 <span class="badge">3 / 12 已解锁</span></h3>
                <div class="skin-grid" id="skins"><button class="skin"><div class="mini-buddy" style=""></div><b>蒲公英蓬蓬头</b><small>Lv.5</small></button><button class="skin"><div class="mini-buddy" style=""></div><b>星光短发</b><small>Lv.8</small></button><button class="skin"><div class="mini-buddy" style=""></div><b>彩虹飘带</b><small>Lv.10</small></button><button class="skin"><div class="mini-buddy" style="opacity:.45"></div><b>Coming Soon</b><small>Lv.12</small></button><button class="skin"><div class="mini-buddy" style="opacity:.45"></div><b>Coming Soon</b><small>Lv.14</small></button><button class="skin active"><div class="mini-buddy" style="opacity:.45"></div><b>Coming Soon</b><small>Lv.18</small></button></div>
              </div>

              <div class="buddy-extra-grid">
                <div class="card" data-buddy-summary>
                  <h3>💗 本周成长小结</h3>
                  <p>你的护理表现超过了 72% 的用户，继续保持哦！</p>
                  <div class="buddy-summary-stats">
                    <span><b>7 天</b><small>护理天数</small></span>
                    <span><b>6/7</b><small>任务完成</small></span>
                    <span><b>优秀</b><small>均衡饮食</small></span>
                    <span><b>良好</b><small>充足睡眠</small></span>
                  </div>
                </div>
                <div class="card" data-buddy-cheers>
                  <h3>💗 来自大家的鼓励</h3>
                  <div class="buddy-cheers"></div>
                </div>
              </div>
            </div>

            <aside class="card buddy-actions item-list" data-buddy-actions>
              <button class="item"><span>👗</span><b>Dress Up<small>装扮你的伙伴</small></b><span>›</span></button>
              <button class="item"><span>🍚</span><b>Feed<small>喂养伙伴，补充爱与能量</small></b><span>›</span></button>
              <button class="item"><span>📖</span><b>Buddy Diary<small>记录我们一起成长的每一天</small></b><span>›</span></button>
              <button class="item"><span>📈</span><b>成长记录<small>查看伙伴的成长轨迹</small></b><span>›</span></button>
            </aside>
          </div>
        </section>`
