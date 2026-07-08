import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, ChevronRight, ChevronDown, Sparkles, TrendingUp, TrendingDown } from 'lucide-react'
import StickerCard from '../components/Layout/StickerCard'
import { useUserStore } from '../store/UserStore'
import type { ReportRecord } from '../store/UserStore'

export default function Records() {
  const nav = useNavigate()
  const reportHistory = useUserStore((s) => s.reportHistory)
  const [expandedDate, setExpandedDate] = useState<string | null>(null)

  const history = useMemo(
    () => [...reportHistory].sort((a, b) => (a.date < b.date ? 1 : -1)),
    [reportHistory],
  )

  const grouped = useMemo(() => {
    const map = new Map<string, ReportRecord[]>()
    for (const r of history) {
      if (!map.has(r.date)) map.set(r.date, [])
      map.get(r.date)!.push(r)
    }
    return [...map.entries()].sort((a, b) => (a[0] < b[0] ? 1 : -1))
  }, [history])

  if (history.length === 0) {
    return <EmptyState />
  }

  const sorted = [...history].sort((a, b) => (a.date < b.date ? -1 : 1))
  const latest = sorted[sorted.length - 1]
  const trend = calcTrend(sorted)
  const avg = Math.round(sorted.reduce((s, r) => s + r.score, 0) / sorted.length)

  return (
    <div className="min-h-full bg-cream px-5 py-6 pb-28 flex flex-col">
      {/* Header card */}
      <StickerCard accent="pink" className="!rounded-[28px] !p-5">
        <div className="flex items-center gap-2 text-[10px] text-coffee/50">
          <Calendar size={12} />
          <span>掉发记录档案</span>
          <span className="ml-auto font-mono">{history.length} 份</span>
        </div>

        <div className="flex items-center mt-3 gap-4">
          <div className="relative w-24 h-24 flex items-center justify-center">
            <DonutScore score={latest.score} />
          </div>
          <div className="flex-1">
            <p className="text-[11px] text-coffee/60">最新掉发指数</p>
            <p
              className={`font-mono text-4xl font-medium leading-none mt-0.5 ${
                latest.score >= 70
                  ? 'text-moss'
                  : 'text-tangerine'
              }`}
            >
              {latest.score}
            </p>
            <p className="text-xs text-coffee/80 mt-1.5">
              {headlineFor(latest.score)}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 mt-4">
          <Pill label="本周均值" value={String(avg)} valueClass="text-moss-deep" />
          <Pill label="最长坚持" value={`${Math.min(history.length, 30)}`} valueClass="text-tangerine" unit="天" />
          <Pill
            label={trend.delta > 0 ? '指数上涨' : trend.delta < 0 ? '指数下降' : '保持稳定'}
            value={`${Math.abs(trend.delta)}`}
            valueClass={trend.delta > 0 ? 'text-moss-deep' : trend.delta < 0 ? 'text-tangerine' : 'text-coffee'}
          />
        </div>
      </StickerCard>

      {/* Trend chart */}
      {sorted.length >= 2 && <MiniHeatmap days={sorted.slice(-14)} />}

      <h3 className="font-display text-lg text-coffee mt-6 mb-3 flex items-center gap-2">
        <Sparkles size={16} className="text-moss" /> 历史报告
      </h3>

      <div className="space-y-3">
        {grouped.map(([date, recs]) => {
          const isExpanded = expandedDate === date
          const head = recs[0]
          const avgScore = Math.round(recs.reduce((s, r) => s + r.score, 0) / recs.length)
          return (
            <div key={date}>
              <motion.div
                onClick={() => {
                  useUserStore.getState().viewDayReport(date)
                  setExpandedDate(isExpanded ? null : date)
                }}
                className="cursor-pointer"
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                <DayGroupCard
                  date={date}
                  count={recs.length}
                  score={avgScore}
                  countStr={head.count}
                  thickness={head.thickness}
                  isExpanded={isExpanded}
                  isFirst={date === grouped[0][0]}
                />
              </motion.div>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                    style={{ transform: 'translateZ(0)', WebkitTapHighlightColor: 'transparent' }}
                  >
                    <div className="pt-2 pl-4 space-y-2 ml-4" style={{ borderLeft: '2px solid rgba(232,216,200,0.4)' }}>
                      {recs.map((r) => (
                        <motion.div
                          key={r.id}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          onClick={(e) => {
                            e.stopPropagation()
                            useUserStore.getState().viewReport(r.id)
                            nav('/tab/report')
                          }}
                          className="cursor-pointer"
                style={{ WebkitTapHighlightColor: 'transparent' }}
                        >
                          <DetailCard record={r} />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>

      <div className="h-4" />
    </div>
  )
}

function EmptyState() {
  return (
    <div className="min-h-full bg-cream px-6 py-8 pb-28 flex flex-col items-center">
      <h2 className="font-display text-2xl text-coffee mt-6">记录</h2>
      <p className="text-coffee/60 text-sm mt-1">每一次掉发都会被温柔归档</p>

      <div className="relative mt-16 w-44 h-44">
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <EmptyClipart />
        </motion.div>
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 rounded-full"
            style={{
              background: ['#F5C6CB', '#9BBF8A', '#E67A5A'][i],
              left: [40, 80, 120][i],
              top: [30, 60, 90][i],
            }}
            animate={{ y: [0, 30, 60], opacity: [0.7, 0.4, 0], rotate: [0, 180, 360] }}
            transition={{ duration: 4, repeat: Infinity, delay: i * 0.8, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <p className="mt-8 text-sm text-coffee/70 text-center leading-relaxed">
        先去「拍摄」拍第一张掉发记录<br />
        黏土小人会每天帮你存一枚小勋章 🌱
      </p>

      <div className="h-32" />
    </div>
  )
}

function EmptyClipart() {
  return (
    <svg width="176" height="176" viewBox="0 0 200 200">
      <circle cx="100" cy="120" r="45" fill="#F5C6CB" />
      <circle cx="86" cy="112" r="3" fill="#3A2F28" />
      <circle cx="114" cy="112" r="3" fill="#3A2F28" />
      <path d="M92 130 Q100 126 108 130" stroke="#3A2F28" strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="68" cy="122" r="5" fill="#E67A5A" opacity="0.4" />
      <circle cx="132" cy="122" r="5" fill="#E67A5A" opacity="0.4" />
      <path d="M70 90 Q100 60 130 90" fill="none" stroke="#9BBF8A" strokeWidth="3" strokeDasharray="6 6" />
      <path d="M100 65 L100 45" stroke="#9BBF8A" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function DonutScore({ score }: { score: number }) {
  const color = score >= 70 ? '#9BBF8A' : '#E67A5A'
  const radius = 32
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (score / 100) * circumference

  return (
    <svg width="100" height="100" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r={radius} fill="none" stroke="#E8D8C8" strokeWidth="6" />
      <motion.circle
        cx="50"
        cy="50"
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        animate={{ strokeDashoffset: offset }}
        transition={{ duration: 1, ease: 'easeOut' }}
        transform="rotate(-90 50 50)"
      />
      <text
        x="50"
        y="50"
        textAnchor="middle"
        dominantBaseline="central"
        style={{ fontSize: 22, fontWeight: 500, fill: color, fontFamily: 'JetBrains Mono, monospace' }}
      >
        {score}
      </text>
    </svg>
  )
}

function MiniHeatmap({ days }: { days: ReportRecord[] }) {
  return (
    <div className="mt-4">
      <StickerCard accent="cream">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] text-coffee/60">最近 {days.length} 天趋势</span>
          <span className="text-[10px] text-coffee/40">
            {days[0].score} → {days[days.length - 1].score}
          </span>
        </div>
        <div className="flex items-end justify-between gap-1 h-12">
          {days.map((d) => {
            const heightPct = Math.max(15, d.score)
            const color = d.score >= 70 ? '#9BBF8A' : '#E67A5A'
            return (
              <motion.div
                key={d.id}
                className="flex-1 rounded-full"
                style={{ background: color }}
                initial={{ height: 0 }}
                animate={{ height: `${heightPct}%` }}
                transition={{ duration: 0.6, delay: 0.1 }}
              />
            )
          })}
        </div>
        <div className="flex justify-between mt-1 text-[10px] text-coffee/40">
          <span>{formatShort(days[0].date)}</span>
          <span>{formatShort(days[days.length - 1].date)}</span>
        </div>
      </StickerCard>
    </div>
  )
}

function Pill({
  label,
  value,
  unit,
  valueClass,
}: {
  label: string
  value: string
  unit?: string
  valueClass: string
}) {
  return (
    <div className="bg-cream-soft rounded-2xl px-2 py-2 text-center">
      <p className="text-[10px] text-coffee/60">{label}</p>
      <p className={`font-mono text-base font-medium ${valueClass}`}>
        {value}
        {unit && <span className="text-[10px] text-coffee/60 ml-0.5">{unit}</span>}
      </p>
    </div>
  )
}

function DayGroupCard({
  date,
  count,
  score,
  countStr,
  thickness,
  isExpanded,
  isFirst,
}: {
  date: string
  count: number
  score: number
  countStr: '少量' | '中等' | '偏多'
  thickness: '粗硬' | '正常' | '细软'
  isExpanded: boolean
  isFirst: boolean
}) {
  const cardBg =
    score >= 70 ? 'rgba(155,191,138,0.06)' : score >= 40 ? '#fdf3e7' : '#fbe6e8'
  const scoreColor = score >= 70 ? '#9bbf8a' : '#e67a5a'

  return (
    <div
      className="rounded-3xl p-4 shadow-sm transition-all hover:shadow-md hover:scale-[1.01] active:scale-[0.99]"
      style={{ background: cardBg }}
    >
      <div className="flex items-start gap-4">
        <div className="flex flex-col items-center gap-0.5 min-w-[56px]">
          <span className="text-[10px] font-display" style={{ color: 'rgba(58,47,40,0.5)' }}>
            {formatDate(date)}
          </span>
          <span className="font-mono text-3xl font-medium" style={{ color: scoreColor }}>
            {score}
          </span>
          <ScoreBadge score={score} />
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium leading-snug text-coffee">
            {countStr}掉落 · {thickness}
          </p>
          <p className="text-xs mt-1" style={{ color: 'rgba(58,47,40,0.6)' }}>
            共 {count} 次记录 · 平均指数 {score}
          </p>
        </div>

        <div className="flex flex-col items-end gap-1">
          {isFirst && (
            <span className="flex items-center gap-0.5 text-[10px]" style={{ color: '#7fa66e' }}>
              <Sparkles size={10} />
              最新
            </span>
          )}
          <motion.div animate={{ rotate: isExpanded ? 90 : 0 }}>
            <ChevronRight size={16} style={{ color: 'rgba(58,47,40,0.25)' }} />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

function DetailCard({ record }: { record: ReportRecord }) {
  const score = record.score
  const scoreColor = score >= 70 ? '#9bbf8a' : '#e67a5a'

  return (
    <div className="rounded-2xl px-3 py-2.5 flex items-center gap-3 shadow-sm transition hover:bg-white" style={{ background: 'rgba(255,255,255,0.7)' }}>
      <span className="font-mono text-2xl font-medium min-w-[40px]" style={{ color: scoreColor }}>
        {score}
      </span>
      <div className="flex-1 min-w-0">
        <p className="text-xs" style={{ color: 'rgba(58,47,40,0.8)' }}>{record.title || `${record.count}掉落 · ${record.thickness}`}</p>
        <p className="text-[11px] mt-0.5 truncate" style={{ color: 'rgba(58,47,40,0.5)' }}>
          {record.daily_task || record.suggestions[0] || '—'}
        </p>
      </div>
      <span className="text-[10px] font-mono shrink-0" style={{ color: 'rgba(58,47,40,0.35)' }}>
        {formatTime(record.id)}
      </span>
    </div>
  )
}

function ScoreBadge({ score }: { score: number }) {
  if (score >= 80) return <span className="text-[9px] text-moss">优秀</span>
  if (score >= 60) return <span className="text-[9px] text-moss-deep">良好</span>
  if (score >= 40) return <span className="text-[9px] text-tangerine">注意</span>
  return <span className="text-[9px] text-tangerine">需关注</span>
}

function calcTrend(sorted: ReportRecord[]): { delta: number } {
  if (sorted.length < 2) return { delta: 0 }
  return { delta: sorted[sorted.length - 1].score - sorted[0].score }
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr + 'T00:00:00')
  return `${d.getMonth() + 1}月${d.getDate()}日`
}

function formatShort(dateStr: string) {
  const d = new Date(dateStr + 'T00:00:00')
  return `${d.getMonth() + 1}/${d.getDate()}`
}

function formatTime(id: string) {
  const ts = parseInt(id.slice(0, 8), 36)
  if (isNaN(ts) || ts < 1e12) return '—'
  const d = new Date(ts)
  return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`
}

function headlineFor(score: number) {
  if (score >= 80) return '今天状态不错 👌'
  if (score >= 60) return '掉发趋于稳定 🌿'
  if (score >= 40) return '发现一些压力信号'
  return '这正说明你开始关心自己了 🌱'
}
