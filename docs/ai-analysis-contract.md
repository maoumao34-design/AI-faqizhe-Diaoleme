# 掉了么 AI 图片娱乐化分析协议 v0.1

本文档用于前后端联调阶段，先固定 `POST /api/hair-analysis` 的 AI 分析返回结构、mock response、多模态 prompt 和失败兜底规则。当前协议只服务 demo：轻量、有趣、可保存、可展示，不代表医学判断。

配套文件：

- `docs/ai-analysis-schema.json`：后端可用于校验的响应 JSON Schema。
- `docs/ai-analysis-mocks.json`：三类联调 mock response。
- `docs/ai-analysis-prompt.md`：可直接放入模型配置的多模态 prompt 模板。

## 1. 产品边界

- 不做医疗诊断，不判断疾病、严重脱发或治疗需求。
- 不输出“秃了”“明显后移”“病理性脱发”等焦虑化结论。
- 不提供药物、治疗、处方、医院就诊等医疗建议。
- 可以输出娱乐化观察、养成任务、鼓励语和记录趋势提示。
- 低分优先解释为图片质量、角度、光线或需要继续记录，不暗示严重问题。
- 每次结果必须展示 disclaimer：`本结果仅用于娱乐和习惯记录，不构成医疗建议。`

## 2. 后端接口建议

### POST /api/hair-analysis

首版前端拍照/上传后的分析入口固定为 `POST /api/hair-analysis`。`POST /api/records` 只负责在分析完成后保存记录，不作为首版前端分析入口，也不直接调用多模态模型。

请求支持两种图片传入方式，二选一即可：

| 字段 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| image | File | 否 | multipart/form-data 上传图片，适合移动端直接上传 |
| image_url | string | 否 | 已上传图片 URL，适合后端先存储再分析 |
| image_type | string | 是 | `hairline` / `top` / `shedding` / `other` |
| user_note | string | 否 | 用户备注，例如“今天熬夜了”“刚洗头” |
| previous_record_id | string | 否 | 用于读取上一次结果，生成趋势提示 |
| context | object | 否 | demo 可选上下文，例如 streak_days、last_score、task_completed |

请求示例：

```json
{
  "image_url": "https://example.com/uploads/demo-hairline.jpg",
  "image_type": "hairline",
  "user_note": "昨晚睡得有点晚",
  "previous_record_id": "rec_20260707_001",
  "context": {
    "streak_days": 3,
    "last_score": 74,
    "task_completed": true
  }
}
```

统一响应：成功、低质量可保存、失败 fallback 都使用同一外层结构，前端不用猜字段。

```json
{
  "success": true,
  "analysis_id": "demo_20260708_001",
  "image_type": "hairline",
  "image_quality": {
    "score": 82,
    "level": "good",
    "issues": []
  },
  "entertainment_result": {
    "score": 78,
    "level": "stable",
    "title": "发量守护小队长",
    "summary": "今天的头发状态整体稳定，发际线看起来没有明显情绪波动。",
    "roast": "头发今天还算配合，建议你也配合一下早点睡。",
    "encouragement": "继续记录几天，就能看到自己的头发状态趋势啦。"
  },
  "tags": ["稳中带皮", "适合继续观察", "今日状态不错"],
  "daily_task": {
    "name": "23:30 前放下手机",
    "description": "给头发一点休息时间，也给自己一点休息时间。",
    "exp_reward": 20
  },
  "trend_hint": "如果连续记录 3 天，可以生成一条发量守护趋势。",
  "fallback_code": null,
  "can_save_record": true,
  "disclaimer": "本结果仅用于娱乐和习惯记录，不构成医疗建议。"
}
```

## 3. JSON Schema

字段稳定性约定：

| 字段 | 前端展示 | 后端入库 | 说明 |
| --- | --- | --- | --- |
| success | 必须 | 必须 | 是否得到可展示结果 |
| analysis_id | 可选 | 必须 | 分析记录 ID |
| image_type | 可选 | 必须 | 图片类型 |
| image_quality | 建议 | 建议 | 用于解释低质量或 fallback |
| entertainment_result.score | 必须 | 必须 | 主评分 0-100 |
| entertainment_result.title | 必须 | 必须 | 结果卡片标题 |
| entertainment_result.summary | 必须 | 必须 | 一句话解释 |
| entertainment_result.roast | 建议 | 建议 | 轻吐槽，避免羞辱 |
| entertainment_result.encouragement | 建议 | 建议 | 鼓励语 |
| tags | 建议 | 建议 | 最多展示 3 个 |
| daily_task | 建议 | 建议 | 和养成任务系统打通 |
| trend_hint | 可选 | 可选 | 有历史记录时更有用 |
| fallback_code | 必须 | 必须 | 成功为 null，失败或降级填 code |
| can_save_record | 必须 | 必须 | 是否允许保存到历史记录 |
| disclaimer | 必须 | 可配置 | 前端底部必须展示 |

