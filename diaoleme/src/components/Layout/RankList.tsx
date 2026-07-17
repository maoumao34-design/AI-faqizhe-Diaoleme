import { motion } from 'framer-motion'
import { Medal, Crown, Award, Sparkles, Zap } from 'lucide-react'
import StickerCard from './StickerCard'
import { useUserStore } from '../../store/UserStore'
import { HAIRSTYLE_CATALOG } from '../../services/model'

interface RankUser {
  name: string
  emoji: string
  points: number
  days: number
  hairId: string
  isMe: boolean
}

const FAKE_USERS: RankUser[] = [
  { name: '发量富翁小王', emoji: '🦁', points: 2480, days: 89, hairId: 'bun', isMe: false },
  { name: '坚持达人 L', emoji: '🐯', points: 2310, days: 76, hairId: 'long', isMe: false },
  { name: '头皮养生家', emoji: '🐻', points: 2105, days: 71, hairId: 'curly', isMe: false },
  { name: '早睡冠军', emoji: '🐰', points: 1820, days: 62, hairId: 'medium', isMe: false },
  { name: '防脱急先锋', emoji: '🐱', points: 500, days: 45, hairId: 'short', isMe: false },
  { name: '养生新手', emoji: '🐶', points: 480, days: 22, hairId: 'short', isMe: false },
  { name: '来打发的', emoji: '🐼', points: 320, days: 9, hairId: 'none', isMe: false },
]

export default function RankList() {
  const { points, checkinDays, unlockedHairStyles, agentExp, interactWithAgent } = useUserStore()

  const myBestHair = unlockedHairStyles[unlockedHairStyles.length - 1] ?? 'none'
  const me: RankUser = {
    name: '你',
    emoji: myBestHair === 'none' ? '🌱' : HAIRSTYLE_CATALOG.find(h => h.id === myBestHair)?.emoji ?? '🌱',
    points,
    days: checkinDays.length,
    hairId: myBestHair,
    isMe: true,
  }

  const all = [...FAKE_USERS, me].sort((a, b) => b.points - a.points)
  const myIdx = all.findIndex(u => u.isMe)
  const myRank = myIdx + 1

  // 展示逻辑：前 3 + "你" + 你后面 1-2 名（让你有成就感）
  // 如果已在前 3，则展示前 4（含你 + 1 个身后的）
  const showAbove = all.slice(0, Math.min(3, myIdx))
  const showBelow = all.slice(myIdx + 1, myIdx + 3)
  const rows = [...showAbove, me, ...showBelow]

  // 尾部文案：第 1 名鼓励保持，其余显示距上一名差多少
  const nextUp = myIdx > 0 ? all[myIdx - 1] : null
  const footerText = nextUp
    ? `超越「${nextUp.name}」还需 ${nextUp.points - points + 1} 积分 💪`
    : '你是第一名！继续保持 👑'

  return (
    <div className="w-full mt-6 space-y-6">
      <LeagueProgress agentExp={agentExp} points={points} onBoost={() => interactWithAgent(28)} />

      <div>
        <h3 className="font-display text-lg text-coffee mb-3 flex items-center gap-2">
          <Medal size={18} className="text-tangerine" /> 发友排行榜
          <span className="ml-auto text-[10px] text-coffee/50 font-body">你排第 {myRank} 名</span>
        </h3>
        <StickerCard accent="cream">
          <div className="space-y-2">
            {rows.map((u) => (
              <RankRow key={u.isMe ? '__me__' : u.name} user={u} rank={all.indexOf(u) + 1} />
            ))}
          </div>
          <p className="text-[10px] text-coffee/50 text-center mt-3">{footerText}</p>
        </StickerCard>
      </div>
    </div>
  )
}

const LEAGUE_STEPS = [
  { name: '青铜陪伴员', threshold: 0, desc: '完成首次互动，宠物 Agent 记住你的节奏。' },
  { name: '白银守护员', threshold: 120, desc: '连续互动后，解锁更积极的任务提醒。' },
  { name: '黄金发友队长', threshold: 240, desc: '段位晋升，排行榜展示更强陪伴徽章。' },
]

