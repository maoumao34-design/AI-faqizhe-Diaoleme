import { useEffect, useRef } from 'react'
import { analyzePhoto, HAIRSTYLE_CATALOG, MAX_IMAGE_SIZE_BYTES, validateImageFile } from './services/model'
import { useUserStore, type ReportRecord } from './store/UserStore'
import type { AnalysisResult } from './types'
import { prototypeBody } from './prototype/PrototypeBody'
import { prototypeScript } from './prototype/PrototypeScript'
import { prototypeStyle } from './prototype/PrototypeStyle'

const MAX_IMAGE_SIZE_MB = Math.round(MAX_IMAGE_SIZE_BYTES / 1024 / 1024)
const todayKey = () => new Date().toISOString().slice(0, 10)
const taskKey = () => `diaoleme-prototype-tasks-${todayKey()}`
const taskBonusKey = () => `diaoleme-prototype-task-bonus-${todayKey()}`
const questProgressKey = (category: QuestCategory) => `diaoleme-prototype-quest-progress-${category}-${todayKey()}`

type QuestCategory = 'daily' | 'weekly' | 'growth' | 'special'

type QuestDefinition = {
  id: string
  category: QuestCategory
  icon: string
  title: string
  description: string
  target: string
  reward: number
  actionLabel: string
}

const QUEST_CATEGORIES: QuestCategory[] = ['daily', 'weekly', 'growth', 'special']

const CATEGORY_LABELS: Record<QuestCategory, string> = {
  daily: '每日任务',
  weekly: '每周任务',
  growth: '成长任务',
  special: '特别任务',
}

const QUEST_CONFIG: Record<Exclude<QuestCategory, 'daily'>, QuestDefinition[]> = {
  weekly: [
    { id: 'weekly-scan-3', category: 'weekly', icon: '📷', title: '完成 3 次记录', description: '给小发球攒一组本周观察素材。', target: '0/3', reward: 35, actionLabel: '记录本周' },
    { id: 'weekly-sleep-4', category: 'weekly', icon: '🌙', title: '4 天温柔早睡', description: '不卷到深夜，给头皮也放个小假。', target: '0/4', reward: 40, actionLabel: '打卡早睡' },
    { id: 'weekly-share', category: 'weekly', icon: '💬', title: '分享一次发球周报', description: '把本周小进步发给朋友，轻松晒一下。', target: '0/1', reward: 25, actionLabel: '去分享' },
    { id: 'weekly-massage', category: 'weekly', icon: '🪮', title: '完成 3 次头皮放松', description: '睡前 5 分钟，给自己按下暂停键。', target: '0/3', reward: 30, actionLabel: '开始放松' },
  ],
  growth: [
    { id: 'growth-first-report', category: 'growth', icon: '🌱', title: '生成第一份种子报告', description: '上传照片后获得你的第一枚趣味称号。', target: '0/1', reward: 45, actionLabel: '去扫描' },
    { id: 'growth-7-day', category: 'growth', icon: '🔥', title: '连续记录 7 天', description: '把小习惯养成小成就，不求完美只求坚持。', target: '0/7', reward: 80, actionLabel: '点亮进度' },
    { id: 'growth-unlock-style', category: 'growth', icon: '🎀', title: '解锁一个新造型', description: '给小发球换套新皮肤，奖励认真生活的你。', target: '0/1', reward: 60, actionLabel: '去解锁' },
    { id: 'growth-history', category: 'growth', icon: '📒', title: '查看一次历史趋势', description: '回头看看，最近的自己已经很棒啦。', target: '0/1', reward: 25, actionLabel: '看趋势' },
  ],
  special: [
    { id: 'special-spring', category: 'special', icon: '🌸', title: '春风吹发季签到', description: '参与限时季节活动，领取春日能量。', target: '0/1', reward: 50, actionLabel: '领取能量' },
    { id: 'special-mood', category: 'special', icon: '😊', title: '写下今日心情弹幕', description: '把压力吐槽给小发球听，轻轻放过自己。', target: '0/1', reward: 30, actionLabel: '写一句' },
    { id: 'special-buddy', category: 'special', icon: '☁️', title: '和 Buddy 互动一次', description: '摸摸小发球，让陪伴感上线。', target: '0/1', reward: 35, actionLabel: '去互动' },
    { id: 'special-community', category: 'special', icon: '✨', title: '逛逛社区治愈帖', description: '看看大家的小妙招，找到一点轻松感。', target: '0/1', reward: 25, actionLabel: '去看看' },
  ],
}

export default function App() {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let styleTag = document.getElementById('diaoleme-prototype-style') as HTMLStyleElement | null
    if (!styleTag) {
      styleTag = document.createElement('style')
      styleTag.id = 'diaoleme-prototype-style'
      document.head.appendChild(styleTag)
    }
    styleTag.textContent = `${prototypeStyle}\n${integrationStyle}`

    let cleanup = () => {}
    if (rootRef.current) {
      rootRef.current.innerHTML = prototypeBody
      rootRef.current.insertAdjacentHTML('beforeend', petAgentMarkup())
      new Function(prototypeScript)()
      cleanup = attachPrototypeFeatures(rootRef.current)
    }

    return () => {
      cleanup()
      if (rootRef.current) rootRef.current.innerHTML = ''
    }
  }, [])

  return <div ref={rootRef} />
}

