import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Camera, Upload, Loader2, AlertTriangle } from 'lucide-react'
import ClayAvatar from '../components/ClayAvatar'
import StickerCard from '../components/Layout/StickerCard'
import { useUserStore } from '../store/UserStore'
import { analyzePhoto } from '../services/model'

export default function Scan() {
  const nav = useNavigate()
  const setAnalysis = useUserStore((s) => s.setAnalysis)
  const [busy, setBusy] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const cameraRef = useRef<HTMLInputElement>(null)
  const uploadRef = useRef<HTMLInputElement>(null)

  const handleChoose = () => cameraRef.current?.click()
  const handleUpload = () => uploadRef.current?.click()

  const onFile = async (file: File) => {
    setBusy(true)
    setErrorMsg(null)
    try {
      const result = await analyzePhoto(file)
      setAnalysis(result)
      useUserStore.getState().addReport({
        id: Date.now().toString(36) + Math.random().toString(36).slice(2, 8),
        date: new Date().toISOString().slice(0, 10),
        score: result.score,
        count: result.count,
        thickness: result.thickness,
        suggestions: result.suggestions,
      })
      nav('/tab/report')
    } catch (err: any) {
      console.error('[scan] analyzePhoto failed:', err)
      setErrorMsg('分析遇到问题，请重试或换一张图片。')
      setTimeout(() => nav('/tab/report'), 1600)
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="relative min-h-full px-6 py-6 flex flex-col items-center" style={{ background: '#FFF8F0' }}>
      <h2 className="font-display text-2xl mt-4" style={{ color: '#3A2F28' }}>今日侦察</h2>
      <p className="text-sm mt-1" style={{ color: '#3A2F28', opacity: 0.6 }}>
        拍一张掉落的头发，让黏土小人帮你看看发根状态
      </p>

      <div className="mt-8 mb-10">
        <AnimatePresence mode="wait">
          {busy ? (
            <motion.div
              key="busy"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center gap-3"
            >
              <div className="relative w-40 h-40 flex items-center justify-center">
                <Loader2 size={40} className="text-moss animate-spin" style={{ color: '#9BBF8A' }} />
              </div>
              <p className="font-body" style={{ color: '#3A2F28', opacity: 0.7 }}>
                黏土小人正在仔细看你的掉发...
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="idle"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
            >
              <ClayAvatar score={null} size={150} hair="short" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {errorMsg && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-sm mb-4 px-4 py-3 rounded-2xl flex items-center gap-2"
          style={{ background: '#E67A5A20', color: '#E67A5A' }}
        >
          <AlertTriangle size={16} className="shrink-0" />
          <span className="text-sm">{errorMsg}</span>
        </motion.div>
      )}

      {!busy && (
        <div className="w-full max-w-sm space-y-3">
          <button
            onClick={handleChoose}
            className="w-full active:scale-[0.98] transition-all font-medium py-4 rounded-2xl flex items-center justify-center gap-2 shadow-md"
            style={{ background: '#3A2F28', color: '#FFF8F0' }}
          >
            <Camera size={20} />
            立即拍照
          </button>

          <button
            onClick={handleUpload}
            className="w-full active:scale-[0.98] transition-all font-medium py-4 rounded-2xl flex items-center justify-center gap-2"
            style={{ background: '#FFF8F0', color: '#3A2F28', border: '2px solid #3A2F28' }}
          >
            <Upload size={20} />
            上传照片
          </button>
        </div>
      )}

      <div className="mt-8 w-full max-w-sm">
        <StickerCard accent="cream">
          <p className="text-xs leading-relaxed text-center" style={{ color: '#3A2F28', opacity: 0.6 }}>
            💡 小贴士：光线充足、把掉发均匀散开拍照，效果最好。<br />
            所有照片只用于本地分析，不会上传。
          </p>
        </StickerCard>
      </div>

      <div className="mt-8" />

      <input
        ref={cameraRef}
        type="file"
        accept="image/*"
        capture="environment"
        className="hidden"
        onChange={(e) => {
          if (e.target.files?.[0]) {
            onFile(e.target.files[0])
            e.target.value = ''
          }
        }}
      />
      <input
        ref={uploadRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          if (e.target.files?.[0]) {
            onFile(e.target.files[0])
            e.target.value = ''
          }
        }}
      />
    </div>
  )
}
