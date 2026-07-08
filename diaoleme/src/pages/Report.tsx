import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronDown, ChevronRight, Sparkles } from 'lucide-react'
import { useState } from 'react'
import { useShallow } from 'zustand/react/shallow'
import ClayAvatar from '../components/ClayAvatar'
import StickerCard from '../components/Layout/StickerCard'
import { useUserStore } from '../store/UserStore'

export default function Report() {
  const { dropScore, count, thickness, suggestions } = useUserStore(
    useShallow((s) => ({
      dropScore: s.dropScore,
      count: s.count,
      thickness: s.thickness,
      suggestions: s.suggestions,
    })),
  )
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  const tone = dropScore == null ? 'neutral' : dropScore >= 70 ? 'good' : dropScore >= 40 ? 'neutral' : 'sad'
  const scoreColor = dropScore == null ? 'text-coffee/30' : dropScore >= 70 ? 'text-moss' : dropScore >= 40 ? 'text-tangerine' : 'text-tangerine'
  const headline = dropScore == null
    ? '还没开始'
    : dropScore >= 70
      ? '今天状态不错 👌'
      : dropScore >= 40
        ? '发现一些压力信号'
        : '这正说明你开始关心自己了 🌱'

  return (
    <div className="min-h-full bg-cream px-6 py-8 flex flex-col items-center">
      <h2 className="font-display text-2xl text-coffee mb-2">今日掉发报告</h2>
      <p className="text-coffee/60 text-sm">{headline}</p>

      <motion.div
        className="my-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 220, damping: 18 }}
      >
        <ClayAvatar score={dropScore} size={170} hair="short" />
      </motion.div>

      <StickerCard accent="pink">
        <p className="text-xs text-coffee/50 text-center mb-1">掉发指数</p>
        <motion.div
          key={dropScore ?? 'empty'}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`font-mono text-6xl text-center font-medium ${scoreColor}`}
        >
          {dropScore ?? '—'}
        </motion.div>
        <p className="text-center text-coffee/60 text-sm mt-1">满分 100 · 越高越好</p>
      </StickerCard>

      <div className="w-full max-w-sm grid grid-cols-2 gap-3 mt-5">
        <StickerCard accent="cream">
          <p className="text-xs text-coffee/50">掉发量</p>
          <p className="font-medium mt-1">{labelCount(count)}</p>
        </StickerCard>
        <StickerCard accent="cream">
          <p className="text-xs text-coffee/50">头发粗细</p>
          <p className="font-medium mt-1 text-sm">{labelThickness(thickness)}</p>
        </StickerCard>
      </div>

      <div className="w-full max-w-sm mt-6">
        <h3 className="font-display text-lg text-coffee mb-2 flex items-center gap-1">
          <Sparkles size={16} className="text-moss" /> 今天的建议
        </h3>
        <div className="space-y-2">
          {suggestions.map((s, i) => (
            <StickerCard key={i} accent={i === 0 ? 'moss' : 'cream'}>
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-start gap-2 text-left"
              >
                <span className="text-moss mt-0.5">{i === 0 ? '✓' : '·'}</span>
                <span className="flex-1 font-body text-sm">{s}</span>
                {openIdx === i ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
              </button>
              {openIdx === i && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="text-xs text-coffee/60 mt-2 pl-5 leading-relaxed"
                >
                  黏土小人会陪你打卡，坚持 7 天还能获得积分哦。
                </motion.p>
              )}
            </StickerCard>
          ))}
        </div>
      </div>

      <div className="mt-8 mb-4 w-full max-w-sm">
        <Link
          to="/tab/tasks"
          className="block w-full active:scale-[0.98] transition-all text-center font-medium py-3.5 rounded-2xl"
          style={{ background: '#3A2F28', color: '#FFF8F0' }}
        >
          去看看今日任务 →
        </Link>
      </div>
    </div>
  )
}

function labelCount(d: '少量' | '中等' | '偏多') {
  return d === '少量' ? '少量 🍃' : d === '偏多' ? '偏多 ⚠️' : '中等 🌿'
}

function labelThickness(d: '粗硬' | '正常' | '细软') {
  return d === '粗硬' ? '粗硬 💪' : d === '细软' ? '细软 🪶' : '正常 ✨'
}
