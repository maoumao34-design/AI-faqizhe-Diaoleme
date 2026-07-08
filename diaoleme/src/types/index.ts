export type Mood = 'great' | 'good' | 'neutral' | 'sad'

export type HairStyle = 'none' | 'short' | 'medium' | 'long' | 'curly' | 'bun'

export interface AnalysisResult {
  score: number
  title: string
  summary: string
  roast: string
  encouragement: string
  tags: string[]
  daily_task: string
  disclaimer: string
  count: '少量' | '中等' | '偏多'
  thickness: '粗硬' | '正常' | '细软'
  suggestions: string[]
}

export interface HairstyleItem {
  id: string
  name: string
  emoji: string
  cost: number
  description: string
}
