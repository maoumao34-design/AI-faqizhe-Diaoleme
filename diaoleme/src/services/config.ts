// ============================================================
// 分析接口配置
// 填入真实接口后会调用后端/AI；未配置 API Key 时自动走本地/demo 兜底，方便演示。
// 也可用 URL 参数测试：?mock=success 或 ?mock=fail
// ============================================================
export const MODEL_API_CONFIG = {
  /** 接口地址 可注册 https://www.SiliconFlow 会有免费额度 */
  url: 'https://api.siliconflow.cn/v1/chat/completions',

  /** API Key */
  apiKey: '',

  /** 支持图文理解的模型 */
  model: 'Qwen/Qwen3-VL-32B-Instruct',

  /**
   * 系统提示词：只输出娱乐化、陪伴式 JSON，不做非用户可验证的确定性判断。
   */
  systemPrompt:
    '你是“掉了么”的趣味头发记录陪伴员。用户会上传掉发或头发状态照片。' +
    '请只基于画面给出轻松、娱乐化、非医学的反馈，不要使用专业结论、疾病风险、用药、就医等表达，也不要给出确定性健康判断。' +
    '请返回严格 JSON，不要返回其他内容：\n' +
    '{\n' +
    '  "score": 0-100 的娱乐化状态分，越高越轻松稳定,\n' +
    '  "title": "今日称号",\n' +
    '  "summary": "一句轻松摘要",\n' +
    '  "roast": "一句温和吐槽，不制造焦虑",\n' +
    '  "encouragement": "一句鼓励",\n' +
    '  "tags": ["趣味标签1", "趣味标签2"],\n' +
    '  "daily_task": "今日建议任务",\n' +
    '  "disclaimer": "本结果仅用于轻松记录和娱乐反馈，不作为医疗用途；接入分析接口时，图片仅用于本次分析请求。",\n' +
    '  "source": "api",\n' +
    '  "source_label": "AI 分析结果",\n' +
    '  "count": "少量|中等|偏多",\n' +
    '  "thickness": "粗硬|正常|细软",\n' +
    '  "suggestions": ["建议1", "建议2", "建议3"]\n' +
    '}\n' +
    '建议要具体可执行、语气温柔，不开药方。',

  /** 请求超时（毫秒） */
  timeout: 30000,

  /** 图片传输方式：base64（JSON）或 form（FormData），默认 base64 */
  useBase64: true,
}