function LeagueProgress({ agentExp, points, onBoost }: { agentExp: number; points: number; onBoost: () => void }) {
  const currentIdx = LEAGUE_STEPS.reduce((idx, step, i) => (agentExp >= step.threshold ? i : idx), 0)
  const next = LEAGUE_STEPS[currentIdx + 1]
  const current = LEAGUE_STEPS[currentIdx]
  const currentBase = current.threshold
  const nextBase = next?.threshold ?? current.threshold + 120
  const progress = Math.min(100, Math.round(((agentExp - currentBase) / (nextBase - currentBase)) * 100))

  return (
    <div>
      <h3 className="font-display text-lg text-coffee mb-3 flex items-center gap-2">
        <Sparkles size={18} className="text-moss" /> Agent League
        <span className="ml-auto text-[10px] text-coffee/50 font-body">模拟段位晋升</span>
      </h3>
      <StickerCard accent="pink" className="!p-5">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[11px] text-coffee/50">当前段位</p>
            <p className="mt-1 font-display text-xl text-coffee">{current.name}</p>
            <p className="mt-1 text-xs leading-relaxed text-coffee/60">互动经验 {agentExp} · 积分 {points}</p>
          </div>
          <button
            type="button"
            onClick={onBoost}
            className="rounded-2xl bg-coffee px-3 py-2 text-xs font-medium text-cream shadow-md shadow-coffee/15"
          >
            模拟互动 +EXP
          </button>
        </div>

        <div className="mt-4">
          <div className="mb-1 flex justify-between text-[10px] text-coffee/50">
            <span>{current.name}</span>
            <span>{next ? `距 ${next.name} 还差 ${Math.max(0, next.threshold - agentExp)} EXP` : '已到展示最高段位'}</span>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-white/70">
            <motion.div
              className="h-full rounded-full bg-moss"
              animate={{ width: `${next ? progress : 100}%` }}
              transition={{ type: 'spring', stiffness: 160, damping: 22 }}
            />
          </div>
        </div>

        <div className="mt-5 space-y-3">
          {LEAGUE_STEPS.map((step, i) => {
            const active = i <= currentIdx
            const upcoming = i === currentIdx + 1
            return (
              <motion.div
                key={step.name}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                className={`flex gap-3 rounded-2xl px-3 py-3 ${active ? 'bg-white/75' : upcoming ? 'bg-moss/10' : 'bg-white/35'}`}
              >
                <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full ${active ? 'bg-moss text-cream' : 'bg-latte/60 text-coffee/45'}`}>
                  {active ? <Zap size={15} /> : i + 1}
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-coffee">{step.name}</p>
                  <p className="mt-0.5 text-[11px] leading-relaxed text-coffee/55">{step.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </StickerCard>
    </div>
  )
}

function RankRow({ user, rank }: { user: RankUser; rank: number }) {
  const rankColor =
    rank === 1 ? 'text-tangerine' : rank === 2 ? 'text-coffee' : rank === 3 ? 'text-moss-deep' : 'text-coffee/40'
  const RankIcon = rank <= 3 ? (rank === 1 ? Crown : Medal) : Award
  const hairName = HAIRSTYLE_CATALOG.find(h => h.id === user.hairId)?.name ?? '素颜'

  return (
    <div
      className={`flex items-center gap-3 py-1.5 ${user.isMe ? 'bg-moss/15 rounded-xl px-2 -mx-2' : ''}`}
    >
      <span className={`w-5 text-center text-xs font-mono ${rankColor}`}>
        {rank <= 3 ? <RankIcon size={14} className="inline" /> : rank}
      </span>
      <span className="text-lg">{user.emoji}</span>
      <div className="flex-1 min-w-0">
        <p className={`text-sm font-medium truncate ${user.isMe ? 'text-moss-deep' : ''}`}>
          {user.name}
          {user.isMe && <span className="text-[10px] ml-1.5 px-1.5 py-0.5 rounded-full bg-moss/25 text-moss-deep">我</span>}
        </p>
        <p className="text-[10px] text-coffee/60 truncate">
          {hairName} · 坚持 {user.days} 天
        </p>
      </div>
      <span className="font-mono text-sm text-tangerine">{user.points}</span>
    </div>
  )
}
