import { Buddy } from './BuddyCharacter'

export const leagueSection = `<section class="page" data-page="league">
          <div class="grid two-col">
            <div class="grid">
              <div class="card hero" style="min-height:300px">
                <div>
                  <h3>本赛季</h3><h2 style="font-size:36px">春风吹发季 🌸</h2><p>5.1 - 5.31</p>
                  <div class="row"><span class="badge">08 天</span><span class="badge">12 时</span><span class="badge">36 分</span><span class="badge">45 秒</span></div>
                </div>
                <div class="buddy-stage" style="min-height:250px"><div class="ground"></div>${Buddy({ scale: 0.58 })}</div>
              </div>
              <div class="tabs"><button class="pill primary">排行榜</button><button class="pill">我的联盟</button><button class="pill">好友排行</button><button class="pill">段位晋升</button></div>
              <div class="card"><div class="leaderboard" id="leaders"><div class="leader "><span class="badge">1</span><b>Luna<small>头发是生命的种子 🌱</small></b><span>28,760 XP</span><span>↑ 1</span></div><div class="leader "><span class="badge">2</span><b>Mia<small>每天进步 1% ✨</small></b><span>25,480 XP</span><span>↓ 1</span></div><div class="leader "><span class="badge">3</span><b>Ray<small>慢慢来，比较更重要 💜</small></b><span>22,140 XP</span><span>—</span></div><div class="leader "><span class="badge">4</span><b>Sophia<small>关注头皮，从现在开始</small></b><span>18,900 XP</span><span>↑ 2</span></div><div class="leader "><span class="badge">5</span><b>Bella<small>保持心情愉悦～</small></b><span>16,520 XP</span><span>↓ 1</span></div><div class="leader you"><span class="badge">12</span><b>You<small>一起变好呀！</small></b><span>12,360 XP</span><span>↑ 3</span></div></div></div>
            </div>
            <aside class="grid">
              <div class="card"><h3>我的联盟</h3><h2>蒲公英小分队 <span class="badge">Lv.5</span></h2><p>成员 28/30 · 本周贡献 3,260 XP</p><div class="meter"><div class="fill" style="--w:74%"></div></div></div>
              <div class="card item-list"><h3>联盟公告</h3><div class="item"><span>•</span><b>本周联盟任务已更新</b><span>05-18</span></div><div class="item"><span>•</span><b>联盟战即将开始</b><span>05-17</span></div></div>
              <div class="card"><h3>本周联盟战</h3><div class="three grid" style="text-align:center"><div><b>蒲公英小分队</b><span class="big-number" style="font-size:32px">15,680</span></div><div><b>VS</b></div><div><b>发光小队</b><span class="big-number" style="font-size:32px;color:#65c982">12,420</span></div></div></div>
            </aside>
          </div>
        </section>`
