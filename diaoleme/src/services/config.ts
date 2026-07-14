const ANALYSIS_PATH = '/api/analyze'
const LEGACY_ANALYSIS_PATH = '/api/hair-analysis'
const LOCAL_API_ORIGIN = 'http://localhost:8787'

declare global {
  interface Window {
    __DIAOLEME_CONFIG__?: {
      apiBaseUrl?: string
    }
  }
}

function cleanUrl(value?: string) {
  return value?.trim().replace(/\/+$/, '') || ''
}

function resolveApiUrl() {
  const runtimeBaseUrl = typeof window !== 'undefined'
    ? cleanUrl(window.__DIAOLEME_CONFIG__?.apiBaseUrl)
    : ''
  const buildBaseUrl = cleanUrl(import.meta.env.VITE_API_BASE_URL)
  const legacyEndpoint = cleanUrl(import.meta.env.VITE_MODEL_API_URL)

  if (runtimeBaseUrl) return appendAnalysisPath(runtimeBaseUrl)
  if (buildBaseUrl) return appendAnalysisPath(buildBaseUrl)
  if (legacyEndpoint) return legacyEndpoint
  return `${LOCAL_API_ORIGIN}${ANALYSIS_PATH}`
}

function appendAnalysisPath(baseUrl: string) {
  if (baseUrl.endsWith(ANALYSIS_PATH) || baseUrl.endsWith(LEGACY_ANALYSIS_PATH)) return baseUrl
  return `${baseUrl}${ANALYSIS_PATH}`
}

export const MODEL_API_CONFIG = {
  /** public/config.js or VITE_API_BASE_URL can switch deployments without rebuilding page business code. */
  url: resolveApiUrl(),

  /** 请求超时（毫秒） */
  timeout: 45000,
}
