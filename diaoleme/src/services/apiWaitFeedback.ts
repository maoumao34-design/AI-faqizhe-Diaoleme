/**
 * Progressive wait copy for Render cold-start / slow API (AIFA-86).
 * Keeps demo main path from looking blank while the free instance wakes up.
 */

export type WaitPhase = 'immediate' | 'slow' | 'longer'

export const SLOW_WAIT_MS = 3000
export const LONGER_WAIT_MS = 8000

export const SCAN_WAIT_COPY: Record<WaitPhase, string> = {
  immediate: '分析中，黏土小人正在眯眼观察…',
  slow: '还在等服务醒来～免费实例冷启动时会多等几秒，不是卡住。',
  longer: '还在努力接通中，再给你一点时间；若太久可稍后重试或先看本地兜底。',
}

export const CHAT_WAIT_COPY: Record<WaitPhase, string> = {
  immediate: '头发丝正在认真想…',
  slow: '想得有点久～多半是服务唤醒中，请再稍等几秒。',
  longer: '还在等回复中；若太久可再发一次，或先去做一次轻量 Scan。',
}

export type SlowWaitHandle = {
  clear: () => void
}

/**
 * Call onPhase('immediate') right away, then escalate at 3s / 8s until cleared.
 */
export function startSlowWaitFeedback(
  onPhase: (phase: WaitPhase) => void,
  options?: { slowMs?: number; longerMs?: number },
): SlowWaitHandle {
  const slowMs = options?.slowMs ?? SLOW_WAIT_MS
  const longerMs = options?.longerMs ?? LONGER_WAIT_MS
  onPhase('immediate')
  const slowTimer = window.setTimeout(() => onPhase('slow'), slowMs)
  const longerTimer = window.setTimeout(() => onPhase('longer'), longerMs)
  return {
    clear: () => {
      window.clearTimeout(slowTimer)
      window.clearTimeout(longerTimer)
    },
  }
}

/** Friendly scan failure / degrade copy — light, non-medical. */
export function scanFailureMessage(kind: 'timeout' | 'http' | 'unreachable' | 'unknown' = 'unknown') {
  if (kind === 'timeout') {
    return '这次等太久啦（可能是冷启动或网络慢）。可以再点一次重试，或稍后再来。'
  }
  if (kind === 'http') {
    return '分析服务这会儿有点忙（服务端异常）。请再试一次；若仍不行，可用本地演示兜底继续逛。'
  }
  if (kind === 'unreachable') {
    return '暂时连不上分析服务（常见于冷启动或网络抖动）。点重试再试，或继续用本地兜底演示。'
  }
  return '分析暂时没跑通。请再试一次；演示可用 ?mock=success 走通完整流程。'
}

export function chatFallbackReply(code?: string | null) {
  if (code === 'CHAT_BACKEND_UNREACHABLE') {
    return '这边有点慢（服务可能在唤醒），请再发一次试试～也可以先去做一次轻量 Scan，我稍后再陪你聊。'
  }
  return '我这边暂时没有连上 AI 服务，先给你一个小建议：今天先完成一次记录，再选一个最轻量的任务。'
}
