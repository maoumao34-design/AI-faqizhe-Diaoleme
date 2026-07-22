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

export function renderBuddy(root: HTMLElement, options: BuddyControllerOptions) {
  const s = useUserStore.getState()
  const care = loadBuddyCare()
  const latestReport = s.reportHistory[0]
  const health = Math.max(62, Math.min(98, Math.round((s.dropScore ?? 82) + Math.min(s.reportHistory.length, 6))))
  const moodScore = Math.max(56, Math.min(96, Math.round((care.energy + care.love) / 2)))
  const mood = moodScore >= 78 ? 'Happy' : moodScore >= 64 ? 'Calm' : 'Need Care'
  const questCount = options.getQuestCount()
  const companionDays = Math.max(s.checkinDays.length, s.reportHistory.length ? 1 : 0, 38)

  setHtml(root.querySelector('[data-buddy-days]'), `陪伴你已经 ${companionDays} 天啦`)

  setHtml(root.querySelector('[data-page="buddy"] .metric'), `
    <div class="metric-row"><span style="font-size:28px">💗</span><b>生命值</b><div class="meter"><div class="fill" style="--w:${health}%;--c:#ff77a8"></div></div><b>${health}/100</b></div>
    <div class="metric-row"><span style="font-size:28px">⚡</span><b>能量值</b><div class="meter"><div class="fill" style="--w:${care.energy}%;--c:#ffad2f"></div></div><b>${care.energy}/100</b></div>
    <div class="metric-row"><span style="font-size:28px">😊</span><b>心情值</b><div class="meter"><div class="fill" style="--w:${moodScore}%;--c:#8b5cf6"></div></div><b>${mood}</b></div>
  `)

  renderBuddyHairStyles(root)

  setHtml(root.querySelector('[data-buddy-actions]'), `
    <button class="item buddy-action dress" data-buddy-action="dress"><span>👗</span><b>Dress Up<small>装扮你的伙伴，选择或解锁造型</small></b><span>›</span></button>
    <button class="item buddy-action feed" data-buddy-action="feed"><span>🍚</span><b>Feed<small>喂养伙伴，补充爱与能量</small></b><span>›</span></button>
    <button class="item buddy-action diary" data-buddy-action="diary"><span>📖</span><b>Buddy Diary<small>记录我们一起成长的每一天</small></b><span>›</span></button>
    <button class="item buddy-action growth" data-buddy-action="growth"><span>📈</span><b>成长记录<small>查看伙伴的成长轨迹</small></b><span>›</span></button>
  `)

  setHtml(root.querySelector('[data-buddy-report]'), `
    <h3>今日头发报告</h3>
    <div class="buddy-report-score"><span class="big-number">${s.dropScore ?? '--'}</span><small>${s.dropScore == null ? '等待首次记录' : '趣味状态分'}</small></div>
    <p>${escapeHtml(latestReport?.summary || '还没有今日报告，完成一次 Scan 后会同步到 Buddy。')}</p>
    <div class="chart">${options.buildTrendBars(s.reportHistory)}</div>
  `)

  setHtml(root.querySelector('[data-buddy-summary]'), `
    <h3>💗 本周成长小结</h3>
    <p>你的护理表现超过了 ${Math.min(96, 60 + questCount.done * 4 + s.checkinDays.length)}% 的用户，继续保持哦！</p>
    <div class="buddy-summary-stats">
      <span><b>${s.checkinDays.length || 0} 天</b><small>护理天数</small></span>
      <span><b>${questCount.done}/${questCount.total}</b><small>任务完成</small></span>
      <span><b>${options.avgScore(s.reportHistory) || '--'}</b><small>平均状态分</small></span>
      <span><b>${care.energy >= 78 ? '良好' : '待补充'}</b><small>充足睡眠</small></span>
    </div>
  `)
  setHtml(root.querySelector('[data-buddy-cheers]'), `
    <h3>💗 来自大家的鼓励</h3>
    <div class="buddy-cheers">
      ${['Luna|你的新发型超可爱！我们一起加油呀 🌞', 'Mia|头发也在慢慢变强大呢，你一定可以的！💪', 'Ray|看到你的变化啦，好棒！！✨'].map((item) => {
        const [name, msg] = item.split('|')
        return `<div class="buddy-cheer"><span class="avatar">${name[0]}</span><b>${name}</b><p>${escapeHtml(msg)}</p><small>${name === 'Ray' ? '1 天前' : name === 'Mia' ? '5 小时前' : '2 小时前'}</small></div>`
      }).join('')}
    </div>
  `)
}

export function renderBuddyHairStyles(root: HTMLElement) {
  const s = useUserStore.getState()
  const selectedHair = currentHairStyle(s.unlockedHairStyles)
  const ownedHairStyles = HAIRSTYLE_CATALOG.filter((h) => s.unlockedHairStyles.includes(h.id)).length
  setHtml(root.querySelector('[data-page="buddy"] .section-title'), `解锁发型 <span class="badge">${ownedHairStyles} / ${HAIRSTYLE_CATALOG.length} 已解锁</span>`)
  setHtml(root.querySelector('#skins'), HAIRSTYLE_CATALOG.map((h) => {
    const owned = s.unlockedHairStyles.includes(h.id)
    const active = h.id === selectedHair
    const label = owned ? (active ? '使用中' : '点击换上') : `${h.cost} XP 解锁`
    return `<button class="skin ${active ? 'active' : ''}" data-unlock-id="${escapeHtml(h.id)}"><div class="mini-buddy" style="${owned ? '' : 'opacity:.45'}"></div><b>${escapeHtml(h.name)}</b><small>${escapeHtml(label)}</small>${owned ? '' : '<span class="buddy-lock">🔒</span>'}</button>`
  }).join(''))
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
  if (action === 'growth') {
    showPage(root, 'journey')
    showToast(root, '已打开成长记录')
  }
}

export function selectHairStyle(id: string) {
  localStorage.setItem(selectedHairStyleKey(), id)
}

export function currentHairStyle(unlocked: string[]) {
  const saved = localStorage.getItem(selectedHairStyleKey())
  if (saved && unlocked.includes(saved)) return saved
  const fallback = unlocked[unlocked.length - 1] || HAIRSTYLE_CATALOG[0]?.id || 'none'
  selectHairStyle(fallback)
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
