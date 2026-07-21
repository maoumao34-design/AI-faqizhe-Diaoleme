import { useUserStore } from '../../store/UserStore'
import { escapeHtml, publicAssetUrl, setHtml } from './ui'

const leagueAvatar = (name: string) => publicAssetUrl(`league-avatars/${name}.png`)

export type LeagueTab = '排行榜' | '我的联盟' | '好友排行' | '段位晋升'

type LeagueLeader = {
  rank: number
  name: string
  level: string
  note: string
  points: number
  tier: string
  tierTone: 'gold' | 'purple' | 'blue'
  trend: string
  trendTone: 'up' | 'down' | 'flat'
  avatarSrc: string
  isMe: boolean
}

export const LEAGUE_TABS: LeagueTab[] = ['排行榜', '我的联盟', '好友排行', '段位晋升']

export function renderLeague(root: HTMLElement, activeTab: LeagueTab = '排行榜') {
  root.querySelectorAll<HTMLElement>('[data-league-tab]').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.leagueTab === activeTab)
  })
  setHtml(root.querySelector('#leagueRankContent'), renderLeagueTab(activeTab))
}

export function buildLeaders(): LeagueLeader[] {
  const s = useUserStore.getState()
  return [
    { rank: 1, name: 'Luna', level: 'Lv.6', note: '头发是生命的种子 🌱', points: 28760, tier: '王者 I', tierTone: 'gold', trend: '↑ 1', trendTone: 'up', avatarSrc: leagueAvatar('luna'), isMe: false },
    { rank: 2, name: 'Mia', level: 'Lv.5', note: '每天进步 1% ✨', points: 25480, tier: '王者 II', tierTone: 'gold', trend: '↓ 1', trendTone: 'down', avatarSrc: leagueAvatar('mia'), isMe: false },
    { rank: 3, name: 'Ray', level: 'Lv.5', note: '慢慢来，比较更重要 💜', points: 22140, tier: '钻石 I', tierTone: 'purple', trend: '—', trendTone: 'flat', avatarSrc: leagueAvatar('ray'), isMe: false },
    { rank: 4, name: 'Sophia', level: 'Lv.5', note: '关注头皮，从现在开始', points: 18900, tier: '钻石 II', tierTone: 'purple', trend: '↑ 2', trendTone: 'up', avatarSrc: leagueAvatar('sophia'), isMe: false },
    { rank: 5, name: 'Bella', level: 'Lv.4', note: '保持心情愉悦～', points: 16520, tier: '铂金 I', tierTone: 'blue', trend: '↓ 1', trendTone: 'down', avatarSrc: leagueAvatar('bella'), isMe: false },
    { rank: 6, name: 'Aria', level: 'Lv.4', note: '爱自己，从发起 ❤️', points: 15320, tier: '铂金 II', tierTone: 'blue', trend: '—', trendTone: 'flat', avatarSrc: leagueAvatar('aria'), isMe: false },
    { rank: 12, name: 'You', level: 'Lv.5', note: s.checkinDays.length ? `${s.checkinDays.length} 天打卡 · 一起变好呀！` : '一起变好呀！', points: Math.max(s.points, 12360), tier: '钻石 III', tierTone: 'purple', trend: '↑ 3', trendTone: 'up', avatarSrc: leagueAvatar('you'), isMe: true },
  ]
}

function renderLeagueTab(tab: LeagueTab) {
  if (tab === '我的联盟') return renderAllianceTab()
  if (tab === '好友排行') return renderFriendRankTab()
  if (tab === '段位晋升') return renderTierProgressTab()
  return renderLeaderboardTab()
}

function renderLeaderboardTab() {
  return `
    <div class="ranking-layout">
      <aside class="category-nav">
        <button class="active" type="button"><span>✣</span><span><b>总 XP 排行</b></span></button>
        <button type="button"><span>♔</span><span><b>护发达人</b><small>头发健康分</small></span></button>
        <button type="button"><span>✦</span><span><b>活跃之星</b><small>任务完成数</small></span></button>
        <button type="button"><span>⌁</span><span><b>坚持不懈</b><small>连续打卡天数</small></span></button>
        <button type="button"><span>♡</span><span><b>爱心大使</b><small>帮助伙伴次数</small></span></button>
      </aside>
      <div class="ranking-card">
        <div class="table-head"><span>排名</span><span>玩家</span><span>段位</span><span>总 XP</span><span>趋势</span></div>
        <div class="table-body">${buildLeaders().map(renderLeagueLeader).join('')}</div>
        <div class="refresh-note">◷ 每 10 分钟更新一次</div>
      </div>
    </div>
  `
}

