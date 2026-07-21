import { analyzePhoto, MAX_IMAGE_SIZE_BYTES, validateImageFile } from '../../services/model'
import { useUserStore } from '../../store/UserStore'
import type { AnalysisResult } from '../../types'
import { escapeHtml } from './ui'

const MAX_IMAGE_SIZE_MB = Math.round(MAX_IMAGE_SIZE_BYTES / 1024 / 1024)

type ScanControllerOptions = {
  renderStatefulSections: () => void
}

export function attachPrototypeAnalysis(root: HTMLElement, options: ScanControllerOptions) {
  const scanSection = root.querySelector<HTMLElement>('[data-page="scan"]')
  const scanBtn = root.querySelector<HTMLButtonElement>('#scanBtn')
  const uploadBtn = root.querySelector<HTMLButtonElement>('#uploadBtn')
  const completeBtn = root.querySelector<HTMLButtonElement>('#scanCompleteBtn')
  const percent = root.querySelector<HTMLElement>('#scanPercent')
  const scanCard = scanSection?.querySelector<HTMLElement>('.card[style*="text-align:center"]')
  const cameraInput = document.createElement('input')
  const galleryInput = document.createElement('input')
  let selectedFile: File | null = null
  let previewUrl: string | null = null
  let cameraStream: MediaStream | null = null

  const prepareInput = (input: HTMLInputElement, capture = false) => {
    input.type = 'file'
    input.accept = 'image/*'
    if (capture) input.setAttribute('capture', 'environment')
    input.style.display = 'none'
    document.body.appendChild(input)
  }

  prepareInput(cameraInput, true)
  prepareInput(galleryInput)

  const setStatus = (message: string, tone: 'idle' | 'error' | 'success' = 'idle') => {
    const existing = scanCard?.querySelector<HTMLElement>('[data-analysis-status]')
    const status = existing || document.createElement('p')
    status.dataset.analysisStatus = 'true'
    status.textContent = message
    status.style.color = tone === 'error' ? '#ff7a2f' : tone === 'success' ? '#65c982' : '#65709e'
    status.style.fontWeight = '800'
    if (!existing) scanCard?.appendChild(status)
  }

  const showPreview = (file: File) => {
    if (previewUrl) URL.revokeObjectURL(previewUrl)
    previewUrl = URL.createObjectURL(file)
    const orbit = root.querySelector<HTMLElement>('.scan-orbit')
    const existing = orbit?.querySelector<HTMLImageElement>('[data-upload-preview]')
    const img = existing || document.createElement('img')
    img.dataset.uploadPreview = 'true'
    img.src = previewUrl
    img.alt = '上传预览'
    Object.assign(img.style, {
      position: 'absolute',
      inset: '22px',
      width: 'calc(100% - 44px)',
      height: 'calc(100% - 44px)',
      objectFit: 'cover',
      borderRadius: '50%',
      boxShadow: '0 18px 45px rgba(99, 75, 168, 0.22)',
      zIndex: '3',
    })
    if (!existing) orbit?.appendChild(img)
    if (percent) {
      percent.textContent = '已选'
      percent.style.zIndex = '4'
    }
    if (completeBtn) {
      completeBtn.hidden = false
      completeBtn.style.display = ''
      completeBtn.setAttribute('aria-hidden', 'false')
    }
    setStatus(`已选择：${file.name}，点击“完成”确认并开始 AI 分析。`)
  }

  const stopCamera = () => {
    cameraStream?.getTracks().forEach((track) => track.stop())
    cameraStream = null
    root.querySelector('[data-camera-modal]')?.remove()
  }

  const useCapturedPhoto = (blob: Blob) => {
    const file = new File([blob], `diaoleme-camera-${Date.now()}.jpg`, { type: 'image/jpeg' })
    selectedFile = file
    showPreview(file)
    setStatus('已自动上传刚拍的照片，点击“完成”确认并开始 AI 分析。')
    stopCamera()
  }

  const requestCameraStream = async () => {
    const constraints: MediaStreamConstraints = { video: { facingMode: { ideal: 'environment' } }, audio: false }
    if (navigator.mediaDevices?.getUserMedia) {
      return navigator.mediaDevices.getUserMedia(constraints)
    }
    const legacyGetUserMedia = (navigator as any).getUserMedia || (navigator as any).webkitGetUserMedia || (navigator as any).mozGetUserMedia
    if (legacyGetUserMedia) {
      return new Promise<MediaStream>((resolve, reject) => legacyGetUserMedia.call(navigator, constraints, resolve, reject))
    }
    return null
  }

  const openCamera = async () => {
    try {
      cameraStream = await requestCameraStream()
      if (!cameraStream) {
        setStatus('此页面无相机权限，请检查吧。', 'error')
        return
      }
      const modal = document.createElement('div')
      modal.dataset.cameraModal = 'true'
      modal.className = 'camera-capture-modal'
      modal.innerHTML = '<div class="camera-capture-box"><video autoplay playsinline></video><div class="hero-buttons" style="justify-content:center"><button class="cta primary" data-camera-capture>拍照并上传</button><button class="cta ghost" data-camera-cancel>取消</button></div></div>'
      root.appendChild(modal)
      const video = modal.querySelector('video') as HTMLVideoElement | null
      if (video) video.srcObject = cameraStream
      modal.querySelector('[data-camera-cancel]')?.addEventListener('click', stopCamera)
      modal.querySelector('[data-camera-capture]')?.addEventListener('click', () => {
        if (!video || video.videoWidth === 0) return
        const canvas = document.createElement('canvas')
        canvas.width = video.videoWidth
        canvas.height = video.videoHeight
        canvas.getContext('2d')?.drawImage(video, 0, 0)
        canvas.toBlob((blob) => {
          if (blob) useCapturedPhoto(blob)
        }, 'image/jpeg', 0.92)
      })
      setStatus('相机已打开，请拍照后自动上传。')
    } catch (error) {
      console.error('[prototype] camera failed:', error)
      stopCamera()
      setStatus('此页面无相机权限，请检查吧。', 'error')
    }
  }

  const takePhoto = () => openCamera()
  const chooseFile = () => galleryInput.click()

  const onFileChange = (event: Event) => {
    const input = event.currentTarget as HTMLInputElement
    const file = input.files?.[0]
    input.value = ''
    if (!file) return
    try {
      validateImageFile(file)
      selectedFile = file
      showPreview(file)
    } catch (error: any) {
      selectedFile = null
      const messages: Record<string, string> = {
        not_image: '这个文件不是图片，请选择 JPG、PNG 等图片文件。',
        empty_file: '图片文件为空，请重新选择。',
        file_too_large: `图片有点大啦，请选择 ${MAX_IMAGE_SIZE_MB}MB 以内的照片再试。`,
      }
      setStatus(messages[error?.message] || '图片暂时读不出来，请换一张再试。', 'error')
    }
  }

  const runAnalysis = async () => {
    if (!selectedFile) {
      chooseFile()
      setStatus('请先选择或拍摄一张图片。')
      return
    }
    scanBtn && (scanBtn.disabled = true)
    uploadBtn && (uploadBtn.disabled = true)
    completeBtn && (completeBtn.disabled = true)
    setStatus('分析中，正在调用后端 AI 代理...')
    let value = 10
    if (percent) percent.textContent = '10%'
    const timer = window.setInterval(() => {
      value = Math.min(value + 8, 96)
      if (percent) percent.textContent = `${value}%`
    }, 140)
    try {
      const result = await analyzePhoto(selectedFile)
      saveAnalysisResult(result)
      window.clearInterval(timer)
      renderAnalysisCard(root, result)
      options.renderStatefulSections()
      setStatus(result.fallback_code ? '已生成 fallback 结果，可继续演示完整流程。' : 'AI 分析完成，结果已写入报告和历史记录。', 'success')
    } catch (error) {
      console.error('[prototype] analyze failed:', error)
      window.clearInterval(timer)
      if (percent) percent.textContent = '失败'
      setStatus('分析接口暂时不可用，请稍后重试。', 'error')
    } finally {
      scanBtn && (scanBtn.disabled = false)
      uploadBtn && (uploadBtn.disabled = false)
      completeBtn && (completeBtn.disabled = false)
    }
  }

  cameraInput.addEventListener('change', onFileChange)
  galleryInput.addEventListener('change', onFileChange)
  scanBtn?.addEventListener('click', takePhoto)
  uploadBtn?.addEventListener('click', chooseFile)
  completeBtn?.addEventListener('click', runAnalysis)

  return () => {
    cameraInput.removeEventListener('change', onFileChange)
    galleryInput.removeEventListener('change', onFileChange)
    scanBtn?.removeEventListener('click', takePhoto)
    uploadBtn?.removeEventListener('click', chooseFile)
    completeBtn?.removeEventListener('click', runAnalysis)
    stopCamera()
    cameraInput.remove()
    galleryInput.remove()
    if (previewUrl) URL.revokeObjectURL(previewUrl)
  }
}

