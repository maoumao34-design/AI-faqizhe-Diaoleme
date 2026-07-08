import { useRef, forwardRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Share2, Star, X, Download } from 'lucide-react'
import html2canvas from 'html2canvas'
import { useShallow } from 'zustand/react/shallow'
import ClayAvatar from '../components/ClayAvatar'
import StickerCard from '../components/Layout/StickerCard'
import { useUserStore } from '../store/UserStore'
import Heatmap from '../components/Layout/Heatmap'
import RankList from '../components/Layout/RankList'

export default function Me() {
  const { dropScore, points, checkinDays, markCheckinToday, resetAll } = useUserStore(
    useShallow((s) => ({
      dropScore: s.dropScore,
      points: s.points,
      checkinDays: s.checkinDays,
      markCheckinToday: s.markCheckinToday,
      resetAll: s.resetAll,
    })),
  )
  const cardRef = useRef<HTMLDivElement>(null)
  const todayStr = new Date().toISOString().slice(0, 10)
  const alreadyChecked = checkinDays.includes(todayStr)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [generating, setGenerating] = useState(false)

  const checkIn = () => {
    if (alreadyChecked) return
    markCheckinToday()
  }

  const onShare = async () => {
    if (!cardRef.current) return
    setGenerating(true)
    try {
      const canvas = await html2canvas(cardRef.current, { backgroundColor: '#FFF8F0', scale: 2 })
      canvas.toBlob((blob) => {
        if (!blob) return
        const url = URL.createObjectURL(blob)
        setPreviewUrl(url)
      })
    } finally {
      setGenerating(false)
    }
  }

  const confirmDownload = () => {
    if (!previewUrl) return
    const a = document.createElement('a')
    a.href = previewUrl
    a.download = `掉了么-日记-${todayStr}.png`
    a.click()
    URL.revokeObjectURL(previewUrl)
    setPreviewUrl(null)
  }

  const closePreview = () => {
    if (previewUrl) URL.revokeObjectURL(previewUrl)
    setPreviewUrl(null)
  }

  return (
    <>
    <div className="min-h-full bg-cream px-6 py-8 flex flex-col items-center">
      <h2 className="font-display text-2xl text-coffee mb-5">我的</h2>

      <StickerCard accent="pink">
        <div className="flex items-center gap-4">
          <ClayAvatar score={dropScore} size={64} hair="short" />
          <div className="flex-1">
            <p className="font-medium text-lg">发友同学</p>
            <p className="text-xs text-coffee/60 flex items-center gap-2">
              <span className="text-tangerine flex items-center gap-1">
                <Star size={12} /> {points} 积分
              </span>
              <span>·</span>
              <span>打卡 {checkinDays.length} 天</span>
            </p>
          </div>
        </div>
      </StickerCard>

      <button
        onClick={checkIn}
        disabled={alreadyChecked}
        className="mt-5 w-full max-w-sm py-4 rounded-2xl font-medium flex items-center justify-center gap-2 shadow active:scale-[0.98] transition-all"
        style={
          alreadyChecked
            ? { background: '#E8D8C8', color: '#3A2F2850', cursor: 'not-allowed' as const }
            : { background: '#3A2F28', color: '#FFF8F0' }
        }
      >
        {alreadyChecked ? '今日已打卡 ✓' : '今日打卡 ＋5 积分'}
      </button>

      <div className="w-full max-w-sm mt-6">
        <h3 className="font-display text-lg text-coffee mb-3">月度打卡记录</h3>
        <Heatmap checkinDays={checkinDays} />
      </div>

      <div className="w-full max-w-sm mt-6">
        <h3 className="font-display text-lg text-coffee mb-3 flex items-center gap-2">
          <Share2 size={18} className="text-moss" /> 分享我的日记
        </h3>
        <ShareCard ref={cardRef} score={dropScore} days={checkinDays.length} points={points} />
        <button
          onClick={onShare}
          disabled={generating}
          className="mt-4 w-full font-medium py-3 rounded-2xl active:scale-[0.98] transition flex items-center justify-center gap-2"
          style={{ background: generating ? '#E8D8C8' : '#F5C6CB', color: '#3A2F28' }}
        >
          {generating ? (
            <>
              <span className="inline-block w-4 h-4 border-2 border-coffee/30 border-t-coffee/70 rounded-full animate-spin" />
              生成中…
            </>
          ) : (
            <>↓ 保存分享图</>
          )}
        </button>
      </div>

      <RankList />

      <div className="h-12" />

      <button
        onClick={() => {
          if (confirm('重置所有进度、积分、打卡？')) resetAll()
        }}
        className="text-xs text-coffee/40 underline"
      >
        重置数据
      </button>
      <div className="h-8" />
    </div>

    {/* 分享图预览弹窗 */}
    <AnimatePresence>
      {previewUrl && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          style={{ background: 'rgba(58,47,40,0.5)' }}
          onClick={closePreview}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="w-full max-w-sm rounded-3xl overflow-hidden"
            style={{ background: '#FFF8F0', boxShadow: '0 8px 32px rgba(58,47,40,0.25)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 pt-4 pb-2">
              <span className="font-display text-base text-coffee">预览分享图</span>
              <button onClick={closePreview} className="p-1 rounded-full active:scale-90 transition">
                <X size={20} style={{ color: 'rgba(58,47,40,0.5)' }} />
              </button>
            </div>
            <div className="px-5 pb-2">
              <img
                src={previewUrl}
                alt="分享图预览"
                className="w-full rounded-2xl"
                style={{ border: '1px solid rgba(232,216,200,0.6)' }}
              />
            </div>
            <div className="px-5 pb-5 flex gap-3">
              <button
                onClick={closePreview}
                className="flex-1 py-3 rounded-2xl text-sm font-medium active:scale-[0.98] transition"
                style={{ background: '#E8D8C8', color: '#3A2F28' }}
              >
                取消
              </button>
              <button
                onClick={confirmDownload}
                className="flex-1 py-3 rounded-2xl text-sm font-medium active:scale-[0.98] transition flex items-center justify-center gap-2"
                style={{ background: '#3A2F28', color: '#FFF8F0' }}
              >
                <Download size={16} />
                保存到相册
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  )
}

export const ShareCard = forwardRef<
  HTMLDivElement,
  { score: number | null; days: number; points: number }
>(function ShareCardInner({ score, days, points }, ref) {
  const grade = score == null ? 'empty' : score >= 80 ? 'great' : score >= 60 ? 'good' : score >= 40 ? 'ok' : 'sad'
  const blessing = {
    great: '今天也是发量满满的一天 ✨',
    good: '稳中有进，继续保持 🌿',
    ok: '压力有点大，记得早点休息 🍃',
    sad: '开始关心自己，就是最好的第一步 🌱',
    empty: '还没开始记录，快来拍第一张吧 📸',
  }[grade]
  const accentColor = {
    great: '#9BBF8A',
    good: '#9BBF8A',
    ok: '#E67A5A',
    sad: '#E67A5A',
    empty: '#E8D8C8',
  }[grade]
  const scoreColor = score == null ? 'rgba(58,47,40,0.3)' : score >= 70 ? '#9BBF8A' : '#E67A5A'

  return (
    <div
      ref={ref}
      className="rounded-3xl p-5 w-full relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #FFF8F0 0%, rgba(245,198,203,0.13) 100%)',
        border: '2px solid ' + (grade === 'great' ? 'rgba(155,191,138,0.4)' : grade === 'good' ? 'rgba(155,191,138,0.4)' : grade === 'ok' ? 'rgba(230,122,90,0.4)' : grade === 'sad' ? 'rgba(230,122,90,0.4)' : 'rgba(232,216,200,0.4)'),
        boxShadow: '0 1px 4px rgba(58,47,40,0.08)',
      }}
    >
      {/* decorative corner dots */}
      <div className="absolute top-3 right-3 flex gap-1">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: accentColor, opacity: 0.3 + i * 0.2 }}
          />
        ))}
      </div>

      <div className="flex items-center gap-2 text-xs">
        <span style={{ color: 'rgba(58,47,40,0.5)' }}>{new Date().toLocaleDateString('zh-CN')}</span>
        <span style={{ color: 'rgba(58,47,40,0.5)' }}>·</span>
        <span className="font-display" style={{ color: 'rgba(58,47,40,0.7)' }}>掉了么·日记</span>
      </div>

      <div className="flex items-center mt-4 gap-4">
        <ClayAvatar score={score} size={72} hair="short" />
        <div className="flex-1">
          <p className="text-xs" style={{ color: 'rgba(58,47,40,0.6)' }}>今日掉发指数</p>
          <p
            className="text-4xl font-mono font-medium leading-tight"
            style={{ color: scoreColor }}
          >
            {score ?? '—'}
          </p>
          <p className="text-[11px] mt-1" style={{ color: 'rgba(58,47,40,0.5)' }}>{blessing}</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 mt-4">
        <div className="rounded-2xl p-2.5 text-center" style={{ background: 'rgba(245,198,203,0.2)' }}>
          <p className="text-[10px]" style={{ color: 'rgba(58,47,40,0.6)' }}>连续打卡</p>
          <p className="text-lg font-mono font-medium" style={{ color: '#7FA66E' }}>{days}天</p>
        </div>
        <div className="rounded-2xl p-2.5 text-center" style={{ background: 'rgba(245,198,203,0.2)' }}>
          <p className="text-[10px]" style={{ color: 'rgba(58,47,40,0.6)' }}>总积分</p>
          <p className="text-lg font-mono font-medium" style={{ color: '#E67A5A' }}>{points}</p>
        </div>
        <div className="rounded-2xl p-2.5 text-center" style={{ background: 'rgba(245,198,203,0.2)' }}>
          <p className="text-[10px]" style={{ color: 'rgba(58,47,40,0.6)' }}>发量状态</p>
          <p className="text-lg font-medium" style={{ color: accentColor }}>
            {grade === 'great' ? '优秀' : grade === 'good' ? '良好' : grade === 'ok' ? '注意' : grade === 'sad' ? '需关注' : '—'}
          </p>
        </div>
      </div>

      <p className="mt-4 text-[10px] text-center" style={{ color: 'rgba(58,47,40,0.4)' }}>
        坚持是最重要的养发秘诀 · 掉了么 🌱
      </p>
    </div>
  )
})