function renderAllianceTab() {
  const cards = [
    ['联盟等级', 'Lv.6', '距离 Lv.7 还需 740 XP', '58%'],
    ['本周任务', '12 / 18', '今日新增 3 个可完成任务', '67%'],
    ['成员活跃', '28 / 30', '5 位成员连续打卡超过 7 天', '86%'],
  ]
  const members = [
    ['Luna', '队长', '8,420 XP'],
    ['Mia', '副队长', '7,860 XP'],
    ['Ray', '活跃成员', '6,980 XP'],
    ['You', '成长成员', '3,260 XP'],
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
  const friends: LeagueLeader[] = [
    { rank: 1, name: 'Nora', level: 'Lv.5', note: '睡眠打卡稳定', points: 20680, tier: '钻石 II', tierTone: 'purple', trend: '↑ 2', trendTone: 'up', avatarSrc: '', isMe: false },
    { rank: 2, name: 'Echo', level: 'Lv.4', note: '本周完成 9 个任务', points: 18440, tier: '铂金 I', tierTone: 'blue', trend: '—', trendTone: 'flat', avatarSrc: '', isMe: false },
    { rank: 3, name: 'June', level: 'Lv.4', note: '护发建议执行率 86%', points: 17210, tier: '铂金 II', tierTone: 'blue', trend: '↓ 1', trendTone: 'down', avatarSrc: '', isMe: false },
    { rank: 7, name: 'You', level: 'Lv.5', note: '一起变好呀！', points: 12360, tier: '钻石 III', tierTone: 'purple', trend: '↑ 1', trendTone: 'up', avatarSrc: leagueAvatar('you'), isMe: true },
  ]
  return `
    <div class="ranking-card full">
      <div class="table-head"><span>排名</span><span>好友</span><span>段位</span><span>本周 XP</span><span>趋势</span></div>
      <div class="table-body">${friends.map(renderLeagueLeader).join('')}</div>
      <div class="refresh-note">好友排行为 mock 数据，后续接入好友关系后替换</div>
    </div>
  `
}

function renderTierProgressTab() {
  const tiers = [
    ['青铜', '完成第一次扫描', true],
    ['白银', '累计 3 天记录', true],
    ['黄金', '完成 8 个护发任务', true],
    ['铂金', '连续打卡 7 天', true],
    ['钻石 III', '当前段位 · 620 / 1000 XP', true],
    ['钻石 II', '再获得 380 XP 解锁', false],
    ['钻石 I', '进入联盟前 20%', false],
    ['王者', '赛季前 3 名', false],
  ]
  return `
    <div class="league-tier-board">
      <section class="league-mock-card tier-current">
        <span>当前段位</span>
        <b>钻石 III</b>
        <p>保持任务完成率，并在本周获得 380 XP 可晋升至钻石 II。</p>
        <div class="league-mock-progress"><i style="width:62%"></i></div>
      </section>
      <section class="league-tier-road">
        ${tiers.map(([name, rule, done]) => `
          <div class="${done ? 'done' : ''}">
            <span>${done ? '✓' : '·'}</span>
            <b>${escapeHtml(String(name))}<small>${escapeHtml(String(rule))}</small></b>
          </div>
        `).join('')}
      </section>
    </div>
  `
}

function renderLeagueLeader(leader: LeagueLeader) {
  const rankClass = leader.isMe ? 'you-rank' : leader.rank === 1 ? 'gold' : leader.rank === 2 ? 'silver' : leader.rank === 3 ? 'bronze' : 'normal'
  const tierClass = leader.tierTone === 'gold' ? 'king' : leader.tierTone === 'purple' ? 'diamond' : 'platinum'
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
        <span class="tier-emblem ${tierClass}" aria-hidden="true">
          <svg viewBox="0 0 24 24"><path d="M12 2.3 16 5l4.7.8-.8 4.7 1.7 4.5-4.2 2.3L15 21.6 12 19l-3 2.6-2.4-4.3L2.4 15l1.7-4.5-.8-4.7L8 5l4-2.7Z"/><path class="tier-star" d="m12 7.2 1.35 2.74 3.03.44-2.19 2.13.52 3.02L12 14.1l-2.71 1.43.52-3.02-2.19-2.13 3.03-.44L12 7.2Z"/></svg>
        </span>
        <span>${escapeHtml(leader.tier)}</span>
      </div>
      <div class="xp-cell" role="cell">${leader.points.toLocaleString('en-US')} XP</div>
      <div class="trend-cell ${leader.trendTone}" role="cell">${escapeHtml(leader.trend)}</div>
    </div>
  `
}
