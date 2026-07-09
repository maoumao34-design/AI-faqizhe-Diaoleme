// ============================================================
// 前端只调用本地后端代理；真实 API key 只放在 backend/.env。
// 也可用 URL 参数测试：?mock=success 或 ?mock=fail
// ============================================================
export const MODEL_API_CONFIG = {
  /** 本地后端代理默认监听 8787，生产/联调可通过 VITE_MODEL_API_URL 覆盖。 */
  url: import.meta.env.VITE_MODEL_API_URL || 'http://localhost:8787/api/analyze',

  /** 请求超时（毫秒） */
  timeout: 45000,
}
