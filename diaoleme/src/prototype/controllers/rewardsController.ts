import { HAIRSTYLE_CATALOG } from '../../services/model'
import { useUserStore } from '../../store/UserStore'
import { renderBuddyHairStyles } from './buddyController'
import { escapeHtml, publicAssetUrl, setHtml } from './ui'

const REWARD_ASSET_BASE = publicAssetUrl('rewards-assets/')
const REWARD_MARKET_ITEMS = [
  { name: '樱花发箍', subtitle: 'Lv.3 解锁', points: 2000, image: `${REWARD_ASSET_BASE}reward-flower.png`, locked: true, unlockId: 'sakura' },
  { name: '星光泡泡发型', subtitle: 'Lv.5 解锁', points: 3500, image: `${REWARD_ASSET_BASE}reward-starlight.png`, locked: true, unlockId: 'star' },
  { name: '生发精华液 30ml', subtitle: '实物好物', points: 4800, image: `${REWARD_ASSET_BASE}reward-serum.png` },
  { name: '治愈蘑菇帽', subtitle: 'Lv.6 解锁', points: 2800, image: `${REWARD_ASSET_BASE}reward-healing.png`, locked: true },
  { name: '护发礼盒套装', subtitle: '实物好物', points: 6500, image: `${REWARD_ASSET_BASE}reward-gift.png` },
  { name: '蒲公英小夜灯', subtitle: '限量周边', points: 3200, image: `${REWARD_ASSET_BASE}reward-lamp.png`, locked: true },
  { name: '嫩芽发型', subtitle: 'Lv.4 解锁', points: 2500, image: `${REWARD_ASSET_BASE}reward-sprout.png`, locked: true, unlockId: 'sprout' },
  { name: '头皮按摩梳', subtitle: '实物好物', points: 4200, image: `${REWARD_ASSET_BASE}reward-brush.png` },
  { name: '银河披风', subtitle: 'Lv.7 解锁', points: 5000, image: `${REWARD_ASSET_BASE}reward-cape.png`, locked: true },
  { name: '7天特权卡', subtitle: '成长特权', points: 8000, image: `${REWARD_ASSET_BASE}reward-vip.png` },
]

const REWARD_GROWTH_ITEMS = [
  { level: 'Lv.1', status: '已领取', image: `${REWARD_ASSET_BASE}reward-sprout.png`, active: true },
  { level: 'Lv.2', status: '已领取', image: `${REWARD_ASSET_BASE}reward-flower.png`, active: true },
  { level: 'Lv.3', status: '可领取', image: `${REWARD_ASSET_BASE}reward-gift.png`, active: true },
  { level: 'Lv.4', status: '差 420 XP', image: `${REWARD_ASSET_BASE}reward-healing.png`, active: false },
  { level: 'Lv.5', status: '未解锁', image: `${REWARD_ASSET_BASE}reward-starlight.png`, active: false },
]

const REWARD_RECORDS = [
  { name: '樱花发箍', date: '2026-07-15', points: '-2,000 XP', status: '已兑换', image: `${REWARD_ASSET_BASE}reward-flower.png` },
  { name: '护发礼盒', date: '2026-07-12', points: '-6,500 XP', status: '配送中', image: `${REWARD_ASSET_BASE}reward-gift.png` },
  { name: '头皮按摩梳', date: '2026-07-08', points: '-4,200 XP', status: '已完成', image: `${REWARD_ASSET_BASE}reward-brush.png` },
]

export function renderRewards(root: HTMLElement) {
  const s = useUserStore.getState()
  renderBuddyHairStyles(root)

  root.querySelectorAll<HTMLElement>('[data-rewards-points]').forEach((node) => {
    node.textContent = s.points.toLocaleString('en-US')
  })
  setHtml(root.querySelector('#shop'), REWARD_MARKET_ITEMS.map((item) => {
    const canUnlockHair = item.unlockId && HAIRSTYLE_CATALOG.some((h) => h.id === item.unlockId)
    return `<button class="reward-card" type="button" ${canUnlockHair ? `data-unlock-id="${escapeHtml(item.unlockId)}"` : ''}>
      <div class="reward-image-wrap">
        <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)}">
        ${item.locked ? '<span class="lock-icon">⌕</span>' : ''}
      </div>
      <div class="reward-copy">
        <strong>${escapeHtml(item.name)}</strong>
        <span>${escapeHtml(item.subtitle)}</span>
        <b>${item.points.toLocaleString('en-US')} XP</b>
      </div>
    </button>`
  }).join(''))
  setHtml(root.querySelector('#rewardsGrowth'), REWARD_GROWTH_ITEMS.map((item) => `
    <button type="button" class="growth-reward ${item.active ? 'active' : ''}">
      <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.level)} 奖励">
      <strong>${escapeHtml(item.level)}</strong>
      <span>${escapeHtml(item.status)}</span>
    </button>
  `).join(''))
  setHtml(root.querySelector('#rewardsRecords'), REWARD_RECORDS.map((record) => `
    <div class="record-item">
      <img src="${escapeHtml(record.image)}" alt="${escapeHtml(record.name)}">
      <div><strong>${escapeHtml(record.name)}</strong><span>${escapeHtml(record.date)}</span></div>
      <div><b>${escapeHtml(record.points)}</b><small>${escapeHtml(record.status)}</small></div>
    </div>
  `).join(''))
}
