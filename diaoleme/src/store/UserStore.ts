import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import type { AnalysisResult, HairStyle } from '../types'

export interface ReportRecord {
  id: string          // 时间戳唯一键，取代日期去重
  date: string        // YYYY-MM-DD，仅用于显示
  score: number
  count: '少量' | '中等' | '偏多'
  thickness: '粗硬' | '正常' | '细软'
  suggestions: string[]
}

interface UserState {
  dropScore: number | null
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

export const useUserStore = create<UserState>()(
  persist(
    (set, get) => ({
      dropScore: null,
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
          count: r.count,
          thickness: r.thickness,
          suggestions: r.suggestions,
        }),

      viewReport: (id) => {
        const rec = get().reportHistory.find((r) => r.id === id)
        if (rec) {
          set({
            dropScore: rec.score,
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
