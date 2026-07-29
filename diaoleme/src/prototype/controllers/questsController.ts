import { useUserStore } from '../../store/UserStore'
import { getCheckinStreak, getCurrentWeekDays } from './progress'
import { escapeHtml, setHtml, showToast } from './ui'

export type QuestCategory = 'daily' | 'weekly' | 'growth' | 'special'

export type QuestDefinition = {
  id: string
  category: QuestCategory
  icon: string
  title: string
  description: string
  /** current progress units before completion */
  current: number
  target: number
  reward: number
  actionLabel: string
}

export const QUEST_CATEGORIES: QuestCategory[] = ['daily', 'weekly', 'growth', 'special']

const CATEGORY_LABELS: Record<QuestCategory, string> = {
  daily: '每日任务',
  weekly: '每周任务',
  growth: '成长任务',
  special: '特别任务',
}

const WEEK_REWARD_XP = [10, 10, 15, 15, 20, 20, 25] as const
const WEEK_REWARD_ICONS = ['💎', '💎', '☯', '⚡', '♥', '🎁', '☀'] as const

const DAILY_QUESTS: QuestDefinition[] = [
  {
    id: 'daily-water',
    category: 'daily',
    icon: './assets/quests/icons/water.svg',
    title: '喝够 8 杯水',
    description: '充足的水分让头发更健康',
    current: 6,
    target: 8,
    reward: 50,
    actionLabel: '去完成',
  },
  {
    id: 'daily-sleep',
    category: 'daily',
    icon: './assets/quests/icons/sleep.svg',
    title: '23:30 前睡觉',
    description: '早睡是头发的修复时间',
    current: 0,
    target: 1,
    reward: 60,
    actionLabel: '去完成',
  },
  {
    id: 'daily-meal',
    category: 'daily',
    icon: './assets/quests/icons/meal.svg',
    title: '吃一份蔬果',
    description: '补充维生素，滋养发根',
    current: 1,
    target: 1,
    reward: 50,
    actionLabel: '去完成',
  },
  {
    id: 'daily-massage',
    category: 'daily',
    icon: './assets/quests/icons/massage.svg',
    title: '头皮按摩 5 分钟',
    description: '促进头皮血液循环',
    current: 2,
    target: 5,
    reward: 50,
    actionLabel: '去完成',
  },
  {
    id: 'daily-walk',
    category: 'daily',
    icon: './assets/quests/icons/walk.svg',
    title: '散步 20 分钟',
    description: '运动让身体和头发一起呼吸',
    current: 1,
    target: 1,
    reward: 40,
    actionLabel: '去完成',
  },
]

