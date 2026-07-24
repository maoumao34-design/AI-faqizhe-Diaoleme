import { useUserStore } from '../../store/UserStore'
import { loadDoneQuests, QUEST_CATEGORIES } from './questsController'
import { getLeagueTierProgress, getLevelProgress } from './progress'
import { escapeHtml, publicAssetUrl, setHtml } from './ui'

const leagueAvatar = (name: string) => publicAssetUrl(`league-avatars/${name}.png`)
const leagueAsset = (name: string) => publicAssetUrl(`league-assets/${name}`)
const leagueRankMetricKey = () => 'diaoleme-league-rank-metric'

const TIER_SHIELD_BY_NAME: Record<string, string> = {
  青铜: 'shield-bronze.png',
  白银: 'shield-silver.png',
  黄金: 'shield-gold.png',
  铂金: 'shield-platinum.png',
  '铂金 I': 'shield-platinum-i-sm.png',
  '铂金 II': 'shield-platinum-ii.png',
  '钻石 III': 'shield-diamond.png',
  '钻石 II': 'shield-diamond-ii.png',
  '钻石 I': 'shield-diamond-i.png',
  王者: 'shield-king.png',
  '王者 I': 'shield-king-i.png',
  '王者 II': 'shield-king-ii.png',
}

function resolveTierShieldKey(name: string) {
  if (TIER_SHIELD_BY_NAME[name]) return name
  if (name.startsWith('王者')) return name.includes('II') ? '王者 II' : '王者 I'
  if (name.startsWith('铂金')) return name.includes('II') ? '铂金 II' : '铂金 I'
  if (name.startsWith('钻石')) {
    if (name.includes('III')) return '钻石 III'
    if (name.includes('II')) return '钻石 II'
    return '钻石 I'
  }
  if (name.startsWith('黄金')) return '黄金'
  if (name.startsWith('白银')) return '白银'
  if (name.startsWith('青铜')) return '青铜'
  return '青铜'
}

function tierShieldSrc(name: string) {
  const key = resolveTierShieldKey(name)
  return leagueAsset(TIER_SHIELD_BY_NAME[key] || 'shield-bronze.png')
}

const MY_LEADERBOARD_RANK = 16

export type LeagueTab = '排行榜' | '我的联盟' | '好友排行' | '段位晋升'
export type LeagueRankMetric = 'total_xp' | 'hair_care' | 'active_star' | 'streak' | 'kindness'

type LeagueLeader = {
  rank: number
  name: string
  level: string
  note: string
  points: number
  scoreText: string
  tier: string
  tierTone: 'gold' | 'purple' | 'blue'
  trend: string
  trendTone: 'up' | 'down' | 'flat'
  avatarSrc: string
  isMe: boolean
}

type LeagueRankMetricDef = {
  id: LeagueRankMetric
  icon: string
  title: string
  subtitle: string
  column: string
}

export const LEAGUE_TABS: LeagueTab[] = ['排行榜', '我的联盟', '好友排行', '段位晋升']
export const LEAGUE_RANK_METRICS: LeagueRankMetricDef[] = [
  { id: 'total_xp', icon: '✣', title: '总 XP 排行', subtitle: '', column: '总 XP' },
  { id: 'hair_care', icon: '♔', title: '护发达人', subtitle: '头发健康分', column: '健康分' },
  { id: 'active_star', icon: '✦', title: '活跃之星', subtitle: '任务完成数', column: '任务数' },
  { id: 'streak', icon: '⌁', title: '坚持不懈', subtitle: '连续打卡天数', column: '打卡天数' },
  { id: 'kindness', icon: '♡', title: '爱心大使', subtitle: '帮助伙伴次数', column: '帮助次数' },
]
const LEAGUE_RANK_METRIC_IDS: LeagueRankMetric[] = LEAGUE_RANK_METRICS.map((metric) => metric.id)

export function isLeagueRankMetric(value: string): value is LeagueRankMetric {
  return LEAGUE_RANK_METRIC_IDS.includes(value as LeagueRankMetric)
}

