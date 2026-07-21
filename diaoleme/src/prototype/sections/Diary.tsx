import { Buddy } from './BuddyCharacter'

export const diarySection = `<section class="page" data-page="diary">
          <div class="grid two-col diary-layout">
            <div class="grid">
              <div class="card hero diary-hero" style="min-height:260px">
                <div>
                  <h2 style="font-size:36px">今天也要好好爱自己呀 ✨</h2>
                  <p>每一根头发都在努力生长，你也是！</p>
                  <button class="pill primary" data-diary-today-mood>😊 开心</button>
                </div>
                <div class="buddy-stage" style="min-height:220px"><div class="ground"></div>${Buddy({ scale: 0.5 })}</div>
              </div>
              <div class="grid diary-main-grid">
                <aside class="grid diary-side-left">
                  <div class="card">
                    <h3>日历视图</h3>
                    <div class="calendar" id="calendar"></div>
                    <h3 class="diary-mood-filter-title">心情筛选</h3>
                    <div class="diary-mood-filters" id="diaryMoodFilters">
                      <button class="pill primary" data-diary-mood="all">全部</button>
                      <button class="pill" data-diary-mood="happy">😊 开心</button>
                      <button class="pill" data-diary-mood="calm">🧘 平静</button>
                      <button class="pill" data-diary-mood="anxious">😟 焦虑</button>
                      <button class="pill" data-diary-mood="tired">😫 疲惫</button>
                    </div>
                    <h3>本月心情分布</h3>
                    <div class="donut" id="diaryMoodDonut" data-label="0\\A 篇日记"></div>
                    <div class="diary-mood-legend" id="diaryMoodLegend"></div>
                  </div>
                </aside>
                <div class="card diary-feed-card">
                  <div class="diary-feed-head">
                    <div>
                      <h3 id="diaryFeedTitle">共 0 篇日记</h3>
                      <p class="diary-feed-sub">由每日 Scan 报告整理成一天一篇总结</p>
                    </div>
                    <span class="badge">按最新优先</span>
                  </div>
                  <div class="diary-feed" id="diaries"></div>
                  <button class="pill diary-load-more" id="diaryLoadMore" data-action="diary-load-more" hidden>加载更多日记</button>
                </div>
              </div>
            </div>
            <aside class="grid">
              <div class="card" id="diaryTrendCard"><h3>心情趋势</h3><div class="chart"></div></div>
              <div class="card word-cloud"><h3>关键词统计</h3></div>
              <div class="card" id="diaryMemoryCard"><h3>回忆精选</h3><div class="reward-art">🌄</div><b>第一篇日记 ✨</b><p>完成第一次 Scan 后，这里会展示值得回看的一天。</p></div>
            </aside>
          </div>
        </section>`
