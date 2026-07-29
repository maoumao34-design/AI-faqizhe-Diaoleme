import { HAIRSTYLE_CATALOG } from '../../services/model'
import { useUserStore, type ReportRecord } from '../../store/UserStore'
import { showPage } from './navigation'
import { escapeHtml, setHtml, showToast } from './ui'

export type BuddyCareState = {
  energy: number
  love: number
  feedCount: number
  lastFed: string | null
}

type BuddyControllerOptions = {
  avgScore: (records: ReportRecord[]) => number | null
  buildTrendBars: (records: ReportRecord[]) => string
  getQuestCount: () => { done: number; total: number }
  todayKey: () => string
}

const buddyCareKey = () => 'diaoleme-prototype-buddy-care'
const selectedHairStyleKey = () => 'diaoleme-prototype-selected-hair-style'

/** final-pages 发型视觉：映射到已有交付素材，禁止空 mini-buddy */
const HAIR_VISUAL: Record<string, { img: string; levelLabel: string }> = {
  none: { img: './assets/buddy/hairstyles/dandelion.png', levelLabel: 'Lv.5' },
  short: { img: './assets/buddy/hairstyles/blue-bob.png', levelLabel: 'Lv.8' },
  medium: { img: './assets/buddy/hairstyles/ribbon.png', levelLabel: 'Lv.10' },
  long: { img: './assets/buddy/hairstyles/dandelion.png', levelLabel: 'Lv.12' },
  curly: { img: './assets/buddy/hairstyles/blue-bob.png', levelLabel: 'Lv.14' },
  bun: { img: './assets/buddy/hairstyles/ribbon.png', levelLabel: 'Lv.18' },
}

const DISPLAY_NAME: Record<string, string> = {
  none: '蒲公英蓬蓬头',
  short: '星光短发',
  medium: '彩虹飘带',
  long: '飘逸长发',
  curly: '羊毛卷',
  bun: '丸子头',
}

