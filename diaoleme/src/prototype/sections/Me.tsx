import { Buddy } from './BuddyCharacter'

export const meSection = `<section class="page" data-page="me">
          <div class="grid two-col">
            <div class="grid">
              <div class="card hero" style="min-height:300px">
                <div>
                  <h2 style="font-size:36px">Me <span class="badge">Lv.5</span></h2>
                  <p>一起变好呀！</p>
                  <div class="row"><span class="badge">12,360 XP</span><span class="badge">连续 32 天</span></div>
                </div>
                <div class="buddy-stage" style="min-height:250px"><div class="ground"></div>${Buddy({ scale: 0.58 })}</div>
              </div>
              <div class="card">
                <h3 class="section-title">我的成就 <span class="badge">8 / 24 已解锁</span></h3>
                <div class="item-list"><div class="item"><span>🏆</span><b>连续打卡 7 天<small>坚持就是胜利</small></b><span class="status">已解锁</span></div><div class="item"><span>🌱</span><b>第一次扫描<small>开启护发之旅</small></b><span class="status">已解锁</span></div><div class="item"><span>💧</span><b>头皮健康改善<small>努力有了回报</small></b><span class="status">已解锁</span></div><div class="item"><span>🔒</span><b>解锁新发型<small>继续加油</small></b><span>›</span></div></div>
              </div>
            </div>
            <aside class="grid">
              <div class="card"><h3>个人统计</h3><div class="three grid"><div><span class="big-number">32</span><br>记录天数</div><div><span class="big-number">1,620</span><br>总 XP</div><div><span class="big-number">12</span><br>连续天数</div></div></div>
              <div class="card item-list"><h3>设置</h3><button class="item"><span>🔔</span><b>通知设置<small>管理推送与提醒</small></b><span>›</span></button><button class="item"><span>🎨</span><b>主题外观<small>个性化你的应用</small></b><span>›</span></button><button class="item"><span>📤</span><b>分享应用<small>邀请好友一起护发</small></b><span>›</span></button><button class="item"><span>ℹ️</span><b>关于掉了么<small>版本 1.0.0</small></b><span>›</span></button></div>
            </aside>
          </div>
        </section>`