export function loadLeagueRankMetric(): LeagueRankMetric {
  try {
    const saved = localStorage.getItem(leagueRankMetricKey())
    if (saved && isLeagueRankMetric(saved)) return saved
  } catch {
    // ignore
  }
  return 'total_xp'
}

export function saveLeagueRankMetric(metric: LeagueRankMetric) {
  try {
    localStorage.setItem(leagueRankMetricKey(), metric)
  } catch {
    // ignore
  }
}

export function clearLeagueRankMetric() {
  localStorage.removeItem(leagueRankMetricKey())
}

function formatLeagueScore(metric: LeagueRankMetric, value: number) {
  if (metric === 'total_xp') return `${value.toLocaleString('en-US')} XP`
  if (metric === 'hair_care') return `${value} 分`
  if (metric === 'active_star') return `${value} 个`
  if (metric === 'streak') return `${value} 天`
  return `${value} 次`
}

function myLeagueMetricScore(metric: LeagueRankMetric) {
  const s = useUserStore.getState()
  if (metric === 'total_xp') return Math.max(s.points, 0)
  if (metric === 'hair_care') {
    if (s.dropScore != null) return Math.round(s.dropScore)
    if (s.reportHistory.length) {
      const avg = s.reportHistory.reduce((sum, item) => sum + item.score, 0) / s.reportHistory.length
      return Math.round(avg)
    }
    return 78
  }
  if (metric === 'active_star') {
    return QUEST_CATEGORIES.reduce((sum, category) => sum + loadDoneQuests(category).size, 0)
  }
  if (metric === 'streak') return s.checkinDays.length
  return Math.max(3, Math.min(18, Math.floor(s.points / 800) + s.checkinDays.length))
}

function myLeagueMetricNote(metric: LeagueRankMetric) {
  const s = useUserStore.getState()
  if (metric === 'total_xp') {
    return s.checkinDays.length ? `${s.checkinDays.length} 天打卡 · 一起变好呀！` : '一起变好呀！'
  }
  if (metric === 'hair_care') return s.dropScore != null ? `最近状态分 ${Math.round(s.dropScore)}` : '轻松记录，保持观察节奏'
  if (metric === 'active_star') {
    const done = QUEST_CATEGORIES.reduce((sum, category) => sum + loadDoneQuests(category).size, 0)
    return done ? `本周已完成 ${done} 个任务` : '去 Quests 点亮一个小任务吧'
  }
  if (metric === 'streak') return s.checkinDays.length ? `已连续打卡 ${s.checkinDays.length} 天` : '今天打卡就能上榜'
  return '给伙伴一点鼓励，爱心会回来的'
}

