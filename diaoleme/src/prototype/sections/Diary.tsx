import { Buddy } from './BuddyCharacter'

export const diarySection = `<section class="page" data-page="diary">
          <div class="grid two-col">
            <div class="grid">
              <div class="card hero" style="min-height:260px">
                <div><h2 style="font-size:36px">今天也要好好爱自己呀 ✨</h2><p>每一根头发都在努力生长，你也是！</p><button class="pill primary">😊 开心</button></div>
                <div class="buddy-stage" style="min-height:220px"><div class="ground"></div>${Buddy({ scale: 0.5 })}</div>
              </div>
              <div class="grid" style="grid-template-columns:300px 1fr">
                <div class="card"><h3>日历视图</h3><div class="calendar" id="calendar"><span class="">Sun</span><span class="">Mon</span><span class="">Tue</span><span class="">Wed</span><span class="">Thu</span><span class="">Fri</span><span class="">Sat</span><span class="">28</span><span class="">29</span><span class="">30</span><span class="">1</span><span class="">2</span><span class="">3</span><span class="">4</span><span class="">5</span><span class="">6</span><span class="">7</span><span class="">8</span><span class="">9</span><span class="">10</span><span class="">11</span><span class="">12</span><span class="">13</span><span class="">14</span><span class="">15</span><span class="">16</span><span class="">17</span><span class="selected">18</span><span class="">19</span><span class="">20</span><span class="">21</span><span class="">22</span><span class="">23</span><span class="">24</span><span class="">25</span><span class="">26</span><span class="">27</span><span class="">28</span><span class="">29</span><span class="">30</span><span class="">31</span></div><h3>本月心情分布</h3><div class="donut" data-label="24\A 篇日记"></div></div>
                <div class="card item-list" id="diaries"><div class="item"><span><b>18</b><br>5月</span><b>😊 开心　今天掉发好像比昨天少一点！<small>虽然还是很多，但看到小小的变化，心情瞬间变晴。</small></b><span>⋯</span></div><div class="item"><span><b>17</b><br>5月</span><b>😌 平静　坚持护发第17天 ✨<small>今天做了头皮按摩，感觉头皮放松了很多。</small></b><span>⋯</span></div><div class="item"><span><b>16</b><br>5月</span><b>🎁 疲惫　压力好大的一天...<small>晚上泡个热水澡放松一下，希望明天会更好。</small></b><span>⋯</span></div><div class="item"><span><b>15</b><br>5月</span><b>😟 焦虑　为什么掉发总是反反复复...<small>希望能找到适合自己的方法。</small></b><span>⋯</span></div><div class="item"><span><b>14</b><br>5月</span><b>😊 开心　收到新发型奖励啦！<small>我的小伙伴好可爱！</small></b><span>⋯</span></div></div>
              </div>
            </div>
            <aside class="grid">
              <div class="card"><h3>心情趋势</h3><div class="chart" data-bars="44,58,62,31,28,56,69,48,46,75,64"><span class="bar" style="height:44%"></span><span class="bar" style="height:58%"></span><span class="bar" style="height:62%"></span><span class="bar" style="height:31%"></span><span class="bar" style="height:28%"></span><span class="bar" style="height:56%"></span><span class="bar" style="height:69%"></span><span class="bar" style="height:48%"></span><span class="bar" style="height:46%"></span><span class="bar" style="height:75%"></span><span class="bar" style="height:64%"></span></div></div>
              <div class="card word-cloud"><h3>关键词统计</h3><span style="left:30%;top:40%;font-size:34px">护理</span><span style="left:20%;top:58%;font-size:28px">头皮按摩</span><span style="left:62%;top:35%;font-size:18px">焦虑</span><span style="left:12%;top:34%;font-size:17px">睡眠</span><span style="left:68%;top:62%;font-size:15px">生发</span><span style="left:43%;top:72%;font-size:16px">心情</span></div>
              <div class="card"><h3>回忆精选</h3><div class="reward-art">🌄</div><b>第一篇日记 ✨</b><p>希望通过记录，找到适合自己的护发方法。</p></div>
            </aside>
          </div>
        </section>`
