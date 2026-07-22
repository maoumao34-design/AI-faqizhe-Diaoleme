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
              <div class="card scan-week-card"><h3>本周扫描数据</h3><div class="three grid scan-stat-grid"><div class="scan-stat-item"><span class="scan-stat-value"><span class="big-number">3</span></span><small>扫描次数</small></div><div class="scan-stat-item"><span class="scan-stat-value"><span class="big-number">76</span></span><small>平均状态分</small></div><div class="scan-stat-item scan-source-stat"><span class="scan-stat-value"><span class="badge scan-source-value" title="等待分析" data-full-source="等待分析">等待分析</span></span><small>最新来源</small></div></div></div>
              <div class="card item-list scan-history-card"><h3>最近扫描记录</h3><div class="scan-record-list"><div class="item"><span>〰</span><span class="scan-record-text"><b class="scan-record-title">2024/05/18 10:30</b></span><span class="status">128 根</span></div><div class="item"><span>〰</span><span class="scan-record-text"><b class="scan-record-title">2024/05/17 10:25</b></span><span class="status">132 根</span></div><div class="item"><span>〰</span><span class="scan-record-text"><b class="scan-record-title">2024/05/16 10:28</b></span><span class="status">118 根</span></div></div></div>
            </div>
          </div>
        </section>`