export function buildLeaders(metric: LeagueRankMetric = 'total_xp'): LeagueLeader[] {
  const profileByName = {
    Luna: { name: 'Luna', level: 'Lv.6', tier: '王者 I', tierTone: 'gold' as const, avatarSrc: leagueAvatar('luna') },
    Mia: { name: 'Mia', level: 'Lv.5', tier: '王者 II', tierTone: 'gold' as const, avatarSrc: leagueAvatar('mia') },
    Ray: { name: 'Ray', level: 'Lv.5', tier: '钻石 I', tierTone: 'purple' as const, avatarSrc: leagueAvatar('ray') },
    Sophia: { name: 'Sophia', level: 'Lv.5', tier: '钻石 II', tierTone: 'purple' as const, avatarSrc: leagueAvatar('sophia') },
    Bella: { name: 'Bella', level: 'Lv.4', tier: '铂金 I', tierTone: 'blue' as const, avatarSrc: leagueAvatar('bella') },
    Aria: { name: 'Aria', level: 'Lv.4', tier: '铂金 II', tierTone: 'blue' as const, avatarSrc: leagueAvatar('aria') },
  } as const

  // 各指标独立名次，避免切换榜单时玩家顺序看起来一模一样
  const metricRows: Record<LeagueRankMetric, Array<{ name: keyof typeof profileByName; note: string; points: number; trend: string; trendTone: 'up' | 'down' | 'flat' }>> = {
    total_xp: [
      { name: 'Luna', note: '头发是生命的种子 🌱', points: 28760, trend: '↑ 1', trendTone: 'up' },
      { name: 'Mia', note: '每天进步 1% ✨', points: 25480, trend: '↓ 1', trendTone: 'down' },
      { name: 'Ray', note: '慢慢来，比较更重要 💜', points: 22140, trend: '—', trendTone: 'flat' },
      { name: 'Sophia', note: '关注头皮，从现在开始', points: 18900, trend: '↑ 2', trendTone: 'up' },
      { name: 'Bella', note: '保持心情愉悦～', points: 16520, trend: '↓ 1', trendTone: 'down' },
      { name: 'Aria', note: '爱自己，从发起 ❤️', points: 15320, trend: '—', trendTone: 'flat' },
    ],
    hair_care: [
      { name: 'Sophia', note: '本周平均状态分 96', points: 96, trend: '↑ 2', trendTone: 'up' },
      { name: 'Aria', note: '光线稳、角度好，记录很轻松', points: 93, trend: '↑ 1', trendTone: 'up' },
      { name: 'Luna', note: '连续 5 次保持 90+', points: 91, trend: '—', trendTone: 'flat' },
      { name: 'Bella', note: '洗护节奏稳定', points: 88, trend: '↓ 1', trendTone: 'down' },
      { name: 'Mia', note: '记录质量持续提升', points: 85, trend: '↑ 3', trendTone: 'up' },
      { name: 'Ray', note: '保持轻松观察就好', points: 82, trend: '—', trendTone: 'flat' },
    ],
    active_star: [
      { name: 'Ray', note: '本周完成 42 个任务', points: 42, trend: '↑ 1', trendTone: 'up' },
      { name: 'Bella', note: '每日任务全点亮', points: 38, trend: '↑ 2', trendTone: 'up' },
      { name: 'Mia', note: '成长任务推进很快', points: 35, trend: '—', trendTone: 'flat' },
      { name: 'Aria', note: '特别任务也不落下', points: 31, trend: '↓ 1', trendTone: 'down' },
      { name: 'Sophia', note: '每周任务完成率 90%', points: 28, trend: '↑ 1', trendTone: 'up' },
      { name: 'Luna', note: '任务节奏刚刚好', points: 24, trend: '—', trendTone: 'flat' },
    ],
    streak: [
      { name: 'Aria', note: '连续打卡 46 天', points: 46, trend: '↑ 1', trendTone: 'up' },
      { name: 'Sophia', note: '连续打卡 39 天', points: 39, trend: '—', trendTone: 'flat' },
      { name: 'Bella', note: '连续打卡 33 天', points: 33, trend: '↑ 2', trendTone: 'up' },
      { name: 'Ray', note: '连续打卡 27 天', points: 27, trend: '↓ 1', trendTone: 'down' },
      { name: 'Luna', note: '连续打卡 21 天', points: 21, trend: '↑ 1', trendTone: 'up' },
      { name: 'Mia', note: '连续打卡 18 天', points: 18, trend: '—', trendTone: 'flat' },
    ],
    kindness: [
      { name: 'Mia', note: '本周帮助伙伴 36 次', points: 36, trend: '↑ 3', trendTone: 'up' },
      { name: 'Ray', note: '给队友点赞从不缺席', points: 31, trend: '↑ 1', trendTone: 'up' },
      { name: 'Aria', note: '联盟里最会鼓励人', points: 28, trend: '—', trendTone: 'flat' },
      { name: 'Luna', note: '分享任务小技巧', points: 24, trend: '↓ 1', trendTone: 'down' },
      { name: 'Sophia', note: '暖心留言达人', points: 21, trend: '↑ 2', trendTone: 'up' },
      { name: 'Bella', note: '默默给大家加能量', points: 17, trend: '—', trendTone: 'flat' },
    ],
  }

  const rows = metricRows[metric]
  const leaders: LeagueLeader[] = rows.map((row, index) => {
    const profile = profileByName[row.name]
    return {
      rank: index + 1,
      name: profile.name,
      level: profile.level,
      note: row.note,
      points: row.points,
      scoreText: formatLeagueScore(metric, row.points),
      tier: profile.tier,
      tierTone: profile.tierTone,
      trend: row.trend,
      trendTone: row.trendTone,
      avatarSrc: profile.avatarSrc,
      isMe: false,
    }
  })

  const myScore = myLeagueMetricScore(metric)
  const myPoints = useUserStore.getState().points
  const myTier = getLeagueTierProgress(myPoints)
  const myTierTone: LeagueLeader['tierTone'] =
    myTier.name.startsWith('王者') ? 'gold' : myTier.name.startsWith('钻石') ? 'purple' : 'blue'

  leaders.push({
    rank: MY_LEADERBOARD_RANK,
    name: 'You',
    level: `Lv.${getLevelProgress(myPoints).level}`,
    note: myLeagueMetricNote(metric),
    points: myScore,
    scoreText: formatLeagueScore(metric, myScore),
    tier: myTier.name,
    tierTone: myTierTone,
    trend: '↑ 1',
    trendTone: 'up',
    avatarSrc: leagueAvatar('you'),
    isMe: true,
  })

  const others = leaders
    .filter((leader) => !leader.isMe)
    .sort((a, b) => {
      if (a.points !== b.points) return b.points - a.points
      return a.rank - b.rank
    })
    .map((leader, index) => ({ ...leader, rank: index + 1 }))
  const me = leaders.find((leader) => leader.isMe)
  return me ? [...others, { ...me, rank: MY_LEADERBOARD_RANK }] : others
}

