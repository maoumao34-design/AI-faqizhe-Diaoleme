export const XP_PER_LEVEL = 200
export const LEAGUE_TIER_NAMES = ['青铜', '白银', '黄金', '铂金', '钻石 III', '钻石 II', '钻石 I', '王者'] as const
export const WEEKDAY_LABELS = ['一', '二', '三', '四', '五', '六', '日'] as const

export function getLevelProgress(points: number) {
  const capped = Math.max(0, points)
  const rawLevel = Math.floor(capped / XP_PER_LEVEL) + 1
  const level = Math.min(10, rawLevel)
  const into = level >= 10 ? XP_PER_LEVEL : capped % XP_PER_LEVEL
  const need = level >= 10 ? 0 : XP_PER_LEVEL - into
  const percent = level >= 10 ? 100 : Math.round((into / XP_PER_LEVEL) * 100)
  return { level, into, need, percent, max: XP_PER_LEVEL }
}

export function getLeagueTierProgress(points: number) {
  const capped = Math.max(0, points)
  const tierIndex = Math.min(LEAGUE_TIER_NAMES.length - 1, Math.floor(capped / 1000))
  const current = capped % 1000
  const max = 1000
  const percent = Math.round((current / max) * 100)
  return {
    name: LEAGUE_TIER_NAMES[tierIndex],
    current,
    max,
    percent,
    nextNeed: tierIndex >= LEAGUE_TIER_NAMES.length - 1 ? 0 : max - current,
  }
}

export function todayKey() {
  return new Date().toISOString().slice(0, 10)
}
