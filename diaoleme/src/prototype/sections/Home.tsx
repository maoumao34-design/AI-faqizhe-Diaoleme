import { Buddy } from './BuddyCharacter'

export const homeSection = `<section class="page active" data-page="home">
          <div class="hero card">
            <div>
              <h2>Every hair is a <em>seed</em>, every care brings it to <strong>life</strong>.</h2>
              <p>Diaoleme is your AI hair companion. We understand, support, and grow with you, turning every fallen hair into a seed and every day into a step of growth.</p>
              <div class="hero-buttons">
                <button class="cta primary" data-go="scan">📷 Scan Hair Now</button>
                <button class="cta ghost" data-go="buddy">🌱 Meet Your Buddy</button>
              </div>
              <p>💗 Trusted by 100,000+ users · +99K growth journeys</p>
            </div>
            <div class="buddy-stage">
              <div class="ground"></div>
              ${Buddy({ scale: 1 })}
            </div>
            <div class="report-card card">
              <h3>Today's Seed Report ✨</h3>
              <div><span class="big-number">12</span> seeds fallen</div>
              <p>Mostly healthy &amp; full of life</p>
              <div class="chart" data-bars="36,58,51,29,74,69,84"><span class="bar" style="height:36%"></span><span class="bar" style="height:58%"></span><span class="bar" style="height:51%"></span><span class="bar" style="height:29%"></span><span class="bar" style="height:74%"></span><span class="bar" style="height:69%"></span><span class="bar" style="height:84%"></span></div>
            </div>
          </div>
          <div class="mini-card-grid">
            <div class="card">
              <h3>💗 My Hair Buddy <span class="badge">Lv.5</span></h3>
              <div class="mini-buddy" style="width:130px;height:130px;margin:auto"></div>
              <h3 style="text-align:center">Fluffy Seedling</h3>
              <div class="meter"><div class="fill" style="--w:86%;--c:#65c982"></div></div>
            </div>
            <div class="card">
              <h3>⭐ Today's Quests</h3>
              <div class="item-list compact-quests"><div class="item" style="grid-template-columns:34px 1fr auto"><span>💧</span><b>喝够 8 杯水</b><span class="">+50 XP</span></div><div class="item" style="grid-template-columns:34px 1fr auto"><span>🌙</span><b>23:30 前睡觉</b><span class="">+60 XP</span></div><div class="item" style="grid-template-columns:34px 1fr auto"><span>🥗</span><b>吃一份蔬果</b><span class="status">已完成</span></div><div class="item" style="grid-template-columns:34px 1fr auto"><span>🖐</span><b>头皮按摩 5 分钟</b><span class="">+50 XP</span></div></div>
            </div>
            <div class="card">
              <h3>🌿 Growth Journey</h3>
              <div><span class="big-number">420</span> / 800 XP <span class="badge">Lv.5</span></div>
              <div class="meter"><div class="fill" style="--w:52%"></div></div>
              <p>⭐ 380 XP to unlock new hairstyle</p>
            </div>
            <div class="card">
              <h3>🏆 Hair Growth League</h3>
              <div class="leaderboard small-leaders"><div class="leader " style="grid-template-columns:34px 1fr auto"><span class="badge">1</span><b>Luna</b><span>28,760 XP</span></div><div class="leader " style="grid-template-columns:34px 1fr auto"><span class="badge">2</span><b>Mia</b><span>25,480 XP</span></div><div class="leader " style="grid-template-columns:34px 1fr auto"><span class="badge">3</span><b>Ray</b><span>22,140 XP</span></div><div class="leader " style="grid-template-columns:34px 1fr auto"><span class="badge">4</span><b>Sophia</b><span>18,900 XP</span></div></div>
            </div>
          </div>
        </section>`
