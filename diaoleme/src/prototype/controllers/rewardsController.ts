import { HAIRSTYLE_CATALOG } from '../../services/model'
import { useUserStore } from '../../store/UserStore'
import { renderBuddyHairStyles } from './buddyController'
import { getLevelProgress, todayKey, WEEKDAY_LABELS } from './progress'
import { escapeHtml, publicAssetUrl, setHtml } from './ui'

const REWARD_ASSET_BASE = publicAssetUrl('rewards-assets/')
const ownedRewardsKey = () => 'diaoleme-owned-rewards'
const rewardRecordsKey = () => 'diaoleme-reward-purchase-records'

export const REWARD_MARKET_ITEMS: Array<{
  id: string
  name: string
  subtitle: string
  points: number
  image: string
  category: string
  unlockId?: string
}> = [
  { id: 'flower', name: '樱花发箍', subtitle: '发型装扮', points: 200, image: `${REWARD_ASSET_BASE}reward-flower.png`, category: '发型装扮', unlockId: 'medium' },
  { id: 'starlight', name: '星光泡泡发型', subtitle: '发型装扮', points: 350, image: `${REWARD_ASSET_BASE}reward-starlight.png`, category: '发型装扮', unlockId: 'curly' },
  { id: 'serum', name: '生发精华液 30ml', subtitle: '实物好物', points: 480, image: `${REWARD_ASSET_BASE}reward-serum.png`, category: '护发好物' },
  { id: 'healing', name: '治愈蘑菇帽', subtitle: '陪伴道具', points: 280, image: `${REWARD_ASSET_BASE}reward-healing.png`, category: '陪伴道具' },
  { id: 'gift', name: '护发礼盒套装', subtitle: '实物好物', points: 650, image: `${REWARD_ASSET_BASE}reward-gift.png`, category: '护发好物' },
  { id: 'lamp', name: '蒲公英小夜灯', subtitle: '限量周边', points: 320, image: `${REWARD_ASSET_BASE}reward-lamp.png`, category: '定制周边' },
  { id: 'sprout', name: '嫩芽发型', subtitle: '发型装扮', points: 250, image: `${REWARD_ASSET_BASE}reward-sprout.png`, category: '发型装扮', unlockId: 'long' },
  { id: 'brush', name: '头皮按摩梳', subtitle: '实物好物', points: 420, image: `${REWARD_ASSET_BASE}reward-brush.png`, category: '护发好物' },
  { id: 'cape', name: '银河披风', subtitle: '陪伴道具', points: 500, image: `${REWARD_ASSET_BASE}reward-cape.png`, category: '陪伴道具' },
  { id: 'vip', name: '7天特权卡', subtitle: '成长特权', points: 800, image: `${REWARD_ASSET_BASE}reward-vip.png`, category: '成长特权' },
]

export type RewardMarketItem = (typeof REWARD_MARKET_ITEMS)[number]

/** Demo 用成长等级奖励：绑定商城同款，保证「差多少 XP」与商城一致 */
const GROWTH_LEVEL_REWARDS: Array<{ level: number; name: string; image: string; marketId: string }> = [
  { level: 1, name: '樱花发箍', image: `${REWARD_ASSET_BASE}reward-flower.png`, marketId: 'flower' },
  { level: 2, name: '星光泡泡', image: `${REWARD_ASSET_BASE}reward-starlight.png`, marketId: 'starlight' },
  { level: 3, name: '生发精华', image: `${REWARD_ASSET_BASE}reward-serum.png`, marketId: 'serum' },
  { level: 4, name: '蘑菇小帽', image: `${REWARD_ASSET_BASE}reward-healing.png`, marketId: 'healing' },
  { level: 5, name: '护发礼盒', image: `${REWARD_ASSET_BASE}reward-gift.png`, marketId: 'gift' },
  { level: 6, name: '蒲公英灯', image: `${REWARD_ASSET_BASE}reward-lamp.png`, marketId: 'lamp' },
  { level: 7, name: '嫩芽发型', image: `${REWARD_ASSET_BASE}reward-sprout.png`, marketId: 'sprout' },
  { level: 8, name: '按摩木梳', image: `${REWARD_ASSET_BASE}reward-brush.png`, marketId: 'brush' },
  { level: 9, name: '银河披风', image: `${REWARD_ASSET_BASE}reward-cape.png`, marketId: 'cape' },
  { level: 10, name: '7天特权', image: `${REWARD_ASSET_BASE}reward-vip.png`, marketId: 'vip' },
  { level: 11, name: '花瓣发卡', image: `${REWARD_ASSET_BASE}reward-flower.png`, marketId: 'flower' },
  { level: 12, name: '星尘徽章', image: `${REWARD_ASSET_BASE}reward-starlight.png`, marketId: 'starlight' },
]