export function saveAnalysisResult(result: AnalysisResult) {
  const store = useUserStore.getState()
  store.setAnalysis(result)
  store.addReport({
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 8),
    date: todayKey(),
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
    fallback_code: result.fallback_code,
    record_status: result.record_status,
    record_id: result.record_id,
    count: result.count,
    thickness: result.thickness,
    suggestions: result.suggestions,
  })
}

export function currentAnalysisFromStore(): AnalysisResult {
  const s = useUserStore.getState()
  return {
    score: s.dropScore ?? 66,
    title: s.title,
    summary: s.summary,
    roast: s.roast,
    encouragement: s.encouragement,
    tags: s.tags.length ? s.tags : ['等待记录'],
    daily_task: s.dailyTask,
    disclaimer: s.disclaimer,
    source: s.source,
    source_label: s.sourceLabel,
    fallback_code: s.fallbackCode,
    record_status: s.recordStatus,
    record_id: s.recordId,
    count: s.count,
    thickness: s.thickness,
    suggestions: s.suggestions,
  }
}

export function clearAnalysisCard(root: HTMLElement) {
  const scanCard = root.querySelector<HTMLElement>('[data-page="scan"] .card[style*="text-align:center"]')
  scanCard?.querySelector('[data-analysis-result]')?.remove()
  scanCard?.classList.remove('has-analysis-result')
}

