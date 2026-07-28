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
  target: string
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

const QUEST_CONFIG: Record<Exclude<QuestCategory, 'daily'>, QuestDefinition[]> = {
  weekly: [
    { id: 'weekly-scan-3', category: 'weekly', icon: '📷', title: '完成 3 次记录', description: '给小发球攒一组本周观察素材。', target: '0/3', reward: 35, actionLabel: '记录本周' },
    { id: 'weekly-sleep-4', category: 'weekly', icon: '🌙', title: '4 天温柔早睡', description: '不卷到深夜，给头皮也放个小假。', target: '0/4', reward: 40, actionLabel: '打卡早睡' },
    { id: 'weekly-share', category: 'weekly', icon: '💬', title: '分享一次发球周报', description: '把本周小进步发给朋友，轻松晒一下。', target: '0/1', reward: 25, actionLabel: '去分享' },
    { id: 'weekly-massage', category: 'weekly', icon: '🪮', title: '完成 3 次头皮放松', description: '睡前 5 分钟，给自己按下暂停键。', target: '0/3', reward: 30, actionLabel: '开始放松' },
  ],
  growth: [
    { id: 'growth-first-report', category: 'growth', icon: '🌱', title: '生成第一份种子报告', description: '上传照片后获得你的第一枚趣味称号。', target: '0/1', reward: 45, actionLabel: '去扫描' },
    { id: 'growth-7-day', category: 'growth', icon: '🔥', title: '连续记录 7 天', description: '把小习惯养成小成就，不求完美只求坚持。', target: '0/7', reward: 80, actionLabel: '点亮进度' },
    { id: 'growth-unlock-style', category: 'growth', icon: '🎀', title: '解锁一个新造型', description: '给小发球换套新皮肤，奖励认真生活的你。', target: '0/1', reward: 60, actionLabel: '去解锁' },
    { id: 'growth-history', category: 'growth', icon: '📒', title: '查看一次历史趋势', description: '回头看看，最近的自己已经很棒啦。', target: '0/1', reward: 25, actionLabel: '看趋势' },
  ],
  special: [
    { id: 'special-spring', category: 'special', icon: '🌸', title: '春风吹发季签到', description: '参与 8.1–8.31 赛季限时活动，领取赛季能量。', target: '0/1', reward: 50, actionLabel: '领取能量' },
    { id: 'special-mood', category: 'special', icon: '😊', title: '写下今日心情弹幕', description: '把压力吐槽给小发球听，轻轻放过自己。', target: '0/1', reward: 30, actionLabel: '写一句' },
    { id: 'special-buddy', category: 'special', icon: '☁️', title: '和 Buddy 互动一次', description: '摸摸小发球，让陪伴感上线。', target: '0/1', reward: 35, actionLabel: '去互动' },
    { id: 'special-community', category: 'special', icon: '✨', title: '逛逛社区治愈帖', description: '看看大家的小妙招，找到一点轻松感。', target: '0/1', reward: 25, actionLabel: '去看看' },
  ],
}

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
  const options = requireOptions()
  const s = useUserStore.getState()
  const quests = getQuests(activeCategory)
  const done = loadDoneQuests(activeCategory)
  const categoryDone = quests.filter((quest) => done.has(quest.id)).length
  const totalQuests = QUEST_CATEGORIES.flatMap(getQuests)
  const totalDone = QUEST_CATEGORIES.reduce((sum, category) => sum + loadDoneQuests(category).size, 0)
  const overallPercent = totalQuests.length ? Math.round((totalDone / totalQuests.length) * 100) : 0
  const allDailyDone = getQuests('daily').every((quest) => loadDoneQuests('daily').has(quest.id))

  setHtml(root.querySelector('[data-page="quests"] .tabs'), QUEST_CATEGORIES.map((category) => `<button class="pill ${category === activeCategory ? 'primary' : ''}${category === activeCategory ? ' active' : ''}" data-quest-category="${category}">${CATEGORY_LABELS[category]}</button>`).join(''))
  setHtml(root.querySelector('#questList'), quests.map((quest) => renderQuestItem(quest, done.has(quest.id))).join('') + renderQuestSummary(activeCategory, categoryDone, quests.length, allDailyDone))
  const weekRewards = root.querySelector('#weekRewards')
  if (weekRewards?.classList.contains('reward-days')) {
    const todayIdx = (new Date().getDay() + 6) % 7
    setHtml(weekRewards, getCurrentWeekDays().map(({ label, key }, i) => {
      const checked = s.checkinDays.includes(key)
      const xp = i < 5 ? 10 + i * 5 : 25
      const isToday = i === todayIdx
      if (checked) return `<button class="reward-day"><b>${escapeHtml(label)}</b><i>✓</i><strong>已领取</strong><small>+${xp} XP</small></button>`
      if (isToday) return `<button class="reward-day active"><b>${escapeHtml(label)}</b><i>☯</i><strong style="color:#8257e8">今天</strong><small>+${xp} XP</small></button>`
      return `<button class="reward-day"><b>${escapeHtml(label)}</b><i>⚡</i><span>+${xp} XP</span></button>`
    }).join(''))
  } else {
    setHtml(weekRewards, getCurrentWeekDays().map(({ label, key }, i) => {
      const doneDay = s.checkinDays.includes(key)
      return `<span class="badge">${doneDay ? '✓' : label}<br><small>+${i < 5 ? 10 + i * 5 : 25} XP</small></span>`
    }).join(''))
  }
  const questsStreakDays = root.querySelector<HTMLElement>('[data-quests-streak-days]')
  if (questsStreakDays) questsStreakDays.textContent = `${getCheckinStreak(s.checkinDays)} 天`
  setHtml(root.querySelector('#streak'), getCurrentWeekDays().map(({ label, key }, index) => {
    const doneDay = s.checkinDays.includes(key)
    const mark = doneDay ? '✓' : index === 6 ? '🎁' : label
    return `<span><b>${mark}</b>${escapeHtml(label)}</span>`
  }).join(''))
  const progressCard = root.querySelector('[data-page="quests"] .progress-card-new') || root.querySelector('[data-page="quests"] aside .card:nth-child(1)')
  const tipCard = root.querySelector('[data-page="quests"] .tip-card-new') || root.querySelector('[data-page="quests"] aside .card:nth-child(3)')
  const overviewCard = root.querySelector('[data-page="quests"] .overview-card-new') || root.querySelector('[data-page="quests"] aside .card:nth-child(4)')
  if (progressCard?.classList.contains('progress-card-new')) {
    setHtml(progressCard, `<h2>我的任务进度</h2><div class="progress-content"><div><p>本周完成度</p><strong class="progress-big">${overallPercent}%</strong><div class="progress-line"><i style="width:${overallPercent}%"></i></div><p>完成 ${totalDone}/${totalQuests.length} 个任务</p><small>${CATEGORY_LABELS[activeCategory]}：${categoryDone}/${quests.length}</small></div></div>`)
  } else {
    setHtml(progressCard, `<h3>我的任务进度</h3><div class="big-number">${overallPercent}%</div><div class="meter"><div class="fill" style="--w:${overallPercent}%"></div></div><p>完成 ${totalDone}/${totalQuests.length} 个任务</p><small>${CATEGORY_LABELS[activeCategory]}：${categoryDone}/${quests.length}</small>`)
  }
  if (tipCard?.classList.contains('tip-card-new')) {
    setHtml(tipCard, `<h2>任务小贴士</h2><p><b>${questTip(activeCategory)}</b></p>`)
  } else {
    setHtml(tipCard, `<h3>任务小贴士</h3><p>${questTip(activeCategory)}</p><div class="mini-buddy"></div>`)
  }
  if (overviewCard?.classList.contains('overview-card-new')) {
    setHtml(overviewCard, `<h2>本周任务总览</h2><div class="overview"><div class="quest-donut" data-label="${totalDone}/${totalQuests.length}"></div><ul><li><span>🟢 已完成</span><b>${totalDone}</b></li><li><span>⚪ 未完成</span><b>${Math.max(0, totalQuests.length - totalDone)}</b></li></ul><p>${allDailyDone ? '每日建议已全部点亮，额外奖励已入账。' : '今天再点亮一个小任务，就很不错啦。'}</p></div>`)
  } else {
    setHtml(overviewCard, `<h3>本周任务总览</h3><div class="donut" data-label="${totalDone}/${totalQuests.length}\\A 已完成"></div><p>${allDailyDone ? '每日建议已全部点亮，额外奖励已入账。' : '今天再点亮一个小任务，就很不错啦。'}</p>`)
  }
  void options
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
    if (dailyQuests.length > 0 && dailyQuests.every((item) => done.has(item.id)) && localStorage.getItem(requireOptions().taskBonusKey()) !== '1') {
      localStorage.setItem(requireOptions().taskBonusKey(), '1')
      useUserStore.getState().addPoints(10)
      showToast(root, '每日建议全完成，额外 +10 XP')
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
  const options = requireOptions()
  if (category !== 'daily') return QUEST_CONFIG[category]
  return options.getSuggestions().map((task, index) => ({
    id: `daily-${index}`,
    category: 'daily',
    icon: ['💧', '🌙', '🥗', '🖐', '🚶'][index] || '✨',
    title: task,
    description: index === 0 ? '来自 AI 的轻量建议' : '完成后给小发球增加一点能量',
    target: '0/1',
    reward: index === 0 ? 5 : 2,
    actionLabel: '去完成',
  }))
}