type RewardPurchaseRecord = {
  id: string
  name: string
  date: string
  points: string
  status: string
  image: string
}

export function loadOwnedRewards() {
  try {
    return new Set<string>(JSON.parse(localStorage.getItem(ownedRewardsKey()) || '[]'))
  } catch {
    return new Set<string>()
  }
}

function saveOwnedRewards(owned: Set<string>) {
  localStorage.setItem(ownedRewardsKey(), JSON.stringify([...owned]))
}

export function clearOwnedRewards() {
  localStorage.removeItem(ownedRewardsKey())
  localStorage.removeItem(rewardRecordsKey())
}

function isRewardOwned(item: RewardMarketItem, unlockedHairStyles: string[], owned = loadOwnedRewards()) {
  // 商城「已拥有」只认真实兑换记录，避免发型解锁或旧逻辑把未兑换商品标成已拥有
  if (owned.has(item.id)) return true
  return false
}

function getMarketItemById(id: string) {
  return REWARD_MARKET_ITEMS.find((item) => item.id === id)
}

/** 商城 / 成长轨共用：已兑换 → 已拥有；否则按真实 XP 显示可兑换或还差 */
function shopStatusForItem(item: RewardMarketItem, points: number, owned = loadOwnedRewards()) {
  if (isRewardOwned(item, [], owned)) {
    return { owned: true, canBuy: false, status: '已拥有', need: 0 }
  }
  const need = Math.max(0, item.points - points)
  if (need === 0) {
    return { owned: false, canBuy: true, status: '可兑换', need: 0 }
  }
  return { owned: false, canBuy: false, status: `还差 ${need.toLocaleString('en-US')} XP`, need }
}

/** 一次性清掉旧版错误「已拥有」缓存，与真实 XP 对齐 */
function reconcileOwnedRewardsCache() {
  if (typeof window === 'undefined') return
  const flagKey = 'diaoleme-rewards-owned-sync-v3'
  if (window.localStorage.getItem(flagKey) === '1') return
  window.localStorage.removeItem(ownedRewardsKey())
  window.localStorage.removeItem(rewardRecordsKey())
  window.localStorage.setItem(flagKey, '1')
}

function loadRewardPurchaseRecords(): RewardPurchaseRecord[] {
  try {
    return JSON.parse(localStorage.getItem(rewardRecordsKey()) || '[]')
  } catch {
    return []
  }
}

function saveRewardPurchaseRecords(records: RewardPurchaseRecord[]) {
  localStorage.setItem(rewardRecordsKey(), JSON.stringify(records))
}

export function purchaseReward(item: RewardMarketItem) {
  const s = useUserStore.getState()
  const owned = loadOwnedRewards()
  if (isRewardOwned(item, s.unlockedHairStyles, owned)) {
    return { ok: false, message: `${item.name} 已经拥有啦` }
  }
  if (s.points < item.points) {
    return { ok: false, message: `积分还差 ${item.points - s.points} XP` }
  }

  const nextUnlocked = item.unlockId && HAIRSTYLE_CATALOG.some((hair) => hair.id === item.unlockId)
    ? Array.from(new Set([...s.unlockedHairStyles, item.unlockId]))
    : s.unlockedHairStyles

  useUserStore.setState({
    points: s.points - item.points,
    unlockedHairStyles: nextUnlocked,
  })
  owned.add(item.id)
  saveOwnedRewards(owned)

  const records = loadRewardPurchaseRecords()
  records.unshift({
    id: item.id,
    name: item.name,
    date: todayKey(),
    points: `-${item.points.toLocaleString('en-US')} XP`,
    status: '已兑换',
    image: item.image,
  })
  saveRewardPurchaseRecords(records.slice(0, 20))
  return { ok: true, message: `已兑换 ${item.name} · -${item.points} XP` }
}