const QUEST_CONFIG: Record<Exclude<QuestCategory, 'daily'>, QuestDefinition[]> = {
  weekly: [
    { id: 'weekly-scan-3', category: 'weekly', icon: '📷', title: '完成 3 次记录', description: '给小发球攒一组本周观察素材。', current: 0, target: 3, reward: 35, actionLabel: '记录本周' },
    { id: 'weekly-sleep-4', category: 'weekly', icon: '🌙', title: '4 天温柔早睡', description: '不卷到深夜，给头皮也放个小假。', current: 0, target: 4, reward: 40, actionLabel: '打卡早睡' },
    { id: 'weekly-share', category: 'weekly', icon: '💬', title: '分享一次发球周报', description: '把本周小进步发给朋友，轻松晒一下。', current: 0, target: 1, reward: 25, actionLabel: '去分享' },
    { id: 'weekly-massage', category: 'weekly', icon: '🪮', title: '完成 3 次头皮放松', description: '睡前 5 分钟，给自己按下暂停键。', current: 0, target: 3, reward: 30, actionLabel: '开始放松' },
    { id: 'weekly-water-3', category: 'weekly', icon: '💧', title: '喝水小目标达标 3 天', description: '本周挑 3 天认真补水，头发和状态都更舒服。', current: 0, target: 3, reward: 30, actionLabel: '去打卡' },
  ],
  growth: [
    { id: 'growth-first-report', category: 'growth', icon: '🌱', title: '生成第一份种子报告', description: '上传照片后获得你的第一枚趣味称号。', current: 0, target: 1, reward: 45, actionLabel: '去扫描' },
    { id: 'growth-7-day', category: 'growth', icon: '🔥', title: '连续记录 7 天', description: '把小习惯养成小成就，不求完美只求坚持。', current: 0, target: 7, reward: 80, actionLabel: '点亮进度' },
    { id: 'growth-unlock-style', category: 'growth', icon: '🎀', title: '解锁一个新造型', description: '给小发球换套新皮肤，奖励认真生活的你。', current: 0, target: 1, reward: 60, actionLabel: '去解锁' },
    { id: 'growth-history', category: 'growth', icon: '📒', title: '查看一次历史趋势', description: '回头看看，最近的自己已经很棒啦。', current: 0, target: 1, reward: 25, actionLabel: '看趋势' },
    { id: 'growth-compare', category: 'growth', icon: '🔍', title: '完成一次轻松对比', description: '把最近两次记录放一起看看，发现一点小变化就够。', current: 0, target: 1, reward: 40, actionLabel: '去对比' },
  ],
  special: [
    { id: 'special-spring', category: 'special', icon: '🌸', title: '春风吹发季签到', description: '参与 8.1–8.31 赛季限时活动，领取赛季能量。', current: 0, target: 1, reward: 50, actionLabel: '领取能量' },
    { id: 'special-mood', category: 'special', icon: '😊', title: '写下今日心情弹幕', description: '把压力吐槽给小发球听，轻轻放过自己。', current: 0, target: 1, reward: 30, actionLabel: '写一句' },
    { id: 'special-buddy', category: 'special', icon: '☁️', title: '和 Buddy 互动一次', description: '摸摸小发球，让陪伴感上线。', current: 0, target: 1, reward: 35, actionLabel: '去互动' },
    { id: 'special-community', category: 'special', icon: '✨', title: '逛逛社区治愈帖', description: '看看大家的小妙招，找到一点轻松感。', current: 0, target: 1, reward: 25, actionLabel: '去看看' },
    { id: 'special-sticky', category: 'special', icon: '📌', title: '给自己贴一张治愈便签', description: '写一句今天对自己好的话，存进小日记。', current: 0, target: 1, reward: 30, actionLabel: '去贴便签' },
  ],
}

const DAILY_BONUS_XP = 100
const MASCOT_STANDING = './assets/quests/reward-standing-mascot.png'
const MASCOT_SITTING = './assets/quests/tip-sitting-mascot.png'
const GIFT_ICON = './assets/quests/icons/gift.svg'

type QuestControllerOptions = {
  getSuggestions: () => string[]
  taskKey: () => string
  taskBonusKey: () => string
  questProgressKey: (category: QuestCategory) => string
}

let optionsRef: QuestControllerOptions | null = null

export function configureQuestController(options: QuestControllerOptions) {
  optionsRef = options
}