export function loadDoneQuests(category: QuestCategory) {
  try {
    const next = new Set<string>(JSON.parse(localStorage.getItem(requireOptions().questProgressKey(category)) || '[]'))
    if (category === 'daily' && next.size === 0) {
      loadLegacyDoneTasks().forEach((index) => next.add(`daily-${index}`))
    }
    return next
  } catch {
    return new Set<string>()
  }
}

export function isQuestCategory(value: string): value is QuestCategory {
  return QUEST_CATEGORIES.includes(value as QuestCategory)
}

function renderQuestItem(quest: QuestDefinition, isDone: boolean) {
  const progress = isDone ? 100 : 0
  return `<article class="quest-row item"><span style="font-size:26px">${quest.icon}</span><div class="quest-copy"><b>${escapeHtml(quest.title)}</b><small>${escapeHtml(quest.description)}</small></div><div><span class="quest-count">${isDone ? '1/1' : escapeHtml(quest.target)}</span><div class="quest-meter"><i style="width:${progress}%"></i></div></div><span class="quest-xp">${isDone ? '' : `+${quest.reward} XP`}</span><button data-quest-category="${quest.category}" data-quest-id="${quest.id}" class="quest-do quest-btn ${isDone ? 'done' : ''}">${isDone ? '✓ 已领取' : escapeHtml(quest.actionLabel)}</button></article>`
}

