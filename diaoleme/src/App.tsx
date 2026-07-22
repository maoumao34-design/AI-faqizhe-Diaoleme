import { useEffect, useRef } from 'react'
import { buildReportContext, chatWithAssistant, fetchHistoryRecords, HAIRSTYLE_CATALOG } from './services/model'
import { useUserStore, type ReportRecord } from './store/UserStore'
import type { ChatMessage } from './services/model'
import { prototypeBody } from './prototype/PrototypeBody'
import { prototypeScript } from './prototype/PrototypeScript'
import { prototypeStyle } from './prototype/PrototypeStyle'
import { renderBuddy, handleBuddyAction, selectHairStyle } from './prototype/controllers/buddyController'
import { showPage } from './prototype/controllers/navigation'
import { escapeHtml, setHtml, showToast } from './prototype/controllers/ui'
import { buildTrendBars, renderHistory, renderJourney, groupReportsByDay } from './prototype/controllers/journeyController'
import { attachPrototypeAnalysis, clearAnalysisCard, currentAnalysisFromStore, renderAnalysisCard } from './prototype/controllers/scanController'
import { configureQuestController, renderTasks, completeQuest, clearQuestProgress, getQuestCount, isQuestCategory, type QuestCategory } from './prototype/controllers/questsController'
import { renderRewards, purchaseReward, REWARD_MARKET_ITEMS, clearOwnedRewards } from './prototype/controllers/rewardsController'
import {
  buildLeaders,
  renderLeague,
  LEAGUE_TABS,
  loadLeagueRankMetric,
  saveLeagueRankMetric,
  clearLeagueRankMetric,
  isLeagueRankMetric,
  type LeagueTab,
  type LeagueRankMetric,
} from './prototype/controllers/leagueController'
import { getLevelProgress } from './prototype/controllers/progress'

const todayKey = () => new Date().toISOString().slice(0, 10)
const taskKey = () => `diaoleme-prototype-tasks-${todayKey()}`
const taskBonusKey = () => `diaoleme-prototype-task-bonus-${todayKey()}`
const questProgressKey = (category: QuestCategory) => `diaoleme-prototype-quest-progress-${category}-${todayKey()}`


type CommunityTab = '关注' | '最新' | '热门' | '精华'
type DiaryMoodKey = 'all' | 'happy' | 'calm' | 'anxious' | 'tired'
type DiaryDayEntry = {
  date: string
  reports: ReportRecord[]
  score: number
  mood: { key: Exclude<DiaryMoodKey, 'all'>; label: string; emoji: string }
  title: string
  snippet: string
  thumbEmoji: string
  thumbTone: string
  primaryReportId: string
}
const DIARY_MOODS: DiaryMoodKey[] = ['all', 'happy', 'calm', 'anxious', 'tired']
const isDiaryMood = (value: string): value is DiaryMoodKey => DIARY_MOODS.includes(value as DiaryMoodKey)
type CommunityPost = {
  id: string
  name: string
  level: string
  body: string
  media: string
  likes: number
  comments: string[]
  tag: string
  createdAt: number
  featured?: boolean
  following?: boolean
  fromJourney?: boolean
  reportId?: string
}
const COMMUNITY_TABS: CommunityTab[] = ['关注', '最新', '热门', '精华']
const isCommunityTab = (value: string): value is CommunityTab => COMMUNITY_TABS.includes(value as CommunityTab)
const COMMUNITY_POSTS_KEY = 'diaoleme-community-user-posts'




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
  configureQuestController({
    getSuggestions,
    taskKey,
    taskBonusKey,
    questProgressKey,
  })
  let activeQuestCategory: QuestCategory = 'daily'
  let activeLeagueTab: LeagueTab = '排行榜'
  let activeLeagueMetric: LeagueRankMetric = loadLeagueRankMetric()
  let activeCommunityTab: CommunityTab = '最新'
  let activeDiaryMood: DiaryMoodKey = 'all'
  let diaryVisibleCount = 6
  const render = () => renderStatefulSections(root, activeQuestCategory, activeLeagueTab, activeLeagueMetric, activeCommunityTab, activeDiaryMood, diaryVisibleCount)
  const scanCleanup = attachPrototypeAnalysis(root, {
    renderStatefulSections: render,
  })
  const chatCleanup = attachChatAssistant(root)
  render()
  const unsubscribe = useUserStore.subscribe(render)

  // Hydrate Scan/Journey/Diary from public GET /api/records (AIFA-30).
  void fetchHistoryRecords(20).then((records) => {
    if (!records.length) return
    useUserStore.getState().mergeRemoteHistory(records)
  })

  const onClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement
    const categoryBtn = target.closest<HTMLElement>('[data-quest-category]')
    const leagueTabBtn = target.closest<HTMLElement>('[data-league-tab]')
    const leagueMetricBtn = target.closest<HTMLElement>('[data-league-metric]')
    const communityTabBtn = target.closest<HTMLElement>('[data-community-tab]')
    const diaryMoodBtn = target.closest<HTMLElement>('[data-diary-mood]')
    const diaryLoadMoreBtn = target.closest<HTMLElement>('[data-action="diary-load-more"]')
    const questBtn = target.closest<HTMLElement>('[data-quest-id]')
    const checkinBtn = target.closest<HTMLElement>('[data-action="checkin"]')
    const unlockBtn = target.closest<HTMLElement>('[data-unlock-id]')
    const rewardBuyBtn = target.closest<HTMLElement>('[data-reward-buy]')
    const viewReportBtn = target.closest<HTMLElement>('[data-view-report]')
    const viewDayBtn = target.closest<HTMLElement>('[data-view-day]')
    const shareReportBtn = target.closest<HTMLElement>('[data-share-report]')
    const navBtn = target.closest<HTMLElement>('[data-go]')
    const resetBtn = target.closest<HTMLElement>('[data-action="reset-progress"]')
    const scanPageBtn = target.closest<HTMLElement>('[data-scan-record-page]')
    const journeyShareBtn = target.closest<HTMLElement>('[data-action="journey-share"]')
    const shareToCommunityBtn = target.closest<HTMLElement>('[data-action="share-to-community"]')
    const openJourneyBtn = target.closest<HTMLElement>('[data-action="open-journey"]')
    const buddyActionBtn = target.closest<HTMLElement>('[data-buddy-action]')
    const shareBtn = target.closest<HTMLElement>('#guideBtn')
    const likeBtn = target.closest<HTMLElement>('[data-post-like]')
    const commentBtn = target.closest<HTMLElement>('[data-post-comments]')

    if (navBtn?.dataset.go === 'scan' && !viewReportBtn) {
      clearAnalysisCard(root)
    }
    if (categoryBtn?.dataset.questCategory && isQuestCategory(categoryBtn.dataset.questCategory)) {
      activeQuestCategory = categoryBtn.dataset.questCategory
      render()
    }
    if (leagueTabBtn?.dataset.leagueTab && LEAGUE_TABS.includes(leagueTabBtn.dataset.leagueTab as LeagueTab)) {
      activeLeagueTab = leagueTabBtn.dataset.leagueTab as LeagueTab
      render()
      showToast(root, `已切换至${activeLeagueTab}`)
    }
    if (leagueMetricBtn?.dataset.leagueMetric && isLeagueRankMetric(leagueMetricBtn.dataset.leagueMetric)) {
      activeLeagueMetric = leagueMetricBtn.dataset.leagueMetric
      saveLeagueRankMetric(activeLeagueMetric)
      render()
    }
    if (rewardBuyBtn?.dataset.rewardBuy) {
      const item = REWARD_MARKET_ITEMS.find((entry) => entry.id === rewardBuyBtn.dataset.rewardBuy)
      if (item) {
        const result = purchaseReward(item)
        render()
        showToast(root, result.message, {
          anchorSelector: '[data-page="rewards"] .reward-market',
          className: 'prototype-toast-shop',
        })
      }
    }
    if (communityTabBtn?.dataset.communityTab && isCommunityTab(communityTabBtn.dataset.communityTab)) {
      activeCommunityTab = communityTabBtn.dataset.communityTab
      render()
      showToast(root, `已切换至${activeCommunityTab}`)
    }
    if (diaryMoodBtn?.dataset.diaryMood && isDiaryMood(diaryMoodBtn.dataset.diaryMood)) {
      activeDiaryMood = diaryMoodBtn.dataset.diaryMood
      diaryVisibleCount = 6
      render()
      showToast(root, activeDiaryMood === 'all' ? '已显示全部日记' : `已筛选：${diaryMoodBtn.textContent?.trim()}`)
    }
    if (diaryLoadMoreBtn) {
      diaryVisibleCount += 6
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
        const alreadyOwned = useUserStore.getState().unlockedHairStyles.includes(item.id)
        const ok = useUserStore.getState().unlockHairStyle(item.id, item.cost)
        if (ok) {
          selectHairStyle(item.id)
        }
        showToast(root, ok ? `${alreadyOwned ? '已换上' : '已解锁并换上'} ${item.name}` : `积分还差 ${item.cost - useUserStore.getState().points}`)
        render()
      }
    }
    if (viewReportBtn?.dataset.viewReport) {
      useUserStore.getState().viewReport(viewReportBtn.dataset.viewReport)
      showPage(root, 'scan')
      renderAnalysisCard(root, currentAnalysisFromStore())
      showToast(root, '已打开这份扫描报告')
      return
    }
    if (viewDayBtn?.dataset.viewDay) {
      useUserStore.getState().viewDayReport(viewDayBtn.dataset.viewDay)
      showPage(root, 'scan')
      renderAnalysisCard(root, currentAnalysisFromStore())
      showToast(root, '已打开当天最新报告')
      return
    }
    if (shareReportBtn?.dataset.shareReport) {
      event.preventDefault()
      const shared = shareJourneyToCommunity({ reportId: shareReportBtn.dataset.shareReport })
      activeCommunityTab = '最新'
      showPage(root, 'community')
      render()
      showToast(root, shared.message)
      return
    }
    if (scanPageBtn?.dataset.scanRecordPage) {
      root.dataset.scanRecordPage = scanPageBtn.dataset.scanRecordPage
      renderHistory(root)
    }
    if (resetBtn) {
      if (confirm('重置所有进度、积分、打卡和历史记录？')) {
        useUserStore.getState().resetAll()
        clearQuestProgress()
        clearOwnedRewards()
        clearLeagueRankMetric()
        activeLeagueMetric = 'total_xp'
        clearAnalysisCard(root)
        render()
      }
    }
    if (shareBtn || journeyShareBtn || shareToCommunityBtn) {
      event.preventDefault()
      const shared = shareJourneyToCommunity()
      activeCommunityTab = '最新'
      showPage(root, 'community')
      render()
      showToast(root, shared.message)
      return
    }
    if (openJourneyBtn) {
      showPage(root, 'journey')
    }
    if (likeBtn?.dataset.postLike) {
      toggleCommunityLike(likeBtn.dataset.postLike)
      renderCommunity(root, activeCommunityTab)
    }
    if (commentBtn?.dataset.postComments) {
      const extra = root.querySelector<HTMLElement>(`[data-comments-extra-for="${commentBtn.dataset.postComments}"]`)
      if (extra) {
        const expanded = !extra.classList.contains('collapsed')
        extra.classList.toggle('collapsed', expanded)
        const count = Number(commentBtn.textContent?.match(/\d+/)?.[0] || 0)
        commentBtn.textContent = expanded ? `💬 ${count} · 展开` : `💬 ${count} · 收起`
      }
    }
    if (buddyActionBtn?.dataset.buddyAction) {
      handleBuddyAction(buddyActionBtn.dataset.buddyAction, root, todayKey)
      render()
    }
  }

  document.addEventListener('click', onClick)

  return () => {
    scanCleanup()
    chatCleanup()
    unsubscribe()
    document.removeEventListener('click', onClick)
  }
}

function renderStatefulSections(
  root: HTMLElement,
  activeQuestCategory: QuestCategory = 'daily',
  activeLeagueTab: LeagueTab = '排行榜',
  activeLeagueMetric: LeagueRankMetric = 'total_xp',
  activeCommunityTab: CommunityTab = '最新',
  activeDiaryMood: DiaryMoodKey = 'all',
  diaryVisibleCount = 6,
) {
  renderHome(root)
  renderBuddy(root, {
    avgScore,
    buildTrendBars,
    getQuestCount,
    todayKey,
  })
  renderTasks(root, activeQuestCategory)
  renderHistory(root)
  renderDiary(root, activeDiaryMood, diaryVisibleCount)
  renderCommunity(root, activeCommunityTab)
  renderRewards(root)
  renderLeague(root, activeLeagueTab, activeLeagueMetric)
  renderProfile(root)
}

function renderHome(root: HTMLElement) {
  const s = useUserStore.getState()
  const level = getLevelProgress(s.points)
  setHtml(root.querySelector('.compact-quests'), getSuggestions().slice(0, 4).map((q, i) => `<div class="item" style="grid-template-columns:34px 1fr auto"><span>${['💧', '🌙', '🥗', '🖐'][i] || '✨'}</span><b>${escapeHtml(q)}</b><span class="status">+${i === 0 ? 5 : 2} XP</span></div>`).join(''))
  setHtml(root.querySelector('.small-leaders'), buildLeaders().slice(0, 4).map((l) => `<div class="leader ${l.isMe ? 'you' : ''}" style="grid-template-columns:34px 1fr auto"><span class="badge">${l.rank}</span><b>${escapeHtml(l.name)}</b><span>${escapeHtml(l.scoreText)}</span></div>`).join(''))
  const heroBadges = root.querySelectorAll<HTMLElement>('[data-page="home"] .stats .badge, [data-page="home"] .badge')
  if (heroBadges[0]) heroBadges[0].textContent = `${s.points} XP`

  const homePoints = root.querySelector<HTMLElement>('[data-home-points]')
  const homeLevel = root.querySelector<HTMLElement>('[data-home-level]')
  const homeFill = root.querySelector<HTMLElement>('[data-home-level-fill]')
  const homeNext = root.querySelector<HTMLElement>('[data-home-next-level]')
  if (homePoints) homePoints.textContent = s.points.toLocaleString('en-US')
  if (homeLevel) homeLevel.textContent = `Lv.${level.level}`
  if (homeFill) homeFill.style.setProperty('--w', `${level.percent}%`)
  if (homeNext) {
    homeNext.textContent = level.need > 0
      ? `⭐ 再获得 ${level.need.toLocaleString('en-US')} XP 升级`
      : '⭐ 已达当前演示等级上限'
  }
}

