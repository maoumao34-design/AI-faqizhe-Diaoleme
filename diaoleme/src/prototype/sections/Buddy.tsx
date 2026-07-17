import { Buddy } from './BuddyCharacter'

export const buddySection = `<section class="page" data-page="buddy">
          <div class="grid two-col">
            <div class="grid">
              <div class="card hero" style="min-height:420px">
                <div>
                  <h2 style="font-size:42px">Fluffy Seedling <span class="badge">Lv.5</span></h2>
                  <p>陪伴你已经 38 天啦 💗</p>
                  <div class="metric">
                    <div class="metric-row"><span style="font-size:32px">💗</span><div class="meter"><div class="fill" style="--w:86%;--c:#ff77a8"></div></div><b>86/100</b></div>
                    <div class="metric-row"><span style="font-size:32px">⚡</span><div class="meter"><div class="fill" style="--w:68%;--c:#ffad2f"></div></div><b>68/100</b></div>
                    <div class="metric-row"><span style="font-size:32px">😊</span><div class="meter"><div class="fill" style="--w:72%"></div></div><b>Happy</b></div>
                  </div>
                </div>
                <div class="buddy-stage"><div class="ground"></div>${Buddy({ scale: 1 })}</div>
              </div>
              <div class="card">
                <h3 class="section-title">解锁发型 <span class="badge">3 / 12 已解锁</span></h3>
                <div class="skin-grid" id="skins"><button class="skin"><div class="mini-buddy" style=""></div><b>蒲公英蓬蓬头</b><small>Lv.5</small></button><button class="skin"><div class="mini-buddy" style=""></div><b>星光短发</b><small>Lv.8</small></button><button class="skin"><div class="mini-buddy" style=""></div><b>彩虹飘带</b><small>Lv.10</small></button><button class="skin"><div class="mini-buddy" style="opacity:.45"></div><b>Coming Soon</b><small>Lv.12</small></button><button class="skin"><div class="mini-buddy" style="opacity:.45"></div><b>Coming Soon</b><small>Lv.14</small></button><button class="skin active"><div class="mini-buddy" style="opacity:.45"></div><b>Coming Soon</b><small>Lv.18</small></button></div>
              </div>
            </div>
            <div class="grid">
              <div class="card"><h3>今日头发报告</h3><div><span class="big-number">12</span> 根</div><p>大多是健康的毛发，状态很棒！</p><div class="chart" data-bars="24,30,28,33,59,47,65"><span class="bar" style="height:24%"></span><span class="bar" style="height:30%"></span><span class="bar" style="height:28%"></span><span class="bar" style="height:33%"></span><span class="bar" style="height:59%"></span><span class="bar" style="height:47%"></span><span class="bar" style="height:65%"></span></div></div>
              <div class="card item-list">
                <button class="item"><span>👗</span><b>Dress Up<small>装扮你的伙伴</small></b><span>›</span></button>
                <button class="item"><span>🍚</span><b>Feed<small>喂养伙伴，补充爱与能量</small></b><span>›</span></button>
                <button class="item"><span>📖</span><b>Buddy Diary<small>记录我们一起成长的每一天</small></b><span>›</span></button>
                <button class="item"><span>📈</span><b>成长记录<small>查看伙伴的成长轨迹</small></b><span>›</span></button>
              </div>
            </div>
          </div>
        </section>`