export function renderBuddy(root: HTMLElement, options: BuddyControllerOptions) {
  const s = useUserStore.getState()
  const care = loadBuddyCare()
  const latestReport = s.reportHistory[0]
  const health = Math.max(62, Math.min(98, Math.round((s.dropScore ?? 82) + Math.min(s.reportHistory.length, 6))))
  const moodScore = Math.max(56, Math.min(96, Math.round((care.energy + care.love) / 2)))
  const mood = moodScore >= 78 ? 'Happy' : moodScore >= 64 ? 'Calm' : 'Need Care'
  const questCount = options.getQuestCount()
  const companionDays = Math.max(s.checkinDays.length, s.reportHistory.length ? 1 : 0, 38)

  // Keep final-pages Buddy shell — only hydrate values, never replace with old .metric-row DOM.
  const headingP = root.querySelector<HTMLElement>('[data-page="buddy"] .buddy-heading-new p')
  if (headingP) headingP.textContent = `陪伴你已经 ${companionDays} 天啦 💗`

  const levelEl = root.querySelector<HTMLElement>('[data-page="buddy"] .buddy-heading-new .level')
  if (levelEl) {
    const level = Math.max(1, Math.min(9, 1 + Math.floor(s.points / 400)))
    levelEl.textContent = `Lv.${level}`
  }

  const stats = root.querySelectorAll<HTMLElement>('[data-page="buddy"] .buddy-status .buddy-stat')
  if (stats.length >= 3) {
    const strong0 = stats[0].querySelector('strong')
    const meter0 = stats[0].querySelector<HTMLElement>('.buddy-meter span')
    if (strong0) strong0.textContent = `${health} / 100`
    if (meter0) meter0.style.width = `${health}%`

    const strong1 = stats[1].querySelector('strong')
    const meter1 = stats[1].querySelector<HTMLElement>('.buddy-meter span')
    if (strong1) strong1.textContent = `${care.energy} / 100`
    if (meter1) meter1.style.width = `${care.energy}%`

    const strong2 = stats[2].querySelector('strong')
    const meter2 = stats[2].querySelector<HTMLElement>('.buddy-meter span')
    if (strong2) strong2.textContent = mood
    if (meter2) meter2.style.width = `${moodScore}%`
  }

  renderBuddyHairStyles(root)
  applySelectedHairToHero(root, currentHairStyle(s.unlockedHairStyles))

  // Wire dress/feed actions onto static final-pages buttons (index order).
  const actionBtns = root.querySelectorAll<HTMLButtonElement>('[data-page="buddy"] .buddy-action-list .buddy-action')
  if (actionBtns[0] && !actionBtns[0].dataset.buddyAction) actionBtns[0].dataset.buddyAction = 'dress'
  if (actionBtns[1] && !actionBtns[1].dataset.buddyAction) actionBtns[1].dataset.buddyAction = 'feed'

  const report = root.querySelector<HTMLElement>('[data-page="buddy"] .buddy-report')
  if (report) {
    const number = report.querySelector('.number')
    const p = report.querySelector('p')
    if (number) {
      const count = latestReport?.count || (s.dropScore != null ? String(Math.max(8, Math.round(120 - (s.dropScore || 0)))) : '12')
      number.innerHTML = `${escapeHtml(String(count))} <small>根</small>`
    }
    if (p) {
      p.textContent = latestReport?.summary || '大多是健康的毛发，状态很棒！'
    }
  }

  const summary = root.querySelector<HTMLElement>('[data-page="buddy"] .buddy-summary')
  if (summary) {
    const summaryP = summary.querySelector('p')
    if (summaryP) {
      summaryP.textContent = `你的护理表现超过了 ${Math.min(96, 60 + questCount.done * 4 + s.checkinDays.length)}% 的用户，继续保持哦！`
    }
    const metrics = summary.querySelectorAll('.summary-metrics strong')
    if (metrics[0]) metrics[0].textContent = `${s.checkinDays.length || 7} 天`
    if (metrics[1]) metrics[1].textContent = `${questCount.done} / ${Math.max(questCount.total, 7)}`
    if (metrics[2]) metrics[2].textContent = String(options.avgScore(s.reportHistory) || '优秀')
    if (metrics[3]) metrics[3].textContent = care.energy >= 78 ? '良好' : '待补充'
  }
}

export function renderBuddyHairStyles(root: HTMLElement) {
  const s = useUserStore.getState()
  const selectedHair = currentHairStyle(s.unlockedHairStyles)
  const ownedHairStyles = HAIRSTYLE_CATALOG.filter((h) => s.unlockedHairStyles.includes(h.id)).length
  const title = root.querySelector('[data-page="buddy"] .hair-card .section-title')
  if (title) {
    title.innerHTML = `✦　解锁发型 <span class="badge">${ownedHairStyles} / ${HAIRSTYLE_CATALOG.length} 已解锁</span>`
  }

  const items = HAIRSTYLE_CATALOG.map((h) => {
    const owned = s.unlockedHairStyles.includes(h.id)
    const active = h.id === selectedHair
    const visual = HAIR_VISUAL[h.id] || HAIR_VISUAL.none
    const name = DISPLAY_NAME[h.id] || h.name
    // final-pages：未解锁仍显示发型图 + 🔒，只有 Coming Soon 用 ?
    const hint = active ? '使用中' : owned ? visual.levelLabel : `${visual.levelLabel}　🔒`
    const cls = `hair-item${active ? ' selected' : ''}${owned ? '' : ' locked'}`
    return `<button class="${cls}" data-unlock-id="${escapeHtml(h.id)}" type="button"><img src="${escapeHtml(visual.img)}" alt="${escapeHtml(name)}"><b>${escapeHtml(name)}</b><small>${escapeHtml(hint)}</small></button>`
  }).join('')

  // Keep 3 "Coming Soon" placeholders like final-pages demo rail.
  const placeholders = [12, 14, 18]
    .map((lv) => `<button class="hair-item locked" type="button" disabled><div class="lock-shape">?</div><b>Coming Soon</b><small>Lv.${lv}　🔒</small></button>`)
    .join('')

  setHtml(root.querySelector('#skins'), items + placeholders)
}

