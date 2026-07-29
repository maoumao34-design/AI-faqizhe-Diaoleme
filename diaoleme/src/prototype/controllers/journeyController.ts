import { useUserStore, type ReportRecord } from '../../store/UserStore'
import { showPage } from './navigation'
import { escapeHtml, setHtml } from './ui'

/** Scan「最近扫描记录」每页条数（AIFA-88）；布局按此固定 4 槽，不足时占位不塌 */
export const SCAN_RECORD_PAGE_SIZE = 4

/** Journey 时间线首屏条数；之后每次「加载更多」追加条数 */
export const JOURNEY_TIMELINE_PAGE_SIZE = 6
export const JOURNEY_TIMELINE_LOAD_MORE = 5

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
  const latestSource = history[0]?.source_label || '等待分析'
  const latestSourceText = escapeHtml(latestSource)
  const latestSourceShort = escapeHtml(shortenScanSource(latestSource))
  const rawAvg = history.length ? Math.round(history.reduce((sum, record) => sum + record.score, 0) / history.length) : null
  // 状态分产品预期 0–99；异常 3–4 位数钳到 99，布局仍按 1–4 位居中兜底（AIFA-64）
  const avgScore = rawAvg == null ? null : Math.max(0, Math.min(99, rawAvg))
  const weekCard =
    root.querySelector('[data-page="scan"] .scan-week-card') ||
    root.querySelector('[data-page="scan"] .grid .card:nth-child(2)')
  const weekBody = weekCard?.querySelector('.scan-week')
  // AIFA-109: 去掉「保持稳定」；三指标同行放大（扫描次数 / 状态平均分 / 最新来源及结果）
  const weekHtml =
    `<h3>本周扫描数据 <small>最近记录</small></h3><div class="scan-week">` +
    `<div><strong>${history.length}<small>次</small></strong><span>扫描次数</span></div>` +
    `<div><strong>${avgScore ?? '--'}</strong><span>状态平均分</span></div>` +
    `<div><strong class="scan-source-value" title="${latestSourceText}" data-full-source="${latestSourceText}">${latestSourceShort}</strong><span>最新来源及结果</span></div>` +
    `</div>`
  if (weekBody && weekCard) {
    const title = weekCard.querySelector('h3')
    if (title) title.innerHTML = `本周扫描数据 <small>最近记录</small>`
    setHtml(weekBody, `
      <div><strong>${history.length}<small>次</small></strong><span>扫描次数</span></div>
      <div><strong>${avgScore ?? '--'}</strong><span>状态平均分</span></div>
      <div><strong class="scan-source-value" title="${latestSourceText}" data-full-source="${latestSourceText}">${latestSourceShort}</strong><span>最新来源及结果</span></div>
    `)
  } else {
    setHtml(weekCard, weekHtml)
  }

  const historyCard =
    root.querySelector('[data-page="scan"] .scan-history-card') ||
    root.querySelector('[data-page="scan"] .grid .card.item-list')
  const historyList =
    root.querySelector('[data-page="scan"] .scan-history') ||
    root.querySelector('[data-page="scan"] .scan-record-list')
  if (historyList && historyCard) {
    const heading = historyCard.querySelector('h3')
    if (heading) heading.innerHTML = `最近扫描记录 <a href="#" data-go="journey">查看全部 →</a>`
    setHtml(historyList, renderRecordItems(pageRecords, false, scanPageSize) + pager)
  } else {
    setHtml(historyCard, `<h3>最近扫描记录</h3><div class="scan-record-list">${renderRecordItems(pageRecords, false, scanPageSize)}</div>${pager}`)
  }
  renderJourney(root, history)
  // AIFA-99: Diary 列表由 App.renderDiary 独占水合 final-pages 新皮；此处勿再写 #diaries。
}

function shortenScanSource(label: string) {
  const text = label.trim()
  if (!text) return '等待分析'
  // AIFA-109: 周数据第三项必须短标签，禁止「CC clu…」类截断展示
  if (/本地|fallback|demo/i.test(text)) return '本地兜底'
  if (/cc\s*club|openai|真实\s*AI|\bapi\b|compatible/i.test(text)) return '真实 AI'
  if (/mock/i.test(text)) return 'Mock'
  if (/等待/.test(text)) return '等待分析'
  // 兜底：过长来源压成「真实 AI」而不是切片省略号
  return text.length > 6 ? '真实 AI' : text
}

