import { useEffect, useRef } from 'react'
import { analyzePhoto, HAIRSTYLE_CATALOG, MAX_IMAGE_SIZE_BYTES, validateImageFile } from './services/model'
import { useUserStore, type ReportRecord } from './store/UserStore'
import type { AnalysisResult } from './types'
import { prototypeBody, prototypeScript, prototypeStyle } from './prototypeHtml'

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
    const resetBtn = target.closest<HTMLElement>('[data-action="reset-progress"]')
    const journeyShareBtn = target.closest<HTMLElement>('[data-action="journey-share"]')
    const openJourneyBtn = target.closest<HTMLElement>('[data-action="open-journey"]')
    const shareBtn = target.closest<HTMLElement>('#guideBtn')

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
    if (resetBtn) {
      if (confirm('重置所有进度、积分、打卡和历史记录？')) {
        useUserStore.getState().resetAll()
        localStorage.removeItem(taskKey())
        localStorage.removeItem(taskBonusKey())
        QUEST_CATEGORIES.forEach((category) => localStorage.removeItem(questProgressKey(category)))
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
  const uploadBtn = scanSection?.querySelector<HTMLButtonElement>('.cta.ghost')
  const percent = root.querySelector<HTMLElement>('#scanPercent')
  const scanCard = scanSection?.querySelector<HTMLElement>('.card[style*="text-align:center"]')
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

function renderStatefulSections(root: HTMLElement, activeQuestCategory: QuestCategory = 'daily') {
  renderAnalysisCard(root, currentAnalysisFromStore())
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

function renderAnalysisCard(root: HTMLElement, result: AnalysisResult) {
  const percent = root.querySelector<HTMLElement>('#scanPercent')
  const scanCard = root.querySelector<HTMLElement>('[data-page="scan"] .card[style*="text-align:center"]')
  if (percent && useUserStore.getState().dropScore != null) percent.textContent = `${result.score}`
  if (!scanCard || useUserStore.getState().dropScore == null) return

  const old = scanCard.querySelector('[data-analysis-result]')
  old?.remove()
  const fallback = result.fallback_code
    ? `<div class="badge" style="background:rgba(255,154,61,.18);color:#ff7a2f">fallback: ${escapeHtml(result.fallback_code)}</div>`
    : ''
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
  setHtml(root.querySelector('[data-page="quests"] aside .card:nth-child(4)'), `<h3>本周任务总览</h3><div class="donut" data-label="${totalDone}/${totalQuests.length}\A 已完成"></div><p>${allDailyDone ? '每日建议已全部点亮，额外奖励已入账。' : '今天再点亮一个小任务，就很不错啦。'}</p>`)
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
  setHtml(root.querySelector('[data-page="scan"] .grid .card:nth-child(2)'), `<h3>本周扫描数据</h3><div class="three grid"><div><span class="big-number">${history.length}</span><br>扫描次数</div><div><span class="big-number">${avgScore(history) || '--'}</span><br>平均状态分</div><div><span class="badge">${history[0]?.source_label || '等待分析'}</span><br>最新来源</div></div>`)
  setHtml(root.querySelector('[data-page="scan"] .grid .card.item-list'), `<h3>最近扫描记录</h3>${renderRecordItems(latest)}`)
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
  setHtml(root.querySelector('#leaders'), buildLeaders().map((l) => `<div class="leader ${l.isMe ? 'you' : ''}"><span class="badge">${l.rank}</span><b>${escapeHtml(l.name)}<small>${escapeHtml(l.note)}</small></b><span>${l.points} XP</span><span>${l.trend}</span></div>`).join(''))
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
  return records.map((r) => `<div class="item"><span>${timeline ? r.date.slice(5) : '〰'}</span><b>${escapeHtml(r.title)}<small>${escapeHtml(r.summary)}</small></b><button class="status" data-view-report="${escapeHtml(r.id)}">${r.score} 分</button></div>`).join('')
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
  .prototype-toast {
    position: fixed;
    right: 28px;
    bottom: 28px;
    z-index: 20;
    border-radius: 999px;
    padding: 14px 20px;
    background: rgba(19,32,95,.92);
    color: #fff;
    box-shadow: 0 18px 45px rgba(19,32,95,.24);
    font-weight: 800;
  }
  [data-analysis-result] .badge,
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
  @media (max-width: 720px) {
    #timeline .journey-record,
    #timeline .journey-empty {
      grid-template-columns: 1fr;
      justify-items: start;
    }
  }
`