export function renderTasks(root: HTMLElement, activeCategory: QuestCategory) {
  seedCatalogCompletions()
  const s = useUserStore.getState()
  const quests = getQuests(activeCategory)
  const done = loadDoneQuests(activeCategory)
  const categoryDone = quests.filter((quest) => done.has(quest.id)).length
  const allQuests = QUEST_CATEGORIES.flatMap(getQuests)
  const overview = summarizeOverview(allQuests)
  const overallPercent = allQuests.length ? Math.round((overview.done / allQuests.length) * 100) : 0
  const allDailyDone = getQuests('daily').every((quest) => loadDoneQuests('daily').has(quest.id))
  const streak = getCheckinStreak(s.checkinDays)

  setHtml(
    root.querySelector('[data-page="quests"] .quest-tabs-new'),
    QUEST_CATEGORIES.map(
      (category) =>
        `<button type="button" class="quest-tab${category === activeCategory ? ' is-active' : ''}" data-quest-category="${category}">${CATEGORY_LABELS[category]}</button>`,
    ).join(''),
  )
  setHtml(
    root.querySelector('#questList'),
    quests.map((quest) => renderQuestItem(quest, done.has(quest.id))).join('') +
      renderQuestSummary(activeCategory, categoryDone, quests.length, allDailyDone),
  )

  const weekRewards = root.querySelector('#weekRewards')
  if (weekRewards?.classList.contains('reward-days')) {
    setHtml(
      weekRewards,
      getCurrentWeekDays()
        .map(({ label, key, isToday }, i) => {
          const checked = s.checkinDays.includes(key)
          const xp = WEEK_REWARD_XP[i] ?? 10
          const icon = WEEK_REWARD_ICONS[i] ?? '✦'
          if (checked) {
            return `<button class="reward-day claimed" type="button"><b>${escapeHtml(label)}</b><i>✓</i><strong>已领取</strong><small>+${xp} XP</small></button>`
          }
          if (isToday) {
            return `<button class="reward-day active" type="button"><b>${escapeHtml(label)}</b><i>${icon}</i><strong class="today-label">今天</strong><small>+${xp} XP</small></button>`
          }
          return `<button class="reward-day" type="button"><b>${escapeHtml(label)}</b><i>${icon}</i><span>+${xp} XP</span></button>`
        })
        .join(''),
    )
  } else {
    setHtml(
      weekRewards,
      getCurrentWeekDays()
        .map(({ label, key }, i) => {
          const doneDay = s.checkinDays.includes(key)
          return `<span class="badge">${doneDay ? '✓' : label}<br><small>+${WEEK_REWARD_XP[i] ?? 10} XP</small></span>`
        })
        .join(''),
    )
  }

  const streakStrong = root.querySelector<HTMLElement>('[data-page="quests"] .streak-card-new strong')
  if (streakStrong) {
    streakStrong.innerHTML = `${streak} <small>天</small>`
  } else {
    const questsStreakDays = root.querySelector<HTMLElement>('[data-quests-streak-days]')
    if (questsStreakDays) questsStreakDays.textContent = `${streak} 天`
  }

  // AIFA-108: Mon–Sat pending = unique dessert emoji; Sun = 🎁; done Mon–Sat = ✓
  const STREAK_PENDING_MARKS = ['🍬', '🧁', '🍪', '🍩', '🍦', '🍰', '🎁'] as const
  setHtml(
    root.querySelector('#streak'),
    getCurrentWeekDays()
      .map(({ label, key }, index) => {
        const doneDay = s.checkinDays.includes(key)
        const isGiftDay = index === 6
        const mark = isGiftDay ? '🎁' : doneDay ? '✓' : (STREAK_PENDING_MARKS[index] ?? '🍬')
        const cls = doneDay && !isGiftDay ? 'done' : isGiftDay ? 'gift' : 'pending'
        return `<span class="${cls}"><b aria-hidden="true">${mark}</b><small>${escapeHtml(label)}</small></span>`
      })
      .join(''),
  )

  const progressCard =
    root.querySelector('[data-page="quests"] .progress-card-new') ||
    root.querySelector('[data-page="quests"] aside .card:nth-child(1)')
  const tipCard =
    root.querySelector('[data-page="quests"] .tip-card-new') ||
    root.querySelector('[data-page="quests"] aside .card:nth-child(3)')
  const overviewCard =
    root.querySelector('[data-page="quests"] .overview-card-new') ||
    root.querySelector('[data-page="quests"] aside .card:nth-child(4)')

  if (progressCard?.classList.contains('progress-card-new')) {
    setHtml(
      progressCard,
      `<h2>我的任务进度</h2>
      <div class="progress-content">
        <div>
          <p>本周完成度</p>
          <strong class="progress-big">${overallPercent}%</strong>
          <div class="progress-line"><i style="width:${overallPercent}%"></i></div>
          <p>完成 ${overview.done}/${allQuests.length} 个任务</p>
        </div>
        <div class="progress-ring" style="--pct:${overallPercent}%" aria-hidden="true">
          <img src="${MASCOT_STANDING}" alt="">
        </div>
      </div>`,
    )
  } else {
    setHtml(
      progressCard,
      `<h3>我的任务进度</h3><div class="big-number">${overallPercent}%</div><div class="meter"><div class="fill" style="--w:${overallPercent}%"></div></div><p>完成 ${overview.done}/${allQuests.length} 个任务</p><small>${CATEGORY_LABELS[activeCategory]}：${categoryDone}/${quests.length}</small>`,
    )
  }

  if (tipCard?.classList.contains('tip-card-new')) {
    // AIFA-108: locked tip copy (design fig.4) — do not switch to special-tab dense lines
    setHtml(
      tipCard,
      `<h2>任务小贴士</h2>
      <p class="tip-lead"><b>定期护理 + 健康生活习惯 = 健康的头发！</b></p>
      <p class="tip-body">保持好心情，规律作息，均衡饮食，<br>你的头发会越来越喜欢你哦～</p>
      <img class="tip-mascot" src="${MASCOT_SITTING}" alt="">`,
    )
  } else {
    setHtml(
      tipCard,
      `<h3>任务小贴士</h3><p>定期护理 + 健康生活习惯 = 健康的头发！保持好心情，规律作息，均衡饮食，你的头发会越来越喜欢你哦～</p><div class="mini-buddy"></div>`,
    )
  }

  if (overviewCard?.classList.contains('overview-card-new')) {
    const donePct = overview.donePct
    const progressEnd = overview.donePct + overview.progressPct
    setHtml(
      overviewCard,
      `<h2>本周任务总览</h2>
      <div class="overview">
        <div class="quest-donut" data-total="${allQuests.length}" style="--done-end:${donePct}%;--progress-end:${progressEnd}%"></div>
        <ul>
          <li><span><i class="dot done"></i> 已完成</span><b>${overview.done} (${pctLabel(overview.done, allQuests.length)}%)</b></li>
          <li><span><i class="dot progress"></i> 进行中</span><b>${overview.inProgress} (${pctLabel(overview.inProgress, allQuests.length)}%)</b></li>
          <li><span><i class="dot todo"></i> 未开始</span><b>${overview.notStarted} (${pctLabel(overview.notStarted, allQuests.length)}%)</b></li>
        </ul>
      </div>`,
    )
  } else {
    setHtml(
      overviewCard,
      `<h3>本周任务总览</h3><div class="donut" data-label="${overview.done}/${allQuests.length}\\A 已完成"></div><p>${allDailyDone ? '每日建议已全部点亮，额外奖励已入账。' : '今天再点亮一个小任务，就很不错啦。'}</p>`,
    )
  }
}

