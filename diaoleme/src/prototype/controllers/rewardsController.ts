import { HAIRSTYLE_CATALOG } from '../../services/model'
import { useUserStore } from '../../store/UserStore'
import { renderBuddyHairStyles } from './buddyController'
import { getLevelProgress, todayKey, WEEKDAY_LABELS, XP_PER_LEVEL } from './progress'
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
  { id: 'flower', name: '樱花发箍', subtitle: '发型装扮', points: 200, image: `${REWARD_ASSET_BASE}reward-flower.svg`, category: '发型装扮', unlockId: 'medium' },
  { id: 'starlight', name: '星光泡泡发型', subtitle: '发型装扮', points: 350, image: `${REWARD_ASSET_BASE}reward-starlight.svg`, category: '发型装扮', unlockId: 'curly' },
  { id: 'serum', name: '生发精华液 30ml', subtitle: '实物好物', points: 480, image: `${REWARD_ASSET_BASE}reward-serum.svg`, category: '护发好物' },
  { id: 'healing', name: '治愈蘑菇帽', subtitle: '陪伴道具', points: 280, image: `${REWARD_ASSET_BASE}reward-healing.svg`, category: '陪伴道具' },
  { id: 'gift', name: '护发礼盒套装', subtitle: '实物好物', points: 650, image: `${REWARD_ASSET_BASE}reward-gift.svg`, category: '护发好物' },
  { id: 'lamp', name: '蒲公英小夜灯', subtitle: '限量周边', points: 320, image: `${REWARD_ASSET_BASE}reward-lamp.svg`, category: '定制周边' },
  { id: 'sprout', name: '嫩芽发型', subtitle: '发型装扮', points: 250, image: `${REWARD_ASSET_BASE}reward-sprout.svg`, category: '发型装扮', unlockId: 'long' },
  { id: 'brush', name: '头皮按摩梳', subtitle: '实物好物', points: 420, image: `${REWARD_ASSET_BASE}reward-brush.svg`, category: '护发好物' },
  { id: 'cape', name: '银河披风', subtitle: '陪伴道具', points: 500, image: `${REWARD_ASSET_BASE}reward-cape.svg`, category: '陪伴道具' },
  { id: 'vip', name: '7天特权卡', subtitle: '成长特权', points: 800, image: `${REWARD_ASSET_BASE}reward-vip.svg`, category: '成长特权' },
]

export type RewardMarketItem = (typeof REWARD_MARKET_ITEMS)[number]

/** Demo 用成长等级奖励：多造几条，保证横向滑动可看完全部 */
const GROWTH_LEVEL_REWARDS: Array<{ level: number; name: string; image: string }> = [
  { level: 1, name: '樱花发箍', image: `${REWARD_ASSET_BASE}reward-flower.svg` },
  { level: 2, name: '星光泡泡', image: `${REWARD_ASSET_BASE}reward-starlight.svg` },
  { level: 3, name: '生发精华', image: `${REWARD_ASSET_BASE}reward-serum.svg` },
  { level: 4, name: '蘑菇小帽', image: `${REWARD_ASSET_BASE}reward-healing.svg` },
  { level: 5, name: '护发礼盒', image: `${REWARD_ASSET_BASE}reward-gift.svg` },
  { level: 6, name: '蒲公英灯', image: `${REWARD_ASSET_BASE}reward-lamp.svg` },
  { level: 7, name: '嫩芽发型', image: `${REWARD_ASSET_BASE}reward-sprout.svg` },
  { level: 8, name: '按摩木梳', image: `${REWARD_ASSET_BASE}reward-brush.svg` },
  { level: 9, name: '银河披风', image: `${REWARD_ASSET_BASE}reward-cape.svg` },
  { level: 10, name: '7天特权', image: `${REWARD_ASSET_BASE}reward-vip.svg` },
  { level: 11, name: '花瓣发卡', image: `${REWARD_ASSET_BASE}reward-flower.svg` },
  { level: 12, name: '星尘徽章', image: `${REWARD_ASSET_BASE}reward-starlight.svg` },
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
  if (owned.has(item.id)) return true
  if (item.unlockId && unlockedHairStyles.includes(item.unlockId)) return true
  return false
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

  const checkinHint = root.querySelector<HTMLElement>('[data-rewards-checkin-hint]')
  if (checkinHint) {
    checkinHint.innerHTML = checkedToday
      ? '今日已打卡，积分已同步到 Home / Quests / League'
      : '今日打卡可得 <b>+5 XP</b>（与 Quests / Me 共用）'
  }

  setHtml(root.querySelector('#rewardsCheckin'), WEEKDAY_LABELS.map((day, index) => {
    const done = index < Math.min(streak, 6) || (index === 6 && checkedToday && streak >= 7)
    if (index === 6 && !done) {
      return `<button type="button" data-action="checkin"><img class="gift-circle" src="${REWARD_ASSET_BASE}gift-day.svg" alt="礼物"><small>${day}</small></button>`
    }
    const mark = done
      ? `<span class="check-circle done" aria-label="已打卡">✓</span>`
      : `<span class="check-circle pending" aria-label="未打卡"></span>`
    return `<div>${mark}<small>${day}</small></div>`
  }).join(''))

  setHtml(root.querySelector('#shop'), REWARD_MARKET_ITEMS.map((item) => {
    const ownedItem = isRewardOwned(item, s.unlockedHairStyles, owned)
    const canBuy = !ownedItem && s.points >= item.points
    const status = ownedItem ? '已拥有' : canBuy ? '可兑换' : `还差 ${item.points - s.points} XP`
    const stateClass = ownedItem ? 'owned' : canBuy ? 'can-buy' : 'locked'
    return `<button class="reward-card ${stateClass}" type="button" data-reward-buy="${escapeHtml(item.id)}" ${ownedItem ? 'disabled' : ''}>
      <div class="reward-image-wrap">
        <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)}">
      </div>
      <div class="reward-copy">
        <strong>${escapeHtml(item.name)}</strong>
        <span>${escapeHtml(status)}</span>
        <b>${item.points.toLocaleString('en-US')} XP</b>
      </div>
    </button>`
  }).join(''))

  setHtml(root.querySelector('#rewardsGrowth'), GROWTH_LEVEL_REWARDS.map((reward) => {
    const reached = level.level >= reward.level
    const status = reached
      ? (level.level > reward.level ? '已领取' : '当前等级')
      : `差 ${Math.max(0, reward.level * XP_PER_LEVEL - s.points)} XP`
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
