import axios from 'axios'
import type { AnalysisResult } from '../types'
import { MODEL_API_CONFIG } from './config'

/**
 * 调用大模型分析用户上传的头顶照片
 * 支持 base64 JSON（OpenAI qwen-vl 等 vision 接口）或 multipart/form-data
 */
export async function analyzePhoto(file: File): Promise<AnalysisResult> {
  const { url, apiKey, model, systemPrompt, timeout, useBase64 } = MODEL_API_CONFIG

  if (!url || !apiKey || url.includes('your-api-endpoint') || apiKey.includes('your-api-key')) {
    console.warn('[model] API 未配置，使用本地 mock 数据。请在 src/services/config.ts 填入 url 和 apiKey。')
    return mockResult()
  }

  try {
    let resp
    if (useBase64) {
      const base64 = await fileToBase64(file)
      resp = await axios.post(
        url,
        {
          model,
          messages: [
            { role: 'system', content: systemPrompt },
            {
              role: 'user',
              content: [
                { type: 'text', text: '请分析这张头发掉落的照片。' },
                { type: 'image_url', image_url: { url: base64 } },
              ],
            },
          ],
        },
        {
          headers: { Authorization: `Bearer ${apiKey}` },
          timeout,
        },
      )
    } else {
      const form = new FormData()
      form.append('image', file)
      form.append('model', model)
      form.append('prompt', systemPrompt)
      resp = await axios.post(url, form, {
        headers: { Authorization: `Bearer ${apiKey}` },
        timeout,
      })
    }

    return normalize(parseResponse(resp.data))
  } catch (err) {
    console.error('[model] 大模型请求失败，回退到 mock：', err)
    return mockResult()
  }
}

/** 从大模型响应里提取 JSON（兼容 choices[0].message.content 直接输出和工具调用） */
function parseResponse(data: any): Partial<AnalysisResult> {
  try {
    let text = ''
    if (data?.choices?.[0]?.message?.content) {
      text = data.choices[0].message.content
    } else if (typeof data === 'object') {
      text = JSON.stringify(data)
    }
    // 代码块包裹的情况 ```json ... ```
    text = text.replace(/```json\s*|\s*```/g, '').trim()
    return JSON.parse(text)
  } catch {
    return {}
  }
}

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      const result = reader.result as string
      // 已经是 data:image/...;base64,xxx 格式，直接用于 OpenAI vision
      resolve(result)
    }
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}

function normalize(data: Partial<AnalysisResult>): AnalysisResult {
  return {
    score: typeof data.score === 'number' ? Math.max(0, Math.min(100, data.score)) : 50,
    count: data.count === '少量' || data.count === '偏多' ? data.count : '中等',
    thickness: data.thickness === '粗硬' || data.thickness === '细软' ? data.thickness : '正常',
    suggestions: Array.isArray(data.suggestions) && data.suggestions.length > 0
      ? data.suggestions.slice(0, 5)
      : ['请保持健康作息，注意饮食均衡'],
  }
}

function mockResult(): Promise<AnalysisResult> {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({
        score: 68,
        count: '中等',
        thickness: '正常',
        suggestions: [
          '今晚提前 30 分钟睡觉',
          '洗头时水温不超过 38°C',
          '使用含生姜成分的洗发水',
          '每天做 5 分钟头皮按摩',
        ],
      })
    }, 1500),
  )
}

export const HAIRSTYLE_CATALOG: {
  id: string
  name: string
  emoji: string
  cost: number
  description: string
}[] = [
  { id: 'none', name: '素颜', emoji: '🌱', cost: 0, description: '最真实的自己' },
  { id: 'short', name: '清爽短发', emoji: '✂️', cost: 0, description: '简单利落' },
  { id: 'medium', name: '自然中分', emoji: '💇', cost: 30, description: '邻家风格' },
  { id: 'long', name: '飘逸长发', emoji: '👸', cost: 80, description: '需要坚持打卡' },
  { id: 'curly', name: '羊毛卷', emoji: '🌀', cost: 120, description: '俏皮可爱' },
  { id: 'bun', name: '丸子头', emoji: '🎀', cost: 200, description: '终极成就' },
]