function diaryMoodFromScore(score: number): DiaryDayEntry['mood'] {
  if (score >= 75) return { key: 'happy', label: '开心', emoji: '😊' }
  if (score >= 60) return { key: 'calm', label: '平静', emoji: '🧘' }
  if (score >= 45) return { key: 'anxious', label: '焦虑', emoji: '😟' }
  return { key: 'tired', label: '疲惫', emoji: '😫' }
}

function diaryThumbFor(moodKey: DiaryDayEntry['mood']['key'], tags: string[]) {
  const tag = tags[0] || ''
  if (/按摩|护理|头皮/.test(tag)) return { emoji: '🪮', tone: 'mint' }
  if (/睡眠|早睡|放松/.test(tag)) return { emoji: '🌙', tone: 'lavender' }
  if (/运动|打卡|坚持/.test(tag)) return { emoji: '🌱', tone: 'sprout' }
  if (moodKey === 'happy') return { emoji: '✨', tone: 'sunny' }
  if (moodKey === 'calm') return { emoji: '🍃', tone: 'mint' }
  if (moodKey === 'anxious') return { emoji: '💭', tone: 'cloud' }
  return { emoji: '🕯️', tone: 'warm' }
}

function synthesizeDayTitle(reports: ReportRecord[], score: number) {
  const latest = reports[0]
  if (reports.length === 1) return latest.title
  const best = reports.reduce((top, item) => (item.score > top.score ? item : top), latest)
  if (score >= 75) return `今天整体挺稳：${best.title}`
  if (score < 50) return `今天先温柔一点：${latest.title}`
  return `今日小结（${reports.length} 次记录）：${latest.title}`
}

function synthesizeDaySnippet(reports: ReportRecord[], score: number) {
  const latest = reports[0]
  const pieces = [latest.summary]
  if (reports.length > 1) {
    pieces.push(`这一天共整理了 ${reports.length} 次 Scan，平均状态分 ${score}。`)
  } else {
    pieces.push(`状态分 ${score}，掉发量 ${latest.count}。`)
  }
  const tip = latest.suggestions[0] || latest.daily_task
  if (tip) pieces.push(`轻任务：${tip}`)
  return pieces.join(' ')
}

function buildDiaryDayEntries(history: ReportRecord[]): DiaryDayEntry[] {
  const grouped = groupReportsByDay(history)
  return Object.keys(grouped)
    .sort((a, b) => b.localeCompare(a))
    .map((date) => {
      const reports = [...grouped[date]].sort((a, b) => b.id.localeCompare(a.id))
      const score = Math.round(reports.reduce((sum, item) => sum + item.score, 0) / reports.length)
      const mood = diaryMoodFromScore(score)
      const thumb = diaryThumbFor(mood.key, reports.flatMap((item) => item.tags))
      return {
        date,
        reports,
        score,
        mood,
        title: synthesizeDayTitle(reports, score),
        snippet: synthesizeDaySnippet(reports, score),
        thumbEmoji: thumb.emoji,
        thumbTone: thumb.tone,
        primaryReportId: reports[0].id,
      }
    })
}

function buildDiaryMoodStats(entries: DiaryDayEntry[]) {
  const counts = { happy: 0, calm: 0, anxious: 0, tired: 0 }
  entries.forEach((entry) => {
    counts[entry.mood.key] += 1
  })
  const total = entries.length || 1
  return {
    counts,
    percents: {
      happy: Math.round((counts.happy / total) * 100),
      calm: Math.round((counts.calm / total) * 100),
      anxious: Math.round((counts.anxious / total) * 100),
      tired: Math.round((counts.tired / total) * 100),
    },
  }
}

function renderDiary(root: HTMLElement, activeMood: DiaryMoodKey = 'all', visibleCount = 6) {
  const history = useUserStore.getState().reportHistory
  const allEntries = buildDiaryDayEntries(history)
  const filtered = activeMood === 'all' ? allEntries : allEntries.filter((entry) => entry.mood.key === activeMood)
  const visible = filtered.slice(0, visibleCount)
  const latestEntry = allEntries[0]
  const suggestion = buildLocalDiaryAdvice(history)
  const moodStats = buildDiaryMoodStats(allEntries)
  const todayMood = latestEntry?.mood || { key: 'calm' as const, label: '平静', emoji: '🧘' }

  setHtml(root.querySelector('[data-page="diary"] .card.hero'), `
    <div>
      <h2 style="font-size:36px">今天也要好好爱自己呀 ✨</h2>
      <p>每一根头发都在努力生长，你也是！日记会把每天的 Scan 报告收成一篇 blog 小结。</p>
      <div class="diary-hero-meta">
        <button class="pill primary" type="button">${todayMood.emoji} ${todayMood.label}</button>
        <span class="badge">${latestEntry ? formatDiaryWeekday(latestEntry.date) : '等待第一篇'}</span>
      </div>
      <p class="diary-hero-advice"><b>智能建议：</b>${escapeHtml(suggestion)}</p>
    </div>
    <div class="buddy-stage" style="min-height:220px"><div class="ground"></div><div class="buddy" style="transform:scale(.5)"><div class="fluff"></div><div class="sprout"></div><div class="face"><span class="eye left"></span><span class="eye right"></span><span class="nose"></span><span class="blush left"></span><span class="blush right"></span></div><div class="body"></div><div class="shoe left"></div><div class="shoe right"></div></div></div>
  `)

  setHtml(root.querySelector('#calendar'), buildDiaryCalendar(history))
  setHtml(
    root.querySelector('#diaryMoodFilters'),
    [
      ['all', '全部'],
      ['happy', '😊 开心'],
      ['calm', '🧘 平静'],
      ['anxious', '😟 焦虑'],
      ['tired', '😫 疲惫'],
    ].map(([key, label]) => `<button class="pill ${activeMood === key ? 'primary' : ''}" data-diary-mood="${key}">${label}</button>`).join(''),
  )

  const happyEnd = moodStats.percents.happy
  const calmEnd = happyEnd + moodStats.percents.calm
  const anxiousEnd = calmEnd + moodStats.percents.anxious
  const donut = root.querySelector<HTMLElement>('#diaryMoodDonut')
  if (donut) {
    donut.dataset.label = `${allEntries.length}\n篇日记`
    donut.style.background = allEntries.length
      ? `conic-gradient(#8b5cf6 0 ${happyEnd}%, #65c982 ${happyEnd}% ${calmEnd}%, #f59e0b ${calmEnd}% ${anxiousEnd}%, #c4b5fd ${anxiousEnd}% 100%)`
      : 'conic-gradient(#e8e4f8 0 100%)'
  }
  setHtml(
    root.querySelector('#diaryMoodLegend'),
    `<span>😊 ${moodStats.percents.happy}%</span><span>🧘 ${moodStats.percents.calm}%</span><span>😟 ${moodStats.percents.anxious}%</span><span>😫 ${moodStats.percents.tired}%</span>`,
  )

  setHtml(root.querySelector('#diaryFeedTitle'), `共 ${filtered.length} 篇日记`)
  setHtml(
    root.querySelector('#diaries'),
    visible.length
      ? visible.map((entry) => {
          const day = entry.date.slice(8)
          const month = Number(entry.date.slice(5, 7))
          return `<article class="diary-entry" data-view-day="${escapeHtml(entry.date)}" role="button" tabindex="0">
            <div class="diary-entry-date"><b>${escapeHtml(day)}</b><small>${month}月</small></div>
            <div class="diary-entry-main">
              <div class="diary-mood-pill">${entry.mood.emoji} ${entry.mood.label}</div>
              <h4>${escapeHtml(entry.title)}</h4>
              <p>${escapeHtml(entry.snippet)}</p>
              <div class="diary-entry-meta"><span>${entry.reports.length} 次报告</span><span>${entry.score} 分</span></div>
            </div>
            <div class="diary-entry-thumb tone-${escapeHtml(entry.thumbTone)}" aria-hidden="true">${entry.thumbEmoji}</div>
            <button class="diary-entry-more" type="button" data-view-report="${escapeHtml(entry.primaryReportId)}" title="查看当天报告">⋯</button>
          </article>`
        }).join('')
      : `<div class="diary-empty"><span>📖</span><b>${activeMood === 'all' ? '还没有日记' : '这个心情还没有日记'}<small>${activeMood === 'all' ? '去 Scan 完成一次上传后，这里会按天整理成 blog 小结。' : '换个心情筛选，或继续记录新的一天。'}</small></b><button class="pill primary" data-go="scan">去上传今天的记录</button></div>`,
  )

  const loadMore = root.querySelector<HTMLButtonElement>('#diaryLoadMore')
  if (loadMore) {
    loadMore.hidden = filtered.length <= visible.length
    loadMore.textContent = `加载更多日记（还有 ${Math.max(filtered.length - visible.length, 0)} 篇）`
  }

  const trendBars = scoreBars(history)
  setHtml(
    root.querySelector('#diaryTrendCard'),
    `<h3>心情趋势</h3><p>${escapeHtml(latestEntry ? `${formatDiaryWeekday(latestEntry.date)} · ${latestEntry.mood.emoji} ${latestEntry.mood.label}` : '完成记录后显示趋势')}</p><div class="chart">${trendBars.map((v) => `<span class="bar" style="height:${v}%"></span>`).join('')}</div>`,
  )
  setHtml(root.querySelector('[data-page="diary"] .word-cloud'), `<h3>关键词统计</h3>${buildWordCloud(history)}`)

  const memory = allEntries.find((entry) => entry.mood.key === 'happy') || allEntries[allEntries.length - 1]
  setHtml(
    root.querySelector('#diaryMemoryCard'),
    memory
      ? `<h3>回忆精选</h3><div class="reward-art diary-memory-thumb tone-${escapeHtml(memory.thumbTone)}">${memory.thumbEmoji}</div><b>${escapeHtml(memory.title)}</b><p>${escapeHtml(memory.snippet)}</p><button class="pill" data-view-day="${escapeHtml(memory.date)}">回看这一天</button>`
      : `<h3>回忆精选</h3><div class="reward-art">🌄</div><b>第一篇日记 ✨</b><p>完成第一次 Scan 后，这里会展示值得回看的一天。</p><button class="pill primary" data-go="scan">去记录</button>`,
  )
}

function formatDiaryWeekday(date: string) {
  const d = new Date(`${date}T12:00:00`)
  if (Number.isNaN(d.getTime())) return date
  const week = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'][d.getDay()]
  return `${Number(date.slice(5, 7))}月${Number(date.slice(8))}日 · ${week}`
}

function buildLocalDiaryAdvice(records: ReportRecord[]) {
  const last = records[0]
  const prev = records[1]
  if (!last) return '先完成一次 Scan，让小发球有第一条记录可以陪你观察变化。'
  const delta = prev ? last.score - prev.score : 0
  const countHint = last.count === '偏多' ? '今天先把目标放轻一点，选一个早睡或放松任务就够了' : last.count === '少量' ? '状态看起来比较轻松，可以继续保持记录节奏' : '保持温和观察，不需要给自己额外压力'
  const tagHint = last.tags[0] ? `这次标签是“${last.tags[0]}”，` : ''
  const fallbackTask = last.suggestions[0] || last.daily_task || '睡前做 2 分钟放松呼吸'
  if (delta >= 8) return `${tagHint}比上次提升明显，建议延续今天的做法：${fallbackTask}。${countHint}。`
  if (delta <= -8) return `${tagHint}这次分数有点回落，建议先不做判断，只保留一条轻量动作：${fallbackTask}。${countHint}。`
  if (last.score >= 75) return `${tagHint}整体比较稳定，今天适合做“巩固局”：${fallbackTask}，然后明天继续对比趋势。`
  if (last.score < 55) return `${tagHint}今天先走温柔路线，不追求立刻变好；完成“${fallbackTask}”就算达标。`
  return `${tagHint}变化不大就是好信号，建议继续轻量打卡：${fallbackTask}。${countHint}。`
}

const COMMUNITY_SEED_POSTS: CommunityPost[] = [
  {
    id: 'checkin7',
    name: '小蒲公英',
    level: 'Lv.6',
    body: '今天终于连续打卡第 7 天啦！虽然掉发还是有，但头皮状态明显舒服多了～',
    media: '📋',
    likes: 128,
    comments: ['我也在做 7 天挑战，一起坚持！', '这种轻松记录真的比焦虑刷帖舒服。', '打卡第七天太有成就感了！'],
    tag: '连续打卡',
    createdAt: Date.now() - 1000 * 60 * 60 * 26,
    featured: true,
    following: true,
  },
  {
    id: 'massage',
    name: '爱吃草莓',
    level: 'Lv.4',
    body: '分享一个我最近超喜欢的头皮按摩方法！每天睡前按 5 分钟，放松又助眠。',
    media: '🪮',
    likes: 96,
    comments: ['求一个手法教程！', '睡前按摩 + 早睡，感觉小发球都开心了。'],
    tag: '头皮护理',
    createdAt: Date.now() - 1000 * 60 * 60 * 8,
    featured: false,
    following: true,
  },
  {
    id: 'slowday',
    name: '薄荷味的风',
    level: 'Lv.6',
    body: '最近压力有点大，掉发也跟着严重了。深呼吸、运动、喝水，给自己一些温柔的时间。',
    media: '🌿',
    likes: 76,
    comments: ['抱抱，先把记录坚持下来就很棒。', '今天也给自己一点松弛感。'],
    tag: '情绪放松',
    createdAt: Date.now() - 1000 * 60 * 60 * 3,
    featured: true,
    following: false,
  },
  {
    id: 'rewardhair',
    name: '向日葵',
    level: 'Lv.3',
    body: '新发型解锁啦！看着宝宝一点点长出来的花发，成就感满满！',
    media: '🌱',
    likes: 143,
    comments: ['这个发型也太可爱了！', '奖励机制好有动力，我也要攒 XP。'],
    tag: '成长奖励',
    createdAt: Date.now() - 1000 * 60 * 60 * 50,
    featured: true,
    following: false,
  },
]

