import { Buddy } from './BuddyCharacter'

export const scanSection = `<section class="page" data-page="scan">
          <div class="scan-wrap">
            <div class="feature-stack">
              <div class="feature"><b>☀️ 光线充足</b><small>自然光或白色灯光</small></div>
              <div class="feature"><b>⬚ 平铺头发</b><small>尽量不重叠</small></div>
              <div class="feature"><b>◌ 对比清晰</b><small>浅色背景更佳</small></div>
              <div class="card soft"><b>别担心～</b><p>我们一起慢慢变好 💗</p><div class="mini-buddy"></div></div>
            </div>
            <div class="card" style="text-align:center">
              <div class="scan-orbit">
                ${Buddy({ scale: 0.78 })}
                <div class="scan-percent" id="scanPercent">待上传</div>
              </div>
              <h3>请将头发平铺在对比清晰的背景上</h3>
              <p>确保光线充足，避免阴影和反光</p>
              <div class="hero-buttons" style="justify-content:center">
                <button class="cta primary" id="scanBtn">📷 拍照扫描</button>
                <button class="cta ghost" id="uploadBtn">🖼 相册上传</button>
                <button class="cta primary" id="scanCompleteBtn" style="display:none">完成</button>
              </div>
            </div>
            <div class="grid scan-side-panel">
              <div class="card"><h3>如何获得更准确的结果？</h3><div class="three grid"><div>✅<br><b>保持相同环境</b></div><div>❌<br><b>头发打结成团</b></div><div>❌<br><b>背景颜色复杂</b></div></div></div>
              <div class="card scan-week-card"><h3>本周扫描数据</h3><div class="three grid"><div><span class="big-number">3</span><br>扫描次数</div><div><span class="big-number">126</span><br>平均掉发量</div><div><span class="badge">正常</span><br>整体状态</div></div></div>
              <div class="card item-list scan-history-card"><h3>最近扫描记录</h3><div class="scan-record-list"><div class="item"><span>〰</span><b class="scan-record-text"><span class="scan-record-title">2024/05/18 10:30</span><small class="scan-record-meta">示例记录</small></b><span class="status">128 分</span></div><div class="item"><span>〰</span><b class="scan-record-text"><span class="scan-record-title">2024/05/17 10:25</span><small class="scan-record-meta">示例记录</small></b><span class="status">132 分</span></div><div class="item"><span>〰</span><b class="scan-record-text"><span class="scan-record-title">2024/05/16 10:28</span><small class="scan-record-meta">示例记录</small></b><span class="status">118 分</span></div><div class="item"><span>〰</span><b class="scan-record-text"><span class="scan-record-title">2024/05/15 09:12</span><small class="scan-record-meta">示例记录</small></b><span class="status">124 分</span></div></div></div>
            </div>
          </div>
        </section>`