TypeScript 结构建议：

```ts
export type HairImageType = 'hairline' | 'top' | 'shedding' | 'other'
export type ImageQualityLevel = 'good' | 'usable' | 'poor' | 'unusable'
export type ResultLevel = 'legend' | 'stable' | 'sleep_needed' | 'dont_panic' | 'image_retry'
export type FallbackCode =
  | null
  | 'LOW_IMAGE_QUALITY'
  | 'IMAGE_TOO_BLURRY'
  | 'IMAGE_TOO_DARK'
  | 'NO_HAIR_CONTENT'
  | 'MODEL_TIMEOUT'
  | 'MODEL_NON_JSON'
  | 'API_QUOTA_EXCEEDED'
  | 'CONTENT_BLOCKED'
  | 'UNKNOWN_ERROR'

export interface HairAnalysisResponse {
  success: boolean
  analysis_id: string
  image_type: HairImageType
  image_quality: {
    score: number
    level: ImageQualityLevel
    issues: string[]
  }
  entertainment_result: {
    score: number
    level: ResultLevel
    title: string
    summary: string
    roast: string
    encouragement: string
  }
  tags: string[]
  daily_task: {
    name: string
    description: string
    exp_reward: number
  }
  trend_hint: string
  fallback_code: FallbackCode
  can_save_record: boolean
  disclaimer: string
}
```

## 4. 娱乐化评分规则

评分不是医学指标，只是 demo 展示用的“发量守护指数”。后端可用模型输出 + 规则兜底生成：

| 分数段 | level | 展示称号方向 | 解释口径 |
| --- | --- | --- | --- |
| 90-100 | legend | 发量守护传说级 | 状态看起来很精神，继续保持记录 |
| 75-89 | stable | 稳稳当当观察员 | 整体稳定，适合继续打卡 |
| 60-74 | sleep_needed | 需要睡觉拯救型 | 建议先从作息小任务开始 |
| 40-59 | dont_panic | 今天先别焦虑型 | 多半受光线、角度、状态影响，建议继续记录 |
| 0-39 | image_retry | 图片可能没拍好型 | 优先提示重拍，不下负面结论 |

建议计算方式：

- 图片质量分：光线、清晰度、角度、遮挡，影响 image_quality.score。
- 状态娱乐分：只做可见观察，例如“头发状态稳定”“画面可见信息有限”。
- 连续记录加成：连续打卡可加 0-5 分，用于鼓励养成。
- 任务完成加成：完成今日任务可加 0-3 分。
- 低质量图片上限：如果 image_quality.level 为 `poor`，主评分建议不超过 65，且必须解释为图片质量问题。

## 5. 多模态 Prompt 模板

完整 prompt 另存于 `docs/ai-analysis-prompt.md`。建议作为 system prompt 使用，user prompt 再附 image_type、user_note、history_context 和图片；prompt、schema、mock 与 fallback 均围绕 `POST /api/hair-analysis` 的统一返回结构。

