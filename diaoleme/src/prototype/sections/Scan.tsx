export const scanSection = `<section class="page" data-page="scan">
          <div class="scan-page-shell">
            <div class="scan-top-actions">
              <button class="scan-guide">ⓘ　新手指南</button><span class="scan-alert">♧</span>
              <img class="scan-avatar" src="./assets/shared-brand/brand-avatar-tile.png" alt="我的头像">
            </div>
            <div class="scan-layout">
              <aside class="scan-left-rail">
                <div class="scan-feature-list">
                  <div class="scan-feature"><span class="scan-feature-icon">☀️</span><b>光线充足</b><small>自然光或白色灯光</small></div>
                  <div class="scan-feature"><span class="scan-feature-icon">▣</span><b>平铺头发</b><small>尽量不重叠</small></div>
                  <div class="scan-feature"><span class="scan-feature-icon">◌</span><b>对比清晰</b><small>浅色背景更佳</small></div>
                </div>
                <div class="scan-cheer"><b>别担心～</b><br>我们一起慢慢变好 💗</div>
                <img class="scan-sitting" src="./assets/scan/sitting-mascot.png" alt="坐着的掉了么伙伴">
              </aside>
              <section class="scan-center card" style="text-align:center" data-scan-card>
                <header class="scan-heading"><h1>扫描掉落头发</h1><p>用科学的方式，了解你的头发状况 💗</p></header>
                <div class="scanner-ring scan-orbit">
                  <div class="scan-state">📷　<span id="scanStateText">准备就绪</span></div>
                  <span class="scan-ground-shadow" aria-hidden="true"></span>
                  <img class="scan-mascot" src="./assets/scan/scanning-mascot.png" alt="正在扫描的掉了么伙伴">
                  <div class="scan-percent" id="scanPercent">待上传</div>
                </div>
                <div class="scan-instruction"><h3>请将头发平铺在对比清晰的背景上</h3><p>确保光线充足，避免阴影和反光</p></div>
                <div class="scan-actions">
                  <button class="scan-action primary" id="scanBtn"><span class="scan-action-icon">📷</span><span>拍照扫描<small>拍摄掉落的头发</small></span></button>
                  <button class="scan-action" id="uploadBtn"><span class="scan-action-icon">▧</span><span>相册上传<small>从相册选择照片</small></span></button>
                  <button class="scan-action primary" id="scanCompleteBtn" style="display:none"><span>完成扫描</span></button>
                  <p class="scan-privacy">🔒　扫描记录仅自己可见，保护你的隐私</p>
                </div>
              </section>
              <aside class="scan-right-rail">
                <section class="scan-card">
                  <h3>如何获得更准确的结果？<a href="#">查看示例 →</a></h3>
                  <div class="scan-examples">
                    <div class="scan-example"><img src="./assets/scan/hair.png" alt=""><b>单根或少量头发</b><small>效果更准确</small></div>
                    <div class="scan-example"><img src="./assets/scan/hair.png" alt=""><b>头发打结成团</b><small>难以识别</small></div>
                    <div class="scan-example"><img src="./assets/scan/hair.png" alt=""><b>背景颜色复杂</b><small>影响识别效果</small></div>
                  </div>
                </section>
                <section class="scan-card scan-week-card">
                  <h3>本周扫描数据 <small>5.12 – 5.18</small></h3>
                  <div class="scan-week">
                    <div><strong>3<small>次</small></strong><span>扫描次数</span></div>
                    <div><strong>86</strong><span>状态平均分</span></div>
                    <div><strong class="scan-source-value">真实 AI</strong><span>最新来源及结果</span></div>
                  </div>
                </section>
                <section class="scan-card">
                  <h3>扫描小贴士</h3>
                  <div class="scan-tip-list">
                    <div class="scan-tip"><i>▣</i><div><b>建议每天在相同时间扫描</b><small>便于观察变化趋势</small></div></div>
                    <div class="scan-tip"><i>□</i><div><b>长期记录更有参考价值</b><small>我们会为你生成成长曲线</small></div></div>
                    <div class="scan-tip"><i>♢</i><div><b>你的数据安全加密</b><small>绝不泄露给第三方</small></div></div>
                  </div>
                </section>
                <section class="scan-card item-list scan-history-card">
                  <h3>最近扫描记录 <a href="#">查看全部 →</a></h3>
                  <div class="scan-history scan-record-list">
                    <div class="scan-history-row"><img src="./assets/scan/hair.png" alt=""><div><b>2024/05/18 10:30</b><strong>128 <small>根</small></strong></div><span class="scan-normal">正常</span></div>
                    <div class="scan-history-row"><img src="./assets/scan/hair.png" alt=""><div><b>2024/05/17 10:25</b><strong>132 <small>根</small></strong></div><span class="scan-normal">正常</span></div>
                    <div class="scan-history-row"><img src="./assets/scan/hair.png" alt=""><div><b>2024/05/16 10:28</b><strong>118 <small>根</small></strong></div><span class="scan-normal">正常</span></div>
                  </div>
                </section>
              </aside>
            </div>
          </div>
        </section>`
