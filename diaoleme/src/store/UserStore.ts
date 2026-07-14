import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import type { AnalysisResult, AnalysisSource, HairStyle } from '../types'

export interface ReportRecord {
  id: string          // 时间戳唯一键，取代日期去重
  date: string        // YYYY-MM-DD，仅用于显示
  score: number
  title: string
  summary: string
  roast: string
  encouragement: string
  tags: string[]
  daily_task: string
  disclaimer: string
  source: AnalysisSource
  source_label: string
  fallback_code: string | null
  record_status: string
  record_id: string | null
  count: '少量' | '中等' | '偏多'
  thickness: '粗硬' | '正常' | '细软'
  suggestions: string[]
}

interface UserState {
  dropScore: number | null
  title: string
  summary: string
  roast: string
  encouragement: string
  tags: string[]
  dailyTask: string
  disclaimer: string
  source: AnalysisSource
  sourceLabel: string
  fallbackCode: string | null
  recordStatus: string
  recordId: string | null
  count: '少量' | '中等' | '偏多'
  thickness: '粗硬' | '正常' | '细软'
  suggestions: string[]
  unlockedHairStyles: string[]
  checkinDays: string[]
  points: number
  reportHistory: ReportRecord[]
  setAnalysis: (r: AnalysisResult) => void
  viewReport: (id: string) => void
  viewDayReport: (date: string) => void
  addReport: (r: ReportRecord) => void
  markCheckinToday: () => void
  unlockHairStyle: (id: string, cost: number) => boolean
  addPoints: (n: number) => void
  resetAll: () => void
}

const today = () => new Date().toISOString().slice(0, 10)
const DEFAULT_DISCLAIMER = '本结果仅用于轻松记录和娱乐反馈，不作为医疗用途；接入分析接口时，图片仅用于本次分析请求。'

export const useUserStore = create<UserState>()(
  persist(
    (set, get) => ({
      dropScore: null,
      title: '等待今日称号',
      summary: '上传一张照片，黏土小人会给你一份轻松反馈。',
      roast: '今天还没有吐槽素材，小人正在搓手等待。',
      encouragement: '先记录一下，就已经是养成的第一步。',
      tags: [],
      dailyTask: '完成一次今日记录',
      disclaimer: DEFAULT_DISCLAIMER,
      source: 'mock',
      sourceLabel: '等待分析',
      fallbackCode: null,
      recordStatus: 'idle',
      recordId: null,
      count: '中等',
      thickness: '正常',
      suggestions: [],
      unlockedHairStyles: ['none'],
      checkinDays: [],
      points: 500,
      reportHistory: [],

      setAnalysis: (r) =>
        set({
          dropScore: r.score,
          title: r.title,
          summary: r.summary,
          roast: r.roast,
          encouragement: r.encouragement,
          tags: r.tags,
          dailyTask: r.daily_task,
          disclaimer: r.disclaimer,
          source: r.source,
          sourceLabel: r.source_label,
          fallbackCode: r.fallback_code,
          recordStatus: r.record_status,
          recordId: r.record_id,
          count: r.count,
          thickness: r.thickness,
          suggestions: r.suggestions,
        }),

      viewReport: (id) => {
        const rec = get().reportHistory.find((r) => r.id === id)
        if (rec) {
          set({
            dropScore: rec.score,
            title: rec.title,
            summary: rec.summary,
            roast: rec.roast,
            encouragement: rec.encouragement,
            tags: rec.tags,
            dailyTask: rec.daily_task,
            disclaimer: rec.disclaimer,
            source: rec.source,
            sourceLabel: rec.source_label,
            fallbackCode: rec.fallback_code,
            recordStatus: rec.record_status,
            recordId: rec.record_id,
            count: rec.count,
            thickness: rec.thickness,
            suggestions: rec.suggestions,
          })
        }
      },

      viewDayReport: (date) => {
        const recs = get().reportHistory.filter((r) => r.date === date)
        if (recs.length === 0) return
        const latest = recs[0]
        const avg = Math.round(recs.reduce((s, r) => s + r.score, 0) / recs.length)
        set({
          dropScore: avg,
          title: latest.title,
          summary: latest.summary,
          roast: latest.roast,
          encouragement: latest.encouragement,
          tags: latest.tags,
          dailyTask: latest.daily_task,
          disclaimer: latest.disclaimer,
          source: latest.source,
          sourceLabel: latest.source_label,
          fallbackCode: latest.fallback_code,
          recordStatus: latest.record_status,
          recordId: latest.record_id,
          count: latest.count,
          thickness: latest.thickness,
          suggestions: latest.suggestions,
        })
      },

      addReport: (r) =>
        set((s) => ({ reportHistory: [r, ...s.reportHistory].slice(0, 100) })),

      markCheckinToday: () => {
        const t = today()
        if (get().checkinDays.includes(t)) return
        set((s) => ({
          checkinDays: [...s.checkinDays, t],
          points: s.points + 5,
        }))
      },

      unlockHairStyle: (id, cost) => {
        const s = get()
        if (s.unlockedHairStyles.includes(id)) return true
        if (s.points < cost) return false
        set({
          unlockedHairStyles: [...s.unlockedHairStyles, id],
          points: s.points - cost,
        })
        return true
      },

      addPoints: (n) => set((s) => ({ points: s.points + n })),

      resetAll: () => {
        set({
          dropScore: null,
          title: '等待今日称号',
          summary: '上传一张照片，黏土小人会给你一份轻松反馈。',
          roast: '今天还没有吐槽素材，小人正在搓手等待。',
          encouragement: '先记录一下，就已经是养成的第一步。',
          tags: [],
          dailyTask: '完成一次今日记录',
          disclaimer: DEFAULT_DISCLAIMER,
          source: 'mock',
          sourceLabel: '等待分析',
          fallbackCode: null,
          recordStatus: 'idle',
          recordId: null,
          count: '中等',
          thickness: '正常',
          suggestions: [],
          unlockedHairStyles: ['none'],
          checkinDays: [],
          points: 500,
          reportHistory: [],
        })
        if (typeof window !== 'undefined') {
          window.localStorage.removeItem('diaolema-user')
        }
      },
    }),
    { name: 'diaolema-user', storage: createJSONStorage(() => localStorage) },
  ),
)
