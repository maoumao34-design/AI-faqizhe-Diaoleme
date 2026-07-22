export const homeSection = `<section class="page active home-page" data-page="home">
          <div class="hero-copy">
            <h2 class="hero-title">
              <span class="line">Every hair is a <em>seed,</em></span>
              <span class="line">every care</span>
              <span class="line">brings it to <strong>life.</strong></span>
            </h2>
            <p class="hero-body">
              Diaoleme is your AI hair companion.<br />
              We understand, support, and grow with you —<br />
              turning every fallen hair into a seed<br />
              and every day into a step of growth. ✨
            </p>
            <div class="hero-buttons">
              <button class="cta primary home-cta-scan" data-go="scan" type="button">📷 Scan Hair Now</button>
              <button class="cta ghost home-cta-buddy" data-go="buddy" type="button">🌱 Meet Your Buddy</button>
            </div>
            <div class="trust-row">
              <span class="trust-heart" aria-hidden="true">💗</span>
              <span class="trust-text">Trusted by 100,000+ users</span>
              <div class="avatar-stack" aria-hidden="true">
                <span style="background:#f4b8a8"></span>
                <span style="background:#e8a8c8"></span>
                <span style="background:#c8b4f0"></span>
                <span style="background:#f0d0a0"></span>
                <span style="background:#a8d0f0"></span>
                <span style="background:#d8c0f8"></span>
              </div>
              <span class="trust-pill">+99K</span>
            </div>
          </div>

          <div class="hero-scene" aria-hidden="true">
            <img class="scene-hero" src="./home-assets/hero-scene.png" alt="" />
          </div>

          <aside class="seed-report card glass">
            <h3>Today's Seed Report ✨</h3>
            <div class="report-stat"><span class="big-number">12</span><span>seeds fallen</span></div>
            <p class="report-status">Mostly healthy &amp; full of life</p>
            <svg class="seed-line" viewBox="0 0 280 88" role="img" aria-label="Weekly seed trend">
              <defs>
                <linearGradient id="seedStroke" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stop-color="#7444df"/>
                  <stop offset="100%" stop-color="#ee5b96"/>
                </linearGradient>
              </defs>
              <polyline fill="none" stroke="url(#seedStroke)" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"
                points="16,58 54,42 92,48 130,64 168,28 206,34 248,18"/>
              <g fill="#7444df">
                <circle cx="16" cy="58" r="4.5"/><circle cx="54" cy="42" r="4.5"/><circle cx="92" cy="48" r="4.5"/>
                <circle cx="130" cy="64" r="4.5"/><circle cx="168" cy="28" r="4.5"/><circle cx="206" cy="34" r="4.5"/><circle cx="248" cy="18" r="4.5"/>
              </g>
              <g fill="#8a8fb0" font-size="11" font-weight="700" font-family="Nunito, sans-serif">
                <text x="8" y="84">Mon</text><text x="46" y="84">Tue</text><text x="84" y="84">Wed</text>
                <text x="122" y="84">Thu</text><text x="160" y="84">Fri</text><text x="198" y="84">Sat</text><text x="236" y="84">Sun</text>
              </g>
            </svg>
            <div class="cheer-card">
              <img src="./home-assets/ip-head-hq.png" alt="" />
              <div>
                <b>Good job!</b>
                <p>Your care this week is better than 72% users!</p>
              </div>
            </div>
          </aside>

          <div class="home-dashboard">
            <article class="card glass dash-card">
              <h3>💗 My Hair Buddy <span class="badge solid">Lv.5</span></h3>
              <img class="dash-avatar" src="./home-assets/ip-avatar-hq.png" alt="Fluffy Seedling" />
              <h4>Fluffy Seedling</h4>
              <div class="meter thick"><div class="fill hp" style="--w:86%"></div></div>
              <p class="dash-meta">HP 86 / 100</p>
              <button class="text-link" data-go="buddy" type="button">View Details →</button>
            </article>

            <article class="card glass dash-card">
              <h3>⭐ Today's Quests</h3>
              <div class="item-list home-quests home-static">
                <div class="item quest-row done-purple"><span class="qico">💧</span><b>Drink 8 cups of water</b><span class="qxp">✓ +50 XP</span></div>
                <div class="item quest-row done-green"><span class="qico">🌙</span><b>Sleep before 23:30</b><span class="qxp">✓ +80 XP</span></div>
                <div class="item quest-row"><span class="qico">🥗</span><b>Eat a healthy meal</b><span class="qxp">0/1 · +100 XP</span></div>
                <div class="item quest-row"><span class="qico">🖐</span><b>Scalp massage 5 mins</b><span class="qxp">0/1 · +50 XP</span></div>
              </div>
              <button class="text-link" data-go="quests" type="button">More Quests →</button>
            </article>

            <article class="card glass dash-card">
              <h3>🌿 Growth Journey</h3>
              <div class="xp-row"><span>⭐</span><strong class="big-number sm">420</strong><span>/ 800 XP</span><span class="badge solid">Lv.5</span></div>
              <div class="meter thick"><div class="fill" style="--w:52.5%"></div></div>
              <div class="unlock-hint">
                <p>⭐ 380 XP to unlock new hairstyle</p>
                <div class="hair-silhouette" aria-hidden="true">?</div>
              </div>
              <button class="text-link" data-go="journey" type="button">See Journey →</button>
            </article>

            <article class="card glass dash-card">
              <div class="dash-head">
                <h3>🏆 Hair Growth League</h3>
                <button class="text-link" data-go="league" type="button">See all →</button>
              </div>
              <div class="leaderboard home-leaders home-static">
                <div class="leader"><span class="medal gold">1</span><b>Luna</b><span>36,250 XP</span></div>
                <div class="leader"><span class="medal silver">2</span><b>Mia</b><span>28,760 XP</span></div>
                <div class="leader"><span class="medal bronze">3</span><b>Ray</b><span>25,480 XP</span></div>
                <div class="leader you"><span class="medal you">12</span><b>You</b><span>12,360 XP</span></div>
              </div>
            </article>
          </div>

          <div class="home-bottom">
            <div class="encourage">
              <img src="./home-assets/ip-head-hq.png" alt="" />
              <div>
                <p>It's okay to have difficult days.</p>
                <p>We're in this together.</p>
              </div>
            </div>
            <div class="service-row">
              <div class="service"><span class="svc purple">✦</span><div><b>AI Hair Analysis</b><small>Understand your hair condition</small></div></div>
              <div class="service"><span class="svc orange">◎</span><div><b>Personalized Care</b><small>Plans just for you</small></div></div>
              <div class="service"><span class="svc green">♡</span><div><b>Emotional Support</b><small>Always here when you need</small></div></div>
              <div class="service"><span class="svc pink">♛</span><div><b>Fun &amp; Growth</b><small>Turn care into a joyful game</small></div></div>
            </div>
            <div class="share-block">
              <div>
                <h3>Share your journey</h3>
                <p>Get a poster &amp; inspire others!</p>
                <button class="cta primary home-cta-scan sm" data-go="community" type="button" id="homeCreatePoster">Create Poster</button>
              </div>
              <div class="poster-stack">
                <img src="./home-assets/ip-sit-hq.png" alt="" />
              </div>
            </div>
          </div>
        </section>`
