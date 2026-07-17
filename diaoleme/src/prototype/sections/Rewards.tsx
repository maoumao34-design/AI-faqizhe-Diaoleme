import { Buddy } from './BuddyCharacter'

export const rewardsSection = `<section class="page" data-page="rewards">
          <div class="grid two-col">
            <div class="grid">
              <div class="card hero" style="min-height:230px">
                <div><h3>我的积分</h3><div><span class="big-number">12,360</span> XP</div><p>距离下一级级还需 2,640 XP</p><div class="meter"><div class="fill" style="--w:68%"></div></div></div>
                <div class="buddy-stage" style="min-height:190px">${Buddy({ scale: 0.42 })}</div>
              </div>
              <div class="tabs"><button class="pill primary">全部</button><button class="pill">发型装扮</button><button class="pill">护发好物</button><button class="pill">陪伴道具</button></div>
              <div class="shop" id="shop"><div class="reward"><div class="reward-art">🎀</div><b>樱花发箍</b><small>Lv.5 解锁</small><b style="color:var(--purple)">2,000 XP</b></div><div class="reward"><div class="reward-art">🫧</div><b>星光泡泡发型</b><small>Lv.5 解锁</small><b style="color:var(--purple)">3,500 XP</b></div><div class="reward"><div class="reward-art">🧴</div><b>生发精华液 30ml</b><small>Lv.5 解锁</small><b style="color:var(--purple)">4,800 XP</b></div><div class="reward"><div class="reward-art">💜</div><b>治愈蘑菇帽</b><small>Lv.5 解锁</small><b style="color:var(--purple)">2,800 XP</b></div><div class="reward"><div class="reward-art">🎁</div><b>护发礼包套装</b><small>Lv.5 解锁</small><b style="color:var(--purple)">6,500 XP</b></div><div class="reward"><div class="reward-art">🌿</div><b>蒲公英小夜灯</b><small>Lv.5 解锁</small><b style="color:var(--purple)">3,200 XP</b></div><div class="reward"><div class="reward-art">🌱</div><b>嫩芽发型</b><small>Lv.5 解锁</small><b style="color:var(--purple)">2,500 XP</b></div><div class="reward"><div class="reward-art">🪮</div><b>头皮按摩梳</b><small>Lv.5 解锁</small><b style="color:var(--purple)">4,200 XP</b></div><div class="reward"><div class="reward-art">🧥</div><b>微羽披风</b><small>Lv.5 解锁</small><b style="color:var(--purple)">5,000 XP</b></div><div class="reward"><div class="reward-art">🎫</div><b>7天特权卡</b><small>Lv.5 解锁</small><b style="color:var(--purple)">8,000 XP</b></div></div>
            </div>
            <aside class="grid">
              <div class="card"><h3>积分总览</h3><div class="donut" data-label="12,360\A 总积分"></div></div>
              <div class="card"><h3>每日签到 <span class="badge">已连续 7 天</span></h3><div class="row" id="checkin"><span class="badge">✓<br><small>一</small></span><span class="badge">✓<br><small>二</small></span><span class="badge">✓<br><small>三</small></span><span class="badge">✓<br><small>四</small></span><span class="badge">✓<br><small>五</small></span><span class="badge">✓<br><small>六</small></span><span class="badge">🎁<br><small>日</small></span></div></div>
              <div class="card item-list"><h3>兑换记录</h3><div class="item"><span>🧴</span><b>生发精华液 30ml</b><span>-4,800 XP</span></div><div class="item"><span>💜</span><b>星光泡泡发型</b><span>-3,500 XP</span></div><div class="item"><span>🪮</span><b>头皮按摩梳</b><span>-4,200 XP</span></div></div>
            </aside>
          </div>
        </section>`