export function renderAnalysisCard(root: HTMLElement, result: AnalysisResult) {
  const percent = root.querySelector<HTMLElement>('#scanPercent')
  const scanCard = root.querySelector<HTMLElement>('[data-page="scan"] .card[style*="text-align:center"]')
  if (percent) percent.textContent = `${result.score}%`
  if (!scanCard || useUserStore.getState().dropScore == null) return
  const old = scanCard.querySelector('[data-analysis-result]')
  old?.remove()
  scanCard.classList.add('has-analysis-result')
  const sourceLabel = result.source_label || '未知来源'
  const sourceDetail = result.fallback_code ? `fallback: ${result.fallback_code}` : result.record_id ? `记录编号: ${result.record_id}` : '已生成新的扫描记录'
  const orbit = scanCard.querySelector<HTMLElement>('.scan-orbit')
  if (orbit) orbit.style.filter = 'saturate(1.08)'
  const resultHtml = `
    <div class="card soft scan-result-card" data-analysis-result>
      <div class="scan-result-head">
        <div>
          <span class="badge analysis-source-badge">${escapeHtml(sourceLabel)}</span>
          <h3>${escapeHtml(result.title)}</h3>
        </div>
        <div class="scan-score-chip">${escapeHtml(String(result.score))}</div>
      </div>
      <p class="analysis-source-detail">${escapeHtml(sourceDetail)}</p>
      <p>${escapeHtml(result.summary)}</p>
      <div class="analysis-grid three grid">
        <div class="analysis-metric"><span class="big-number">${escapeHtml(result.count)}</span><small>掉发量</small></div>
        <div class="analysis-metric"><span class="big-number">${escapeHtml(result.thickness)}</span><small>发质观感</small></div>
        <div class="analysis-metric"><span class="big-number">${escapeHtml(result.score)}</span><small>趣味分数</small></div>
      </div>
      <p><b>温柔吐槽：</b>${escapeHtml(result.roast)}</p>
      <p><b>今日任务：</b>${escapeHtml(result.daily_task)}</p>
      <div class="analysis-tags">${result.tags.map((tag: string) => `<span class="badge">${escapeHtml(tag)}</span>`).join('')}</div>
      <small>${escapeHtml(result.disclaimer)}</small>
    </div>
  `
  scanCard.insertAdjacentHTML('beforeend', resultHtml)
}

function todayKey() {
  return new Date().toISOString().slice(0, 10)
}
