// ============================================================
// 前端只调用本地后端代理；真实 API key 只放在 backend/.env。
// 也可用 URL 参数测试：?mock=success 或 ?mock=fail
// ============================================================
export const MODEL_API_CONFIG = {
  /** Vite 开发环境会通过 vite.config.ts 代理到 http://localhost:8787 */
  url: '/api/hair-analysis',

  /** 请求超时（毫秒） */
  timeout: 45000,
}
