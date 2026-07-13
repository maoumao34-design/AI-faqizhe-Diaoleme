import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Camera, Upload, Loader2, AlertTriangle, ImagePlus, RotateCcw } from 'lucide-react'
import StickerCard from '../components/Layout/StickerCard'
import { useUserStore } from '../store/UserStore'
import { MAX_IMAGE_SIZE_BYTES, analyzePhoto, validateImageFile } from '../services/model'

const MAX_IMAGE_SIZE_MB = Math.round(MAX_IMAGE_SIZE_BYTES / 1024 / 1024)

export default function Scan() {
  const nav = useNavigate()
  const setAnalysis = useUserStore((s) => s.setAnalysis)
  const [busy, setBusy] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const cameraRef = useRef<HTMLInputElement>(null)
  const uploadRef = useRef<HTMLInputElement>(null)

  const handleChoose = () => cameraRef.current?.click()
  const handleUpload = () => uploadRef.current?.click()

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl)
    }
  }, [previewUrl])

  const onFilePicked = (file?: File) => {
    setErrorMsg(null)
    if (!file) {
      setErrorMsg('还没有选中图片，先给黏土小人一点素材吧。')
      return
    }

    try {
      validateImageFile(file)
    } catch (err: any) {
      if (previewUrl) URL.revokeObjectURL(previewUrl)
      setSelectedFile(null)
      setPreviewUrl(null)
      const messageMap: Record<string, string> = {
        not_image: '这个文件不是图片，请选择 JPG、PNG 等图片文件。',
        empty_file: '图片文件为空，请重新选择。',
        file_too_large: `图片有点大啦，请选择 ${MAX_IMAGE_SIZE_MB}MB 以内的照片再试。`,
      }
      setErrorMsg(messageMap[err?.message] || '图片暂时读不出来，请换一张再试。')
      return
    }

    if (previewUrl) URL.revokeObjectURL(previewUrl)
    setSelectedFile(file)
    setPreviewUrl(URL.createObjectURL(file))
  }

  const submit = async () => {
    if (!selectedFile) {
      setErrorMsg('请先选择一张图片，再开始分析。')
      return
    }

    setBusy(true)
    setErrorMsg(null)
    try {
      const result = await analyzePhoto(selectedFile)
      setAnalysis(result)
      useUserStore.getState().addReport({
        id: Date.now().toString(36) + Math.random().toString(36).slice(2, 8),
        date: new Date().toISOString().slice(0, 10),
        score: result.score,
        title: result.title,
        summary: result.summary,
        roast: result.roast,
        encouragement: result.encouragement,
        tags: result.tags,
        daily_task: result.daily_task,
        disclaimer: result.disclaimer,
        source: result.source,
        source_label: result.source_label,
        count: result.count,
        thickness: result.thickness,
        suggestions: result.suggestions,
      })
      nav('/tab/report')
    } catch (err: any) {
      console.error('[scan] analyzePhoto failed:', err)
      setErrorMsg('分析接口暂时打盹了，请稍后重试，或用 ?mock=success 演示成功兜底。')
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="relative min-h-full overflow-y-auto px-6 py-6 flex flex-col items-center bg-cream">
      <div className="absolute -top-28 -right-20 h-64 w-64 rounded-full bg-moss/25 blur-3xl" />
      <div className="absolute top-28 -left-24 h-56 w-56 rounded-full bg-pink/35 blur-3xl" />

      <div className="relative z-10 w-full max-w-sm">
        <h2 className="font-display text-3xl mt-3 text-coffee">今日侦察</h2>
        <p className="text-sm mt-2 text-coffee/60 leading-relaxed">
          选择一张掉发或头发状态照片，先预览，再让黏土小人给你一份轻松反馈。
        </p>

        <div className="mt-6">
          <AnimatePresence mode="wait">
            {previewUrl ? (
              <motion.div
                key="preview"
                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0 }}
                className="relative h-72 overflow-hidden rounded-[2rem] border-4 border-white bg-latte shadow-xl shadow-coffee/10"
              >
                <img src={previewUrl} alt="上传预览" className="h-full w-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-coffee/75 to-transparent p-4 pt-16 text-cream">
                  <p className="text-xs opacity-75">已选择</p>
                  <p className="truncate text-sm font-medium">{selectedFile?.name}</p>
                </div>
              </motion.div>
            ) : (
              <motion.button
                key="empty"
                type="button"
                onClick={handleUpload}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex h-72 w-full flex-col items-center justify-center rounded-[2rem] border-2 border-dashed border-coffee/25 bg-white/55 text-coffee shadow-inner"
              >
                <ImagePlus size={42} className="text-moss" />
                <span className="mt-3 font-medium">点这里选择图片</span>
                <span className="mt-1 text-xs text-coffee/50">支持拍照或相册上传，单张不超过 {MAX_IMAGE_SIZE_MB}MB</span>
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        {errorMsg && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 w-full rounded-2xl px-4 py-3 flex items-start gap-2 bg-tangerine/15 text-tangerine"
          >
            <AlertTriangle size={17} className="mt-0.5 shrink-0" />
            <span className="text-sm leading-relaxed">{errorMsg}</span>
          </motion.div>
        )}

        <div className="mt-5 grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={handleChoose}
            disabled={busy}
            className="active:scale-[0.98] transition-all font-medium py-3.5 rounded-2xl flex items-center justify-center gap-2 bg-coffee text-cream disabled:opacity-60"
          >
            <Camera size={18} />
            拍照
          </button>

          <button
            type="button"
            onClick={handleUpload}
            disabled={busy}
            className="active:scale-[0.98] transition-all font-medium py-3.5 rounded-2xl flex items-center justify-center gap-2 border-2 border-coffee text-coffee disabled:opacity-60"
          >
            <Upload size={18} />
            相册
          </button>
        </div>

        <button
          type="button"
          onClick={submit}
          disabled={busy || !selectedFile}
          className="mt-3 w-full active:scale-[0.98] transition-all font-medium py-4 rounded-2xl flex items-center justify-center gap-2 bg-moss text-coffee shadow-md shadow-moss/25 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {busy ? <Loader2 size={19} className="animate-spin" /> : <ImagePlus size={19} />}
          {busy ? '分析中，黏土小人正在眯眼观察...' : '开始趣味分析'}
        </button>

        {selectedFile && !busy && (
          <button
            type="button"
            onClick={() => {
              if (previewUrl) URL.revokeObjectURL(previewUrl)
              setSelectedFile(null)
              setPreviewUrl(null)
              setErrorMsg(null)
            }}
            className="mt-3 w-full py-2 text-sm text-coffee/55 flex items-center justify-center gap-1"
          >
            <RotateCcw size={14} />
            换一张
          </button>
        )}

        <div className="mt-6 mb-8">
          <StickerCard accent="cream">
            <p className="text-xs leading-relaxed text-center text-coffee/60">
              小贴士：前端会优先请求本地后端代理；后端暂时不可用时才使用 demo 兜底。图片仅用于本次分析请求，结果只做娱乐化记录，不做医学判断。
            </p>
          </StickerCard>
        </div>
      </div>

      <input
        ref={cameraRef}
        type="file"
        accept="image/*"
        capture="environment"
        className="hidden"
        onChange={(e) => {
          onFilePicked(e.target.files?.[0])
          e.target.value = ''
        }}
      />
      <input
        ref={uploadRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          onFilePicked(e.target.files?.[0])
          e.target.value = ''
        }}
      />
    </div>
  )
}
