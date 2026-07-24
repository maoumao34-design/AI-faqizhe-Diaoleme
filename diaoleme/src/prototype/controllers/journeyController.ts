import { useUserStore, type ReportRecord } from '../../store/UserStore'
import { showPage } from './navigation'
import { escapeHtml, setHtml } from './ui'

function formatShortDate(date: string) {
  const [y, m, d] = date.split('-')
  return `${m}/${d}`
}

/** Scan「最近扫描记录」每页条数（AIFA-88）；布局按此固定 4 槽，不足时占位不塌 */
export const SCAN_RECORD_PAGE_SIZE = 4

function renderRecordPlaceholder() {
  return `<div class="item scan-record-placeholder" aria-hidden="true"><span></span><b class="scan-record-text"><span class="scan-record-title">&nbsp;</span><small class="scan-record-meta">&nbsp;</small></b><span class="status">&nbsp;</span></div>`
}

function renderRecordItems(records: ReportRecord[], timeline = false, pageSlots = 0) {
  const emptySlot = `<div class="item"><span>📷</span><b class="scan-record-text"><span class="scan-record-title">暂无记录</span><small class="scan-record-meta">上传图片后会出现在这里。</small></b><span class="status">--</span></div>`
  if (!records.length) {
    if (pageSlots <= 0) return emptySlot
    return emptySlot + Array.from({ length: Math.max(0, pageSlots - 1) }, () => renderRecordPlaceholder()).join('')
  }
  const rows = records.map((r) => {
    const recordId = escapeHtml(r.id)
    const itemAttrs = timeline ? '' : ` data-view-report="${recordId}" role="button" tabindex="0"`
    const delta = typeof r.score_delta === 'number'
      ? r.score_delta > 0 ? `↑${r.score_delta}` : r.score_delta < 0 ? `↓${Math.abs(r.score_delta)}` : '→0'
      : null
    const growth = typeof r.exp_added === 'number' && r.exp_added > 0 ? `+${r.exp_added}XP` : ''
    const metaText = delta
      ? (r.prev_title ? `对比「${r.prev_title}」 ${delta}` : `较上次 ${delta}`)
      : r.summary
    const scoreLabel = growth ? `${r.score} 分 · ${growth}` : `${r.score} 分`
    const titleAttr = escapeHtml(r.title)
    const metaAttr = escapeHtml(metaText)
    return `<div class="item"${itemAttrs}><span>${timeline ? r.date.slice(5) : '〰'}</span><b class="scan-record-text"><span class="scan-record-title" title="${titleAttr}">${escapeHtml(r.title)}</span><small class="scan-record-meta" title="${metaAttr}">${escapeHtml(metaText)}</small></b><button class="status" data-view-report="${recordId}" title="${escapeHtml(scoreLabel)}">${escapeHtml(scoreLabel)}</button></div>`
  }).join('')
  if (pageSlots <= 0 || records.length >= pageSlots) return rows
  return rows + Array.from({ length: pageSlots - records.length }, () => renderRecordPlaceholder()).join('')
}

export function groupReportsByDay(records: ReportRecord[]) {
  return records.reduce<Record<string, ReportRecord[]>>((days, record) => {
    days[record.date] = days[record.date] || []
    days[record.date].push(record)
    return days
  }, {})
}

function buildJourneyMilestones(records: ReportRecord[], groupedDays: Record<string, ReportRecord[]>) {
  const days = Object.keys(groupedDays).sort().reverse()
  if (!records.length) {
    return [
      { icon: '📷', title: '等待首次扫描', note: '点击去 Scan 上传', date: '' },
      { icon: '🌱', title: '报告会自动保存', note: '生成后出现在这里', date: '' },
      { icon: '✨', title: '趋势稍后生成', note: '多次记录后更清晰', date: '' },
    ]
  }
  const best = records.reduce((top, item) => (item.score > top.score ? item : top), records[0])
  return [
    { icon: '⚑', title: '开始记录', note: formatShortDate(days[days.length - 1] || records[records.length - 1].date), date: days[days.length - 1] || records[records.length - 1].date },
    { icon: '📄', title: `${records.length} 份报告`, note: 'Scan 自动沉淀', date: records[0].date },
    { icon: '⭐', title: '最高状态分', note: `${best.score} 分`, date: best.date },
    { icon: '🗓', title: `${days.length} 个记录日`, note: '持续观察中', date: days[0] || records[0].date },
  ]
}