/** Resolve Buddy「使用中」发型对应素材（与换装轨同一套，供 FAB 共用）。 */
export function hairVisualSrc(hairId: string): string {
  return (HAIR_VISUAL[hairId] || HAIR_VISUAL.none).img
}

/** Sync cross-page AI 助手 FAB avatar to current Buddy hairstyle (AIFA-110). */
export function syncAssistantFabAvatar(hairId?: string) {
  const list = useUserStore.getState().unlockedHairStyles
  const id =
    hairId ||
    (() => {
      const saved = localStorage.getItem(selectedHairStyleKey())
      if (saved && list.includes(saved)) return saved
      return list[list.length - 1] || HAIRSTYLE_CATALOG[0]?.id || 'none'
    })()
  const src = hairVisualSrc(id)
  document.querySelectorAll<HTMLImageElement>('.ai-chat-bubble img').forEach((img) => {
    if (img.getAttribute('src') !== src) img.src = src
  })
}

function applySelectedHairToHero(root: HTMLElement, hairId: string) {
  const visual = HAIR_VISUAL[hairId] || HAIR_VISUAL.none
  const hero = root.querySelector<HTMLImageElement>('[data-page="buddy"] .buddy-character')
  // Keep buddy-hero.png as body; overlay hairstyle is the rail selection cue.
  // If selection has a dedicated full-body asset we only have hairstyle crops —
  // update tip mascot thumb to selected hair for visible feedback.
  const tipImg = root.querySelector<HTMLImageElement>('[data-page="buddy"] .buddy-tip img')
  if (tipImg) tipImg.src = visual.img
  if (hero && hairId !== 'none') {
    // Prefer full hero for default; for unlocked styles keep hero body (design).
    hero.src = './assets/buddy/buddy-hero.png'
  }
  // AIFA-110: FAB must mirror「使用中」造型 across pages (and after hard refresh via localStorage).
  syncAssistantFabAvatar(hairId)
}

export function handleBuddyAction(action: string, root: HTMLElement, todayKey: () => string) {
  if (action === 'dress') {
    showToast(root, '已打开造型选择，点击卡片可使用或解锁')
    root.querySelector('#skins')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    return
  }
  if (action === 'feed') {
    const care = loadBuddyCare()
    saveBuddyCare({
      energy: Math.min(100, care.energy + 12),
      love: Math.min(100, care.love + 6),
      feedCount: care.feedCount + 1,
      lastFed: todayKey(),
    })
    useUserStore.getState().addPoints(3)
    showToast(root, '小发球吃饱啦：能量 +12，爱心 +6，XP +3')
    return
  }
  if (action === 'diary') {
    showPage(root, 'diary')
    showToast(root, '已打开 Buddy Diary')
    return
  }
  if (action === 'growth' || action === 'journey') {
    showPage(root, 'journey')
    showToast(root, '已打开成长记录')
  }
}

function persistHairStyle(id: string) {
  localStorage.setItem(selectedHairStyleKey(), id)
}

export function selectHairStyle(id: string) {
  persistHairStyle(id)
  syncAssistantFabAvatar(id)
}

export function currentHairStyle(unlocked: string[]) {
  const saved = localStorage.getItem(selectedHairStyleKey())
  if (saved && unlocked.includes(saved)) return saved
  const fallback = unlocked[unlocked.length - 1] || HAIRSTYLE_CATALOG[0]?.id || 'none'
  persistHairStyle(fallback)
  return fallback
}

function loadBuddyCare(): BuddyCareState {
  try {
    return { energy: 68, love: 86, feedCount: 0, lastFed: null, ...JSON.parse(localStorage.getItem(buddyCareKey()) || '{}') }
  } catch {
    return { energy: 68, love: 86, feedCount: 0, lastFed: null }
  }
}

function saveBuddyCare(care: BuddyCareState) {
  localStorage.setItem(buddyCareKey(), JSON.stringify(care))
}
