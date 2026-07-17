import { Buddy } from './BuddyCharacter'

export const questsSection = `<section class="page" data-page="quests">
          <div class="grid two-col">
            <div class="grid">
              <div class="card hero" style="min-height:260px">
                <div>
                  <h3>今日活跃奖励</h3>
                  <p>完成今日任务，领取额外奖励！</p>
                  <div class="row" id="weekRewards"><span class="badge">✓<br><small>+10 XP</small></span><span class="badge">✓<br><small>+15 XP</small></span><span class="badge">三<br><small>+20 XP</small></span><span class="badge">四<br><small>+25 XP</small></span><span class="badge">五<br><small>+30 XP</small></span><span class="badge">六<br><small>+25 XP</small></span><span class="badge">日<br><small>+25 XP</small></span></div>
                </div>
                <div class="buddy-stage" style="min-height:220px"><div class="ground"></div>${Buddy({ scale: 0.62 })}</div>
              </div>
              <div class="tabs"><button class="pill primary">每日任务</button><button class="pill">每周任务</button><button class="pill">成长任务</button><button class="pill">特别任务</button></div>
              <div class="card item-list" id="questList"><div class="item"><span style="font-size:26px">💧</span><b>喝够 8 杯水<small>充足的水分让头发更健康</small></b><span>6/8</span><button class="quest-btn ">去完成</button></div><div class="item"><span style="font-size:26px">🌙</span><b>23:30 前睡觉<small>早睡是头皮的修复时间</small></b><span>0/1</span><button class="quest-btn ">去完成</button></div><div class="item"><span style="font-size:26px">🥗</span><b>吃一份蔬果<small>补充维生素，滋养发根</small></b><span>1/1</span><button class="quest-btn done">✓ 已完成</button></div><div class="item"><span style="font-size:26px">🖐</span><b>头皮按摩 5 分钟<small>促进头皮血液循环</small></b><span>2/5</span><button class="quest-btn ">去完成</button></div><div class="item"><span style="font-size:26px">🚶</span><b>散步 20 分钟<small>运动让身体和头发一起呼吸</small></b><span>1/1</span><button class="quest-btn done">✓ 已完成</button></div><div class="item" style="background:rgba(139,92,246,.1)"><span>⭐</span><b>完成所有每日任务可获得额外奖励！</b><span>+100 XP</span><button class="quest-btn done">未完成</button></div></div>
            </div>
            <aside class="grid">
              <div class="card"><h3>我的任务进度</h3><div class="big-number">78%</div><div class="meter"><div class="fill" style="--w:78%"></div></div><p>完成 11/14 个任务</p></div>
              <div class="card"><h3>连续打卡</h3><div class="big-number">7 天</div><div class="row" id="streak"><span class="badge">✓<br><small>一</small></span><span class="badge">✓<br><small>二</small></span><span class="badge">✓<br><small>三</small></span><span class="badge">✓<br><small>四</small></span><span class="badge">✓<br><small>五</small></span><span class="badge">✓<br><small>六</small></span><span class="badge">🎁<br><small>日</small></span></div></div>
              <div class="card"><h3>任务小贴士</h3><p>定期护理 + 健康生活习惯 = 健康的头发！保持好心情，规律作息，均衡饮食。</p><div class="mini-buddy"></div></div>
              <div class="card"><h3>本周任务总览</h3><div class="donut" data-label="14\A 总任务数"></div></div>
            </aside>
          </div>
        </section>`
