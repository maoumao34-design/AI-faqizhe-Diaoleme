// ============================================================
// 前端只调用后端代理；真实 API key 只放在 backend/.env。
// 也可用 URL 参数测试：?mock=success 或 ?mock=fail
// ============================================================
const DEFAULT_MODEL_API_URL = import.meta.env.DEV ? 'http://localhost:8787/api/analyze' : '/api/analyze'

export const MODEL_API_CONFIG = {
  /** 生产部署应通过 VITE_MODEL_API_URL 指向公网 HTTPS 后端，避免访问者本机 localhost。 */
  url: import.meta.env.VITE_MODEL_API_URL || DEFAULT_MODEL_API_URL,

  /** 请求超时（毫秒） */
  timeout: 45000,
}