function buildJourneyHighlights(records: ReportRecord[], groupedDays: Record<string, ReportRecord[]>) {
  if (!records.length) {
    return `<div class="item"><span>🌱</span><b>还没有高光<small>完成一次 Scan 后自动生成。</small></b><button class="pill" data-go="scan">去扫描</button></div>`
  }
  const latest = records[0]
  const best = records.reduce((top, item) => (item.score > top.score ? item : top), latest)
  return [
    `<div class="item"><span>📄</span><b>最新报告已保存<small>${escapeHtml(latest.title)}</small></b><button class="pill" data-view-report="${escapeHtml(latest.id)}">查看</button></div>`,
    `<div class="item"><span>⭐</span><b>本月最高状态分<small>${best.score} 分，仅作趣味记录。</small></b><button class="pill" data-view-report="${escapeHtml(best.id)}">打开</button></div>`,
    `<div class="item"><span>🗓</span><b>${Object.keys(groupedDays).length} 个记录日<small>每次上传都会沉淀到 Journey。</small></b><button class="pill" data-action="open-journey">回看</button></div>`,
  ].join('')
}

export function buildTrendBars(records: ReportRecord[]) {
  const values = records.slice(0, 7).reverse().map((item) => Math.max(18, Math.min(96, item.score)))
  const fallback = [28, 36, 44, 52, 60]
  return (values.length ? values : fallback).map((v) => `<span class="bar" style="height:${v}%"></span>`).join('')
}

export function renderHistory(root: HTMLElement) {
  const history = useUserStore.getState().reportHistory
  const scanPageSize = SCAN_RECORD_PAGE_SIZE
  const totalPages = Math.max(1, Math.ceil(history.length / scanPageSize))
  const currentPage = Math.min(Math.max(Number(root.dataset.scanRecordPage || 0), 0), totalPages - 1)
  root.dataset.scanRecordPage = String(currentPage)
  const pageRecords = history.slice(currentPage * scanPageSize, currentPage * scanPageSize + scanPageSize)
  // 始终占位分页条，避免有/无翻页时历史卡高度跳动（AIFA-80/88）
  const pagerDisabled = history.length <= scanPageSize
  const pager = `<div class="scan-record-pager"${pagerDisabled ? ' data-pager-idle="1"' : ''}><button class="pill" data-scan-record-page="${Math.max(0, currentPage - 1)}" ${currentPage === 0 || pagerDisabled ? 'disabled' : ''}>上一页</button><small>${currentPage + 1} / ${totalPages}</small><button class="pill" data-scan-record-page="${Math.min(totalPages - 1, currentPage + 1)}" ${currentPage >= totalPages - 1 || pagerDisabled ? 'disabled' : ''}>下一页</button></div>`
  const latest = history.slice(0, 4)
  const latestSource = history[0]?.source_label || '等待分析'
  const latestSourceText = escapeHtml(latestSource)
  const latestSourceShort = escapeHtml(shortenScanSource(latestSource))
  const rawAvg = history.length ? Math.round(history.reduce((sum, record) => sum + record.score, 0) / history.length) : null
  // 状态分产品预期 0–99；异常 3–4 位数钳到 99，布局仍按 1–4 位居中兜底（AIFA-64）
  const avgScore = rawAvg == null ? null : Math.max(0, Math.min(99, rawAvg))
  const avgDigits = avgScore == null ? 2 : String(avgScore).length
  setHtml(
    root.querySelector('[data-page="scan"] .grid .card:nth-child(2)'),
    `<h3>本周扫描数据</h3><div class="three grid scan-stat-grid">` +
      `<div class="scan-stat-item"><div class="scan-stat-value"><span class="big-number" data-digits="${String(history.length).length}">${history.length}</span></div><small>扫描次数</small></div>` +
      `<div class="scan-stat-item"><div class="scan-stat-value"><span class="big-number" data-digits="${avgDigits}">${avgScore ?? '--'}</span></div><small>平均状态分</small></div>` +
      `<div class="scan-stat-item scan-source-stat"><div class="scan-stat-value"><span class="badge scan-source-value" title="${latestSourceText}" data-full-source="${latestSourceText}">${latestSourceShort}</span></div><small>最新来源</small></div>` +
      `</div>`,
  )
  setHtml(root.querySelector('[data-page="scan"] .grid .card.item-list'), `<h3>最近扫描记录</h3><div class="scan-record-list">${renderRecordItems(pageRecords, false, scanPageSize)}</div>${pager}`)
  renderJourney(root, history)
  setHtml(root.querySelector('#diaries'), latest.length ? latest.map((r) => `<div class="item"><span><b>${formatShortDate(r.date)}</b><br>报告</span><b>${escapeHtml(r.title)}<small>${escapeHtml(r.summary)}</small></b><button class="pill" data-view-report="${escapeHtml(r.id)}">查看</button></div>`).join('') : `<div class="item"><span>📷</span><b>还没有日记<small>上传图片后会自动保存分析记录。</small></b><span>⋯</span></div>`)
}