function getDisplayPurchaseRecords(): RewardPurchaseRecord[] {
  const records = loadRewardPurchaseRecords().filter((record) => record.id !== 'empty' && record.name !== '还没有兑换记录')
  if (records.length) return records.slice(0, 3)

  // 兼容旧数据：已拥有商品但未写入购买日志时，用拥有列表补齐展示
  const owned = loadOwnedRewards()
  if (!owned.size) return []
  return REWARD_MARKET_ITEMS.filter((item) => owned.has(item.id)).slice(0, 3).map((item) => ({
    id: item.id,
    name: item.name,
    date: todayKey(),
    points: `-${item.points.toLocaleString('en-US')} XP`,
    status: '已兑换',
    image: item.image,
  }))
}

export function renderRewards(root: HTMLElement) {
  reconcileOwnedRewardsCache()
  const s = useUserStore.getState()
  const level = getLevelProgress(s.points)
  const owned = loadOwnedRewards()
  const checkedToday = s.checkinDays.includes(todayKey())
  const streak = s.checkinDays.length
  renderBuddyHairStyles(root)

  root.querySelectorAll<HTMLElement>('[data-rewards-points]').forEach((node) => {
    node.textContent = s.points.toLocaleString('en-US')
  })

  const nextLevel = root.querySelector<HTMLElement>('[data-rewards-next-level]')
  const levelFill = root.querySelector<HTMLElement>('[data-rewards-level-fill]')
  if (nextLevel) {
    nextLevel.textContent = level.need > 0
      ? `距离下一等级还需 ${level.need.toLocaleString('en-US')} XP`
      : '已达当前演示等级上限'
  }
  if (levelFill) levelFill.style.width = `${level.percent}%`

  const streakNode = root.querySelector<HTMLElement>('[data-rewards-streak]')
  if (streakNode) streakNode.textContent = `已连续 ${streak} 天`

  const levelBadge = root.querySelector<HTMLElement>('[data-rewards-level-badge]')
  if (levelBadge) {
    levelBadge.textContent = level.level >= 10 ? `Lv.${level.level} 已满级` : `Lv.${level.level} 成长中`
  }

  const overviewNext = root.querySelector<HTMLElement>('[data-rewards-overview-next]')
  const overviewRatio = root.querySelector<HTMLElement>('[data-rewards-overview-ratio]')
  const overviewFill = root.querySelector<HTMLElement>('[data-rewards-overview-fill]')
  if (overviewNext) {
    overviewNext.textContent = level.need > 0
      ? `距离 Lv.${Math.min(10, level.level + 1)} 还差 ${level.need.toLocaleString('en-US')} XP`
      : '已达当前演示等级上限'
  }
  if (overviewRatio) {
    overviewRatio.textContent = `${level.into.toLocaleString('en-US')} / ${level.max.toLocaleString('en-US')}`
  }
  if (overviewFill) overviewFill.style.width = `${level.percent}%`

  const todayTasksDone = 2
  const todayTasksTotal = 3
  const todayFocusDone = 17
  const todayFocusTotal = 25
  const todayGrowthDone = 3
  const todayGrowthTotal = 5
  const todayXp = checkedToday ? 5 + 3 + 2 : 3 + 2

  const todayBadge = root.querySelector<HTMLElement>('[data-rewards-today-badge]')
  if (todayBadge) todayBadge.textContent = `${todayGrowthDone} / ${todayGrowthTotal} 已完成`

  const todayXpNode = root.querySelector<HTMLElement>('[data-rewards-today-xp]')
  if (todayXpNode) todayXpNode.textContent = `+${todayXp} XP`

  const todayTasksNode = root.querySelector<HTMLElement>('[data-rewards-today-tasks]')
  if (todayTasksNode) todayTasksNode.textContent = `${todayTasksDone} 项`

  const todayFocusNode = root.querySelector<HTMLElement>('[data-rewards-today-focus]')
  if (todayFocusNode) {
    todayFocusNode.textContent = `${Math.round((todayFocusDone / todayFocusTotal) * 100)}%`
  }

  setHtml(root.querySelector('#rewardsTodayGrowth'), `
    <article class="today-growth-item">
      <div class="today-growth-item-head">
        <span class="today-growth-icon" aria-hidden="true">
          <svg viewBox="0 0 16 16" width="14" height="14"><path fill="none" stroke="#7c67e4" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" d="M3.2 8.2l3.2 3.2 6.4-6.8"/></svg>
        </span>
        <div>
          <strong>完成今日待办</strong>
          <b>+3 XP</b>
        </div>
      </div>
      <div class="today-growth-item-meta">
        <div class="today-growth-bar"><i style="width:${Math.round((todayTasksDone / todayTasksTotal) * 100)}%"></i></div>
        <span>${todayTasksDone} / ${todayTasksTotal} 项</span>
      </div>
    </article>
    <article class="today-growth-item">
      <div class="today-growth-item-head">
        <span class="today-growth-icon" aria-hidden="true">
          <svg viewBox="0 0 16 16" width="14" height="14"><path fill="none" stroke="#7c67e4" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" d="M3.2 8.2l3.2 3.2 6.4-6.8"/></svg>
        </span>
        <div>
          <strong>专注 ${todayFocusTotal} 分钟</strong>
          <b>+2 XP</b>
        </div>
      </div>
      <div class="today-growth-item-meta">
        <div class="today-growth-bar"><i style="width:${Math.round((todayFocusDone / todayFocusTotal) * 100)}%"></i></div>
        <span>还差 ${todayFocusTotal - todayFocusDone} 分钟</span>
      </div>
    </article>
  `)

  const checkinHint = root.querySelector<HTMLElement>('[data-rewards-checkin-hint]')
  if (checkinHint) {
    checkinHint.innerHTML = checkedToday
      ? '今日已打卡，积分已同步到 Home / Quests / League'
      : '今日打卡可得 <b>+5 XP</b>（与 Quests / Me 共用）'
  }

  setHtml(root.querySelector('#rewardsCheckin'), WEEKDAY_LABELS.map((day, index) => {
    const done = index < Math.min(streak, 6) || (index === 6 && checkedToday && streak >= 7)
    if (index === 6 && !done) {
      return `<button type="button" data-action="checkin"><img class="gift-circle" src="${REWARD_ASSET_BASE}gift-day.png" alt="礼物"><small>${day}</small></button>`
    }
    const mark = done
      ? `<span class="check-circle done" aria-label="已打卡"><svg class="check-mark" viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path fill="none" stroke="#ffffff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" d="M3.2 8.2l3.2 3.2 6.4-6.8"/></svg></span>`
      : `<span class="check-circle pending" aria-label="未打卡"></span>`
    return `<div>${mark}<small>${day}</small></div>`
  }).join(''))

  setHtml(root.querySelector('#shop'), REWARD_MARKET_ITEMS.map((item) => {
    const state = shopStatusForItem(item, s.points, owned)
    const stateClass = state.owned ? 'owned' : state.canBuy ? 'can-buy' : 'locked'
    return `<button class="reward-card ${stateClass}" type="button" data-reward-buy="${escapeHtml(item.id)}" ${state.owned ? 'disabled' : ''}>
      <div class="reward-image-wrap">
        <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)}">
      </div>
      <div class="reward-copy">
        <strong>${escapeHtml(item.name)}</strong>
        <span>${escapeHtml(state.status)}</span>
        <b>${item.points.toLocaleString('en-US')} XP</b>
      </div>
    </button>`
  }).join(''))

  setHtml(root.querySelector('#rewardsGrowth'), GROWTH_LEVEL_REWARDS.map((reward) => {
    const marketItem = getMarketItemById(reward.marketId)
    const state = marketItem
      ? shopStatusForItem(marketItem, s.points, owned)
      : { owned: false, canBuy: false, status: '还差 -- XP', need: 0 }
    // 与商城同一套 XP 差值；已兑换显示已领取，未兑换显示还差/可兑换
    const status = state.owned ? '已领取' : state.status
    const reached = state.owned
    return `<button type="button" class="growth-reward ${reached ? 'active' : ''}">
      <img src="${escapeHtml(reward.image)}" alt="Lv.${reward.level} ${escapeHtml(reward.name)}">
      <strong>Lv.${reward.level}</strong>
      <b>${escapeHtml(reward.name)}</b>
      <span>${escapeHtml(status)}</span>
    </button>`
  }).join(''))

  const purchaseRecords = getDisplayPurchaseRecords()
  setHtml(
    root.querySelector('#rewardsRecords'),
    purchaseRecords.length
      ? purchaseRecords.map((record) => `
    <div class="record-item">
      <img src="${escapeHtml(record.image)}" alt="${escapeHtml(record.name)}">
      <div><strong>${escapeHtml(record.name)}</strong><span>${escapeHtml(record.date)}</span></div>
      <div><b>${escapeHtml(record.points)}</b><small>${escapeHtml(record.status)}</small></div>
    </div>
  `).join('')
      : `<div class="record-empty">暂无兑换记录，去商城看看吧</div>`,
  )
}