function userLevelLabel(points: number) {
  if (points >= 4000) return 'Lv.7'
  if (points >= 3000) return 'Lv.6'
  if (points >= 2000) return 'Lv.5'
  if (points >= 1200) return 'Lv.4'
  if (points >= 600) return 'Lv.3'
  if (points >= 200) return 'Lv.2'
  return 'Lv.1'
}

function loadUserCommunityPosts(): CommunityPost[] {
  try {
    const raw = JSON.parse(localStorage.getItem(COMMUNITY_POSTS_KEY) || '[]')
    return Array.isArray(raw) ? raw.filter((item) => item && typeof item.id === 'string' && typeof item.body === 'string') : []
  } catch {
    return []
  }
}

function saveUserCommunityPosts(posts: CommunityPost[]) {
  localStorage.setItem(COMMUNITY_POSTS_KEY, JSON.stringify(posts.slice(0, 40)))
}

function allCommunityPosts(): CommunityPost[] {
  return [...loadUserCommunityPosts(), ...COMMUNITY_SEED_POSTS]
}

function postsForCommunityTab(tab: CommunityTab): CommunityPost[] {
  const posts = allCommunityPosts()
  if (tab === '关注') return posts.filter((post) => post.following || post.fromJourney).sort((a, b) => b.createdAt - a.createdAt)
  if (tab === '热门') return [...posts].sort((a, b) => b.likes - a.likes || b.createdAt - a.createdAt)
  if (tab === '精华') return posts.filter((post) => post.featured).sort((a, b) => b.likes - a.likes)
  return [...posts].sort((a, b) => b.createdAt - a.createdAt)
}

function shareJourneyToCommunity(options?: { reportId?: string }): { ok: boolean; message: string } {
  const s = useUserStore.getState()
  const report = options?.reportId
    ? s.reportHistory.find((item) => item.id === options.reportId)
    : s.reportHistory[0]

  const existing = loadUserCommunityPosts()
  if (report && existing.some((post) => post.reportId === report.id)) {
    return { ok: true, message: '这份旅程已经分享过啦，已打开社区最新流' }
  }

  const post: CommunityPost = {
    id: `journey-${Date.now().toString(36)}`,
    name: '我',
    level: userLevelLabel(s.points),
    body: report
      ? (options?.reportId
        ? `从 Journey 分享：${report.title}（${report.score} 分）。${report.summary}`
        : `分享我的护发旅程：打卡 ${s.checkinDays.length} 天，累计 ${s.reportHistory.length} 次记录。最近一次是「${report.title}」${report.score} 分，${report.summary}`)
      : `先在社区打个招呼：我开始记录护发旅程啦！打卡 ${s.checkinDays.length} 天，一起轻松坚持～`,
    media: '✨',
    likes: 0,
    comments: ['欢迎分享旅程，我们一起轻松记录～'],
    tag: report?.tags[0] || '旅程分享',
    createdAt: Date.now(),
    featured: false,
    following: true,
    fromJourney: true,
    reportId: report?.id,
  }
  saveUserCommunityPosts([post, ...existing])
  return { ok: true, message: '已发到 Community，可在「最新 / 关注」看到，不会再下载图片' }
}

function renderCommunity(root: HTMLElement, activeTab: CommunityTab = '最新') {
  const liked = loadLikedPosts()
  setHtml(
    root.querySelector('#communityTabs') || root.querySelector('[data-page="community"] .tabs'),
    COMMUNITY_TABS.map((tab) => `<button class="pill ${tab === activeTab ? 'primary' : ''}" data-community-tab="${tab}">${tab}</button>`).join(''),
  )

  const posts = postsForCommunityTab(activeTab)
  setHtml(root.querySelector('#posts'), posts.length ? posts.map((post) => {
    const isLiked = liked.has(post.id)
    const likeCount = post.likes + (isLiked ? 1 : 0)
    const firstComment = post.comments[0]
    const extraComments = post.comments.slice(1)
    const commentsHtml = firstComment
      ? `<div class="comments" data-comments-for="${escapeHtml(post.id)}"><div class="comment"><b>${post.fromJourney ? '小发球' : '发友'}：</b>${escapeHtml(firstComment)}</div>${extraComments.length ? `<div class="comments-extra collapsed" data-comments-extra-for="${escapeHtml(post.id)}">${extraComments.map((text, index) => `<div class="comment"><b>${index % 2 === 0 ? '发友' : '小发球'}：</b>${escapeHtml(text)}</div>`).join('')}</div>` : ''}</div>`
      : ''
    return `<div class="post community-post"><div class="mini-buddy"></div><div><b>${escapeHtml(post.name)} <span class="badge">${escapeHtml(post.level)}</span>${post.fromJourney ? '<span class="badge">Journey</span>' : ''}</b><p>${escapeHtml(post.body)}</p><span class="badge"># ${escapeHtml(post.tag)}</span><div class="community-actions"><button class="pill ${isLiked ? 'primary' : ''}" data-post-like="${escapeHtml(post.id)}">💜 ${likeCount}</button><button class="pill" data-post-comments="${escapeHtml(post.id)}">💬 ${post.comments.length}${extraComments.length ? ' · 展开' : ''}</button><button class="pill">☆ 收藏</button></div>${commentsHtml}</div><div class="post-media">${escapeHtml(post.media)}</div></div>`
  }).join('') : `<div class="item journey-empty"><span>🌱</span><b>${activeTab}还没有内容<small>去 Journey 分享一次旅程，或切换其他 Tab 看看。</small></b><button class="pill primary" data-action="share-to-community">分享到 Community</button></div>`)
}

function loadLikedPosts() {
  try { return new Set<string>(JSON.parse(localStorage.getItem('diaoleme-community-likes') || '[]')) } catch { return new Set<string>() }
}

function toggleCommunityLike(id: string) {
  const liked = loadLikedPosts()
  if (liked.has(id)) liked.delete(id)
  else liked.add(id)
  localStorage.setItem('diaoleme-community-likes', JSON.stringify([...liked]))
}

function buildDiaryCalendar(records: ReportRecord[]) {
  const marked = new Map<string, ReportRecord>()
  records.forEach((record) => {
    if (!marked.has(record.date)) marked.set(record.date, record)
  })
  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth()
  const offset = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const cells: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => `<span>${d}</span>`)
  for (let i = 0; i < offset; i += 1) cells.push('<span></span>')
  for (let day = 1; day <= daysInMonth; day += 1) {
    const date = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    const rec = marked.get(date)
    const cls = rec ? 'selected diary-record-day' : date === todayKey() ? 'today' : ''
    const attrs = rec ? ` class="${cls}" data-view-day="${escapeHtml(date)}" role="button" tabindex="0" title="${rec.score} 分 ${escapeHtml(rec.title)}"` : ` class="${cls}"`
    cells.push(`<span${attrs}>${day}${rec ? '<small>•</small>' : ''}</span>`)
  }
  return cells.join('')
}

function scoreBars(records: ReportRecord[]) {
  const source = records.slice(0, 9).reverse().map((r) => r.score)
  return source.length ? source.map((score) => Math.max(18, Math.min(100, score))) : [36, 42, 52, 46, 60, 55, 66]
}

function buildWordCloud(records: ReportRecord[]) {
  const tags = records.flatMap((r) => r.tags).slice(0, 8)
  const words = tags.length ? tags : ['护理', '轻松记录', '睡眠', '心情', '头皮按摩', '坚持']
  return words.map((word, index) => {
    const x = [28, 14, 58, 42, 66, 24, 50, 72][index % 8]
    const y = [36, 58, 34, 70, 60, 42, 50, 76][index % 8]
    const size = [34, 26, 20, 18, 16, 22, 15, 17][index % 8]
    return `<span style="left:${x}%;top:${y}%;font-size:${size}px">${escapeHtml(word)}</span>`
  }).join('')
}

function attachChatAssistant(root: HTMLElement) {
  const widget = document.createElement('div')
  widget.className = 'ai-chat-widget'
  widget.innerHTML = `
    <button class="ai-chat-bubble" type="button" aria-label="打开 AI 助手">🌱<span>AI 助手</span></button>
    <section class="ai-chat-panel" aria-label="AI 助手对话">
      <header class="ai-chat-header"><b>掉了么 AI 助手</b><small>轻松陪聊，不做医疗判断</small><button type="button" data-chat-close aria-label="关闭 AI 助手">×</button></header>
      <div class="ai-chat-messages" data-chat-messages></div>
      <form class="ai-chat-form" data-chat-form>
        <input data-chat-input aria-label="输入对 AI 助手的问题" placeholder="问问护发习惯、记录建议或今天怎么坚持..." maxlength="300" />
        <button type="submit">发送</button>
      </form>
    </section>
  `
  // Mount on body so app shell overflow never clips the fixed panel.
  document.body.appendChild(widget)
  const bubble = widget.querySelector<HTMLButtonElement>('.ai-chat-bubble')!
  const form = widget.querySelector<HTMLFormElement>('[data-chat-form]')!
  const input = widget.querySelector<HTMLInputElement>('[data-chat-input]')!
  const messagesEl = widget.querySelector<HTMLElement>('[data-chat-messages]')!
  const closeBtn = widget.querySelector<HTMLButtonElement>('[data-chat-close]')!
  const messages: ChatMessage[] = [{ role: 'assistant', content: '你好呀，我是掉了么 AI 助手。可以陪你聊记录、任务和轻松护发习惯，但不会做医疗诊断。' }]
  let dragging = false
  let moved = false
  let startX = 0
  let startY = 0
  let startLeft = 0
  let startTop = 0
  // Transient wait copy only — keep it light; not product/system policy language.
  const thinkingPlaceholder = '头发丝正在认真想…'
  const renderMessages = () => {
    messagesEl.innerHTML = messages.map((m) => `<div class="ai-chat-msg ${m.role}">${escapeHtml(m.content)}</div>`).join('')
    messagesEl.scrollTop = messagesEl.scrollHeight
  }
  /** Keep the open panel fully inside the viewport (avoids header-only clip at bottom). */
  const placeOpenPanel = () => {
    const pad = 12
    const width = Math.min(360, window.innerWidth - pad * 2)
    const height = Math.min(520, window.innerHeight - pad * 2)
    widget.style.setProperty('--ai-chat-w', `${width}px`)
    widget.style.setProperty('--ai-chat-h', `${height}px`)
    widget.style.left = 'auto'
    widget.style.top = 'auto'
    widget.style.right = `${pad}px`
    widget.style.bottom = `${pad}px`
  }
  const togglePanel = (open?: boolean) => {
    const nextOpen = open ?? !widget.classList.contains('open')
    widget.classList.toggle('open', nextOpen)
    if (nextOpen) {
      placeOpenPanel()
      input.focus()
    }
  }
  const onPointerDown = (event: PointerEvent) => {
    if (widget.classList.contains('open')) return
    dragging = true
    moved = false
    startX = event.clientX
    startY = event.clientY
    const rect = widget.getBoundingClientRect()
    startLeft = rect.left
    startTop = rect.top
    bubble.setPointerCapture(event.pointerId)
  }
  const onPointerMove = (event: PointerEvent) => {
    if (!dragging) return
    const dx = event.clientX - startX
    const dy = event.clientY - startY
    // Only switch to left/top after a real drag; micro-jitter must not leave bottom/right.
    if (Math.abs(dx) + Math.abs(dy) <= 6) return
    moved = true
    const nextLeft = Math.max(12, Math.min(window.innerWidth - widget.offsetWidth - 12, startLeft + dx))
    const nextTop = Math.max(12, Math.min(window.innerHeight - widget.offsetHeight - 12, startTop + dy))
    widget.style.left = `${nextLeft}px`
    widget.style.top = `${nextTop}px`
    widget.style.right = 'auto'
    widget.style.bottom = 'auto'
  }
  const onPointerUp = (event: PointerEvent) => {
    dragging = false
    if (bubble.hasPointerCapture(event.pointerId)) {
      bubble.releasePointerCapture(event.pointerId)
    }
  }
  const onBubbleClick = () => {
    if (!moved) togglePanel(true)
  }
  const onResize = () => {
    if (widget.classList.contains('open')) placeOpenPanel()
  }
  const onSubmit = async (event: SubmitEvent) => {
    event.preventDefault()
    const text = input.value.trim()
    if (!text) return
    input.value = ''
    messages.push({ role: 'user', content: text }, { role: 'assistant', content: thinkingPlaceholder })
    renderMessages()
    try {
      // AIFA-68: attach this week's local Scan reports (not last-5 / not shared API dump).
      const reportContext = buildReportContext(useUserStore.getState().reportHistory)
      const outbound = messages
        .filter((m) => !(m.role === 'assistant' && m.content === thinkingPlaceholder))
        .slice(-8)
      const result = await chatWithAssistant(outbound, { reportContext })
      messages[messages.length - 1] = { role: 'assistant', content: result.reply }
    } catch {
      messages[messages.length - 1] = { role: 'assistant', content: '我这边暂时没有连上 AI 服务，先给你一个小建议：今天先完成一次记录，再选一个最轻量的任务。' }
    }
    renderMessages()
  }
  renderMessages()
  bubble.addEventListener('pointerdown', onPointerDown)
  bubble.addEventListener('pointermove', onPointerMove)
  bubble.addEventListener('pointerup', onPointerUp)
  bubble.addEventListener('click', onBubbleClick)
  closeBtn.addEventListener('click', () => togglePanel(false))
  form.addEventListener('submit', onSubmit)
  window.addEventListener('resize', onResize)
  return () => {
    bubble.removeEventListener('pointerdown', onPointerDown)
    bubble.removeEventListener('pointermove', onPointerMove)
    bubble.removeEventListener('pointerup', onPointerUp)
    bubble.removeEventListener('click', onBubbleClick)
    form.removeEventListener('submit', onSubmit)
    window.removeEventListener('resize', onResize)
    widget.remove()
  }
}