function attachPrototypeFeatures(root: HTMLElement) {
  const scanCleanup = attachPrototypeAnalysis(root)
  let activeQuestCategory: QuestCategory = 'daily'
  const render = () => renderStatefulSections(root, activeQuestCategory)
  render()
  const unsubscribe = useUserStore.subscribe(render)

  const onClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement
    const categoryBtn = target.closest<HTMLElement>('[data-quest-category]')
    const questBtn = target.closest<HTMLElement>('[data-quest-id]')
    const checkinBtn = target.closest<HTMLElement>('[data-action="checkin"]')
    const unlockBtn = target.closest<HTMLElement>('[data-unlock-id]')
    const viewReportBtn = target.closest<HTMLElement>('[data-view-report]')
    const viewDayBtn = target.closest<HTMLElement>('[data-view-day]')
    const shareReportBtn = target.closest<HTMLElement>('[data-share-report]')
    const navBtn = target.closest<HTMLElement>('[data-go]')
    const resetBtn = target.closest<HTMLElement>('[data-action="reset-progress"]')
    const scanPageBtn = target.closest<HTMLElement>('[data-scan-record-page]')
    const journeyShareBtn = target.closest<HTMLElement>('[data-action="journey-share"]')
    const openJourneyBtn = target.closest<HTMLElement>('[data-action="open-journey"]')
    const petToggleBtn = target.closest<HTMLElement>('[data-action="pet-agent-toggle"]')
    const petCloseBtn = target.closest<HTMLElement>('[data-action="pet-agent-close"]')
    const petQuickBtn = target.closest<HTMLElement>('[data-pet-message]')
    const leagueBoostBtn = target.closest<HTMLElement>('[data-action="league-boost"]')
    const shareBtn = target.closest<HTMLElement>('#guideBtn')

    if (navBtn?.dataset.go === 'scan' && !viewReportBtn) {
      clearAnalysisCard(root)
    }
    if (categoryBtn?.dataset.questCategory && isQuestCategory(categoryBtn.dataset.questCategory)) {
      activeQuestCategory = categoryBtn.dataset.questCategory
      render()
    }
    if (questBtn?.dataset.questId && questBtn.dataset.questCategory && isQuestCategory(questBtn.dataset.questCategory)) {
      completeQuest(questBtn.dataset.questCategory, questBtn.dataset.questId, root)
      render()
    }
    if (checkinBtn) {
      useUserStore.getState().markCheckinToday()
      render()
    }
    if (unlockBtn) {
      const item = HAIRSTYLE_CATALOG.find((h) => h.id === unlockBtn.dataset.unlockId)
      if (item) {
        const ok = useUserStore.getState().unlockHairStyle(item.id, item.cost)
        showToast(root, ok ? `已解锁 ${item.name}` : `积分还差 ${item.cost - useUserStore.getState().points}`)
        render()
      }
    }
    if (viewReportBtn?.dataset.viewReport) {
      useUserStore.getState().viewReport(viewReportBtn.dataset.viewReport)
      showPage(root, 'scan')
      renderAnalysisCard(root, currentAnalysisFromStore())
      showToast(root, '已打开这份扫描报告')
    }
    if (viewDayBtn?.dataset.viewDay) {
      useUserStore.getState().viewDayReport(viewDayBtn.dataset.viewDay)
      showPage(root, 'scan')
      renderAnalysisCard(root, currentAnalysisFromStore())
      showToast(root, '已打开当天最新报告')
    }
    if (shareReportBtn?.dataset.shareReport) {
      useUserStore.getState().viewReport(shareReportBtn.dataset.shareReport)
      downloadShareCard()
      showToast(root, '已生成这份报告的分享卡')
    }
    if (scanPageBtn?.dataset.scanRecordPage) {
      root.dataset.scanRecordPage = scanPageBtn.dataset.scanRecordPage
      renderHistory(root)
    }
    if (resetBtn) {
      if (confirm('重置所有进度、积分、打卡和历史记录？')) {
        useUserStore.getState().resetAll()
        localStorage.removeItem(taskKey())
        localStorage.removeItem(taskBonusKey())
        QUEST_CATEGORIES.forEach((category) => localStorage.removeItem(questProgressKey(category)))
        clearAnalysisCard(root)
        render()
      }
    }
    if (shareBtn) {
      downloadShareCard()
    }
    if (journeyShareBtn) {
      downloadShareCard()
      showToast(root, '已生成 Journey 分享卡')
    }
    if (openJourneyBtn) {
      showPage(root, 'journey')
    }
    if (petToggleBtn) {
      togglePetAgent(root)
    }
    if (petCloseBtn) {
      closePetAgent(root)
    }
    if (petQuickBtn?.dataset.petMessage) {
      interactWithPetAgent(root, petQuickBtn.dataset.petMessage)
      render()
    }
    if (leagueBoostBtn) {
      useUserStore.getState().interactWithAgent(28)
      showToast(root, '+28 EXP · 陪伴 Agent 段位成长')
      render()
    }
  }

  document.addEventListener('click', onClick)

  return () => {
    scanCleanup()
    unsubscribe()
    document.removeEventListener('click', onClick)
  }
}

