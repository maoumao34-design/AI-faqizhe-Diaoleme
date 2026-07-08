import { motion } from 'framer-motion'
import { Lock, Check, Sparkles } from 'lucide-react'
import { useState } from 'react'
import { useShallow } from 'zustand/react/shallow'
import ClayAvatar from '../components/ClayAvatar'
import StickerCard from '../components/Layout/StickerCard'
import { useUserStore } from '../store/UserStore'
import { HAIRSTYLE_CATALOG } from '../services/model'
import type { HairStyle } from '../types'

export default function Hairstyle() {
  const { unlockedHairStyles, points, dropScore, unlockHairStyle } = useUserStore(
    useShallow((s) => ({
      unlockedHairStyles: s.unlockedHairStyles,
      points: s.points,
      dropScore: s.dropScore,
      unlockHairStyle: s.unlockHairStyle,
    })),
  )
  const [previewHair, setPreviewHair] = useState<HairStyle>('none')
  const [msg, setMsg] = useState<string | null>(null)

  const tryUnlock = (id: string, cost: number) => {
    if (unlockedHairStyles.includes(id)) {
      setPreviewHair(id as HairStyle)
      setMsg(null)
      return
    }
    const ok = unlockHairStyle(id, cost)
    if (ok) {
      setPreviewHair(id as HairStyle)
      setMsg('解锁成功！')
    } else {
      setMsg(`积分还差 ${cost - points}，继续打卡哦`)
    }
  }

  return (
    <div className="min-h-full bg-cream px-6 py-8 pb-24 flex flex-col items-center">
      <h2 className="font-display text-2xl text-coffee mb-1">发型库</h2>
      <p className="text-coffee/60 text-sm mb-5">
        用积分解锁新造型 · 当前积分 <span className="font-mono text-moss-deep">{points}</span>
      </p>

      <StickerCard accent="pink">
        <div className="flex items-center gap-3">
          <ClayAvatar score={dropScore} size={72} hair={previewHair} />
          <div className="flex-1">
            <p className="font-medium mb-1">已解锁</p>
            <p className="text-xs text-coffee/60">
              {unlockedHairStyles.length} / {HAIRSTYLE_CATALOG.length} 发型
            </p>
          </div>
        </div>
      </StickerCard>

      <div className="grid grid-cols-3 gap-3 mt-6 w-full">
        {HAIRSTYLE_CATALOG.map((h) => {
          const unlocked = unlockedHairStyles.includes(h.id)
          const active = previewHair === h.id
          return (
            <StickerCard key={h.id} accent={active ? 'pink' : 'cream'}>
              <button
                onClick={() => tryUnlock(h.id, h.cost)}
                className="w-full flex flex-col items-center justify-center py-2 relative"
              >
                {active && (
                  <motion.div
                    layoutId="hairstyle-active"
                    className="absolute inset-0 bg-pink/30 rounded-3xl"
                    transition={{ type: 'spring', stiffness: 320, damping: 26 }}
                  />
                )}
                <div className="text-2xl">
                  {unlocked ? h.emoji : '🔒'}
                </div>
                <p className="text-xs mt-1 font-medium">{h.name}</p>
                <p className="text-[10px] text-coffee/60 mt-0.5">
                  {unlocked ? (
                    <span className="text-moss flex items-center gap-0.5">
                      <Check size={10} /> 已拥有
                    </span>
                  ) : (
                    <span className="flex items-center gap-0.5">
                      <Lock size={10} /> {h.cost}
                    </span>
                  )}
                </p>
              </button>
            </StickerCard>
          )
        })}
      </div>

      {msg && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 px-4 py-2 bg-moss/20 text-moss-deep rounded-full text-sm font-medium"
        >
          {msg}
        </motion.div>
      )}

      <div className="mt-8 w-full">
        <StickerCard accent="cream">
          <p className="text-xs text-coffee/60 text-center leading-relaxed">
            <Sparkles size={12} className="inline text-moss mr-1" />
            积分通过在「今日任务」页打卡和完成任务获得
          </p>
        </StickerCard>
      </div>

      <div className="h-4" />
    </div>
  )
}