function renderProfile(root: HTMLElement) {
  const s = useUserStore.getState()
  const checked = s.checkinDays.includes(todayKey())
  const historyDays = new Set(s.reportHistory.map((item) => item.date)).size
  setHtml(root.querySelector('#streak'), ['一', '二', '三', '四', '五', '六', '日'].map((d, i) => `<span class="badge">${i < Math.min(s.checkinDays.length, 6) ? '✓' : i === 6 ? '🎁' : d}<br><small>${d}</small></span>`).join(''))
  setHtml(root.querySelector('#checkin'), ['一', '二', '三', '四', '五', '六', '日'].map((d, i) => `<span class="badge">${i < Math.min(s.checkinDays.length, 6) ? '✓' : i === 6 ? '🎁' : d}<br><small>${d}</small></span>`).join('') + `<button class="pill ${checked ? '' : 'primary'}" data-action="checkin">${checked ? '今日已打卡' : '今日打卡 +5'}</button><button class="pill" data-action="reset-progress">重置</button>`)

  const mePoints = root.querySelector<HTMLElement>('[data-me-points]')
  const meStreak = root.querySelector<HTMLElement>('[data-me-streak]')
  const meHistoryDays = root.querySelector<HTMLElement>('[data-me-history-days]')
  const meTotalXp = root.querySelector<HTMLElement>('[data-me-total-xp]')
  const meStreakCount = root.querySelector<HTMLElement>('[data-me-streak-count]')
  if (mePoints) mePoints.textContent = `${s.points.toLocaleString('en-US')} XP`
  if (meStreak) meStreak.textContent = `连续 ${s.checkinDays.length} 天`
  if (meHistoryDays) meHistoryDays.textContent = String(historyDays)
  if (meTotalXp) meTotalXp.textContent = s.points.toLocaleString('en-US')
  if (meStreakCount) meStreakCount.textContent = String(s.checkinDays.length)
}

function getSuggestions() {
  const suggestions = useUserStore.getState().suggestions
  return suggestions.length ? suggestions : ['上传一张照片生成专属建议', '今晚提前 30 分钟休息', '洗头时水温尽量温和']
}

