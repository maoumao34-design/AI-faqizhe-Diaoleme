import { Buddy } from './BuddyCharacter'

export const communitySection = `<section class="page" data-page="community">
          <div class="grid two-col">
            <div class="grid">
              <div class="card hero" style="min-height:250px">
                <div><h2 style="font-size:36px">你并不孤单，我们都在努力生长 ✨</h2><p>分享你的故事，互相鼓励，成为彼此的光。</p><div class="hero-buttons"><button class="cta primary" data-action="share-to-community">✎ 分享我的故事</button><button class="cta ghost" data-community-tab="热门"># 浏览话题</button></div></div>
                <div class="buddy-stage" style="min-height:210px"><div class="ground"></div>${Buddy({ scale: 0.48 })}</div>
              </div>
              <div class="tabs" id="communityTabs"><button class="pill" data-community-tab="关注">关注</button><button class="pill primary" data-community-tab="最新">最新</button><button class="pill" data-community-tab="热门">热门</button><button class="pill" data-community-tab="精华">精华</button></div>
              <div class="item-list" id="posts"><div class="post"><div class="mini-buddy"></div><div><b>小蒲公英 <span class="badge">Lv.6</span></b><p>今天终于连续打卡第 7 天啦！虽然掉发还是有，但头皮状态明显舒服多了～</p><span class="badge"># 头皮护理</span></div><div class="post-media">📋</div><small>💜 128　💬 36　☆ 收藏</small></div><div class="post"><div class="mini-buddy"></div><div><b>爱吃草莓 <span class="badge">Lv.4</span></b><p>分享一个我最近超喜欢的头皮按摩方法！每天睡前按 5 分钟，放松又助眠。</p><span class="badge"># 头皮护理</span></div><div class="post-media">🪮</div><small>💜 96　💬 36　☆ 收藏</small></div><div class="post"><div class="mini-buddy"></div><div><b>薄荷味的风 <span class="badge">Lv.6</span></b><p>最近压力有点大，掉发也跟着严重了。深呼吸、运动、喝水，给自己一些温柔的时间。</p><span class="badge"># 头皮护理</span></div><div class="post-media">🌿</div><small>💜 76　💬 36　☆ 收藏</small></div><div class="post"><div class="mini-buddy"></div><div><b>向日葵 <span class="badge">Lv.3</span></b><p>新发型解锁啦！看着宝宝一点点长出来的花发，成就感满满！</p><span class="badge"># 头皮护理</span></div><div class="post-media">🌱</div><small>💜 143　💬 36　☆ 收藏</small></div></div>
            </div>
            <aside class="grid">
              <div class="card item-list"><h3>热门话题</h3><div class="item"><span>#</span><b>连续打卡挑战</b><span>12.4k</span></div><div class="item"><span>#</span><b>头皮护理分享</b><span>8.7k</span></div><div class="item"><span>#</span><b>情绪管理小贴士</b><span>6.1k</span></div></div>
              <div class="card"><h3>社区活动</h3><div class="item"><span>📅</span><b>21 天头皮养护打卡挑战</b><button class="quest-btn">立即参加</button></div></div>
              <div class="card item-list"><h3>推荐小组</h3><div class="item"><span>💙</span><b>佛系养发小分队</b><button class="pill">加入</button></div><div class="item"><span>🏃</span><b>运动养发日记</b><button class="pill">加入</button></div><div class="item"><span>🥗</span><b>饮食养发研究所</b><button class="pill">加入</button></div></div>
            </aside>
          </div>
        </section>`