function shortenScanSource(label: string) {
  const text = label.trim()
  if (!text) return '等待分析'
  if (/本地|fallback|demo/i.test(text)) return '本地兜底'
  if (/CC club|OpenAI|openai|真实 AI|api/i.test(text)) return '真实 AI'
  if (/mock/i.test(text)) return 'Mock'
  if (/等待/.test(text)) return '等待分析'
  return text.length > 8 ? `${text.slice(0, 7)}…` : text
}

export function renderJourney(root: HTMLElement, history: ReportRecord[]) {
  const groupedDays = groupReportsByDay(history)
  const latest = history.slice(0, 4)
  const avg = history.length ? Math.round(history.reduce((sum, item) => sum + item.score, 0) / history.length) : null
  const streak = useUserStore.getState().checkinDays.length

  setHtml(root.querySelector('#milestones'), buildJourneyMilestones(history, groupedDays).map((m) => `
    <button class="milestone" ${m.date ? `data-view-day="${escapeHtml(m.date)}"` : 'data-go="scan"'}>
      <div class="dot">${m.icon}</div>${escapeHtml(m.title)}<br><small>${escapeHtml(m.note)}</small>
    </button>
  `).join(''))

  setHtml(root.querySelector('#timeline'), latest.length ? latest.map((r, index) => {
    const delta = typeof r.score_delta === 'number'
      ? r.score_delta > 0 ? `↑${r.score_delta}` : r.score_delta < 0 ? `↓${Math.abs(r.score_delta)}` : '持平'
      : null
    const compareBadge = delta
      ? `<span class="badge">${escapeHtml(delta)}${typeof r.exp_added === 'number' && r.exp_added > 0 ? ` · +${r.exp_added}XP` : ''}</span>`
      : (index === 0 ? '<span class="badge">最新</span>' : '')
    const compareLine = delta && r.prev_title
      ? `<small>对比上一份「${escapeHtml(r.prev_title)}」· ${escapeHtml(r.summary)}</small>`
      : `<small>${escapeHtml(r.summary)}</small>`
    return `
    <div class="item journey-record">
      <span>${escapeHtml(formatShortDate(r.date))}</span>
      <b>${escapeHtml(r.title)}${compareLine}</b>
      <span class="status">${r.score} 分</span>
      <button class="pill primary" data-view-report="${escapeHtml(r.id)}">查看报告</button>
      <button class="pill" data-share-report="${escapeHtml(r.id)}">分享到社区</button>
      ${compareBadge}
    </div>
  `
  }).join('') : `
    <div class="item journey-empty">
      <span>📷</span>
      <b>还没有旅程记录<small>完成一次 Scan 上传后，你的趣味报告和历史对比会自动出现在这里。</small></b>
      <button class="pill primary" data-go="scan">去上传第一张</button>
    </div>
  `)

  setHtml(root.querySelector('[data-page="journey"] aside .card:nth-child(1)'), `
    <h3>旅程总览</h3>
    <div class="three grid">
      <div><span class="big-number">${history.length}</span><br>历史报告</div>
      <div><span class="big-number">${avg || '--'}</span><br>平均状态分</div>
      <div><span class="big-number">${streak}</span><br>打卡天数</div>
    </div>
    <button class="pill primary" data-go="scan">新增扫描</button>
  `)
  setHtml(root.querySelector('[data-page="journey"] aside .card:nth-child(2)'), `
    <h3>状态趋势</h3>
    <div class="chart">${buildTrendBars(history)}</div>
    <p>${history.length ? '根据最近扫描报告生成，只做轻松记录参考。' : '完成一次 Scan 后，这里会显示报告趋势。'}</p>
  `)
  setHtml(root.querySelector('[data-page="journey"] aside .card:nth-child(3)'), `
    <h3>本月高光时刻</h3>
    <div class="item-list">
      ${buildJourneyHighlights(history, groupedDays)}
    </div>
    <button class="pill" data-action="journey-share">分享到 Community</button>
  `)
}

export function openJourney(root: HTMLElement) {
  showPage(root, 'journey')
}