function avgScore(records: ReportRecord[]) {
  if (!records.length) return null
  return Math.round(records.reduce((sum, item) => sum + item.score, 0) / records.length)
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

  [data-page="league"] .grid.two-col {
    grid-template-columns: minmax(0, 1fr) 360px;
    gap: 20px;
    min-height: 980px;
  }

  [data-page="league"] .league-season-hero {
    background: linear-gradient(105deg, #f6dcfa 0%, #e9e2ff 46%, #ded7fb 100%);
    border-radius: 22px;
    box-shadow: 0 14px 34px rgba(90, 73, 158, 0.11), inset 0 1px 0 rgba(255, 255, 255, 0.7);
    display: grid;
    grid-template-columns: 300px minmax(280px, 1fr) 180px;
    min-height: 320px;
    overflow: hidden;
    position: relative;
  }

  [data-page="league"] .league-hero-sky,
  [data-page="league"] .league-hero-flowers {
    left: 0;
    pointer-events: none;
    position: absolute;
    width: 100%;
    z-index: 0;
  }

  [data-page="league"] .league-hero-sky {
    height: 58%;
    object-fit: cover;
    opacity: 0.55;
    top: 0;
  }

  [data-page="league"] .league-hero-flowers {
    bottom: 0;
    height: 42%;
    object-fit: cover;
    opacity: 0.7;
  }

  [data-page="league"] .league-season-hero::before {
    background: radial-gradient(circle at 14% 22%, rgba(255, 255, 255, 0.7), transparent 24%), linear-gradient(180deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0));
    content: "";
    inset: 0;
    position: absolute;
  }

  [data-page="league"] .league-hero-copy {
    padding: 29px 0 0 26px;
    position: relative;
    z-index: 2;
  }

  [data-page="league"] .league-hero-copy > span {
    font-size: 12px;
    font-weight: 800;
  }

  [data-page="league"] .league-hero-copy h2 {
    font-size: 22px;
    margin: 10px 0 8px;
  }

  [data-page="league"] .league-hero-copy p {
    align-items: center;
    color: #6f72a2;
    display: flex;
    font-size: 12px;
    font-weight: 700;
    gap: 6px;
    margin: 0;
  }

  [data-page="league"] .league-hero-copy > small {
    color: #6f72a2;
    display: block;
    font-size: 11px;
    font-weight: 750;
    margin-top: 27px;
  }

  [data-page="league"] .league-countdown {
    display: flex;
    gap: 8px;
    margin-top: 8px;
  }

  [data-page="league"] .league-countdown div {
    align-items: center;
    background: rgba(255, 255, 255, 0.68);
    border-radius: 10px;
    box-shadow: inset 0 1px 0 white;
    display: flex;
    flex-direction: column;
    height: 61px;
    justify-content: center;
    width: 50px;
  }

  [data-page="league"] .league-countdown b {
    font-size: 20px;
  }

  [data-page="league"] .league-countdown span {
    font-size: 10px;
    margin-top: 4px;
  }

  [data-page="league"] .league-hero-characters {
    align-items: end;
    display: flex;
    gap: 10px;
    justify-content: center;
    padding-bottom: 18px;
    position: relative;
    z-index: 2;
  }

  [data-page="league"] .podium {
    align-items: center;
    background: transparent;
    box-shadow: none;
    display: grid;
    justify-items: center;
    position: relative;
    width: 110px;
  }

  [data-page="league"] .podium::before {
    display: none;
  }

  [data-page="league"] .podium i {
    display: none;
  }

  [data-page="league"] .podium-char {
    height: auto;
    object-fit: contain;
    position: relative;
    width: 78px;
    z-index: 2;
  }

  [data-page="league"] .podium-base {
    margin-top: -10px;
    object-fit: contain;
    width: 100%;
    z-index: 1;
  }

  [data-page="league"] .podium.first {
    background: transparent;
    height: auto;
    width: 130px;
  }

  [data-page="league"] .podium.first .podium-char {
    width: 96px;
  }

  [data-page="league"] .podium.second,
  [data-page="league"] .podium.third {
    background: transparent;
    height: auto;
  }

  [data-page="league"] .podium.second .podium-char,
  [data-page="league"] .podium.third .podium-char {
    width: 72px;
  }

  [data-page="league"] .league-hero-rank {
    padding: 28px 20px 0 0;
    position: relative;
    text-align: center;
    z-index: 3;
  }

  [data-page="league"] .league-hero-rank button {
    align-items: center;
    background: linear-gradient(135deg, #9b7af3, #765ce6);
    border-radius: 999px;
    box-shadow: 0 9px 20px rgba(108, 78, 218, 0.23);
    color: #fff;
    display: flex;
    font-size: 11px;
    font-weight: 800;
    gap: 7px;
    height: 34px;
    padding: 0 15px;
    white-space: nowrap;
  }

  [data-page="league"] .league-hero-rank > span {
    display: block;
    font-size: 10px;
    font-weight: 800;
    margin: 20px 0 7px;
  }

  [data-page="league"] .league-hero-badge {
    background: transparent;
    clip-path: none;
    display: block;
    height: 78px;
    margin: 4px auto 0;
    object-fit: contain;
    width: 78px;
  }

  [data-page="league"] .league-hero-rank b,
  [data-page="league"] .league-hero-rank small {
    display: block;
  }

  [data-page="league"] .league-hero-rank b {
    font-size: 14px;
    margin-top: 7px;
  }

  [data-page="league"] .league-hero-rank small {
    color: #7376a4;
    font-size: 10px;
    margin-top: 6px;
  }

  [data-page="league"] .league-hero-progress,
  [data-page="league"] .league-purple-progress,
  [data-page="league"] .league-mock-progress {
    background: #ece9f7;
    border-radius: 999px;
    height: 6px;
    overflow: hidden;
  }

  [data-page="league"] .league-hero-progress {
    margin: 7px auto;
    width: 92px;
  }

  [data-page="league"] .league-hero-progress i,
  [data-page="league"] .league-purple-progress i,
  [data-page="league"] .league-mock-progress i {
    background: linear-gradient(90deg, #7e60e8, #a987f5);
    border-radius: inherit;
    display: block;
    height: 100%;
    width: 62%;
  }

  [data-page="league"] .rank-area {
    margin-top: 20px;
    min-height: 680px;
  }

  [data-page="league"] .rank-toolbar {
    align-items: center;
    display: flex;
    height: 48px;
    justify-content: space-between;
  }

  [data-page="league"] .rank-tabs {
    display: flex;
    gap: 6px;
  }

  [data-page="league"] .rank-tabs button {
    background: rgba(255, 255, 255, 0.4);
    border-radius: 999px;
    color: #7479a6;
    cursor: pointer;
    font-size: 11px;
    font-weight: 800;
    height: 34px;
    min-width: 94px;
  }

  [data-page="league"] .rank-tabs button.active {
    background: linear-gradient(135deg, #a17cf7, #775ee8);
    box-shadow: 0 8px 17px rgba(105, 78, 215, 0.18);
    color: white;
  }

  [data-page="league"] .rank-toolbar label {
    align-items: center;
    background: rgba(255, 255, 255, 0.62);
    border-radius: 999px;
    box-shadow: 0 5px 16px rgba(81, 67, 139, 0.05);
    color: #8185af;
    display: flex;
    gap: 6px;
    height: 34px;
    padding: 0 11px;
  }

  [data-page="league"] .rank-toolbar select {
    appearance: none;
    background: transparent;
    border: 0;
    color: #777ca8;
    font-size: 11px;
    font-weight: 800;
    outline: 0;
  }

  [data-page="league"] .ranking-layout {
    display: grid;
    gap: 16px;
    grid-template-columns: 160px minmax(0, 1fr);
    min-height: 640px;
  }

  [data-page="league"] .category-nav {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.72), rgba(249, 246, 255, 0.62));
    border-radius: 16px;
    box-shadow: 0 12px 32px rgba(84, 68, 145, 0.06);
    display: grid;
    grid-template-rows: repeat(5, minmax(0, 1fr));
    min-height: 640px;
    padding: 10px;
  }

  [data-page="league"] .category-nav button {
    align-items: center;
    background: transparent;
    border-radius: 12px;
    color: #6d75a3;
    cursor: pointer;
    display: flex;
    gap: 10px;
    min-height: 88px;
    padding: 12px 10px;
    text-align: left;
    width: 100%;
  }

  [data-page="league"] .category-nav button.active {
    background: linear-gradient(135deg, #f3edff, #fbf8ff);
    box-shadow: inset 0 0 0 1px rgba(127, 96, 225, 0.22), 0 8px 18px rgba(98, 73, 179, 0.08);
    color: #7659dc;
  }

  [data-page="league"] .category-nav b {
    display: block;
    font-size: 12px;
  }

  [data-page="league"] .category-nav small {
    color: #999cbc;
    display: block;
    font-size: 9px;
    margin-top: 4px;
  }

  [data-page="league"] .ranking-card {
    background: rgba(255, 255, 255, 0.73);
    border-radius: 17px;
    box-shadow: 0 12px 34px rgba(79, 64, 137, 0.07);
    min-height: 640px;
    min-width: 0;
    overflow: hidden;
  }

  [data-page="league"] .ranking-card.full {
    width: 100%;
  }

  [data-page="league"] .table-head,
  [data-page="league"] .league-ranking-row {
    align-items: center;
    display: grid;
    grid-template-columns: 64px minmax(210px, 1.7fr) minmax(130px, 1fr) 130px 72px;
  }

  [data-page="league"] .table-head {
    border-bottom: 1px solid rgba(110, 100, 166, 0.1);
    color: #8589b1;
    font-size: 11px;
    font-weight: 800;
    height: 48px;
    padding: 0 12px;
  }

  [data-page="league"] .table-head span:not(:nth-child(2)) {
    text-align: center;
  }

  [data-page="league"] .league-ranking-row {
    border-bottom: 1px solid rgba(110, 100, 166, 0.085);
    min-height: 84px;
    padding: 8px 12px;
    transition: 0.2s;
  }

  [data-page="league"] .league-ranking-row:hover {
    background: rgba(248, 245, 255, 0.65);
  }

  [data-page="league"] .league-ranking-row.current-user {
    background: linear-gradient(100deg, rgba(194, 166, 255, 0.72), rgba(242, 236, 255, 0.83));
    border: 1px solid rgba(133, 96, 231, 0.22);
    border-radius: 13px;
    box-shadow: 0 8px 20px rgba(110, 80, 199, 0.12);
    margin: 10px 8px 6px;
    min-height: 90px;
  }

  [data-page="league"] .rank-cell,
  [data-page="league"] .xp-cell,
  [data-page="league"] .trend-cell {
    display: flex;
    justify-content: center;
  }

  [data-page="league"] .rank-badge {
    background: #eff0f8;
    border-radius: 50%;
    color: #777da7;
    display: grid;
    font-size: 13px;
    font-weight: 850;
    height: 32px;
    place-items: center;
    width: 32px;
  }

  [data-page="league"] .rank-badge.gold { background: linear-gradient(145deg, #ffd684, #f1a53f); color: white; }
  [data-page="league"] .rank-badge.silver { background: linear-gradient(145deg, #dce5fb, #a0afd6); color: white; }
  [data-page="league"] .rank-badge.bronze { background: linear-gradient(145deg, #f1c6b1, #cf8d71); color: white; }
  [data-page="league"] .rank-badge.you-rank {
    background: linear-gradient(145deg, #b48eff, #8466eb);
    border-radius: 7px;
    color: white;
  }

  [data-page="league"] .player-cell {
    align-items: center;
    display: flex;
    gap: 12px;
    min-width: 0;
  }

  [data-page="league"] .league-avatar,
  [data-page="league"] .avatar-dot {
    border-radius: 50%;
    flex: 0 0 auto;
    height: 48px;
    object-fit: cover;
    width: 48px;
  }

  [data-page="league"] .avatar-dot {
    background: linear-gradient(135deg, #f1eaff, #c8b6ff);
    display: inline-block;
  }

  [data-page="league"] .player-copy {
    line-height: 1.15;
    min-width: 0;
  }

  [data-page="league"] .player-name {
    color: #2b3478;
    display: block;
    font-size: 14px;
    font-weight: 850;
    white-space: nowrap;
  }

  [data-page="league"] .player-name i {
    color: #dec04c;
    font-size: 9px;
    font-style: normal;
  }

  [data-page="league"] .level {
    color: #989bbb;
    font-size: 11px;
    font-weight: 700;
  }

  [data-page="league"] .motto {
    color: #9a9dbc;
    display: block;
    font-size: 12px;
    margin-top: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  [data-page="league"] .tier-cell {
    align-items: center;
    color: #7176a4;
    display: flex;
    font-size: 10px;
    font-weight: 800;
    gap: 7px;
  }

  [data-page="league"] .tier-emblem {
    clip-path: polygon(50% 0, 90% 20%, 100% 66%, 50% 100%, 0 66%, 10% 20%);
    display: grid;
    height: 20px;
    place-items: center;
    width: 20px;
  }

  [data-page="league"] .tier-emblem.king { background: #f0a11d; color: #f0a11d; }
  [data-page="league"] .tier-emblem.diamond,
  [data-page="league"] .tier-emblem.platinum { background: #7c68e9; color: #7c68e9; }

  [data-page="league"] .tier-emblem svg {
    height: 14px;
    width: 14px;
  }

  [data-page="league"] .tier-emblem path:first-child {
    display: none;
  }

  [data-page="league"] .tier-emblem .tier-star {
    fill: white;
  }

  [data-page="league"] .xp-cell {
    color: #263478;
    font-size: 13px;
    font-weight: 850;
  }

  [data-page="league"] .trend-cell {
    font-size: 12px;
    font-weight: 850;
  }

  [data-page="league"] .trend-cell.up { color: #58b77b; }
  [data-page="league"] .trend-cell.down { color: #fb6a70; }
  [data-page="league"] .trend-cell.flat { color: #9599bf; }

  [data-page="league"] .refresh-note {
    align-items: center;
    color: #999cbc;
    display: flex;
    font-size: 9px;
    gap: 5px;
    height: 34px;
    justify-content: center;
  }

  [data-page="league"] .league-mock-grid {
    display: grid;
    gap: 14px;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  [data-page="league"] .league-mock-card,
  [data-page="league"] .league-side-panel {
    background: rgba(255, 255, 255, 0.68);
    border-radius: 17px;
    box-shadow: 0 12px 34px rgba(80, 64, 139, 0.065), inset 0 1px 0 rgba(255, 255, 255, 0.8);
    padding: 15px 16px;
  }

  [data-page="league"] .league-mock-card.wide {
    grid-column: 1 / -1;
  }

  [data-page="league"] .league-mock-card > span,
  [data-page="league"] .league-mock-card p,
  [data-page="league"] .league-center-note {
    color: #8d91b6;
    font-size: 10px;
  }

  [data-page="league"] .league-mock-card > b {
    display: block;
    font-size: 22px;
    margin: 8px 0;
  }

  [data-page="league"] .league-mock-card.tier-current {
    text-align: center;
  }

  [data-page="league"] .league-mini-list {
    display: grid;
    gap: 8px;
    margin-top: 10px;
  }

  [data-page="league"] .league-mini-list div {
    align-items: center;
    display: grid;
    gap: 10px;
    grid-template-columns: 34px 1fr auto;
  }

  [data-page="league"] .league-mini-list small {
    color: #969abb;
    display: block;
    font-size: 9px;
  }

  [data-page="league"] .league-tier-board {
    display: grid;
    gap: 14px;
    grid-template-columns: 260px minmax(0, 1fr);
  }

  [data-page="league"] .league-tier-road {
    background: rgba(255, 255, 255, 0.73);
    border-radius: 17px;
    box-shadow: 0 12px 34px rgba(79, 64, 137, 0.07);
    display: grid;
    gap: 8px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding: 14px;
  }

  [data-page="league"] .league-tier-road div {
    align-items: center;
    background: rgba(248, 245, 255, 0.72);
    border-radius: 12px;
    display: grid;
    gap: 10px;
    grid-template-columns: 44px 1fr;
    padding: 10px;
  }

  [data-page="league"] .league-tier-road div.done {
    box-shadow: inset 0 0 0 1px rgba(124, 104, 233, 0.28);
  }

  [data-page="league"] .league-tier-road-shield,
  [data-page="league"] .league-tier-current-shield {
    display: block;
    height: 42px;
    object-fit: contain;
    width: 42px;
  }

  [data-page="league"] .league-tier-current-shield {
    height: 88px;
    margin: 10px auto 4px;
    width: 88px;
  }

  [data-page="league"] .league-tier-road small {
    color: #9296b8;
    display: block;
    font-size: 9px;
    margin-top: 3px;
  }

  [data-page="league"] .league-right-rail {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  [data-page="league"] .league-panel-title {
    align-items: center;
    display: flex;
    font-size: 12px;
    justify-content: space-between;
  }

  [data-page="league"] .league-panel-title button {
    background: transparent;
    color: #8a70e8;
    font-size: 9px;
    font-weight: 800;
  }

  [data-page="league"] .league-alliance-main {
    align-items: center;
    display: flex;
    gap: 9px;
    margin-top: 8px;
  }

  [data-page="league"] .league-shield-placeholder,
  [data-page="league"] .league-battle-badge,
  [data-page="league"] .award-dot {
    background: transparent;
    border-radius: 0;
    display: inline-block;
    object-fit: contain;
  }

  [data-page="league"] .league-shield-placeholder {
    height: 74px;
    width: 74px;
  }

  [data-page="league"] .league-vs {
    height: 36px;
    object-fit: contain;
    width: 36px;
  }

  [data-page="league"] .league-alliance-main b,
  [data-page="league"] .league-alliance-main span {
    display: block;
  }

  [data-page="league"] .league-alliance-main b {
    font-size: 12px;
  }

  [data-page="league"] .league-alliance-main em,
  [data-page="league"] .league-alliance-main span {
    color: #8f93b8;
    font-size: 9px;
    font-style: normal;
  }

  [data-page="league"] .league-alliance-stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 10px;
    text-align: center;
  }

  [data-page="league"] .league-alliance-stats div + div {
    border-left: 1px solid rgba(100, 91, 155, 0.12);
  }

  [data-page="league"] .league-alliance-stats span,
  [data-page="league"] .league-alliance-stats b {
    display: block;
    font-size: 10px;
  }

  [data-page="league"] .league-purple-progress {
    margin-top: 13px;
  }

  [data-page="league"] .league-center-note {
    display: block;
    margin-top: 8px;
    text-align: center;
  }

  [data-page="league"] .league-announcement {
    align-items: center;
    background: transparent;
    color: #7f83ac;
    display: grid;
    font-size: 9px;
    gap: 4px;
    grid-template-columns: 1fr auto;
    height: 31px;
    padding: 0;
    text-align: left;
    width: 100%;
  }

  [data-page="league"] .league-announcement span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  [data-page="league"] .league-battle-grid {
    align-items: center;
    display: grid;
    grid-template-columns: 1fr 30px 1fr;
    margin-top: 8px;
    text-align: center;
  }

  [data-page="league"] .league-battle-badge {
    height: 48px;
    margin: 0 auto 4px;
    width: 48px;
  }

  [data-page="league"] .league-battle-grid b,
  [data-page="league"] .league-battle-grid strong {
    display: block;
  }

  [data-page="league"] .league-battle-grid b {
    font-size: 9px;
    margin-top: 6px;
  }

  [data-page="league"] .league-battle-grid strong {
    color: #755bdd;
    font-size: 17px;
    margin-top: 4px;
  }

  [data-page="league"] .league-live {
    background: #eef9ef;
    border-radius: 999px;
    color: #55ae70;
    font-size: 8px;
    padding: 4px 8px;
  }

  [data-page="league"] .league-awards-grid {
    display: grid;
    gap: 4px;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 10px;
    text-align: center;
  }

  [data-page="league"] .award-dot {
    color: white;
    height: 58px;
    margin: 0 auto 6px;
    width: 58px;
  }

  [data-page="league"] .league-awards-grid b,
  [data-page="league"] .league-awards-grid small {
    display: block;
    font-size: 9px;
  }

  [data-page="league"] .tabs {
    background: rgba(255, 255, 255, 0.52);
    border-radius: 999px;
    gap: 6px;
    margin-bottom: 14px;
    padding: 6px;
    width: min(760px, 100%);
  }

  [data-page="league"] .tabs .pill {
    box-shadow: none;
    flex: 1;
    min-height: 42px;
  }

  [data-page="league"] .league-board-shell {
    align-items: stretch;
    display: grid;
    gap: 22px;
    grid-template-columns: 190px minmax(0, 1fr);
  }

  [data-page="league"] .league-filter-panel {
    background: rgba(255, 255, 255, 0.52);
    border: 1px solid rgba(255, 255, 255, 0.72);
    border-radius: 8px;
    box-shadow: 0 20px 60px rgba(124, 91, 229, 0.1);
    display: grid;
    gap: 10px;
    padding: 12px;
  }

  [data-page="league"] .league-filter-panel button {
    align-items: center;
    background: transparent;
    border-radius: 8px;
    color: #7b86b6;
    display: grid;
    gap: 10px;
    grid-template-columns: 28px 1fr;
    min-height: 58px;
    padding: 10px 12px;
    text-align: left;
  }

  [data-page="league"] .league-filter-panel button.active {
    background: rgba(139, 92, 246, 0.12);
    box-shadow: inset 0 0 0 1px rgba(139, 92, 246, 0.18);
    color: var(--purple);
  }

  [data-page="league"] .league-filter-panel span {
    display: grid;
    font-size: 19px;
    place-items: center;
  }

  [data-page="league"] .league-filter-panel b {
    display: block;
    font-size: 14px;
    line-height: 1.2;
  }

  [data-page="league"] .league-filter-panel small {
    color: inherit;
    display: block;
    font-size: 11px;
    font-weight: 700;
    margin-top: 4px;
    opacity: 0.68;
  }

  [data-page="league"] .league-table-card {
    padding: 18px 20px 16px;
  }

  [data-page="league"] .league-table-head,
  [data-page="league"] .league-leader-row {
    display: grid;
    grid-template-columns: 70px minmax(220px, 1.25fr) minmax(120px, 0.8fr) 130px 80px;
  }

  [data-page="league"] .league-table-head {
    align-items: center;
    color: #7c86b7;
    font-size: 13px;
    font-weight: 900;
    padding: 0 18px 12px;
  }

  [data-page="league"] .league-table {
    gap: 0;
  }

  [data-page="league"] .league-leader-row {
    align-items: center;
    background: transparent;
    border-radius: 0;
    border-top: 1px solid rgba(122, 99, 196, 0.11);
    color: var(--ink);
    gap: 0;
    min-height: 74px;
    padding: 0 18px;
  }

  [data-page="league"] .league-leader-row.you {
    background: linear-gradient(90deg, rgba(155, 105, 255, 0.24), rgba(238, 220, 255, 0.48));
    border: 1px solid rgba(139, 92, 246, 0.2);
    border-radius: 8px;
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.36);
    color: var(--ink);
    margin-top: 16px;
  }

  [data-page="league"] .league-rank {
    align-items: center;
    background: #f1eefb;
    border-radius: 999px;
    color: #7f86af;
    display: inline-flex;
    font-weight: 950;
    height: 34px;
    justify-content: center;
    width: 34px;
  }

  [data-page="league"] .league-rank.top-1 {
    background: linear-gradient(135deg, #ffd46f, #ffab48);
    color: white;
  }

  [data-page="league"] .league-rank.top-2 {
    background: linear-gradient(135deg, #d9ddff, #9fa9df);
    color: white;
  }

  [data-page="league"] .league-rank.top-3 {
    background: linear-gradient(135deg, #ffc79f, #df916c);
    color: white;
  }

  [data-page="league"] .league-player {
    align-items: center;
    display: flex;
    gap: 14px;
    min-width: 0;
  }

  [data-page="league"] .league-player b {
    color: #182362;
    display: block;
    font-size: 15px;
    line-height: 1.25;
    min-width: 0;
  }

  [data-page="league"] .league-player small {
    color: #7e86b8;
    display: block;
    font-size: 11px;
    font-weight: 800;
    margin-top: 4px;
  }

  [data-page="league"] .league-player .league-level {
    background: rgba(139, 92, 246, 0.1);
    border-radius: 999px;
    color: #8170c8;
    display: inline-block;
    margin: 0 0 0 6px;
    padding: 1px 6px;
  }

  [data-page="league"] .league-avatar {
    border: 3px solid rgba(255, 255, 255, 0.9);
    border-radius: 50%;
    box-shadow: 0 8px 18px rgba(36, 45, 102, 0.14);
    flex: 0 0 auto;
    height: 42px;
    width: 42px;
  }

  [data-page="league"] .league-avatar.peach { background: linear-gradient(135deg, #ffe1bd, #f4a1b7); }
  [data-page="league"] .league-avatar.blue { background: linear-gradient(135deg, #bfe5ff, #7792ff); }
  [data-page="league"] .league-avatar.pink { background: linear-gradient(135deg, #ffd5ec, #b997ff); }
  [data-page="league"] .league-avatar.rose { background: linear-gradient(135deg, #ffddd8, #d78a96); }
  [data-page="league"] .league-avatar.cream { background: linear-gradient(135deg, #fff8f0, #ffd58d); }
  [data-page="league"] .league-avatar.green { background: linear-gradient(135deg, #ccefd4, #4fa17c); }

  [data-page="league"] .league-tier {
    align-items: center;
    color: #37427d;
    display: flex;
    font-size: 14px;
    font-weight: 900;
    gap: 8px;
  }

  [data-page="league"] .tier-mark {
    border-radius: 8px;
    color: white;
    display: inline-grid;
    height: 24px;
    place-items: center;
    width: 24px;
  }

  [data-page="league"] .tier-mark.gold { background: linear-gradient(135deg, #ffcf57, #ff9f32); }
  [data-page="league"] .tier-mark.purple { background: linear-gradient(135deg, #aa83ff, #7657df); }
  [data-page="league"] .tier-mark.blue { background: linear-gradient(135deg, #7db7ff, #587ce0); }

  [data-page="league"] .league-xp {
    color: #172260;
    font-weight: 950;
  }

  [data-page="league"] .league-trend {
    font-weight: 950;
  }

  [data-page="league"] .league-trend.up { color: #59bd78; }
  [data-page="league"] .league-trend.down { color: #ff6a76; }
  [data-page="league"] .league-trend.flat { color: #9aa1c2; }

  [data-page="league"] .league-refresh-note {
    color: #8790bd;
    font-size: 13px;
    font-weight: 800;
    margin: 14px 0 0;
    text-align: center;
  }

  [data-page="league"] .league-ranking-panel {
    --league-ink: #28316f;
    --league-muted: #8588ae;
    --league-line: rgba(111, 103, 171, 0.12);
    --league-panel: rgba(255, 255, 255, 0.78);
    --league-shadow: 0 18px 50px rgba(90, 74, 158, 0.09);
    color: var(--league-ink);
    display: grid;
    gap: 6px;
    grid-template-rows: 44px minmax(0, 1fr) 28px;
    min-height: 0;
  }

  [data-page="league"] .league-ranking-topbar {
    align-items: center;
    display: grid;
    gap: 14px;
    grid-template-columns: minmax(0, 1fr) auto;
  }

  [data-page="league"] .league-top-tabs {
    align-items: center;
    display: flex;
    gap: 5px;
    min-width: 0;
  }

  [data-page="league"] .league-top-tab {
    background: rgba(255, 255, 255, 0.22);
    border-radius: 999px;
    color: #6e73a3;
    cursor: pointer;
    font-weight: 700;
    letter-spacing: 0.02em;
    padding: 9px 28px;
    transition: 0.2s ease;
    white-space: nowrap;
  }

  [data-page="league"] .league-top-tab:hover {
    background: rgba(255, 255, 255, 0.72);
    color: #5b52bb;
  }

  [data-page="league"] .league-top-tab.active {
    background: linear-gradient(135deg, #9d78f5, #705bea);
    box-shadow: 0 8px 22px rgba(113, 83, 226, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.38);
    color: white;
  }

  [data-page="league"] .league-region-select {
    align-items: center;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 999px;
    box-shadow: 0 6px 18px rgba(100, 85, 160, 0.06), inset 0 0 0 1px rgba(126, 104, 199, 0.06);
    color: #6f72a3;
    display: flex;
    font-size: 13px;
    font-weight: 700;
    gap: 8px;
    padding: 7px 14px;
    position: relative;
  }

  [data-page="league"] .league-region-select svg {
    fill: none;
    height: 17px;
    stroke: #7f82b6;
    stroke-width: 1.8;
    width: 17px;
  }

  [data-page="league"] .league-region-select select {
    appearance: none;
    background: transparent;
    border: 0;
    color: inherit;
    cursor: pointer;
    font-weight: 700;
    outline: 0;
    padding: 0 20px 0 0;
  }

  [data-page="league"] .league-select-arrow {
    border-bottom: 2px solid #8c8fbd;
    border-right: 2px solid #8c8fbd;
    height: 7px;
    pointer-events: none;
    position: absolute;
    right: 13px;
    transform: rotate(45deg) translateY(-2px);
    width: 7px;
  }

  [data-page="league"] .league-ranking-content {
    display: grid;
    gap: 18px;
    grid-template-columns: 170px minmax(0, 1fr);
    min-height: 0;
  }

  [data-page="league"] .league-sidebar {
    backdrop-filter: blur(16px);
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.48), rgba(250, 248, 255, 0.72));
    border: 1px solid rgba(255, 255, 255, 0.58);
    border-radius: 24px;
    box-shadow: var(--league-shadow);
    display: grid;
    grid-template-rows: repeat(5, minmax(0, 1fr));
    padding: 8px 10px;
  }

  [data-page="league"] .league-side-item {
    align-items: center;
    background: transparent;
    border-radius: 14px;
    color: #62699a;
    cursor: pointer;
    display: grid;
    gap: 8px;
    grid-template-columns: 28px 1fr;
    min-height: 0;
    padding: 12px 10px;
    text-align: left;
    transition: 0.2s ease;
    width: 100%;
  }

  [data-page="league"] .league-side-item:hover {
    background: rgba(246, 242, 255, 0.82);
    color: #6257cb;
  }

  [data-page="league"] .league-side-item.active {
    background: linear-gradient(135deg, rgba(247, 243, 255, 0.98), rgba(241, 235, 255, 0.83));
    box-shadow: inset 0 0 0 1px rgba(139, 111, 238, 0.28), 0 7px 18px rgba(126, 103, 201, 0.1);
    color: #6357d6;
  }

  [data-page="league"] .league-side-icon {
    display: grid;
    font-size: 20px;
    height: 24px;
    place-items: center;
    width: 24px;
  }

  [data-page="league"] .league-side-title {
    display: block;
    font-size: 14px;
    font-weight: 800;
    letter-spacing: 0.02em;
  }

  [data-page="league"] .league-side-subtitle {
    color: #9b9dbd;
    display: block;
    font-size: 10.5px;
    font-weight: 600;
    margin-top: 3px;
  }

  [data-page="league"] .league-board {
    backdrop-filter: blur(18px);
    background: var(--league-panel);
    border: 1px solid rgba(255, 255, 255, 0.72);
    border-radius: 26px;
    box-shadow: var(--league-shadow);
    min-width: 0;
    overflow: hidden;
    padding: 0 14px 8px;
  }

  [data-page="league"] .league-ranking-head,
  [data-page="league"] .league-ranking-row {
    align-items: center;
    display: grid;
    grid-template-columns: 64px minmax(210px, 1.7fr) minmax(140px, 1.15fr) minmax(120px, 0.9fr) 70px;
  }

  [data-page="league"] .league-ranking-head {
    border-bottom: 1px solid var(--league-line);
    color: #787ba9;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.03em;
    min-height: 42px;
  }

  [data-page="league"] .league-ranking-head > div:not(:nth-child(2)) {
    text-align: center;
  }

  [data-page="league"] .league-ranking-head > div:nth-child(2) {
    padding-left: 8px;
  }

  [data-page="league"] .league-ranking-row {
    border-bottom: 1px solid var(--league-line);
    min-height: 54px;
    position: relative;
    transition: transform 0.18s ease, background 0.18s ease;
  }

  [data-page="league"] .league-ranking-row:not(.current-user):hover {
    background: rgba(250, 248, 255, 0.62);
    border-radius: 14px;
    transform: translateY(-1px);
  }

  [data-page="league"] .league-ranking-row.current-user {
    background: linear-gradient(100deg, rgba(192, 164, 255, 0.72), rgba(241, 235, 255, 0.9) 58%, rgba(248, 243, 255, 0.86));
    border: 1px solid rgba(146, 113, 236, 0.21);
    border-radius: 17px;
    box-shadow: 0 9px 24px rgba(124, 91, 210, 0.14), inset 0 1px 0 rgba(255, 255, 255, 0.62);
    margin: 8px 0 0;
    min-height: 64px;
  }

  [data-page="league"] .rank-cell,
  [data-page="league"] .tier-cell,
  [data-page="league"] .xp-cell,
  [data-page="league"] .trend-cell {
    align-items: center;
    display: flex;
    justify-content: center;
    min-width: 0;
  }

  [data-page="league"] .rank-badge {
    background: linear-gradient(145deg, #f0f1fb, #e4e6f4);
    border-radius: 50%;
    box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.8), 0 2px 7px rgba(71, 70, 118, 0.08);
    color: #7e82b1;
    display: grid;
    font-size: 13px;
    font-weight: 800;
    height: 28px;
    place-items: center;
    width: 28px;
  }

  [data-page="league"] .rank-badge.gold {
    background: linear-gradient(145deg, #ffd386, #f6a943);
    box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.7), 0 4px 11px rgba(240, 167, 65, 0.26);
    color: white;
  }

  [data-page="league"] .rank-badge.silver {
    background: linear-gradient(145deg, #dfe6fb, #9aa9d0);
    color: white;
  }

  [data-page="league"] .rank-badge.bronze {
    background: linear-gradient(145deg, #f5c7ae, #cf8b6f);
    color: white;
  }

  [data-page="league"] .rank-badge.you-rank {
    background: linear-gradient(145deg, #b48cff, #8666ec);
    border-radius: 8px;
    box-shadow: 0 5px 13px rgba(107, 78, 218, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.4);
    color: white;
  }

  [data-page="league"] .player-cell {
    align-items: center;
    display: flex;
    gap: 10px;
    min-width: 0;
    padding: 4px 8px;
  }

  [data-page="league"] .league-avatar {
    border-radius: 50%;
    flex: 0 0 auto;
    height: 40px;
    object-fit: cover;
    width: 40px;
  }

  [data-page="league"] .player-copy {
    line-height: 1.15;
    min-width: 0;
  }

  [data-page="league"] .player-name {
    align-items: center;
    color: #2b3478;
    display: flex;
    font-size: 13px;
    font-weight: 850;
    gap: 6px;
    white-space: nowrap;
  }

  [data-page="league"] .level {
    color: #8c8fb1;
    font-size: 10px;
    font-weight: 700;
  }

  [data-page="league"] .mini-crown {
    color: #e6b944;
    font-size: 7px;
    height: 7px;
    line-height: 1;
    width: 7px;
  }

  [data-page="league"] .motto {
    color: #9a9cbc;
    font-size: 10.5px;
    font-weight: 600;
    margin-top: 5px;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  [data-page="league"] .tier-cell {
    color: #6f73a4;
    font-size: 12px;
    font-weight: 800;
    gap: 8px;
    white-space: nowrap;
  }

  [data-page="league"] .tier-emblem {
    display: grid;
    filter: drop-shadow(0 2px 3px rgba(93, 78, 158, 0.16));
    height: 24px;
    place-items: center;
    width: 24px;
  }

  [data-page="league"] .tier-emblem svg {
    fill: currentColor;
    height: 23px;
    width: 23px;
  }

  [data-page="league"] .tier-emblem .tier-star {
    fill: white;
    opacity: 0.96;
  }

  [data-page="league"] .tier-emblem.king { color: #f4a116; }
  [data-page="league"] .tier-emblem.diamond { color: #7e6bf0; }
  [data-page="league"] .tier-emblem.platinum { color: #688bd8; }

  [data-page="league"] .xp-cell {
    color: #263478;
    font-size: 12px;
    font-weight: 850;
    white-space: nowrap;
  }

  [data-page="league"] .trend-cell {
    font-size: 12px;
    font-weight: 850;
  }

  [data-page="league"] .trend-cell.up { color: #56b77d; }
  [data-page="league"] .trend-cell.down { color: #ff7275; }
  [data-page="league"] .trend-cell.flat { color: #9ba0c7; }

  [data-page="league"] .league-footer {
    align-items: center;
    color: #9a9dbb;
    display: flex;
    font-size: 11px;
    font-weight: 700;
    gap: 5px;
    justify-content: center;
    letter-spacing: 0.04em;
  }

  [data-page="league"] .league-refresh-button {
    background: transparent;
    border-radius: 50%;
    color: #8b8fb9;
    cursor: pointer;
    display: grid;
    height: 22px;
    place-items: center;
    width: 22px;
  }

  [data-page="league"] .league-refresh-button:hover {
    background: rgba(119, 94, 219, 0.08);
    color: #6d5ed7;
  }

  [data-page="league"] .category-nav {
    display: grid;
    grid-template-rows: repeat(5, minmax(0, 1fr));
  }

  [data-page="league"] .category-nav button {
    min-height: 88px;
  }

  [data-page="league"] .league-ranking-row {
    grid-template-columns: 64px minmax(210px, 1.7fr) minmax(130px, 1fr) 130px 72px;
    min-height: 84px;
  }

  [data-page="league"] .league-avatar,
  [data-page="league"] .avatar-dot {
    height: 48px;
    object-fit: cover;
    width: 48px;
  }

  [data-page="league"] .tier-emblem {
    filter: none;
    height: 24px;
    width: 24px;
  }

  [data-page="league"] .tier-emblem svg {
    height: 16px;
    width: 16px;
  }

  [data-page="rewards"] .rewards-dashboard {
    display: grid;
    gap: 20px;
    grid-template-columns: minmax(0, 1fr) 360px;
    min-height: 980px;
  }

  [data-page="rewards"] .rewards-main,
  [data-page="rewards"] .rewards-right-rail {
    min-width: 0;
  }

  [data-page="rewards"] .rewards-main {
    display: grid;
    gap: 18px;
  }

  [data-page="rewards"] .rewards-points-hero,
  [data-page="rewards"] .reward-market,
  [data-page="rewards"] .growth-panel,
  [data-page="rewards"] .rewards-side-panel {
    background: rgba(255, 255, 255, 0.76);
    border: 1px solid rgba(255, 255, 255, 0.82);
    border-radius: 22px;
    box-shadow: 0 18px 46px rgba(95, 85, 150, 0.11);
  }

  [data-page="rewards"] .rewards-points-hero {
    align-items: center;
    display: grid;
    gap: 16px;
    grid-template-columns: minmax(210px, 0.82fr) minmax(180px, 240px) minmax(240px, 0.86fr);
    min-height: 280px;
    overflow: hidden;
    padding: 24px 28px;
    position: relative;
  }

  [data-page="rewards"] .rewards-points-hero::before {
    background:
      radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.9), transparent 25%),
      linear-gradient(135deg, rgba(255, 229, 246, 0.92), rgba(229, 222, 255, 0.86) 56%, rgba(224, 245, 255, 0.9));
    content: "";
    inset: 0;
    position: absolute;
    z-index: 0;
  }

  [data-page="rewards"] .rewards-points-hero > * {
    position: relative;
    z-index: 1;
  }

  [data-page="rewards"] .rewards-points-copy {
    position: relative;
    z-index: 1;
  }

  [data-page="rewards"] .rewards-points-copy > span {
    color: #5960a8;
    display: block;
    font-size: 14px;
    font-weight: 800;
    margin-bottom: 8px;
  }

  [data-page="rewards"] .rewards-points-copy h2 {
    align-items: baseline;
    color: #172873;
    display: flex;
    gap: 8px;
    font-size: 44px;
    letter-spacing: 0;
    line-height: 1;
    margin: 0;
  }

  [data-page="rewards"] .rewards-points-copy h2 small {
    color: #7764d8;
    font-size: 18px;
  }

  [data-page="rewards"] .rewards-points-copy p {
    color: #767aa8;
    font-size: 13px;
    font-weight: 700;
    margin: 12px 0 14px;
  }

  [data-page="rewards"] .rewards-level-progress {
    background: rgba(255, 255, 255, 0.74);
    border-radius: 999px;
    height: 10px;
    overflow: hidden;
    width: min(100%, 260px);
  }

  [data-page="rewards"] .rewards-level-progress i {
    background: linear-gradient(90deg, #8d6cf6, #ff8fc8);
    border-radius: inherit;
    display: block;
    height: 100%;
  }

  [data-page="rewards"] .rewards-hero-character {
    align-self: stretch;
    height: 100%;
    justify-self: center;
    max-height: 250px;
    max-width: 100%;
    object-fit: contain;
    position: relative;
    transform: none;
    width: 100%;
    z-index: 1;
  }

  [data-page="rewards"] .rewards-earn-card {
    backdrop-filter: blur(14px);
    background: rgba(255, 255, 255, 0.56);
    border: 1px solid rgba(255, 255, 255, 0.78);
    border-radius: 18px;
    padding: 18px;
  }

  [data-page="rewards"] .rewards-earn-card h3,
  [data-page="rewards"] .reward-market h3 {
    color: #172873;
    font-size: 15px;
    margin: 0 0 12px;
  }

  [data-page="rewards"] .rewards-earn-card ul {
    display: grid;
    gap: 10px;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  [data-page="rewards"] .rewards-earn-card li {
    align-items: center;
    color: #69709f;
    display: grid;
    font-size: 12px;
    font-weight: 700;
    gap: 8px;
    grid-template-columns: 26px 1fr auto;
  }

  [data-page="rewards"] .earn-icon {
    border-radius: 50%;
    display: block;
    height: 28px;
    object-fit: contain;
    width: 28px;
  }

  [data-page="rewards"] .reward-market {
    min-height: 420px;
    padding: 18px;
  }

  [data-page="rewards"] .market-toolbar {
    align-items: center;
    display: flex;
    gap: 14px;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  [data-page="rewards"] .category-tabs {
    background: rgba(245, 240, 255, 0.82);
    border-radius: 999px;
    display: flex;
    gap: 6px;
    overflow-x: auto;
    padding: 5px;
  }

  [data-page="rewards"] .category-tabs button,
  [data-page="rewards"] .sort-select {
    border: 0;
    color: #777ca8;
    font-size: 12px;
    font-weight: 800;
    white-space: nowrap;
  }

  [data-page="rewards"] .category-tabs button {
    background: transparent;
    border-radius: 999px;
    cursor: pointer;
    padding: 9px 14px;
  }

  [data-page="rewards"] .category-tabs button.active {
    background: linear-gradient(135deg, #9a77f5, #7d67e8);
    color: #fff;
    box-shadow: 0 10px 22px rgba(126, 103, 232, 0.24);
  }

  [data-page="rewards"] .sort-select {
    align-items: center;
    background: #fff;
    border: 1px solid rgba(139, 126, 218, 0.16);
    border-radius: 999px;
    display: inline-flex;
    gap: 4px;
    padding: 0 12px;
  }

  [data-page="rewards"] .sort-select select {
    appearance: none;
    background: transparent;
    border: 0;
    color: inherit;
    font: inherit;
    outline: 0;
    padding: 9px 2px;
  }

  [data-page="rewards"] .reward-grid {
    display: grid;
    gap: 14px;
    grid-template-columns: repeat(5, minmax(120px, 1fr));
  }

  [data-page="rewards"] .reward-card {
    background: rgba(255, 255, 255, 0.82);
    border: 1px solid rgba(226, 219, 255, 0.9);
    border-radius: 18px;
    box-shadow: 0 12px 28px rgba(91, 82, 138, 0.08);
    cursor: pointer;
    display: grid;
    gap: 10px;
    min-height: 240px;
    padding: 12px;
    text-align: left;
  }

  [data-page="rewards"] .reward-card.owned {
    border-color: rgba(110, 196, 150, 0.55);
    box-shadow: 0 12px 28px rgba(70, 160, 120, 0.1);
  }

  [data-page="rewards"] .reward-card.can-buy {
    border-color: rgba(151, 123, 245, 0.5);
  }

  [data-page="rewards"] .reward-card.locked {
    opacity: 0.78;
  }

  [data-page="rewards"] .reward-image-wrap {
    align-items: center;
    background: linear-gradient(145deg, #f7f2ff, #fff7fb);
    border-radius: 15px;
    display: flex;
    height: 132px;
    justify-content: center;
    overflow: hidden;
    position: relative;
  }

  [data-page="rewards"] .reward-image-wrap img {
    height: 108px;
    object-fit: contain;
    width: 108px;
  }

  [data-page="rewards"] .lock-icon {
    background: rgba(255, 255, 255, 0.88);
    border-radius: 8px;
    display: block;
    height: 26px;
    object-fit: contain;
    padding: 3px;
    position: absolute;
    right: 8px;
    top: 8px;
    width: 26px;
  }

  [data-page="rewards"] .reward-copy {
    display: grid;
    gap: 4px;
  }

  [data-page="rewards"] .reward-copy strong {
    color: #223077;
    font-size: 13px;
  }

  [data-page="rewards"] .reward-copy span {
    color: #8b91bc;
    font-size: 11px;
    font-weight: 700;
  }

  [data-page="rewards"] .reward-copy b {
    color: #7d66e8;
    font-size: 13px;
  }

  [data-page="rewards"] .growth-panel {
    align-items: center;
    display: grid;
    gap: 12px;
    grid-template-columns: minmax(155px, 0.8fr) 36px minmax(0, 1fr) 36px;
    padding: 18px;
  }

  [data-page="rewards"] .growth-heading {
    display: grid;
    gap: 5px;
  }

  [data-page="rewards"] .growth-heading strong,
  [data-page="rewards"] .rewards-panel-heading strong {
    color: #172873;
    font-size: 15px;
  }

  [data-page="rewards"] .growth-heading span,
  [data-page="rewards"] .rewards-panel-heading span {
    color: #8d92bc;
    font-size: 11px;
    font-weight: 700;
  }

  [data-page="rewards"] .round-arrow {
    background: #fff;
    border: 1px solid rgba(139, 126, 218, 0.14);
    border-radius: 50%;
    color: #7f6be9;
    cursor: pointer;
    font-size: 24px;
    height: 36px;
    width: 36px;
  }

  [data-page="rewards"] .growth-track {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(5, minmax(88px, 1fr));
  }

  [data-page="rewards"] .growth-reward {
    background: rgba(255, 255, 255, 0.78);
    border: 1px solid rgba(226, 219, 255, 0.82);
    border-radius: 16px;
    display: grid;
    justify-items: center;
    min-height: 150px;
    padding: 14px 8px;
  }

  [data-page="rewards"] .growth-reward.active {
    background: linear-gradient(180deg, rgba(247, 242, 255, 0.98), rgba(255, 255, 255, 0.86));
    border-color: rgba(151, 123, 245, 0.45);
  }

  [data-page="rewards"] .growth-reward img {
    height: 46px;
    object-fit: contain;
    width: 46px;
  }

  [data-page="rewards"] .growth-reward strong {
    color: #293579;
    font-size: 12px;
    margin-top: 8px;
  }

  [data-page="rewards"] .growth-reward span {
    color: #8a90bb;
    font-size: 10px;
    font-weight: 700;
  }

  [data-page="rewards"] .rewards-right-rail {
    display: grid;
    gap: 16px;
  }

  [data-page="rewards"] .rewards-side-panel {
    padding: 18px;
  }

  [data-page="rewards"] .rewards-panel-heading {
    align-items: start;
    display: flex;
    justify-content: space-between;
    margin-bottom: 14px;
  }

  [data-page="rewards"] .rewards-panel-heading button,
  [data-page="rewards"] .records-link {
    background: transparent;
    border: 0;
    color: #8a6ff0;
    cursor: pointer;
    font-size: 11px;
    font-weight: 800;
  }

  [data-page="rewards"] .rewards-panel-heading b {
    background: #f1ecff;
    border-radius: 999px;
    color: #7c67e4;
    font-size: 11px;
    padding: 6px 9px;
  }

  [data-page="rewards"] .overview-content {
    align-items: center;
    display: grid;
    gap: 14px;
    grid-template-columns: 126px 1fr;
  }

  [data-page="rewards"] .points-donut {
    align-items: center;
    background: conic-gradient(#8d6cf6 0 67%, #73a4f6 67% 85%, #f5b35a 85% 95%, #e6e8f4 95% 100%);
    border-radius: 50%;
    display: flex;
    height: 126px;
    justify-content: center;
    width: 126px;
  }

  [data-page="rewards"] .points-donut div {
    align-items: center;
    background: #fff;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    height: 82px;
    justify-content: center;
    width: 82px;
  }

  [data-page="rewards"] .points-donut strong {
    color: #202e76;
    font-size: 16px;
  }

  [data-page="rewards"] .points-donut span {
    color: #9297bd;
    font-size: 10px;
    font-weight: 800;
  }

  [data-page="rewards"] .legend {
    display: grid;
    gap: 9px;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  [data-page="rewards"] .legend li {
    align-items: center;
    color: #757aa7;
    display: grid;
    font-size: 11px;
    font-weight: 800;
    gap: 7px;
    grid-template-columns: 9px 1fr auto;
  }

  [data-page="rewards"] .legend i {
    border-radius: 50%;
    height: 9px;
    width: 9px;
  }

  [data-page="rewards"] .legend .purple { background: #8d6cf6; }
  [data-page="rewards"] .legend .blue { background: #73a4f6; }
  [data-page="rewards"] .legend .orange { background: #f5b35a; }
  [data-page="rewards"] .legend .gray { background: #ccd0df; }

  [data-page="rewards"] .checkin-week {
    display: grid;
    gap: 7px;
    grid-template-columns: repeat(7, minmax(0, 1fr));
  }

  [data-page="rewards"] .checkin-week div,
  [data-page="rewards"] .checkin-week button {
    align-items: center;
    background: #f8f5ff;
    border: 0;
    border-radius: 14px;
    color: #7e83ae;
    display: flex;
    flex-direction: column;
    font-size: 10px;
    font-weight: 800;
    gap: 5px;
    min-height: 64px;
    justify-content: center;
  }

  [data-page="rewards"] .check-circle,
  [data-page="rewards"] .gift-circle {
    border-radius: 50%;
    display: block;
    height: 30px;
    object-fit: contain;
    width: 30px;
  }

  [data-page="rewards"] .check-circle.pending {
    align-items: center;
    background: rgba(232, 228, 255, 0.9);
    color: #9aa0c4;
    display: flex;
    font-size: 16px;
    justify-content: center;
  }

  [data-page="rewards"] .checkin-panel p {
    color: #858ab5;
    font-size: 12px;
    font-weight: 700;
    margin: 12px 0 0;
  }

  [data-page="rewards"] .checkin-panel p b {
    color: #7d66e8;
  }

  [data-page="rewards"] .event-banner {
    background: transparent;
    border: 0;
    cursor: pointer;
    display: block;
    padding: 0;
    width: 100%;
  }

  [data-page="rewards"] .event-banner img {
    border-radius: 16px;
    display: block;
    width: 100%;
  }

  [data-page="rewards"] .record-list {
    display: grid;
    gap: 10px;
  }

  [data-page="rewards"] .record-item {
    align-items: center;
    background: rgba(248, 245, 255, 0.86);
    border-radius: 15px;
    display: grid;
    gap: 10px;
    grid-template-columns: 42px 1fr auto;
    padding: 10px;
  }

  [data-page="rewards"] .record-item img {
    background: #fff;
    border-radius: 12px;
    height: 42px;
    object-fit: contain;
    padding: 5px;
    width: 42px;
  }

  [data-page="rewards"] .record-item div {
    display: grid;
    gap: 3px;
  }

  [data-page="rewards"] .record-item strong {
    color: #263277;
    font-size: 12px;
  }

  [data-page="rewards"] .record-item span,
  [data-page="rewards"] .record-item small {
    color: #9297bd;
    font-size: 10px;
    font-weight: 700;
  }

  [data-page="rewards"] .record-item b {
    color: #7d66e8;
    font-size: 12px;
    text-align: right;
  }

  [data-page="rewards"] .records-link {
    margin-top: 12px;
    width: 100%;
  }

  @media (max-width: 1280px) {
    [data-page="rewards"] .rewards-dashboard {
      grid-template-columns: 1fr;
    }

    [data-page="rewards"] .rewards-right-rail {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 980px) {
    [data-page="rewards"] .rewards-points-hero {
      grid-template-columns: 1fr;
    }

    [data-page="rewards"] .rewards-hero-character {
      height: 150px;
      max-height: 150px;
    }

    [data-page="rewards"] .reward-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    [data-page="rewards"] .growth-panel,
    [data-page="rewards"] .overview-content,
    [data-page="rewards"] .rewards-right-rail {
      grid-template-columns: 1fr;
    }

    [data-page="rewards"] .growth-track {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
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

  .prototype-toast-anchored,
  .prototype-toast-shop {
    position: absolute;
    left: 50%;
    top: 50%;
    right: auto;
    bottom: auto;
    transform: translate(-50%, -50%);
    z-index: 50;
    max-width: min(320px, calc(100% - 32px));
    text-align: center;
    pointer-events: none;
  }

  [data-page="rewards"] .reward-market {
    position: relative;
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
    align-self: stretch;
    grid-template-rows: auto auto minmax(0, 1fr);
    min-width: 0;
    overflow: hidden;
  }
  [data-page="scan"] .scan-history-card {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    height: 332px;
    min-height: 332px;
    max-height: 332px;
    overflow: hidden;
  }
  [data-page="scan"] .scan-history-card > h3 {
    flex: 0 0 auto;
    margin-bottom: 0;
  }
  [data-page="scan"] .feature,
  [data-page="scan"] .scan-wrap > .grid .card,
  [data-page="scan"] .scan-wrap small,
  [data-page="scan"] .scan-wrap p,
  [data-page="scan"] .scan-wrap b {
    overflow-wrap: anywhere;
  }
  [data-page="scan"] .scan-history-card .scan-record-text,
  [data-page="scan"] .scan-history-card .scan-record-title,
  [data-page="scan"] .scan-history-card .scan-record-meta {
    overflow-wrap: normal;
    word-break: normal;
  }
  [data-page="scan"] .scan-wrap > .grid .three {
    gap: 10px;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  [data-page="scan"] .scan-stat-grid {
    align-items: start;
  }
  [data-page="scan"] .scan-stat-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
    min-width: 0;
    width: 100%;
    text-align: center;
  }
  [data-page="scan"] .scan-stat-value {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 42px;
  }
  [data-page="scan"] .scan-stat-grid .big-number {
    display: block;
    width: 100%;
    font-size: clamp(22px, 2.2vw, 40px);
    line-height: 1;
    max-width: 100%;
    font-variant-numeric: tabular-nums;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  [data-page="scan"] .scan-stat-grid .big-number[data-digits="3"] {
    font-size: clamp(20px, 1.9vw, 34px);
  }
  [data-page="scan"] .scan-stat-grid .big-number[data-digits="4"] {
    font-size: clamp(18px, 1.6vw, 28px);
  }
  [data-page="scan"] .scan-stat-item small {
    color: var(--ink);
    display: block;
    width: 100%;
    font-size: 14px;
    font-weight: 700;
    line-height: 1.2;
    text-align: center;
  }
  [data-page="scan"] .scan-source-stat {
    margin-top: 0;
    position: relative;
  }
  [data-page="scan"] .scan-source-value {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    height: 34px;
    max-width: min(100%, 112px);
    min-width: 0;
    margin: 0 auto;
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
    align-items: center;
    box-sizing: border-box;
    gap: 10px;
    grid-template-columns: 32px minmax(0, 1fr) auto;
    height: 68px;
    min-height: 68px;
    max-height: 68px;
    overflow: hidden;
    padding: 10px 12px;
  }
  [data-page="scan"] .scan-history-card .scan-record-text {
    display: grid;
    gap: 2px;
    min-width: 0;
    overflow: hidden;
  }
  [data-page="scan"] .scan-history-card .scan-record-title,
  [data-page="scan"] .scan-history-card .scan-record-meta {
    display: block;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  [data-page="scan"] .scan-history-card .scan-record-title {
    font-size: 14px;
    line-height: 1.25;
  }
  [data-page="scan"] .scan-history-card .scan-record-meta {
    font-size: 12px;
    line-height: 1.25;
  }
  [data-page="scan"] .scan-history-card .status {
    align-self: center;
    max-width: 118px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  [data-page="scan"] .scan-record-list {
    display: grid;
    flex: 1 1 auto;
    gap: 10px;
    grid-auto-rows: 68px;
    min-height: 224px;
    overflow: hidden;
  }
  [data-page="scan"] .scan-record-pager {
    align-items: center;
    display: flex;
    flex: 0 0 auto;
    gap: 10px;
    justify-content: space-between;
    margin-top: auto;
    padding-top: 12px;
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
    padding: 18px 16px 16px;
    text-align: left;
    overflow: visible;
  }
  .scan-result-source {
    margin-bottom: 10px;
  }
  .analysis-source-badge {
    display: inline-block;
    max-width: 100%;
    height: auto;
    min-height: 28px;
    min-width: 0;
    padding: 6px 12px;
    border-radius: 999px;
    background: rgba(139, 92, 246, 0.12);
    color: #65709e;
    font-size: 12px;
    font-weight: 700;
    line-height: 1.35;
    white-space: normal;
    overflow-wrap: anywhere;
    word-break: break-word;
  }
  .analysis-source-detail {
    color: #ff7a2f;
    font-size: 12px;
    font-weight: 700;
    line-height: 1.4;
    margin: 0 0 10px;
    overflow-wrap: anywhere;
  }
  .scan-result-title {
    color: #6d4bd6;
    font-size: clamp(24px, 5.2vw, 34px);
    font-weight: 900;
    letter-spacing: 0.02em;
    line-height: 1.2;
    margin: 0 0 10px;
  }
  .scan-result-summary {
    color: #3d4670;
    font-size: 14px;
    line-height: 1.55;
    margin: 0 0 14px;
  }
  .scan-result-card > p {
    margin: 10px 0;
    line-height: 1.5;
  }
  .scan-result-card > small {
    color: #8a93b8;
    display: block;
    margin-top: 12px;
  }
  .analysis-metrics {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    margin: 0 0 4px;
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
    margin-top: 12px;
  }

  [data-page="buddy"] .metric-row {
    grid-template-columns: 42px 72px minmax(120px, 1fr) 72px;
  }
  [data-page="buddy"] .skin {
    position: relative;
  }
  [data-page="buddy"] .buddy-lock {
    position: absolute;
    right: 12px;
    bottom: 12px;
  }
  [data-page="buddy"] .buddy-action {
    transition: transform .18s ease, box-shadow .18s ease;
  }
  [data-page="buddy"] .buddy-action:hover {
    box-shadow: 0 14px 34px rgba(99, 75, 168, .12);
    transform: translateY(-2px);
  }
  [data-page="buddy"] .buddy-action.dress { background: rgba(139, 92, 246, .10); }
  [data-page="buddy"] .buddy-action.feed { background: rgba(255, 122, 47, .10); }
  [data-page="buddy"] .buddy-action.diary { background: rgba(99, 102, 241, .10); }
  [data-page="buddy"] .buddy-action.growth { background: rgba(101, 201, 130, .12); }
  .buddy-extra-grid {
    display: grid;
    gap: 20px;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.2fr);
    margin-top: 20px;
  }
  .buddy-summary-stats,
  .buddy-cheers {
    display: grid;
    gap: 12px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  .buddy-summary-stats span,
  .buddy-cheer {
    border-radius: 18px;
    background: rgba(255,255,255,.58);
    padding: 14px;
  }
  .buddy-summary-stats b,
  .buddy-summary-stats small {
    display: block;
  }
  .buddy-cheers {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .buddy-cheer .avatar {
    align-items: center;
    background: linear-gradient(135deg, #ffe4ee, #e8ddff);
    border-radius: 999px;
    display: inline-flex;
    font-weight: 900;
    height: 36px;
    justify-content: center;
    margin-right: 8px;
    width: 36px;
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
    .analysis-metrics {
      grid-template-columns: 1fr;
    }
    .scan-result-title {
      font-size: clamp(22px, 7vw, 30px);
    }
    #timeline .journey-record,
    #timeline .journey-empty {
      grid-template-columns: 1fr;
      justify-items: start;
    }
  }

  .ai-chat-widget {
    position: fixed;
    right: 28px;
    bottom: 28px;
    z-index: 40;
    font-family: inherit;
  }
  .ai-chat-bubble {
    display: flex;
    align-items: center;
    gap: 8px;
    border: 0;
    border-radius: 999px;
    padding: 14px 18px;
    background: linear-gradient(135deg, #8b5cf6, #65c982);
    color: #fff;
    box-shadow: 0 20px 55px rgba(99, 75, 168, 0.32);
    cursor: grab;
    font-weight: 900;
  }
  .ai-chat-bubble:active { cursor: grabbing; }
  .ai-chat-panel {
    display: none;
    width: var(--ai-chat-w, min(360px, calc(100vw - 24px)));
    height: var(--ai-chat-h, min(520px, calc(100dvh - 24px)));
    max-width: calc(100vw - 24px);
    max-height: calc(100dvh - 24px);
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.75);
    border-radius: 28px;
    background: rgba(255, 250, 255, 0.96);
    box-shadow: 0 26px 80px rgba(19, 32, 95, 0.22);
  }
  .ai-chat-widget.open .ai-chat-bubble { display: none; }
  .ai-chat-widget.open .ai-chat-panel {
    display: grid;
    grid-template-rows: auto minmax(0, 1fr) auto;
  }
  .ai-chat-header {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 2px 12px;
    padding: 16px 18px;
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.18), rgba(101, 201, 130, 0.18));
  }
  .ai-chat-header small { color: #65709e; }
  .ai-chat-header button {
    grid-row: 1 / span 2;
    grid-column: 2;
    border: 0;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    background: #fff;
    color: #13205f;
    cursor: pointer;
  }
  .ai-chat-messages {
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow: auto;
    min-height: 0;
    padding: 16px;
  }
  .ai-chat-msg {
    max-width: 82%;
    border-radius: 18px;
    padding: 10px 12px;
    line-height: 1.5;
    white-space: pre-wrap;
  }
  .ai-chat-msg.assistant {
    align-self: flex-start;
    background: #fff;
    color: #13205f;
  }
  .ai-chat-msg.user {
    align-self: flex-end;
    background: #8b5cf6;
    color: #fff;
  }
  .ai-chat-form {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 10px;
    padding: 14px;
    border-top: 1px solid rgba(101, 112, 158, 0.14);
  }
  .ai-chat-form input {
    min-width: 0;
    border: 1px solid rgba(101, 112, 158, 0.2);
    border-radius: 999px;
    padding: 12px 14px;
    outline: none;
  }
  .ai-chat-form button {
    border: 0;
    border-radius: 999px;
    padding: 0 16px;
    background: #65c982;
    color: #fff;
    font-weight: 900;
    cursor: pointer;
  }
  @media (max-width: 720px) {
    .ai-chat-widget {
      right: 16px;
      bottom: 16px;
    }
  }
  .diary-summary { margin: 16px 0; text-align: center; }
  .calendar .diary-record-day { position: relative; box-shadow: inset 0 0 0 2px rgba(139,92,246,.45); cursor: pointer; }
  .calendar .diary-record-day small { color: #65c982; font-size: 18px; line-height: 0; }
  .diary-layout .diary-main-grid { grid-template-columns: 300px minmax(0, 1fr); gap: 18px; }
  .diary-side-left .diary-mood-filter-title { margin-top: 18px; }
  .diary-mood-filters { display: flex; flex-wrap: wrap; gap: 8px; margin: 10px 0 18px; }
  .diary-mood-legend { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 12px; color: #65709e; font-size: 13px; font-weight: 700; }
  .diary-hero-meta { display: flex; flex-wrap: wrap; gap: 10px; align-items: center; margin-top: 12px; }
  .diary-hero-advice { margin-top: 14px; color: #65709e; }
  .diary-feed-card { display: grid; gap: 14px; align-content: start; }
  .diary-feed-head { display: flex; justify-content: space-between; gap: 12px; align-items: start; }
  .diary-feed-sub { margin-top: 4px; color: #65709e; font-size: 13px; }
  .diary-feed { display: grid; gap: 12px; }
  .diary-entry {
    display: grid;
    grid-template-columns: 64px minmax(0, 1fr) 84px 28px;
    gap: 14px;
    align-items: center;
    border-radius: 18px;
    padding: 14px 12px;
    background: rgba(255,255,255,.72);
    box-shadow: 0 10px 28px rgba(99,75,168,.08);
    cursor: pointer;
  }
  .diary-entry-date {
    display: grid;
    place-items: center;
    text-align: center;
    color: #13205f;
  }
  .diary-entry-date b { font-size: 28px; line-height: 1; }
  .diary-entry-date small { color: #8b5cf6; font-weight: 800; }
  .diary-entry-main h4 { margin: 6px 0 4px; font-size: 16px; color: #13205f; }
  .diary-entry-main p {
    margin: 0;
    color: #65709e;
    font-size: 13px;
    line-height: 1.45;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .diary-mood-pill {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    border-radius: 999px;
    padding: 4px 10px;
    background: rgba(139,92,246,.12);
    color: #6d28d9;
    font-size: 12px;
    font-weight: 800;
  }
  .diary-entry-meta { display: flex; gap: 10px; margin-top: 8px; color: #8b849f; font-size: 12px; font-weight: 700; }
  .diary-entry-thumb {
    width: 84px;
    height: 84px;
    border-radius: 18px;
    display: grid;
    place-items: center;
    font-size: 34px;
    box-shadow: inset 0 0 0 1px rgba(255,255,255,.7);
  }
  .diary-entry-thumb.tone-sunny,
  .diary-memory-thumb.tone-sunny { background: linear-gradient(145deg, #fff7d6, #ffd9ec); }
  .diary-entry-thumb.tone-mint,
  .diary-memory-thumb.tone-mint { background: linear-gradient(145deg, #e8fff4, #d7f0ff); }
  .diary-entry-thumb.tone-lavender,
  .diary-memory-thumb.tone-lavender { background: linear-gradient(145deg, #f1e9ff, #ffe8f6); }
  .diary-entry-thumb.tone-sprout,
  .diary-memory-thumb.tone-sprout { background: linear-gradient(145deg, #e9ffe3, #fff4d0); }
  .diary-entry-thumb.tone-cloud,
  .diary-memory-thumb.tone-cloud { background: linear-gradient(145deg, #eef2ff, #f5f0ff); }
  .diary-entry-thumb.tone-warm,
  .diary-memory-thumb.tone-warm { background: linear-gradient(145deg, #ffe9d6, #ffe0ef); }
  .diary-entry-more {
    border: 0;
    background: transparent;
    color: #8b849f;
    font-size: 22px;
    line-height: 1;
    cursor: pointer;
    padding: 0;
  }
  .diary-empty {
    display: grid;
    gap: 10px;
    justify-items: start;
    padding: 18px 8px;
    color: #65709e;
  }
  .diary-empty span { font-size: 28px; }
  .diary-load-more { justify-self: center; }
  .diary-memory-thumb { font-size: 54px; }
  @media (max-width: 1100px) {
    .diary-layout .diary-main-grid { grid-template-columns: 1fr; }
    .diary-entry { grid-template-columns: 56px minmax(0, 1fr) 72px; }
    .diary-entry-more { display: none; }
  }
  .community-post { align-items: flex-start; grid-template-columns: 56px 1fr 90px; }
  .community-actions { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px; }
  .comments { display: grid; gap: 8px; margin-top: 12px; }
  .comments.collapsed { display: none; }
  .comments-extra { display: grid; gap: 8px; }
  .comments-extra.collapsed { display: none; }
  .comment { border-radius: 16px; padding: 10px 12px; background: rgba(255,255,255,.68); color: #65709e; font-size: 14px; }

`