export function renderJourney(root: HTMLElement, history: ReportRecord[]) {
  const page = root.querySelector<HTMLElement>('[data-page="journey"]')
  if (!page) return

  // AIFA-112: keep final-pages Journey shell (design-reference/19).
  // Never replace #milestones / #timeline with legacy .milestone / .journey-record markup.
  const groupedDays = groupReportsByDay(history)
  const dayCount = Object.keys(groupedDays).length
  const streak = useUserStore.getState().checkinDays.length
  const points = useUserStore.getState().points

  const metrics = page.querySelectorAll<HTMLElement>('.journey-metrics strong')
  if (metrics.length >= 3) {
    // Prefer live Scan/checkin when present; otherwise keep demo placeholders visible.
    if (dayCount > 0) metrics[0].textContent = String(dayCount)
    if (points > 0) metrics[1].textContent = points.toLocaleString('en-US')
    if (streak > 0) metrics[2].textContent = String(streak)
  }

  const requested = Number(page.dataset.journeyVisible || JOURNEY_TIMELINE_PAGE_SIZE) || JOURNEY_TIMELINE_PAGE_SIZE
  const visibleCount = history.length ? Math.min(Math.max(requested, JOURNEY_TIMELINE_PAGE_SIZE), history.length) : JOURNEY_TIMELINE_PAGE_SIZE
  page.dataset.journeyVisible = String(visibleCount)

  const timeline = page.querySelector<HTMLElement>('#timeline')
  if (timeline) {
    if (!history.length) {
      // Keep design-reference demo rows when there is no Scan history yet.
    } else {
      const visible = history.slice(0, visibleCount)
      const usedIcons: string[] = []
      const liveRows = visible
        .map((r, index) => {
          const scoreLabel = `${Math.max(0, Math.min(99, Math.round(r.score)))} 分`
          const rewardClass =
            (typeof r.score_delta === 'number' && r.score_delta > 0) || r.score >= 70
              ? 'timeline-reward green'
              : 'timeline-reward'
          const icon = timelineIconForReport(r, usedIcons)
          usedIcons.push(icon)
          const [, m, d] = r.date.split('-')
          const weekday = weekdayLabel(r.date)
          return `<article class="timeline-row-new${index === 0 ? ' selected' : ''}" data-view-report="${escapeHtml(r.id)}"><div class="timeline-date"><b>${escapeHtml(`${m}/${d}`)}</b><small>${escapeHtml(weekday)}</small></div><span class="timeline-icon" aria-hidden="true">${icon}</span><div class="timeline-copy"><b>${escapeHtml(r.title)}</b><small>${escapeHtml(r.summary)}</small></div><span class="${rewardClass}">${escapeHtml(scoreLabel)}</span></article>`
        })
        .join('')
      setHtml(timeline, liveRows)
    }
  }

  const loadMore = page.querySelector<HTMLButtonElement>('[data-action="journey-load-more"]')
  if (loadMore) {
    const hasMore = history.length > visibleCount
    loadMore.hidden = history.length === 0 || !hasMore
    loadMore.disabled = !hasMore
    loadMore.textContent = hasMore ? '加载更多　⌄' : '已经看完啦～'
  }
}

// AIFA-119 UI/UX locked emoji map (primary / alternate when adjacent collision)
const TIMELINE_FALLBACK = ['🌱', '🎀', '🫧', '🍀'] as const

function timelineIconForReport(r: ReportRecord, usedRecently: string[] = []) {
  const text = `${r.title} ${r.summary} ${(r.tags || []).join(' ')}`
  const lower = text.toLowerCase()
  let primary: string | null = null
  let alternate: string | null = null

  if (/模糊|努力|看不清|看不清/.test(text) || /blur/.test(lower)) {
    primary = '🌫️'
    alternate = '💪'
  } else if (/发量|守护|保护|稳住/.test(text)) {
    primary = '🛡️'
    alternate = '✨'
  } else if (/隐身|低调/.test(text)) {
    primary = '🫥'
    alternate = '🌙'
  } else if (/微观|桌面|观察|微风/.test(text)) {
    primary = '🔍'
    alternate = '📷'
  } else if (r.score >= 75 || /稳|高光|闪耀|进步/.test(text)) {
    primary = '⭐'
    alternate = '🌟'
  }

  if (primary && !usedRecently.includes(primary)) return primary
  if (alternate && !usedRecently.includes(alternate)) return alternate

  const seed = hashText(r.id || r.title || text)
  for (let i = 0; i < TIMELINE_FALLBACK.length; i += 1) {
    const candidate = TIMELINE_FALLBACK[(seed + i) % TIMELINE_FALLBACK.length]
    if (!usedRecently.includes(candidate)) return candidate
  }
  return TIMELINE_FALLBACK[seed % TIMELINE_FALLBACK.length]
}

function hashText(value: string) {
  let h = 0
  for (let i = 0; i < value.length; i += 1) h = (h * 31 + value.charCodeAt(i)) >>> 0
  return h
}

export function loadMoreJourneyTimeline(root: HTMLElement) {
  const page = root.querySelector<HTMLElement>('[data-page="journey"]')
  if (!page) return { loaded: false, exhausted: true }
  const history = useUserStore.getState().reportHistory
  const loadMore = page.querySelector<HTMLButtonElement>('[data-action="journey-load-more"]')
  if (loadMore) {
    loadMore.disabled = true
    loadMore.textContent = '加载中…'
  }
  const current = Number(page.dataset.journeyVisible || JOURNEY_TIMELINE_PAGE_SIZE) || JOURNEY_TIMELINE_PAGE_SIZE
  const next = Math.min(history.length, current + JOURNEY_TIMELINE_LOAD_MORE)
  page.dataset.journeyVisible = String(next)
  renderJourney(root, history)
  return { loaded: next > current, exhausted: next >= history.length }
}

function weekdayLabel(date: string) {
  const days = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
  const dt = new Date(`${date}T12:00:00`)
  if (Number.isNaN(dt.getTime())) return ''
  return days[dt.getDay()] || ''
}

export function openJourney(root: HTMLElement) {
  showPage(root, 'journey')
}