function renderQuestSummary(category: QuestCategory, doneCount: number, total: number, allDailyDone: boolean) {
  const reward = category === 'daily' ? 10 : Math.max(20, total * 10)
  const complete = doneCount >= total
  return `<section class="quest-card quest-bonus item" style="background:rgba(139,92,246,.1)"><span>⭐</span><b>${category === 'daily' ? (allDailyDone ? '今日建议全部完成！' : '完成所有每日任务可获得额外奖励！') : `${CATEGORY_LABELS[category]}完成度 ${doneCount}/${total}`}</b><span>✦ +${reward} XP</span><button class="quest-btn done">${complete ? '已点亮' : '未完成'}</button></section>`
}

function questTip(category: QuestCategory) {
  const tips: Record<QuestCategory, string> = {
    daily: '今天不用做到满分，挑一个最容易的小任务开始就很好。',
    weekly: '周任务适合拆成几天完成，记录、休息和放松都算成长。',
    growth: '成长任务会长期保留，像养小发球一样一点点解锁。',
    special: '特别任务偏活动和社交，主打轻松参与，不制造压力。',
  }
  return tips[category]
}

function saveDoneQuests(category: QuestCategory, done: Set<string>) {
  localStorage.setItem(requireOptions().questProgressKey(category), JSON.stringify([...done]))
  if (category === 'daily') {
    const legacyIndexes = [...done]
      .map((id) => Number(id.replace('daily-', '')))
      .filter((index) => Number.isFinite(index))
    localStorage.setItem(requireOptions().taskKey(), JSON.stringify(legacyIndexes))
  }
}

function loadLegacyDoneTasks() {
  try {
    return new Set<number>(JSON.parse(localStorage.getItem(requireOptions().taskKey()) || '[]'))
  } catch {
    return new Set<number>()
  }
}

function requireOptions() {
  if (!optionsRef) throw new Error('quest controller is not configured')
  return optionsRef
}