function attachPrototypeAnalysis(root: HTMLElement) {
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
    if (completeBtn) completeBtn.style.display = ''
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
      renderStatefulSections(root)
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

function renderStatefulSections(root: HTMLElement, activeQuestCategory: QuestCategory = 'daily') {
  renderHome(root)
  renderTasks(root, activeQuestCategory)
  renderHistory(root)
  renderRewards(root)
  renderLeague(root)
  renderProfile(root)
}

function saveAnalysisResult(result: AnalysisResult) {
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

function currentAnalysisFromStore(): AnalysisResult {
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

function clearAnalysisCard(root: HTMLElement) {
  const scanCard = root.querySelector<HTMLElement>('[data-page="scan"] .card[style*="text-align:center"]')
  scanCard?.querySelector('[data-analysis-result]')?.remove()
  scanCard?.classList.remove('has-analysis-result')
}

function renderAnalysisCard(root: HTMLElement, result: AnalysisResult) {
  const percent = root.querySelector<HTMLElement>('#scanPercent')
  const scanCard = root.querySelector<HTMLElement>('[data-page="scan"] .card[style*="text-align:center"]')
  if (percent && useUserStore.getState().dropScore != null) percent.textContent = `${result.score}`
  if (!scanCard || useUserStore.getState().dropScore == null) return

  const old = scanCard.querySelector('[data-analysis-result]')
  old?.remove()
  scanCard.classList.add('has-analysis-result')
  const sourceLabel = result.fallback_code ? '演示结果' : 'AI 结果'
  const sourceDetail = result.fallback_code ? `fallback: ${result.fallback_code}` : result.source_label
  const orbit = scanCard.querySelector<HTMLElement>('.scan-orbit')
  const resultHtml = `
    <div class="card soft scan-result-card" data-analysis-result>
      <div class="scan-result-head">
        <h3>${escapeHtml(result.title)}</h3>
        <span class="badge analysis-source-badge">${escapeHtml(sourceLabel)}</span>
      </div>
      <p class="analysis-source-detail">${escapeHtml(sourceDetail)}</p>
      <p>${escapeHtml(result.summary)}</p>
      <div class="analysis-metrics">
        <div class="analysis-metric"><span class="big-number">${result.score}</span><small>趣味状态分</small></div>
        <div class="analysis-metric"><span class="big-number">${escapeHtml(result.count)}</span><small>掉发量</small></div>
        <div class="analysis-metric"><span class="big-number">${escapeHtml(result.thickness)}</span><small>发质观感</small></div>
      </div>
      <p><b>温柔吐槽：</b>${escapeHtml(result.roast)}</p>
      <p><b>今日任务：</b>${escapeHtml(result.daily_task)}</p>
      <div class="analysis-tags">${result.tags.map((tag) => `<span class="badge">${escapeHtml(tag)}</span>`).join('')}</div>
      <small>${escapeHtml(result.disclaimer)}</small>
    </div>
  `
  if (orbit) {
    orbit.insertAdjacentHTML('afterend', resultHtml)
  } else {
    scanCard.insertAdjacentHTML('beforeend', resultHtml)
  }
}

function renderHome(root: HTMLElement) {
  const s = useUserStore.getState()
  setHtml(root.querySelector('.compact-quests'), getSuggestions().slice(0, 4).map((q, i) => `<div class="item" style="grid-template-columns:34px 1fr auto"><span>${['💧', '🌙', '🥗', '🖐'][i] || '✨'}</span><b>${escapeHtml(q)}</b><span class="status">+${i === 0 ? 5 : 2} XP</span></div>`).join(''))
  setHtml(root.querySelector('.small-leaders'), buildLeaders().slice(0, 4).map((l) => `<div class="leader ${l.isMe ? 'you' : ''}" style="grid-template-columns:34px 1fr auto"><span class="badge">${l.rank}</span><b>${escapeHtml(l.name)}</b><span>${l.points} XP</span></div>`).join(''))
  const heroBadges = root.querySelectorAll<HTMLElement>('[data-page="home"] .stats .badge, [data-page="home"] .badge')
  if (heroBadges[0]) heroBadges[0].textContent = `${s.points} XP`
}

function renderTasks(root: HTMLElement, activeCategory: QuestCategory) {
  const s = useUserStore.getState()
  const quests = getQuests(activeCategory)
  const done = loadDoneQuests(activeCategory)
  const categoryDone = quests.filter((quest) => done.has(quest.id)).length
  const totalQuests = QUEST_CATEGORIES.flatMap(getQuests)
  const totalDone = QUEST_CATEGORIES.reduce((sum, category) => sum + loadDoneQuests(category).size, 0)
  const overallPercent = totalQuests.length ? Math.round((totalDone / totalQuests.length) * 100) : 0
  const allDailyDone = getQuests('daily').every((quest) => loadDoneQuests('daily').has(quest.id))

  setHtml(root.querySelector('[data-page="quests"] .tabs'), QUEST_CATEGORIES.map((category) => `<button class="pill ${category === activeCategory ? 'primary' : ''}" data-quest-category="${category}">${CATEGORY_LABELS[category]}</button>`).join(''))
  setHtml(root.querySelector('#questList'), quests.map((quest) => renderQuestItem(quest, done.has(quest.id))).join('') + renderQuestSummary(activeCategory, categoryDone, quests.length, allDailyDone))
  setHtml(root.querySelector('#weekRewards'), ['一', '二', '三', '四', '五', '六', '日'].map((d, i) => `<span class="badge">${i < s.checkinDays.length ? '✓' : d}<br><small>+${i < 5 ? 10 + i * 5 : 25} XP</small></span>`).join(''))
  setHtml(root.querySelector('[data-page="quests"] aside .card:nth-child(1)'), `<h3>我的任务进度</h3><div class="big-number">${overallPercent}%</div><div class="meter"><div class="fill" style="--w:${overallPercent}%"></div></div><p>完成 ${totalDone}/${totalQuests.length} 个任务</p><small>${CATEGORY_LABELS[activeCategory]}：${categoryDone}/${quests.length}</small>`)
  setHtml(root.querySelector('[data-page="quests"] aside .card:nth-child(3)'), `<h3>任务小贴士</h3><p>${questTip(activeCategory)}</p><div class="mini-buddy"></div>`)
  setHtml(root.querySelector('[data-page="quests"] aside .card:nth-child(4)'), `<h3>本周任务总览</h3><div class="donut" data-label="${totalDone}/${totalQuests.length}\\A 已完成"></div><p>${allDailyDone ? '每日建议已全部点亮，额外奖励已入账。' : '今天再点亮一个小任务，就很不错啦。'}</p>`)
}

function renderQuestItem(quest: QuestDefinition, isDone: boolean) {
  return `<div class="item"><span style="font-size:26px">${quest.icon}</span><b>${escapeHtml(quest.title)}<small>${escapeHtml(quest.description)}</small></b><span>${isDone ? '1/1' : escapeHtml(quest.target)}</span><button data-quest-category="${quest.category}" data-quest-id="${quest.id}" class="quest-btn ${isDone ? 'done' : ''}">${isDone ? '✓ 已领取' : escapeHtml(quest.actionLabel)}</button></div>`
}

function renderQuestSummary(category: QuestCategory, doneCount: number, total: number, allDailyDone: boolean) {
  const reward = category === 'daily' ? 10 : Math.max(20, total * 10)
  const complete = doneCount >= total
  return `<div class="item" style="background:rgba(139,92,246,.1)"><span>⭐</span><b>${category === 'daily' ? (allDailyDone ? '今日建议全部完成！' : '完成所有每日任务可获得额外奖励！') : `${CATEGORY_LABELS[category]}完成度 ${doneCount}/${total}`}<small>${complete ? '小发球已经收到这份能量。' : '慢慢来，完成一个也算数。'}</small></b><span>+${reward} XP</span><button class="quest-btn done">${complete ? '已点亮' : '未完成'}</button></div>`
}

function getQuests(category: QuestCategory): QuestDefinition[] {
  if (category !== 'daily') return QUEST_CONFIG[category]
  return getSuggestions().map((task, index) => ({
    id: `daily-${index}`,
    category: 'daily',
    icon: ['💧', '🌙', '🥗', '🖐', '🚶'][index] || '✨',
    title: task,
    description: index === 0 ? '来自 AI 的轻量建议' : '完成后给小发球增加一点能量',
    target: '0/1',
    reward: index === 0 ? 5 : 2,
    actionLabel: '去完成',
  }))
}

function questTip(category: QuestCategory) {
  const tips: Record<QuestCategory, string> = {
    daily: '今天不用做到满分，挑一个最容易的小任务开始就很好。',
    weekly: '周任务适合拆成几天完成，记录、休息和放松都算成长。',
    growth: '成长任务会长期保留，像养小发球一样一点点解锁。',
    special: '特别任务偏活动和社交，主打轻松参与，不制造压力。',
  }
  return tips[category]
}

function renderHistory(root: HTMLElement) {
  const history = useUserStore.getState().reportHistory
  const latest = history.slice(0, 5)
  const scanPageSize = 3
  const totalPages = Math.max(1, Math.ceil(history.length / scanPageSize))
  const currentPage = Math.min(Math.max(Number(root.dataset.scanRecordPage || 0), 0), totalPages - 1)
  root.dataset.scanRecordPage = String(currentPage)
  const pageRecords = history.slice(currentPage * scanPageSize, currentPage * scanPageSize + scanPageSize)
  const pager = history.length > scanPageSize
    ? `<div class="scan-record-pager"><button class="pill" data-scan-record-page="${Math.max(0, currentPage - 1)}" ${currentPage === 0 ? 'disabled' : ''}>上一页</button><small>${currentPage + 1} / ${totalPages}</small><button class="pill" data-scan-record-page="${Math.min(totalPages - 1, currentPage + 1)}" ${currentPage >= totalPages - 1 ? 'disabled' : ''}>下一页</button></div>`
    : ''
  const latestSource = history[0]?.source_label || '等待分析'
  const latestSourceText = escapeHtml(latestSource)
  setHtml(root.querySelector('[data-page="scan"] .grid .card:nth-child(2)'), `<h3>本周扫描数据</h3><div class="three grid scan-stat-grid"><div class="scan-stat-item"><span class="big-number">${history.length}</span><small>扫描次数</small></div><div class="scan-stat-item"><span class="big-number">${avgScore(history) || '--'}</span><small>平均状态分</small></div><div class="scan-stat-item scan-source-stat"><span class="badge scan-source-value" title="${latestSourceText}" data-full-source="${latestSourceText}">${latestSourceText}</span><small>最新来源</small></div></div>`)
  setHtml(root.querySelector('[data-page="scan"] .grid .card.item-list'), `<h3>最近扫描记录</h3><div class="scan-record-list">${renderRecordItems(pageRecords)}</div>${pager}`)
  renderJourney(root, history)
  setHtml(root.querySelector('#diaries'), latest.length ? latest.map((r) => `<div class="item"><span><b>${formatShortDate(r.date)}</b><br>报告</span><b>${escapeHtml(r.title)}<small>${escapeHtml(r.summary)}</small></b><button class="pill" data-view-report="${escapeHtml(r.id)}">查看</button></div>`).join('') : `<div class="item"><span>📷</span><b>还没有日记<small>上传图片后会自动保存分析记录。</small></b><span>⋯</span></div>`)
}

function renderJourney(root: HTMLElement, history: ReportRecord[]) {
  const latest = history.slice(0, 6)
  const groupedDays = groupReportsByDay(history)
  const avg = avgScore(history)
  const streak = useUserStore.getState().checkinDays.length

  setHtml(root.querySelector('#milestones'), buildJourneyMilestones(history, groupedDays).map((m) => `
    <button class="milestone" ${m.date ? `data-view-day="${escapeHtml(m.date)}"` : 'data-go="scan"'}>
      <div class="dot">${m.icon}</div>${escapeHtml(m.title)}<br><small>${escapeHtml(m.note)}</small>
    </button>
  `).join(''))

  setHtml(root.querySelector('#timeline'), latest.length ? latest.map((r, index) => `
    <div class="item journey-record">
      <span>${escapeHtml(formatShortDate(r.date))}</span>
      <b>${escapeHtml(r.title)}<small>${escapeHtml(r.summary)}</small></b>
      <span class="status">${r.score} 分</span>
      <button class="pill primary" data-view-report="${escapeHtml(r.id)}">查看报告</button>
      <button class="pill" data-share-report="${escapeHtml(r.id)}">分享</button>
      ${index === 0 ? '<span class="badge">最新</span>' : ''}
    </div>
  `).join('') : `
    <div class="item journey-empty">
      <span>📷</span>
      <b>还没有旅程记录<small>完成一次 Scan 上传后，你的趣味报告和历史对比会自动出现在这里。</small></b>
      <button class="pill primary" data-go="scan">去上传第一张</button>
    </div>
  `)

  setHtml(root.querySelector('[data-page="journey"] aside .card:nth-child(1)'), `
    <h3>旅程总览</h3>
    <div class="three grid">
      <div><span class="big-number">${history.length}</span><br>历史报告</div>
      <div><span class="big-number">${avg || '--'}</span><br>平均状态分</div>
      <div><span class="big-number">${streak}</span><br>打卡天数</div>
    </div>
    <button class="pill primary" data-go="scan">新增扫描</button>
  `)
  setHtml(root.querySelector('[data-page="journey"] aside .card:nth-child(2)'), `
    <h3>状态趋势</h3>
    <div class="chart">${buildTrendBars(history)}</div>
    <p>${history.length ? '根据最近扫描报告生成，只做轻松记录参考。' : '完成一次 Scan 后，这里会显示报告趋势。'}</p>
  `)
  setHtml(root.querySelector('[data-page="journey"] aside .card:nth-child(3)'), `
    <h3>本月高光时刻</h3>
    <div class="item-list">
      ${buildJourneyHighlights(history, groupedDays)}
    </div>
    <button class="pill" data-action="journey-share">分享我的旅程</button>
  `)
}

function renderRewards(root: HTMLElement) {
  const s = useUserStore.getState()
  const latestHair = s.unlockedHairStyles[s.unlockedHairStyles.length - 1]
  setHtml(root.querySelector('#skins'), HAIRSTYLE_CATALOG.slice(0, 6).map((h) => {
    const owned = s.unlockedHairStyles.includes(h.id)
    return `<button class="skin ${h.id === latestHair ? 'active' : ''}" data-unlock-id="${h.id}"><div class="mini-buddy" style="${owned ? '' : 'opacity:.45'}"></div><b>${escapeHtml(h.name)}</b><small>${owned ? '已拥有' : `${h.cost} XP`}</small></button>`
  }).join(''))
  setHtml(root.querySelector('#shop'), HAIRSTYLE_CATALOG.map((h) => {
    const owned = s.unlockedHairStyles.includes(h.id)
    return `<div class="reward"><div class="reward-art">${escapeHtml(h.emoji)}</div><b>${escapeHtml(h.name)}</b><small>${escapeHtml(h.description)}</small><b style="color:var(--purple)">${owned ? '已拥有' : `${h.cost} XP`}</b><button class="pill ${owned ? '' : 'primary'}" data-unlock-id="${h.id}">${owned ? '使用' : '解锁'}</button></div>`
  }).join(''))
}

function renderLeague(root: HTMLElement) {
  const s = useUserStore.getState()
  const { current, next, progress } = leagueState(s.agentExp)
  setHtml(root.querySelector('#leaders'), buildLeaders().map((l) => `<div class="leader ${l.isMe ? 'you' : ''}"><span class="badge">${l.rank}</span><b>${escapeHtml(l.name)}<small>${escapeHtml(l.note)}</small></b><span>${l.points} XP</span><span>${l.trend}</span></div>`).join(''))
  const leagueAside = root.querySelector('[data-page="league"] aside')
  if (leagueAside) {
    leagueAside.insertAdjacentHTML('afterbegin', `
      <div class="card agent-league-card" data-agent-league-card>
        <h3>陪伴 Agent League</h3>
        <h2>${escapeHtml(current.name)} <span class="badge">${s.agentExp} EXP</span></h2>
        <p>${escapeHtml(current.desc)}</p>
        <div class="meter"><div class="fill" style="--w:${next ? progress : 100}%"></div></div>
        <small>${next ? `距 ${escapeHtml(next.name)} 还差 ${Math.max(0, next.threshold - s.agentExp)} EXP` : '已到当前 demo 最高段位'}</small>
        <div class="league-steps">${LEAGUE_STEPS.map((step, index) => `<div class="league-step ${s.agentExp >= step.threshold ? 'done' : ''}"><span>${s.agentExp >= step.threshold ? '✓' : index + 1}</span><b>${escapeHtml(step.name)}</b><small>${escapeHtml(step.short)}</small></div>`).join('')}</div>
        <button class="pill primary" data-action="league-boost">模拟互动 +EXP</button>
      </div>
    `)
  }
  root.querySelectorAll('[data-agent-league-card]').forEach((item, index) => {
    if (index > 0) item.remove()
  })
  renderPetAgent(root)
}

const LEAGUE_STEPS = [
  { name: '青铜陪伴员', threshold: 0, desc: '完成首次互动，宠物 Agent 开始记住你的记录节奏。', short: '首次互动' },
  { name: '白银守护员', threshold: 160, desc: '互动越多，Agent 会解锁更积极的任务提醒和鼓励。', short: '任务提醒' },
  { name: '黄金发友队长', threshold: 320, desc: '进入高段位，排行榜和联盟页会展示更强的陪伴徽章。', short: '联盟徽章' },
]

function leagueState(agentExp: number) {
  const currentIndex = LEAGUE_STEPS.reduce((idx, step, index) => (agentExp >= step.threshold ? index : idx), 0)
  const current = LEAGUE_STEPS[currentIndex]
  const next = LEAGUE_STEPS[currentIndex + 1]
  const base = current.threshold
  const target = next?.threshold ?? current.threshold + 160
  const progress = Math.min(100, Math.max(0, Math.round(((agentExp - base) / (target - base)) * 100)))
  return { current, next, progress }
}

function petAgentMarkup() {
  return `
    <div class="pet-agent" data-pet-agent>
      <div class="pet-panel" data-pet-panel>
        <div class="pet-panel-head">
          <div class="mini-buddy"></div>
          <div><b>头毛陪伴 Agent</b><small data-pet-level>在线陪伴中</small></div>
          <button data-action="pet-agent-close" aria-label="关闭陪伴 Agent">×</button>
        </div>
        <div class="pet-chat" data-pet-chat>
          <p class="bot">嗨，我是你的陪伴型宠物 Agent。今天也一起守护头毛小队吧。</p>
        </div>
        <div class="pet-exp"><span data-pet-exp-label>互动经验 0/160</span><div class="meter"><div class="fill" data-pet-exp-fill style="--w:0%"></div></div></div>
        <div class="pet-replies">
          <button data-pet-message="今天掉发有点慌">今天有点慌</button>
          <button data-pet-message="给我一个任务">给我任务</button>
          <button data-pet-message="我想看段位">看段位</button>
        </div>
      </div>
      <button class="pet-bubble" data-action="pet-agent-toggle" aria-label="打开陪伴型宠物 Agent"><span class="mini-buddy"></span><i>💬</i></button>
    </div>
  `
}

function renderPetAgent(root: HTMLElement) {
  const s = useUserStore.getState()
  const { current, next, progress } = leagueState(s.agentExp)
  const level = root.querySelector<HTMLElement>('[data-pet-level]')
  const expLabel = root.querySelector<HTMLElement>('[data-pet-exp-label]')
  const expFill = root.querySelector<HTMLElement>('[data-pet-exp-fill]')
  if (level) level.textContent = `${current.name} · ${s.agentMood}`
  if (expLabel) expLabel.textContent = next ? `互动经验 ${s.agentExp - current.threshold}/${next.threshold - current.threshold}` : `互动经验 ${s.agentExp}`
  if (expFill) expFill.style.setProperty('--w', `${next ? progress : 100}%`)
}

function togglePetAgent(root: HTMLElement) {
  const agent = root.querySelector<HTMLElement>('[data-pet-agent]')
  agent?.classList.toggle('open')
  if (agent?.classList.contains('open')) {
    useUserStore.getState().interactWithAgent(8)
    renderPetAgent(root)
  }
}

function closePetAgent(root: HTMLElement) {
  root.querySelector<HTMLElement>('[data-pet-agent]')?.classList.remove('open')
}

function interactWithPetAgent(root: HTMLElement, message: string) {
  useUserStore.getState().interactWithAgent(16)
  const chat = root.querySelector<HTMLElement>('[data-pet-chat]')
  const replies = [
    '收到，我会陪你轻松记录，不做医学判断，只帮你把习惯养起来。',
    '今天的小目标：完成一次记录，再给自己一个早睡奖励。',
    '互动经验已增加，去 League 页面可以看到段位变化。',
  ]
  const answer = replies[useUserStore.getState().agentExp % replies.length]
  if (chat) {
    chat.insertAdjacentHTML('beforeend', `<p class="user">${escapeHtml(message)}</p><p class="bot">${escapeHtml(answer)}</p>`)
    chat.scrollTop = chat.scrollHeight
  }
  renderPetAgent(root)
}

function renderProfile(root: HTMLElement) {
  const s = useUserStore.getState()
  const checked = s.checkinDays.includes(todayKey())
  setHtml(root.querySelector('#streak'), ['一', '二', '三', '四', '五', '六', '日'].map((d, i) => `<span class="badge">${i < Math.min(s.checkinDays.length, 6) ? '✓' : i === 6 ? '🎁' : d}<br><small>${d}</small></span>`).join(''))
  setHtml(root.querySelector('#checkin'), ['一', '二', '三', '四', '五', '六', '日'].map((d, i) => `<span class="badge">${i < Math.min(s.checkinDays.length, 6) ? '✓' : i === 6 ? '🎁' : d}<br><small>${d}</small></span>`).join('') + `<button class="pill ${checked ? '' : 'primary'}" data-action="checkin">${checked ? '今日已打卡' : '今日打卡 +5'}</button><button class="pill" data-action="reset-progress">重置</button>`)
}

function completeQuest(category: QuestCategory, questId: string, root: HTMLElement) {
  const quest = getQuests(category).find((item) => item.id === questId)
  if (!quest) return
  const done = loadDoneQuests(category)
  if (done.has(questId)) {
    showToast(root, '这个任务已经领取过啦')
    return
  }
  done.add(questId)
  saveDoneQuests(category, done)
  useUserStore.getState().addPoints(quest.reward)
  showToast(root, `+${quest.reward} XP · ${quest.title}`)

  if (category === 'daily') {
    const dailyQuests = getQuests('daily')
    if (dailyQuests.length > 0 && dailyQuests.every((item) => done.has(item.id)) && localStorage.getItem(taskBonusKey()) !== '1') {
      localStorage.setItem(taskBonusKey(), '1')
      useUserStore.getState().addPoints(10)
      showToast(root, '每日建议全完成，额外 +10 XP')
    }
  }
}

function loadDoneQuests(category: QuestCategory) {
  try {
    const next = new Set<string>(JSON.parse(localStorage.getItem(questProgressKey(category)) || '[]'))
    if (category === 'daily' && next.size === 0) {
      loadLegacyDoneTasks().forEach((index) => next.add(`daily-${index}`))
    }
    return next
  } catch {
    return new Set<string>()
  }
}

function saveDoneQuests(category: QuestCategory, done: Set<string>) {
  localStorage.setItem(questProgressKey(category), JSON.stringify([...done]))
  if (category === 'daily') {
    const legacyIndexes = [...done]
      .map((id) => Number(id.replace('daily-', '')))
      .filter((index) => Number.isFinite(index))
    localStorage.setItem(taskKey(), JSON.stringify(legacyIndexes))
  }
}

function loadLegacyDoneTasks() {
  try {
    return new Set<number>(JSON.parse(localStorage.getItem(taskKey()) || '[]'))
  } catch {
    return new Set<number>()
  }
}

function isQuestCategory(value: string): value is QuestCategory {
  return QUEST_CATEGORIES.includes(value as QuestCategory)
}

function getSuggestions() {
  const suggestions = useUserStore.getState().suggestions
  return suggestions.length ? suggestions : ['上传一张照片生成专属建议', '今晚提前 30 分钟休息', '洗头时水温尽量温和']
}

function buildLeaders() {
  const s = useUserStore.getState()
  const base = [
    { name: 'Luna', note: '头发是生命的种子 🌱', points: 28760, trend: '↑ 1', isMe: false },
    { name: 'Mia', note: '每天进步 1% ✨', points: 25480, trend: '↓ 1', isMe: false },
    { name: 'Ray', note: '慢慢来，比较更重要 💜', points: 22140, trend: '—', isMe: false },
    { name: 'Sophia', note: '关注头皮，从现在开始', points: 18900, trend: '↑ 2', isMe: false },
    { name: 'You', note: `${s.checkinDays.length} 天打卡`, points: s.points, trend: '↑', isMe: true },
  ].sort((a, b) => b.points - a.points)
  return base.map((item, index) => ({ ...item, rank: index + 1 }))
}

function renderRecordItems(records: ReportRecord[], timeline = false) {
  if (!records.length) return `<div class="item"><span>📷</span><b>暂无记录<small>上传图片后会出现在这里。</small></b><span class="status">--</span></div>`
  return records.map((r) => {
    const recordId = escapeHtml(r.id)
    const itemAttrs = timeline ? '' : ` data-view-report="${recordId}" role="button" tabindex="0"`
    return `<div class="item"${itemAttrs}><span>${timeline ? r.date.slice(5) : '〰'}</span><b>${escapeHtml(r.title)}<small>${escapeHtml(r.summary)}</small></b><button class="status" data-view-report="${recordId}">${r.score} 分</button></div>`
  }).join('')
}

function groupReportsByDay(records: ReportRecord[]) {
  return records.reduce<Record<string, ReportRecord[]>>((days, record) => {
    days[record.date] = days[record.date] || []
    days[record.date].push(record)
    return days
  }, {})
}

function buildJourneyMilestones(records: ReportRecord[], groupedDays: Record<string, ReportRecord[]>) {
  const days = Object.keys(groupedDays).sort().reverse()
  if (!records.length) {
    return [
      { icon: '📷', title: '等待首次扫描', note: '点击去 Scan 上传', date: '' },
      { icon: '🌱', title: '报告会自动保存', note: '生成后出现在这里', date: '' },
      { icon: '✨', title: '趋势稍后生成', note: '多次记录后更清晰', date: '' },
    ]
  }
  const best = records.reduce((top, item) => (item.score > top.score ? item : top), records[0])
  return [
    { icon: '⚑', title: '开始记录', note: formatShortDate(days[days.length - 1] || records[records.length - 1].date), date: days[days.length - 1] || records[records.length - 1].date },
    { icon: '📄', title: `${records.length} 份报告`, note: 'Scan 自动沉淀', date: records[0].date },
    { icon: '⭐', title: '最高状态分', note: `${best.score} 分`, date: best.date },
    { icon: '🗓', title: `${days.length} 个记录日`, note: '持续观察中', date: days[0] || records[0].date },
  ]
}

function buildJourneyHighlights(records: ReportRecord[], groupedDays: Record<string, ReportRecord[]>) {
  if (!records.length) {
    return `<div class="item"><span>🌱</span><b>还没有高光<small>完成一次 Scan 后自动生成。</small></b><button class="pill" data-go="scan">去扫描</button></div>`
  }
  const latest = records[0]
  const best = records.reduce((top, item) => (item.score > top.score ? item : top), latest)
  return [
    `<div class="item"><span>📄</span><b>最新报告已保存<small>${escapeHtml(latest.title)}</small></b><button class="pill" data-view-report="${escapeHtml(latest.id)}">查看</button></div>`,
    `<div class="item"><span>⭐</span><b>本月最高状态分<small>${best.score} 分，仅作趣味记录。</small></b><button class="pill" data-view-report="${escapeHtml(best.id)}">打开</button></div>`,
    `<div class="item"><span>🗓</span><b>${Object.keys(groupedDays).length} 个记录日<small>每次上传都会沉淀到 Journey。</small></b><button class="pill" data-action="open-journey">回看</button></div>`,
  ].join('')
}

function buildTrendBars(records: ReportRecord[]) {
  const values = records.slice(0, 7).reverse().map((item) => Math.max(18, Math.min(96, item.score)))
  const fallback = [28, 36, 44, 52, 60]
  return (values.length ? values : fallback).map((v) => `<span class="bar" style="height:${v}%"></span>`).join('')
}

function formatShortDate(date: string) {
  const parts = date.split('-')
  return parts.length === 3 ? `${Number(parts[1])}/${Number(parts[2])}` : date
}

function avgScore(records: ReportRecord[]) {
  if (!records.length) return null
  return Math.round(records.reduce((sum, item) => sum + item.score, 0) / records.length)
}

function showPage(root: HTMLElement, id: string) {
  root.querySelectorAll<HTMLElement>('.page').forEach((page) => page.classList.toggle('active', page.dataset.page === id))
  root.querySelectorAll<HTMLElement>('[data-go]').forEach((btn) => btn.classList.toggle('active', btn.dataset.go === id))
  const heading = root.querySelector<HTMLElement>('#pageHeading')
  const sub = root.querySelector<HTMLElement>('#pageSub')
  const meta: Record<string, [string, string]> = {
    scan: ['Scan', '用科学的方式，了解你的头发状况 💗'],
    diary: ['Diary', '真实分析记录会在这里沉淀'],
  }
  if (heading && meta[id]) heading.textContent = meta[id][0]
  if (sub && meta[id]) sub.textContent = meta[id][1]
}

function showToast(root: HTMLElement, message: string) {
  const old = root.querySelector('[data-toast]')
  old?.remove()
  const toast = document.createElement('div')
  toast.dataset.toast = 'true'
  toast.className = 'prototype-toast'
  toast.textContent = message
  root.appendChild(toast)
  window.setTimeout(() => toast.remove(), 1800)
}

function downloadShareCard() {
  const s = useUserStore.getState()
  const canvas = document.createElement('canvas')
  canvas.width = 720
  canvas.height = 960
  const ctx = canvas.getContext('2d')!
  ctx.fillStyle = '#f7edff'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = '#13205f'
  ctx.font = 'bold 54px sans-serif'
  ctx.fillText('掉了么 Diaoleme', 64, 110)
  ctx.font = 'bold 92px sans-serif'
  ctx.fillText(`${s.dropScore ?? '--'} 分`, 64, 250)
  ctx.font = 'bold 38px sans-serif'
  ctx.fillText(s.title, 64, 330)
  ctx.font = '28px sans-serif'
  wrapCanvasText(ctx, s.summary, 64, 400, 590, 42)
  ctx.fillStyle = '#8b5cf6'
  ctx.font = 'bold 30px sans-serif'
  ctx.fillText(`${s.points} XP · 打卡 ${s.checkinDays.length} 天`, 64, 820)
  const a = document.createElement('a')
  a.href = canvas.toDataURL('image/png')
  a.download = `掉了么-分享-${todayKey()}.png`
  a.click()
}

function wrapCanvasText(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, maxWidth: number, lineHeight: number) {
  let line = ''
  for (const char of text) {
    const test = line + char
    if (ctx.measureText(test).width > maxWidth && line) {
      ctx.fillText(line, x, y)
      line = char
      y += lineHeight
    } else {
      line = test
    }
  }
  if (line) ctx.fillText(line, x, y)
}

function setHtml(target: Element | null | undefined, html: string) {
  if (target) target.innerHTML = html
}

function escapeHtml(value: unknown) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

const integrationStyle = `
  .main {
    padding-top: 8px;
  }

  .topbar {
    margin-bottom: 14px;
  }

  .page-title h2 {
    font-size: 24px;
    line-height: 1.2;
    font-weight: bolder;
  }

  .page-title p {
    margin-top: 6px;
    font-size: 14px;
    line-height: 1.35;
  }

  .prototype-toast {
    position: fixed;
    right: 28px;
    bottom: 28px;
    z-index: 80;
    border-radius: 999px;
    padding: 14px 20px;
    background: rgba(19,32,95,.92);
    color: #fff;
    box-shadow: 0 18px 45px rgba(19,32,95,.24);
    font-weight: 800;
  }
  .pet-agent {
    bottom: 28px;
    pointer-events: none;
    position: fixed;
    right: 28px;
    z-index: 70;
  }
  .pet-bubble {
    align-items: center;
    background: linear-gradient(135deg, rgba(255,255,255,.96), rgba(255,228,238,.92));
    border: 4px solid rgba(255,255,255,.92);
    border-radius: 999px;
    box-shadow: 0 22px 54px rgba(99,75,168,.24);
    cursor: pointer;
    display: grid;
    height: 76px;
    justify-items: center;
    overflow: hidden;
    pointer-events: auto;
    position: relative;
    width: 76px;
  }
  .pet-bubble .mini-buddy {
    transform: scale(1.22);
  }
  .pet-bubble i {
    background: var(--purple);
    border-radius: 999px;
    bottom: 2px;
    color: #fff;
    display: grid;
    font-style: normal;
    height: 26px;
    place-items: center;
    position: absolute;
    right: 0;
    width: 26px;
  }
  .pet-panel {
    background: rgba(255,255,255,.9);
    border: 1px solid rgba(255,255,255,.8);
    border-radius: 28px;
    box-shadow: 0 24px 70px rgba(19,32,95,.2);
    margin-bottom: 14px;
    opacity: 0;
    overflow: hidden;
    pointer-events: none;
    transform: translateY(12px) scale(.96);
    transition: opacity .2s ease, transform .2s ease;
    width: min(340px, calc(100vw - 32px));
  }
  .pet-agent.open .pet-panel {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0) scale(1);
  }
  .pet-panel-head {
    align-items: center;
    background: rgba(101,201,130,.16);
    display: grid;
    gap: 12px;
    grid-template-columns: 54px 1fr auto;
    padding: 14px;
  }
  .pet-panel-head .mini-buddy {
    transform: scale(.9);
  }
  .pet-panel-head b,
  .pet-panel-head small {
    display: block;
  }
  .pet-panel-head small {
    color: var(--muted);
    font-size: 12px;
    margin-top: 3px;
  }
  .pet-panel-head button {
    background: rgba(255,255,255,.7);
    border: 0;
    border-radius: 999px;
    color: var(--muted);
    cursor: pointer;
    font-size: 22px;
    height: 32px;
    width: 32px;
  }
  .pet-chat {
    display: grid;
    gap: 8px;
    max-height: 210px;
    overflow-y: auto;
    padding: 14px;
  }
  .pet-chat p {
    border-radius: 18px;
    font-size: 13px;
    line-height: 1.45;
    margin: 0;
    max-width: 86%;
    padding: 10px 12px;
  }
  .pet-chat .bot {
    background: rgba(255,255,255,.78);
    color: var(--ink);
    justify-self: start;
  }
  .pet-chat .user {
    background: var(--ink);
    color: #fff;
    justify-self: end;
  }
  .pet-exp {
    padding: 0 14px 12px;
  }
  .pet-exp span {
    color: var(--muted);
    display: block;
    font-size: 12px;
    font-weight: 800;
    margin-bottom: 6px;
  }
  .pet-replies {
    border-top: 1px solid rgba(122,99,196,.12);
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding: 12px 14px 14px;
  }
  .pet-replies button {
    background: rgba(255,255,255,.75);
    border: 0;
    border-radius: 999px;
    color: var(--ink);
    cursor: pointer;
    font-weight: 800;
    padding: 8px 11px;
  }
  .agent-league-card {
    overflow: hidden;
    position: relative;
  }
  .agent-league-card::after {
    background: radial-gradient(circle, rgba(139,92,246,.2), transparent 62%);
    content: '';
    height: 160px;
    position: absolute;
    right: -58px;
    top: -58px;
    width: 160px;
  }
  .league-steps {
    display: grid;
    gap: 10px;
    margin: 16px 0;
  }
  .league-step {
    align-items: center;
    background: rgba(255,255,255,.55);
    border-radius: 18px;
    display: grid;
    gap: 10px;
    grid-template-columns: 34px 1fr;
    padding: 10px;
  }
  .league-step span {
    background: rgba(101,201,130,.18);
    border-radius: 999px;
    display: grid;
    font-weight: 950;
    height: 34px;
    place-items: center;
    width: 34px;
  }
  .league-step.done span {
    background: var(--green);
    color: #fff;
  }
  .league-step b,
  .league-step small {
    display: block;
  }
  .league-step small {
    color: var(--muted);
    font-size: 12px;
    margin-top: 2px;
  }
  [data-page="scan"] .scan-wrap {
    align-items: stretch;
    grid-template-columns: minmax(220px, 250px) minmax(360px, 1fr) minmax(280px, 360px);
  }
  [data-page="scan"] .feature-stack,
  [data-page="scan"] .scan-wrap > .card,
  [data-page="scan"] .scan-wrap > .grid {
    min-width: 0;
  }
  [data-page="scan"] .scan-wrap > .card,
  [data-page="scan"] .scan-side-panel {
    min-height: min(74vh, 860px);
  }
  [data-page="scan"] .scan-side-panel {
    align-content: start;
    grid-template-rows: auto auto minmax(0, 1fr);
  }
  [data-page="scan"] .scan-history-card {
    display: flex;
    flex-direction: column;
    min-height: 0;
  }
  [data-page="scan"] .feature,
  [data-page="scan"] .scan-wrap > .grid .card,
  [data-page="scan"] .scan-wrap small,
  [data-page="scan"] .scan-wrap p,
  [data-page="scan"] .scan-wrap b {
    overflow-wrap: anywhere;
  }
  [data-page="scan"] .scan-wrap > .grid .three {
    gap: 10px;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  [data-page="scan"] .scan-stat-grid {
    align-items: start;
  }
  [data-page="scan"] .scan-stat-item {
    display: grid;
    gap: 6px;
    min-width: 0;
  }
  [data-page="scan"] .scan-stat-grid .big-number {
    display: inline-block;
    font-size: clamp(28px, 2.6vw, 42px);
    line-height: 1;
    max-width: 100%;
    overflow-wrap: anywhere;
  }
  [data-page="scan"] .scan-stat-item small {
    color: var(--ink);
    display: block;
    font-size: 14px;
    font-weight: 700;
    line-height: 1.2;
  }
  [data-page="scan"] .scan-source-stat {
    margin-top: 8px;
    position: relative;
  }
  [data-page="scan"] .scan-source-value {
    display: block;
    height: 34px;
    line-height: 34px;
    max-width: 112px;
    min-width: 0;
    overflow: hidden;
    padding: 0 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  [data-page="scan"] .scan-source-value:hover::after {
    content: attr(data-full-source);
    position: absolute;
    right: 0;
    top: -42px;
    z-index: 30;
    max-width: 360px;
    border-radius: 14px;
    padding: 10px 12px;
    background: rgba(19,32,95,.94);
    color: #fff;
    box-shadow: 0 14px 34px rgba(19,32,95,.22);
    font-size: 12px;
    line-height: 1.35;
    overflow-wrap: anywhere;
    white-space: normal;
  }
  [data-page="scan"] .scan-history-card .item {
    gap: 10px;
    grid-template-columns: 32px minmax(0, 1fr) auto;
    padding: 12px;
  }
  [data-page="scan"] .scan-history-card .status {
    white-space: nowrap;
  }
  [data-page="scan"] .scan-record-list {
    display: grid;
    gap: 12px;
  }
  [data-page="scan"] .scan-record-pager {
    align-items: center;
    display: flex;
    gap: 10px;
    justify-content: space-between;
    margin-top: auto;
    padding-top: 14px;
  }
  [data-page="scan"] .scan-record-pager .pill {
    min-height: 36px;
    padding: 0 14px;
  }
  [data-page="scan"] .scan-record-pager .pill:disabled {
    cursor: not-allowed;
    opacity: .45;
  }
  [data-page="scan"] .has-analysis-result {
    padding: 18px;
  }
  [data-page="scan"] .has-analysis-result .scan-orbit {
    aspect-ratio: 1 / 1;
    height: min(28vw, 340px);
    margin-bottom: 12px;
    overflow: visible;
    width: min(28vw, 340px);
  }
  [data-page="scan"] .has-analysis-result .scan-orbit::before {
    border-width: 5px;
    inset: 10px;
  }
  [data-page="scan"] .has-analysis-result .scan-orbit .buddy {
    transform: scale(.43) !important;
    transform-origin: center center;
  }
  [data-page="scan"] .has-analysis-result .scan-percent {
    bottom: 18px;
    font-size: 18px;
    padding: 6px 18px;
  }
  [data-page="scan"] .has-analysis-result > h3 {
    margin-top: 12px;
  }
  .scan-result-card {
    margin: 0 auto 12px;
    max-width: 620px;
    padding: 16px;
    text-align: left;
    overflow: hidden;
  }
  .scan-result-head {
    align-items: flex-start;
    display: flex;
    gap: 12px;
    justify-content: space-between;
  }
  .scan-result-head h3 {
    margin: 0;
    min-width: 0;
  }
  .analysis-source-badge {
    flex: 0 0 auto;
    max-width: 104px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .analysis-source-detail {
    color: #65709e;
    font-size: 12px;
    font-weight: 800;
    margin: 8px 0 0;
    overflow-wrap: anywhere;
  }
  .analysis-metrics {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    text-align: center;
  }
  .analysis-metric {
    border-radius: 18px;
    background: rgba(255,255,255,.65);
    padding: 12px 8px;
  }
  .analysis-metric .big-number {
    display: block;
    font-size: clamp(26px, 4vw, 44px);
    line-height: 1;
    overflow-wrap: anywhere;
  }
  .analysis-metric small {
    color: #65709e;
    display: block;
    font-weight: 800;
    margin-top: 6px;
  }
  .analysis-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  #checkin .pill,
  #shop .pill,
  #timeline .pill,
  [data-page="journey"] aside .pill {
    margin-top: 8px;
  }
  #milestones .milestone {
    border: 0;
    background: transparent;
    color: inherit;
    cursor: pointer;
    font: inherit;
  }
  #milestones .milestone:hover .dot,
  #timeline .journey-record:hover {
    transform: translateY(-2px);
    box-shadow: 0 14px 30px rgba(99, 75, 168, 0.12);
  }
  #timeline .journey-record {
    grid-template-columns: 64px minmax(180px, 1fr) auto auto auto auto;
    transition: transform .18s ease, box-shadow .18s ease;
  }
  #timeline .journey-empty {
    grid-template-columns: 48px minmax(180px, 1fr) auto;
  }
  .camera-capture-modal {
    align-items: center;
    background: rgba(19, 32, 95, .58);
    display: flex;
    inset: 0;
    justify-content: center;
    padding: 24px;
    position: fixed;
    z-index: 60;
  }
  .camera-capture-box {
    background: rgba(255, 255, 255, .92);
    border-radius: 18px;
    box-shadow: 0 24px 70px rgba(19, 32, 95, .28);
    max-width: 720px;
    padding: 18px;
    width: min(100%, 720px);
  }
  .camera-capture-box video {
    background: #13205f;
    border-radius: 14px;
    display: block;
    margin-bottom: 14px;
    max-height: 62vh;
    object-fit: cover;
    width: 100%;
  }
  @media (max-width: 720px) {
    .pet-agent {
      bottom: 94px;
      right: 16px;
    }
    .pet-bubble {
      height: 64px;
      width: 64px;
    }
    .analysis-metrics {
      grid-template-columns: 1fr;
    }
    .scan-result-head {
      display: block;
    }
    .analysis-source-badge {
      display: inline-block;
      margin-top: 8px;
    }
    #timeline .journey-record,
    #timeline .journey-empty {
      grid-template-columns: 1fr;
      justify-items: start;
    }
  }
    }
  }
`
