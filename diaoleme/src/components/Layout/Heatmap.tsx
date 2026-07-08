import { useMemo } from 'react'

interface Props {
  checkinDays: string[]
}

export default function Heatmap({ checkinDays }: Props) {
  const cells = useMemo(() => buildMonthCells(new Date()), [])
  const set = useMemo(() => new Set(checkinDays), [checkinDays])

  return (
    <div className="bg-cream-soft border border-latte/60 rounded-3xl p-3">
      <div className="grid grid-cols-7 gap-1.5">
        {['一', '二', '三', '四', '五', '六', '日'].map((w) => (
          <div key={w} className="text-center text-[10px] text-coffee/50">{w}</div>
        ))}
        {cells.map((c, i) => {
          if (c.empty) return <div key={i} />
          const active = set.has(c.date)
          const today = c.date === new Date().toISOString().slice(0, 10)
          return (
            <div
              key={i}
              title={c.date}
              className={`aspect-square rounded-md transition-colors ${
                active
                  ? 'bg-moss'
                  : today
                    ? 'bg-tangerine/40 border border-tangerine'
                    : 'bg-latte/40'
              }`}
            />
          )
        })}
      </div>
      {/* legend */}
      <div className="mt-3 flex items-center justify-end gap-2 text-[10px] text-coffee/50">
        <span className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-sm bg-latte/40" /> 未打卡
        </span>
        <span className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-sm bg-moss" /> 已打卡
        </span>
        <span className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-sm border border-tangerine" /> 今天
        </span>
      </div>
    </div>
  )
}

function buildMonthCells(today: Date) {
  const year = today.getFullYear()
  const month = today.getMonth()
  const first = new Date(year, month, 1)
  // 0 = Sun, 1 = Mon ... we want Mon = 0
  const offset = (first.getDay() + 6) % 7
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const cells: { date: string; empty: boolean }[] = []
  for (let i = 0; i < offset; i++) cells.push({ date: '', empty: true })
  for (let d = 1; d <= daysInMonth; d++) {
    const mm = String(month + 1).padStart(2, '0')
    const dd = String(d).padStart(2, '0')
    cells.push({ date: `${year}-${mm}-${dd}`, empty: false })
  }
  return cells
}