export function renderLeague(
  root: HTMLElement,
  activeTab: LeagueTab = '排行榜',
  activeMetric: LeagueRankMetric = 'total_xp',
) {
  const s = useUserStore.getState()
  const tier = getLeagueTierProgress(s.points)
  const level = getLevelProgress(s.points)

  root.querySelectorAll<HTMLElement>('[data-league-tab]').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.leagueTab === activeTab)
  })

  const tierName = root.querySelector<HTMLElement>('[data-league-tier-name]')
  const tierProgress = root.querySelector<HTMLElement>('[data-league-tier-progress]')
  const tierFill = root.querySelector<HTMLElement>('[data-league-tier-fill]')
  const tierBadge = root.querySelector<HTMLImageElement>('[data-league-tier-badge]')
  const myContrib = root.querySelector<HTMLElement>('[data-league-my-contrib]')
  const allianceFill = root.querySelector<HTMLElement>('[data-league-alliance-fill]')
  const allianceNote = root.querySelector<HTMLElement>('[data-league-alliance-note]')
  if (tierName) tierName.textContent = tier.name
  if (tierProgress) tierProgress.textContent = `⭐ ${tier.current} / ${tier.max}`
  if (tierFill) tierFill.style.width = `${tier.percent}%`
  if (tierBadge) {
    tierBadge.src = tierShieldSrc(tier.name)
    tierBadge.alt = `${tier.name}段位徽章`
  }
  if (myContrib) myContrib.textContent = `${s.points.toLocaleString('en-US')} XP`
  if (allianceFill) allianceFill.style.width = `${level.percent}%`
  if (allianceNote) {
    allianceNote.textContent = level.need > 0
      ? `距离下一等级还需 ${level.need} XP`
      : '本周贡献已同步你的总 XP'
  }

  setHtml(root.querySelector('#leagueRankContent'), renderLeagueTab(activeTab, activeMetric))
}

function renderLeagueTab(tab: LeagueTab, activeMetric: LeagueRankMetric) {
  if (tab === '我的联盟') return renderAllianceTab()
  if (tab === '好友排行') return renderFriendRankTab()
  if (tab === '段位晋升') return renderTierProgressTab()
  return renderLeaderboardTab(activeMetric)
}

