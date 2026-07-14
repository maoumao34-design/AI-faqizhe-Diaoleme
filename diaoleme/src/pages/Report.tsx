import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronDown, ChevronRight, Sparkles, ShieldCheck } from 'lucide-react'
import { useState } from 'react'
import { useShallow } from 'zustand/react/shallow'
import ClayAvatar from '../components/ClayAvatar'
import StickerCard from '../components/Layout/StickerCard'
import { useUserStore } from '../store/UserStore'

export default function Report() {
  const {
    dropScore,
    title,
    summary,
    roast,
    encouragement,
    tags,
    dailyTask,
    disclaimer,
    sourceLabel,
    fallbackCode,
    count,
    thickness,
    suggestions,
  } = useUserStore(
    useShallow((s) => ({
      dropScore: s.dropScore,
      title: s.title,
      summary: s.summary,
      roast: s.roast,
      encouragement: s.encouragement,
      tags: s.tags,
      dailyTask: s.dailyTask,
      disclaimer: s.disclaimer,
      sourceLabel: s.sourceLabel,
      fallbackCode: s.fallbackCode,
      count: s.count,
      thickness: s.thickness,
      suggestions: s.suggestions,
    })),
  )
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  const scoreColor = dropScore == null ? 'text-coffee/30' : dropScore >= 70 ? 'text-moss' : dropScore >= 40 ? 'text-tangerine' : 'text-tangerine'
  const headline = dropScore == null ? '还没开始，先去上传一张照片吧' : title
  const resultSuggestions = suggestions.length > 0 ? suggestions : [dailyTask]

  return (
    <div className="min-h-full overflow-y-auto bg-cream px-6 py-8 flex flex-col items-center">
      <h2 className="font-display text-2xl text-coffee mb-2">今日趣味反馈</h2>
      <p className="text-coffee/60 text-sm text-center">{headline}</p>

      <motion.div
        className="my-5"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 220, damping: 18 }}
      >
        <ClayAvatar score={dropScore} size={150} hair="short" />
      </motion.div>

      <StickerCard accent="pink">
        <div className="mb-3 inline-flex rounded-full bg-white/65 px-3 py-1 text-[11px] font-medium text-coffee/60">
          {sourceLabel}
        </div>
        {fallbackCode && (
          <div className="mb-3 rounded-2xl bg-tangerine/15 px-3 py-2 text-xs leading-relaxed text-tangerine">
            当前为明确 fallback（{fallbackCode}），不是实时 AI 分析；记录仍可用于 demo 展示。
          </div>
        )}
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs text-coffee/50 mb-1">娱乐状态分</p>
            <motion.div
              key={dropScore ?? 'empty'}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`font-mono text-6xl font-medium ${scoreColor}`}
            >
              {dropScore ?? '--'}
            </motion.div>
          </div>
          <div className="rounded-2xl bg-white/60 px-3 py-2 text-right">
            <p className="text-xs text-coffee/45">今日称号</p>
            <p className="mt-1 max-w-[120px] text-sm font-medium text-coffee">{title}</p>
          </div>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-coffee/70">{summary}</p>
      </StickerCard>

      <div className="mt-4 flex w-full max-w-sm flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="rounded-full bg-white/70 px-3 py-1 text-xs text-coffee/65 shadow-sm">
            #{tag}
          </span>
        ))}
      </div>

      <div className="w-full max-w-sm grid grid-cols-2 gap-3 mt-5">
        <StickerCard accent="cream">
          <p className="text-xs text-coffee/50">画面头发量</p>
          <p className="font-medium mt-1">{labelCount(count)}</p>
        </StickerCard>
        <StickerCard accent="cream">
          <p className="text-xs text-coffee/50">头发粗细</p>
          <p className="font-medium mt-1 text-sm">{labelThickness(thickness)}</p>
        </StickerCard>
      </div>

      <div className="w-full max-w-sm mt-5 space-y-3">
        <StickerCard accent="moss">
          <p className="text-xs text-coffee/50">温和吐槽</p>
          <p className="mt-1 text-sm leading-relaxed">{roast}</p>
        </StickerCard>
        <StickerCard accent="cream">
          <p className="text-xs text-coffee/50">给你打气</p>
          <p className="mt-1 text-sm leading-relaxed">{encouragement}</p>
        </StickerCard>
      </div>

      <div className="w-full max-w-sm mt-6">
        <h3 className="font-display text-lg text-coffee mb-2 flex items-center gap-1">
          <Sparkles size={16} className="text-moss" /> 今日任务
        </h3>
        <StickerCard accent="pink">
          <p className="text-sm font-medium leading-relaxed">{dailyTask}</p>
        </StickerCard>
      </div>

      <div className="w-full max-w-sm mt-4">
        <h3 className="font-display text-lg text-coffee mb-2 flex items-center gap-1">
          <ShieldCheck size={16} className="text-moss" /> 轻量建议
        </h3>
        <div className="space-y-2">
          {resultSuggestions.map((s, i) => (
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
                  黏土小人会陪你打卡，坚持记录比一次分数更重要。
                </motion.p>
              )}
            </StickerCard>
          ))}
        </div>
      </div>

      <p className="mt-5 max-w-sm rounded-2xl bg-white/55 px-4 py-3 text-center text-xs leading-relaxed text-coffee/50">
        {disclaimer}
      </p>

      <div className="mt-6 mb-6 grid w-full max-w-sm grid-cols-2 gap-3">
        <Link
          to="/tab/scan"
          className="block active:scale-[0.98] transition-all text-center font-medium py-3.5 rounded-2xl border-2 border-coffee text-coffee"
        >
          再传一张
        </Link>
        <Link
          to="/tab/tasks"
          className="block active:scale-[0.98] transition-all text-center font-medium py-3.5 rounded-2xl bg-coffee text-cream"
        >
          去做任务
        </Link>
      </div>
    </div>
  )
}

function labelCount(d: '少量' | '中等' | '偏多') {
  return d === '少量' ? '少量 🍃' : d === '偏多' ? '稍多一点 👀' : '中等 🌿'
}

function labelThickness(d: '粗硬' | '正常' | '细软') {
  return d === '粗硬' ? '粗硬 💪' : d === '细软' ? '细软 🪶' : '正常 ✨'
}
