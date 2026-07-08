import { motion } from 'framer-motion'
import { Check, Sparkles, Scissors, Camera } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useShallow } from 'zustand/react/shallow'
import ClayAvatar from '../components/ClayAvatar'
import StickerCard from '../components/Layout/StickerCard'
import { useUserStore } from '../store/UserStore'

const TODAY_KEY = () => `diaolema-tasks-${new Date().toISOString().slice(0, 10)}`

function loadTodayDone(): Set<number> {
  try {
    const raw = localStorage.getItem(TODAY_KEY())
    if (!raw) return new Set()
    return new Set(JSON.parse(raw) as number[])
  } catch {
    return new Set()
  }
}

function saveTodayDone(set: Set<number>) {
  localStorage.setItem(TODAY_KEY(), JSON.stringify([...set]))
}

export default function Tasks() {
  const { suggestions, points, dropScore, markCheckinToday, checkinDays, addPoints } = useUserStore(
    useShallow((s) => ({
      suggestions: s.suggestions,
      points: s.points,
      dropScore: s.dropScore,
      markCheckinToday: s.markCheckinToday,
      checkinDays: s.checkinDays,
      addPoints: s.addPoints,
    } ),
  ))
  const [done, setDone] = useState<Set<number>>(loadTodayDone)
  const [bonusMsg, setBonusMsg] = useState<string | null>(null)
  const nav = useNavigate()

  const todayStr = new Date().toISOString().slice(0, 10)
  const alreadyChecked = checkinDays.includes(todayStr)
  const allDone = suggestions.length > 0 && done.size >= suggestions.length

  // 检测到全部完成 → 一次性加 10 积分（只触发一次）
  useEffect(() => {
    if (allDone && bonusMsg === null) {
      addPoints(10)
      setBonusMsg('今日建议全部完成！+10 积分 🎉')
    }
  }, [allDone, bonusMsg, addPoints])

  const checkIn = () => {
    if (alreadyChecked) return
    markCheckinToday()
  }

  const toggle = (i: number) => {
    if (done.has(i)) return // 已完成 → 不可撤销
    const next = new Set(done).add(i)
    setDone(next)
    saveTodayDone(next)
  }

  const hasTasks = suggestions.length > 0

  return (
    <div className="min-h-full bg-cream px-6 py-8 pb-24 flex flex-col items-center">
      <h2 className="font-display text-2xl text-coffee mb-1">今日任务</h2>
      <p style={{ color: 'rgba(58,47,40,0.6)' }} className="text-sm mb-5">
        完成建议 · 打卡领积分
      </p>

      <StickerCard accent="pink">
        <div className="flex items-center gap-4">
          <ClayAvatar score={dropScore} size={56} hair="short" />
          <div className="flex-1">
            <p className="font-medium">当前积分</p>
            <p className="font-mono text-2xl text-moss-deep">{points}</p>
          </div>
          <button
            onClick={checkIn}
            disabled={alreadyChecked}
            className="px-4 py-2 rounded-2xl text-sm font-medium active:scale-95 transition"
            style={
              alreadyChecked
                ? { background: '#E8D8C8', color: 'rgba(58,47,40,0.3)', cursor: 'not-allowed' }
                : { background: '#3A2F28', color: '#FFF8F0' }
            }
          >
            {alreadyChecked ? '已打卡' : '＋ 打卡'}
          </button>
        </div>
      </StickerCard>

      <div className="w-full mt-6">
        <h3 className="font-display text-lg text-coffee mb-3 flex items-center gap-1">
          <Sparkles size={16} className="text-moss" /> 今天的建议
        </h3>

        {!hasTasks ? (
          <StickerCard accent="cream">
            <div className="flex flex-col items-center text-center gap-3 py-4">
              <Camera size={32} style={{ color: 'rgba(58,47,40,0.3)' }} />
              <p className="text-sm" style={{ color: 'rgba(58,47,40,0.6)' }}>
                还没拍今日掉发照片哦<br />
                拍完后黏土小人会给你专属建议 🌱
              </p>
              <button
                onClick={() => nav('/tab/scan')}
                className="mt-1 px-5 py-2 rounded-2xl text-sm font-medium active:scale-95 transition"
                style={{ background: '#3A2F28', color: '#FFF8F0' }}
              >
                去拍照 →
              </button>
            </div>
          </StickerCard>
        ) : (
          <div className="space-y-2">
            {suggestions.map((s, i) => {
              const isDone = done.has(i)
              return (
                <StickerCard key={i} accent={isDone ? 'moss' : 'cream'}>
                  <button
                    onClick={() => toggle(i)}
                    disabled={isDone}
                    className={`w-full flex items-start gap-3 text-left ${isDone ? 'cursor-default' : 'cursor-pointer active:scale-[0.98] transition'}`}
                  >
                    <div
                      className="mt-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center transition"
                      style={
                        isDone
                          ? { background: '#9BBF8A', borderColor: '#9BBF8A' }
                          : { borderColor: 'rgba(58,47,40,0.3)' }
                      }
                    >
                      {isDone && <Check size={12} style={{ color: '#FFF8F0' }} />}
                    </div>
                    <span
                      className="flex-1 font-body text-sm"
                      style={isDone ? { textDecoration: 'line-through', color: 'rgba(58,47,40,0.4)' } : undefined}
                    >
                      {s}
                    </span>
                  </button>
                </StickerCard>
              )
            })}
          </div>
        )}
      </div>

      {bonusMsg && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-6 px-5 py-2.5 rounded-full text-sm font-medium"
          style={{ background: 'rgba(155,191,138,0.2)', color: '#7FA66E' }}
        >
          {bonusMsg}
        </motion.div>
      )}

      <div className="mt-8 w-full">
        <h3 className="font-display text-lg text-coffee mb-3 flex items-center gap-1">
          <Scissors size={16} className="text-tangerine" /> 小提示
        </h3>
        <StickerCard accent="cream">
          <p className="text-sm leading-relaxed" style={{ color: 'rgba(58,47,40,0.7)' }}>
            每天打卡 +5 积分，完成当天所有建议再 +10 积分，<br />
            积分可解锁发型库里的各种造型哦 ✂️
          </p>
        </StickerCard>
      </div>

      <div className="h-4" />
    </div>
  )
}