function renderLeaderboardTab(activeMetric: LeagueRankMetric) {
  const metricDef = LEAGUE_RANK_METRICS.find((item) => item.id === activeMetric) ?? LEAGUE_RANK_METRICS[0]
  return `
    <div class="ranking-layout">
      <aside class="category-nav">
        ${LEAGUE_RANK_METRICS.map((metric) => `
          <button class="${metric.id === activeMetric ? 'active' : ''}" type="button" data-league-metric="${metric.id}">
            <span>${metric.icon}</span>
            <span><b>${escapeHtml(metric.title)}</b>${metric.subtitle ? `<small>${escapeHtml(metric.subtitle)}</small>` : ''}</span>
          </button>
        `).join('')}
      </aside>
      <div class="ranking-card">
        <div class="table-head"><span>排名</span><span>玩家</span><span>段位</span><span>${escapeHtml(metricDef.column)}</span><span>趋势</span></div>
        <div class="table-body">${buildLeaders(activeMetric).map(renderLeagueLeader).join('')}</div>
        <div class="refresh-note">◷ ${escapeHtml(metricDef.title)} · mock 数据，每 10 分钟更新一次</div>
      </div>
    </div>
  `
}

function renderAllianceTab() {
  const s = useUserStore.getState()
  const level = getLevelProgress(s.points)
  const doneCount = QUEST_CATEGORIES.reduce((sum, category) => sum + loadDoneQuests(category).size, 0)
  const cards = [
    ['联盟等级', `Lv.${level.level}`, level.need > 0 ? `距离 Lv.${level.level + 1} 还需 ${level.need} XP` : '已达当前演示等级上限', `${level.percent}%`],
    ['本周任务', `${doneCount} 个`, doneCount > 0 ? '完成任务可为联盟积累贡献' : '去完成任务，为联盟添一份力', '67%'],
    ['成员活跃', '28 / 30', `${s.checkinDays.length} 天打卡记录已同步`, `${Math.min(100, s.checkinDays.length * 12)}%`],
  ]
  const members = [
    ['Luna', '队长', '8,420 XP'],
    ['Mia', '副队长', '7,860 XP'],
    ['Ray', '活跃成员', '6,980 XP'],
    ['You', '成长成员', `${s.points.toLocaleString('en-US')} XP`],
  ]
  return `
    <div class="league-mock-grid alliance-mock">
      ${cards.map(([title, value, note, width]) => `
        <section class="league-mock-card">
          <span>${escapeHtml(title)}</span>
          <b>${escapeHtml(value)}</b>
          <p>${escapeHtml(note)}</p>
          <div class="league-mock-progress"><i style="width:${escapeHtml(width)}"></i></div>
        </section>
      `).join('')}
      <section class="league-mock-card wide">
        <div class="league-mock-title"><b>联盟成员贡献</b></div>
        <div class="league-mini-list">
          ${members.map(([name, role, xp]) => `<div><span class="avatar-dot"></span><b>${escapeHtml(name)}<small>${escapeHtml(role)}</small></b><strong>${escapeHtml(xp)}</strong></div>`).join('')}
        </div>
      </section>
    </div>
  `
}

function renderFriendRankTab() {
  const s = useUserStore.getState()
  const myPoints = s.points
  const myTier = getLeagueTierProgress(myPoints)
  const myTierTone: LeagueLeader['tierTone'] =
    myTier.name.startsWith('王者') ? 'gold' : myTier.name.startsWith('钻石') ? 'purple' : 'blue'
  const friends: LeagueLeader[] = [
    { rank: 1, name: 'Nora', level: 'Lv.5', note: '睡眠打卡稳定', points: 20680, scoreText: '20,680 XP', tier: '钻石 II', tierTone: 'purple', trend: '↑ 2', trendTone: 'up', avatarSrc: '', isMe: false },
    { rank: 2, name: 'Echo', level: 'Lv.4', note: '本周完成 9 个任务', points: 18440, scoreText: '18,440 XP', tier: '铂金 I', tierTone: 'blue', trend: '—', trendTone: 'flat', avatarSrc: '', isMe: false },
    { rank: 3, name: 'June', level: 'Lv.4', note: '护发建议执行率 86%', points: 17210, scoreText: '17,210 XP', tier: '铂金 II', tierTone: 'blue', trend: '↓ 1', trendTone: 'down', avatarSrc: '', isMe: false },
    {
      rank: 7,
      name: 'You',
      level: `Lv.${getLevelProgress(myPoints).level}`,
      note: s.checkinDays.length ? `${s.checkinDays.length} 天打卡 · 一起变好呀！` : '一起变好呀！',
      points: myPoints,
      scoreText: formatLeagueScore('total_xp', myPoints),
      tier: myTier.name,
      tierTone: myTierTone,
      trend: '↑ 1',
      trendTone: 'up',
      avatarSrc: leagueAvatar('you'),
      isMe: true,
    },
  ]
  const ranked = [...friends].sort((a, b) => b.points - a.points).map((leader, index) => ({ ...leader, rank: index + 1 }))
  return `
    <div class="ranking-card full">
      <div class="table-head"><span>排名</span><span>好友</span><span>段位</span><span>本周 XP</span><span>趋势</span></div>
      <div class="table-body">${ranked.map(renderLeagueLeader).join('')}</div>
      <div class="refresh-note">好友排行中 You 的 XP 已与 UserStore 同步</div>
    </div>
  `
}

