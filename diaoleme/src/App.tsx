import { useEffect, useRef } from 'react'
import { analyzePhoto, MAX_IMAGE_SIZE_BYTES, validateImageFile } from './services/model'
import type { AnalysisResult } from './types'
import { prototypeBody, prototypeScript, prototypeStyle } from './prototypeHtml'

const MAX_IMAGE_SIZE_MB = Math.round(MAX_IMAGE_SIZE_BYTES / 1024 / 1024)

export default function App() {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let styleTag = document.getElementById('diaoleme-prototype-style') as HTMLStyleElement | null
    if (!styleTag) {
      styleTag = document.createElement('style')
      styleTag.id = 'diaoleme-prototype-style'
      document.head.appendChild(styleTag)
    }
    styleTag.textContent = prototypeStyle

    let cleanup = () => {}
    if (rootRef.current) {
      rootRef.current.innerHTML = prototypeBody
      new Function(prototypeScript)()
      cleanup = attachPrototypeAnalysis(rootRef.current)
    }

    return () => {
      cleanup()
      if (rootRef.current) rootRef.current.innerHTML = ''
    }
  }, [])

  return <div ref={rootRef} />
}

function attachPrototypeAnalysis(root: HTMLElement) {
  const scanSection = root.querySelector<HTMLElement>('[data-page="scan"]')
  const scanBtn = root.querySelector<HTMLButtonElement>('#scanBtn')
  const uploadBtn = scanSection?.querySelector<HTMLButtonElement>('.cta.ghost')
  const percent = root.querySelector<HTMLElement>('#scanPercent')
  const scanCard = scanSection?.querySelector<HTMLElement>('.card[style*="text-align:center"]')
  const statsCard = scanSection?.querySelector<HTMLElement>('.grid .card:nth-child(2)')
  const recordsCard = scanSection?.querySelector<HTMLElement>('.grid .card.item-list')
  const input = document.createElement('input')
  let selectedFile: File | null = null
  let previewUrl: string | null = null

  input.type = 'file'
  input.accept = 'image/*'
  input.style.display = 'none'
  document.body.appendChild(input)

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
    setStatus(`已选择：${file.name}，点击“拍照扫描”开始 AI 分析。`)
  }

  const chooseFile = () => input.click()

  const onFileChange = () => {
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

  const renderResult = (result: AnalysisResult) => {
    if (percent) percent.textContent = `${result.score}`
    const fallback = result.fallback_code
      ? `<div class="badge" style="background:rgba(255,154,61,.18);color:#ff7a2f">fallback: ${escapeHtml(result.fallback_code)}</div>`
      : ''
    if (scanCard) {
      const old = scanCard.querySelector('[data-analysis-result]')
      old?.remove()
      scanCard.insertAdjacentHTML('beforeend', `
        <div class="card soft" data-analysis-result style="margin-top:18px;text-align:left">
          <div class="row" style="justify-content:space-between">
            <h3 style="margin:0">${escapeHtml(result.title)}</h3>
            <span class="badge">${escapeHtml(result.source_label)}</span>
          </div>
          ${fallback}
          <p>${escapeHtml(result.summary)}</p>
          <div class="three grid" style="text-align:center">
            <div><span class="big-number">${result.score}</span><br>趣味状态分</div>
            <div><span class="big-number">${escapeHtml(result.count)}</span><br>掉发量</div>
            <div><span class="big-number">${escapeHtml(result.thickness)}</span><br>发质观感</div>
          </div>
          <p><b>温柔吐槽：</b>${escapeHtml(result.roast)}</p>
          <p><b>今日任务：</b>${escapeHtml(result.daily_task)}</p>
          <div class="row">${result.tags.map((tag) => `<span class="badge">${escapeHtml(tag)}</span>`).join('')}</div>
          <small>${escapeHtml(result.disclaimer)}</small>
        </div>
      `)
    }
    if (statsCard) {
      statsCard.innerHTML = `<h3>本次 AI 分析</h3><div class="three grid"><div><span class="big-number">${result.score}</span><br>状态分</div><div><span class="big-number">${escapeHtml(result.count)}</span><br>掉发量</div><div><span class="badge">${escapeHtml(result.source === 'api' ? '真实AI' : result.source)}</span><br>来源</div></div>`
    }
    if (recordsCard) {
      const now = new Date().toLocaleString('zh-CN', { month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' })
      recordsCard.insertAdjacentHTML('afterbegin', `<div class="item"><span>✨</span><b>${escapeHtml(now)}<small>${escapeHtml(result.title)}</small></b><span class="status">${result.score} 分</span></div>`)
    }
    setStatus(result.fallback_code ? '已生成 fallback 结果，可继续演示完整流程。' : 'AI 分析完成，结果已同步到当前页面。', 'success')
  }

  const runAnalysis = async () => {
    if (!selectedFile) {
      chooseFile()
      setStatus('请先选择或拍摄一张图片。')
      return
    }
    scanBtn && (scanBtn.disabled = true)
    uploadBtn && (uploadBtn.disabled = true)
    setStatus('分析中，正在调用后端 AI 代理...')
    let value = 10
    if (percent) percent.textContent = '10%'
    const timer = window.setInterval(() => {
      value = Math.min(value + 8, 96)
      if (percent) percent.textContent = `${value}%`
    }, 140)
    try {
      const result = await analyzePhoto(selectedFile)
      window.clearInterval(timer)
      renderResult(result)
    } catch (error) {
      console.error('[prototype] analyze failed:', error)
      window.clearInterval(timer)
      if (percent) percent.textContent = '失败'
      setStatus('分析接口暂时不可用，请稍后重试。', 'error')
    } finally {
      scanBtn && (scanBtn.disabled = false)
      uploadBtn && (uploadBtn.disabled = false)
    }
  }

  input.addEventListener('change', onFileChange)
  uploadBtn?.addEventListener('click', chooseFile)
  scanBtn?.addEventListener('click', runAnalysis)

  return () => {
    input.removeEventListener('change', onFileChange)
    uploadBtn?.removeEventListener('click', chooseFile)
    scanBtn?.removeEventListener('click', runAnalysis)
    input.remove()
    if (previewUrl) URL.revokeObjectURL(previewUrl)
  }
}

function escapeHtml(value: unknown) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}