export function completeQuest(category: QuestCategory, questId: string, root: HTMLElement) {
  const quest = getQuests(category).find((item) => item.id === questId)
  if (!quest) return
  const done = loadDoneQuests(category)
  if (done.has(questId)) {
    showToast(root, '这个任务已经领取过啦')
    return
  }
  done.add(questId)
  saveDoneQuests(category, done)
  useUserStore.getState().addPoints(quest.reward)
  showToast(root, `+${quest.reward} XP · ${quest.title}`)

  if (category === 'daily') {
    const dailyQuests = getQuests('daily')
    if (
      dailyQuests.length > 0 &&
      dailyQuests.every((item) => done.has(item.id)) &&
      localStorage.getItem(requireOptions().taskBonusKey()) !== '1'
    ) {
      localStorage.setItem(requireOptions().taskBonusKey(), '1')
      useUserStore.getState().addPoints(DAILY_BONUS_XP)
      showToast(root, `每日任务全完成，额外 +${DAILY_BONUS_XP} XP · +1 Energy`)
    }
  }
}

export function clearQuestProgress() {
  const options = requireOptions()
  localStorage.removeItem(options.taskKey())
  localStorage.removeItem(options.taskBonusKey())
  QUEST_CATEGORIES.forEach((category) => localStorage.removeItem(options.questProgressKey(category)))
}

export function getQuestCount() {
  const total = QUEST_CATEGORIES.flatMap(getQuests).length
  const done = QUEST_CATEGORIES.reduce((sum, category) => sum + loadDoneQuests(category).size, 0)
  return { done, total }
}

export function getQuests(category: QuestCategory): QuestDefinition[] {
  if (category === 'daily') return DAILY_QUESTS
  return QUEST_CONFIG[category]
}

export function loadDoneQuests(category: QuestCategory) {
  try {
    return new Set<string>(JSON.parse(localStorage.getItem(requireOptions().questProgressKey(category)) || '[]'))
  } catch {
    return new Set<string>()
  }
}

export function isQuestCategory(value: string): value is QuestCategory {
  return QUEST_CATEGORIES.includes(value as QuestCategory)
}