function renderTierProgressTab() {
  const s = useUserStore.getState()
  const tier = getLeagueTierProgress(s.points)
  const level = getLevelProgress(s.points)
  const tiers = ['青铜', '白银', '黄金', '铂金', '钻石 III', '钻石 II', '钻石 I', '王者'].map((name, index) => {
    const threshold = index * 1000
    const done = s.points >= threshold
    const rule = index === 0
      ? '完成第一次扫描'
      : done
        ? `已达到 ${threshold.toLocaleString('en-US')} XP`
        : `再获得 ${Math.max(0, threshold - s.points)} XP`
    return [name, rule, done] as const
  })
  return `
    <div class="league-tier-board">
      <section class="league-mock-card tier-current">
        <span>当前段位</span>
        <img class="league-tier-current-shield" src="${escapeHtml(tierShieldSrc(tier.name))}" alt="${escapeHtml(tier.name)}">
        <b>${escapeHtml(tier.name)}</b>
        <p>当前总 XP ${s.points.toLocaleString('en-US')} · Lv.${level.level}${tier.nextNeed > 0 ? `，再获得 ${tier.nextNeed} XP 可晋升` : '，已达演示段位上限'}。</p>
        <div class="league-mock-progress"><i style="width:${tier.percent}%"></i></div>
      </section>
      <section class="league-tier-road">
        ${tiers.map(([name, rule, done]) => `
          <div class="${done ? 'done' : ''}">
            <img class="league-tier-road-shield" src="${escapeHtml(tierShieldSrc(String(name)))}" alt="${escapeHtml(String(name))}">
            <b>${escapeHtml(String(name))}<small>${escapeHtml(String(rule))}</small></b>
          </div>
        `).join('')}
      </section>
    </div>
  `
}

function renderLeagueLeader(leader: LeagueLeader) {
  const rankClass = leader.isMe ? 'you-rank' : leader.rank === 1 ? 'gold' : leader.rank === 2 ? 'silver' : leader.rank === 3 ? 'bronze' : 'normal'
  const tierIcon = tierShieldSrc(leader.tier)
  return `
    <div class="league-ranking-row ${leader.isMe ? 'current-user' : ''}" role="row">
      <div class="rank-cell" role="cell"><span class="rank-badge ${rankClass}">${leader.rank}</span></div>
      <div class="player-cell" role="cell">
        ${leader.avatarSrc ? `<img class="league-avatar" src="${escapeHtml(leader.avatarSrc)}" alt="${escapeHtml(leader.name)} 的头像">` : '<span class="avatar-dot"></span>'}
        <div class="player-copy">
          <div class="player-name">${escapeHtml(leader.name)} <span class="level">${escapeHtml(leader.level)}</span>${leader.isMe ? '<span class="mini-crown" title="当前用户">●</span>' : ''}</div>
          <div class="motto">${escapeHtml(leader.note)}</div>
        </div>
      </div>
      <div class="tier-cell" role="cell">
        <img class="tier-emblem-icon" src="${escapeHtml(tierIcon)}" alt="${escapeHtml(leader.tier)}">
        <span>${escapeHtml(leader.tier)}</span>
      </div>
      <div class="xp-cell" role="cell">${escapeHtml(leader.scoreText)}</div>
      <div class="trend-cell ${leader.trendTone}" role="cell">${escapeHtml(leader.trend)}</div>
    </div>
  `
}