```text
你是「掉了么」的娱乐化头发状态观察助手。用户会上传头顶、发际线、掉发记录或其他头发相关图片。你的任务是生成轻松、有趣、非医疗性质的观察结果，帮助用户做习惯记录和 demo 展示。

必须遵守：
1. 不进行医学诊断。
2. 不判断疾病、严重脱发、病理性脱发或治疗需求。
3. 不给药物、治疗、处方、医院就诊等医疗建议。
4. 不输出“秃了”“明显后移”“严重脱发”等会制造焦虑的结论。
5. 如果图片不清晰、过暗、遮挡严重、角度不合适或不是头发相关图片，优先说明图片质量问题，并返回 fallback_code。
6. 所有结论都要用“看起来”“本次照片中”“娱乐参考”这类轻量表达。
7. 文案要友好、有一点幽默感，但不能羞辱用户。
8. 输出必须是合法 JSON，不要输出 Markdown、解释文字或代码块。

输入上下文：
- image_type: hairline/top/shedding/other
- user_note: 用户可选备注
- history_context: 最近一次分数、连续打卡天数、是否完成任务等，可为空

请严格按以下 JSON 结构返回，字段不能缺失：
{
  "success": true,
  "analysis_id": "由后端生成时可先填空字符串",
  "image_type": "hairline|top|shedding|other",
  "image_quality": {
    "score": 0,
    "level": "good|usable|poor|unusable",
    "issues": []
  },
  "entertainment_result": {
    "score": 0,
    "level": "legend|stable|sleep_needed|dont_panic|image_retry",
    "title": "",
    "summary": "",
    "roast": "",
    "encouragement": ""
  },
  "tags": [],
  "daily_task": {
    "name": "",
    "description": "",
    "exp_reward": 20
  },
  "trend_hint": "",
  "fallback_code": null,
  "can_save_record": true,
  "disclaimer": "本结果仅用于娱乐和习惯记录，不构成医疗建议。"
}

字段要求：
- score 必须是 0-100 的整数。
- tags 最多 3 个，每个不超过 8 个中文字符。
- summary 不超过 40 个中文字符。
- roast 要轻松，不能攻击用户。
- encouragement 要鼓励继续记录。
- daily_task 只能是生活方式小任务，例如早点睡、少刷手机、温和洗头、放松心情、继续记录。
- 如果 success=false，也要返回完整结构，并设置 fallback_code、can_save_record 和可展示文案。
```

User prompt 示例：

```text
请分析这张图片，仅用于娱乐化头发状态记录。
image_type: hairline
user_note: 昨晚睡得有点晚
history_context: {"last_score":74,"streak_days":3,"task_completed":true}
```

## 6. 失败兜底规则

| 场景 | fallback_code | 用户提示 | can_save_record | 是否生成默认结果 |
| --- | --- | --- | --- | --- |
| 图片模糊 | IMAGE_TOO_BLURRY | 这张照片有点害羞，AI 没看清头发状态。 | true | 是，标记低质量 |
| 图片过暗 | IMAGE_TOO_DARK | 光线有点偷懒，换个亮一点的地方更好。 | true | 是，标记低质量 |
| 非头发图片 | NO_HAIR_CONTENT | 这张图不像头发相关照片，本次先不硬猜。 | false | 是，但 success=false |
| API 超时 | MODEL_TIMEOUT | AI 今天反应慢半拍，先给你一份保底鼓励。 | true | 是 |
| 模型非 JSON | MODEL_NON_JSON | AI 说嗨了，后端已切换到稳定兜底结果。 | true | 是 |
| API 额度不足 | API_QUOTA_EXCEEDED | AI 能量条暂时见底，先用 demo 结果继续体验。 | true | 是 |
| 内容安全拦截 | CONTENT_BLOCKED | 这张图片暂时不适合分析，建议换一张头发相关照片。 | false | 是，但 success=false |

兜底默认文案建议：

- title：`图片可能没拍好型`
- summary：`本次可见信息有限，更适合当作打卡记录。`
- roast：`不是你头发不配合，是这张照片有点摸鱼。`
- encouragement：`换个光线再拍一次，发量守护小队继续营业。`
- tags：`["娱乐参考", "建议重拍", "继续记录"]`
- daily_task：`拍一张光线更稳的头发记录照`

## 7. 后端清洗建议

后端只需要把 `POST /api/hair-analysis` 做成统一分析入口：接收图片或图片 URL、调用模型或 mock、清洗结果、返回完整结构。`POST /api/records` 可以复用同一结构做历史存档，但不负责触发首版分析。

1. 调用模型前先生成 `analysis_id`，失败也能追踪。
2. 模型返回后先去掉 Markdown 代码块，再 JSON.parse。
3. schema 校验失败时使用 `MODEL_NON_JSON` fallback。
4. 所有 score 都 clamp 到 0-100，tags 截断到 3 个。
5. 缺失字段用默认值补齐，保证前端永远拿到完整结构。
6. 不把原始模型长文本直接给前端展示，避免医疗化或焦虑化文案漏出。
7. 保存记录时建议同时存 `image_quality`、`fallback_code`、`can_save_record`，方便历史页解释。

## 8. 前端展示建议

- loading：展示“AI 正在给头发做今日摸鱼观察”，不要承诺医学分析。
- success：主展示 score、title、summary、tags、daily_task、disclaimer。
- low quality：仍展示结果，但在卡片顶部提示“本次仅供娱乐参考，建议换个光线再拍”。
- failed fallback：展示 display 风格文案，不展示强分数焦虑；如果 can_save_record=false，按钮改为“重新拍一张”。
- disclaimer：结果卡片底部必须展示，字号可以小，但不能隐藏。
