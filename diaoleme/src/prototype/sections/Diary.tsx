export const diarySection = `<section class="page" data-page="diary">
          <div class="diary-shell">
            <header class="diary-head"><div><h1>My Diary ✦</h1><p>记录每一个小瞬间，见证成长的每一步 💜</p></div><div class="diary-head-actions"><button class="write-diary">✎　写日记</button><span>♧</span><img src="./assets/shared-brand/brand-avatar-tile.png" alt="我的头像"></div></header>
            <div class="diary-layout">
              <div class="diary-main">
                <section class="diary-glass diary-hero-new card hero"><h2>今天也要好好爱自己呀 ✨</h2><p>每一根头发都在努力生长，<br>你也是！</p><div class="date-mood"><span>5月18日 · 星期日</span><span>😊 开心　⌄</span></div></section>
                <section class="diary-content">
                  <aside class="diary-left">
                    <div class="diary-glass calendar-card"><div class="calendar-title"><h2>日历视图</h2><b>‹　 May 2024　 ›</b></div><div class="calendar-week"><span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span></div><div class="calendar-grid" id="calendar">
                      <span class="muted">28</span><span class="muted">29</span><span class="muted">30</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span><span>11</span><span>12</span><span>13</span><span>14</span><span>15</span><span>16</span><span>17</span><span class="selected">18</span><span>19</span><span>20</span><span>21</span><span>22</span><span>23</span><span>24</span><span>25</span><span>26</span><span>27</span><span>28</span><span>29</span><span>30</span><span>31</span><span class="muted">1</span>
                    </div><div class="mood-filter"><b>心情筛选</b><div class="mood-buttons" id="diaryMoodFilters"><button class="active">⊕</button><button>😊</button><button>😌</button><button>😟</button><button>😴</button></div></div></div>
                    <div class="diary-glass mood-donut-card"><h2>本月心情分布</h2><div class="mood-donut-wrap"><div class="mood-donut" id="diaryMoodDonut"></div><ul class="mood-legend" id="diaryMoodLegend"><li><span>🟢 开心</span><b>45%</b></li><li><span>🟣 平静</span><b>25%</b></li><li><span>🟪 疲惫</span><b>15%</b></li><li><span>🟠 焦虑</span><b>10%</b></li><li><span>⚪ 其他</span><b>5%</b></li></ul></div></div>
                  </aside>
                  <div class="diary-list-wrap"><h2 id="diaryFeedTitle">共 0 篇日记　　<small>最新在前⌄</small></h2><div class="diary-list-new" id="diaries">
                    <article class="diary-row-new"><div class="diary-date"><strong>18</strong><small>5月</small></div><img class="mood-icon" src="./assets/diary/icons/mood-happy.svg" alt=""><div class="diary-copy"><b>今天掉发好像比昨天少一点！</b><p>早上洗头的时候发现掉发好像比昨天少了一些些…虽然还是很多，但看到这个小小的变化，心情瞬间变好。</p></div><img class="diary-thumb" src="./assets/diary/diary-sunset-hero.jpg" alt=""><span class="diary-menu">•••</span></article>
                    <article class="diary-row-new"><div class="diary-date"><strong>17</strong><small>5月</small></div><img class="mood-icon" src="./assets/diary/icons/mood-calm.svg" alt=""><div class="diary-copy"><b>坚持护发第17天 ✨</b><p>今天做了头皮按摩，感觉头皮放松了很多～还喝了黑芝麻糊，希望头发能有营养！</p></div><img class="diary-thumb" src="./assets/buddy/hairstyles/dandelion.png" alt=""><span class="diary-menu">•••</span></article>
                    <article class="diary-row-new"><div class="diary-date"><strong>16</strong><small>5月</small></div><img class="mood-icon" src="./assets/diary/icons/mood-tired.svg" alt=""><div class="diary-copy"><b>压力好大的一天…</b><p>最近项目截止日期临近，压力好大，掉发也变多了。晚上泡个热水澡放松一下。</p></div><img class="diary-thumb" src="./assets/diary/diary-sunset-hero.jpg" alt=""><span class="diary-menu">•••</span></article>
                    <article class="diary-row-new"><div class="diary-date"><strong>15</strong><small>5月</small></div><img class="mood-icon" src="./assets/diary/icons/mood-anxious.svg" alt=""><div class="diary-copy"><b>为什么掉发总是反反复复…</b><p>有时候觉得有改善，有时候又突然变多了，真的好焦虑啊。</p></div><img class="diary-thumb" src="./assets/buddy/hairstyles/blue-bob.png" alt=""><span class="diary-menu">•••</span></article>
                    <article class="diary-row-new"><div class="diary-date"><strong>14</strong><small>5月</small></div><img class="mood-icon" src="./assets/diary/icons/mood-happy.svg" alt=""><div class="diary-copy"><b>收到新发型奖励啦！🎉</b><p>完成了一周的护发任务，解锁了新发型～我的小伙伴好可爱！</p></div><img class="diary-thumb" src="./assets/shared-brand/brand-avatar-tile.png" alt=""><span class="diary-menu">•••</span></article>
                  </div><button class="diary-load" id="diaryLoadMore">加载更多日记　⌄</button></div>
                </section>
              </div>
              <aside class="diary-side">
                <section class="diary-glass diary-side-card diary-trend card" id="diaryTrendCard"><h2>心情趋势　<small>本月⌄</small></h2><svg viewBox="0 0 420 220"><path d="M30 130 C60 120 65 70 100 88 S120 178 160 165 S175 90 210 120 S250 158 285 140 S320 75 350 92 S380 62 405 76" fill="none" stroke="#8157e8" stroke-width="3"/><path d="M30 130 C60 120 65 70 100 88 S120 178 160 165 S175 90 210 120 S250 158 285 140 S320 75 350 92 S380 62 405 76 L405 210 L30 210Z" fill="rgba(129,87,232,.1)"/></svg></section>
                <section class="diary-glass diary-side-card keyword-card"><h2>关键词统计　<small>更多 ›</small></h2><div class="word-cloud"><span>头皮按摩</span><span>睡眠</span><span>护理</span><span>营养</span><span>黑芝麻</span><span>焦虑</span><span>饮头</span></div></section>
                <section class="diary-glass diary-side-card memory-card card" id="diaryMemoryCard"><h2>回忆精选　<small>更多回忆 ›</small></h2><div class="memory-image">第一篇日记 ⚡</div><blockquote>“希望通过记录，找到适合自己的护发方法，让头发健康起来～”　💗</blockquote></section>
              </aside>
            </div>
          </div>
        </section>`