function renderQuestItem(quest: QuestDefinition, isDone: boolean) {
  const visuallyDone = isDone || quest.current >= quest.target
  const current = visuallyDone ? quest.target : quest.current
  const percent = quest.target > 0 ? Math.round((current / quest.target) * 100) : 0
  const iconHtml = isAssetIcon(quest.icon)
    ? `<img src="${escapeHtml(quest.icon)}" alt="">`
    : `<span class="quest-emoji" aria-hidden="true">${quest.icon}</span>`
  const xpText = visuallyDone ? '' : `+${quest.reward} XP`
  const btnLabel = visuallyDone ? '✓ 已完成' : escapeHtml(quest.actionLabel)
  const btnAttrs = visuallyDone
    ? 'class="quest-do quest-btn done" type="button"'
    : `data-quest-category="${quest.category}" data-quest-id="${quest.id}" class="quest-do quest-btn" type="button"`
  return `<article class="quest-row">
    ${iconHtml}
    <div class="quest-copy"><b>${escapeHtml(quest.title)}</b><small>${escapeHtml(quest.description)}</small></div>
    <div class="quest-progress">
      <span class="quest-count">${current}/${quest.target}</span>
      <div class="quest-meter"><i style="width:${percent}%"></i></div>
    </div>
    <span class="quest-xp">${xpText}</span>
    <button ${btnAttrs}>${btnLabel}</button>
  </article>`
}

function renderQuestSummary(category: QuestCategory, doneCount: number, total: number, allDailyDone: boolean) {
  const complete = doneCount >= total && total > 0
  if (category === 'daily') {
    const title = allDailyDone ? '今日任务全部完成！' : '完成所有每日任务可获得额外奖励！'
    return `<section class="quest-card quest-bonus">
      <img src="${GIFT_ICON}" alt="">
      <b>${title}</b>
      <span>✦ +${DAILY_BONUS_XP} XP</span>
      <span>⚡ +1 Energy</span>
      <button type="button">${complete ? '已点亮' : '未完成'}</button>
    </section>`
  }
  const reward = Math.max(20, total * 10)
  return `<section class="quest-card quest-bonus">
    <img src="${GIFT_ICON}" alt="">
    <b>${CATEGORY_LABELS[category]}完成度 ${doneCount}/${total}</b>
    <span>✦ +${reward} XP</span>
    <span></span>
    <button type="button">${complete ? '已点亮' : '未完成'}</button>
  </section>`
}

function seedCatalogCompletions() {
  for (const category of QUEST_CATEGORIES) {
    const done = loadDoneQuests(category)
    let changed = false
    for (const quest of getQuests(category)) {
      if (quest.current >= quest.target && !done.has(quest.id)) {
        done.add(quest.id)
        changed = true
      }
    }
    if (changed) saveDoneQuests(category, done)
  }
}

function summarizeOverview(allQuests: QuestDefinition[]) {
  let done = 0
  let inProgress = 0
  let notStarted = 0
  for (const quest of allQuests) {
    const isDone = loadDoneQuests(quest.category).has(quest.id) || quest.current >= quest.target
    if (isDone) done += 1
    else if (quest.current > 0) inProgress += 1
    else notStarted += 1
  }
  const total = allQuests.length || 1
  return {
    done,
    inProgress,
    notStarted,
    donePct: Math.round((done / total) * 100),
    progressPct: Math.round((inProgress / total) * 100),
  }
}

function pctLabel(count: number, total: number) {
  if (!total) return 0
  return Math.round((count / total) * 100)
}

function isAssetIcon(icon: string) {
  return icon.startsWith('./') || icon.startsWith('/') || icon.includes('.svg') || icon.includes('.png')
}

function questTipTitle(category: QuestCategory) {
  const titles: Record<QuestCategory, string> = {
    daily: '定期护理 + 健康生活习惯 = 健康的头发！',
    weekly: '周任务拆成几天做，轻松不焦虑。',
    growth: '成长任务像养小发球，慢慢解锁就好。',
    special: '特别任务偏轻松参与，主打陪伴感。',
  }
  return titles[category]
}

function questTip(category: QuestCategory) {
  const tips: Record<QuestCategory, string> = {
    daily: '保持好心情，规律作息，均衡饮食，你的头发会越来越喜欢你哦～',
    weekly: '周任务适合拆成几天完成，记录、休息和放松都算成长。',
    growth: '成长任务会长期保留，像养小发球一样一点点解锁。',
    special: '特别任务偏活动和社交，主打轻松参与，不制造压力。',
  }
  return tips[category]
}

function saveDoneQuests(category: QuestCategory, done: Set<string>) {
  localStorage.setItem(requireOptions().questProgressKey(category), JSON.stringify([...done]))
  if (category === 'daily') {
    localStorage.setItem(requireOptions().taskKey(), JSON.stringify([...done]))
  }
}

function requireOptions() {
  if (!optionsRef) throw new Error('quest controller is not configured')
  return optionsRef
}
