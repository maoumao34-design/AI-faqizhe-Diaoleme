import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Send, Sparkles, X } from 'lucide-react'
import ClayAvatar from './ClayAvatar'
import { useUserStore } from '../store/UserStore'

const QUICK_REPLIES = ['今天掉发有点慌', '给我一个任务', '我想看段位']
const BOT_LINES = [
  '收到，我会陪你轻松记录，不做医学判断，只帮你把习惯养起来。',
  '今天的小目标：先完成一次记录，再给自己一个早睡奖励。',
  '你的互动经验正在增加，League 里可以看到段位成长演示哦。',
]

type ChatMessage = { from: 'agent' | 'user'; text: string }

export default function PetAgentFloat() {
  const { dropScore, title, agentExp, agentMood, interactWithAgent } = useUserStore()
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([
    { from: 'agent', text: '嗨，我是你的陪伴型宠物 Agent。今天也一起守护头毛小队吧。' },
  ])
  const level = useMemo(() => Math.floor(agentExp / 100) + 1, [agentExp])

  const talk = (text: string) => {
    interactWithAgent(12)
    const botText = BOT_LINES[messages.length % BOT_LINES.length]
    setMessages((prev) => [...prev.slice(-3), { from: 'user', text }, { from: 'agent', text: botText }])
    setOpen(true)
  }

  return (
    <div className="pointer-events-none absolute bottom-24 right-4 z-[60] flex flex-col items-end">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 14, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.96 }}
            className="pointer-events-auto mb-3 w-[320px] max-w-[calc(100vw-32px)] overflow-hidden rounded-[2rem] border border-white/70 bg-cream/95 shadow-2xl shadow-coffee/20 backdrop-blur"
          >
            <div className="flex items-center gap-3 bg-moss/20 px-4 py-3">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-white shadow-inner">
                <ClayAvatar score={dropScore} size={42} hair="short" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-display text-base text-coffee">头毛陪伴 Agent</p>
                <p className="truncate text-[11px] text-coffee/55">{agentMood || title} · Lv.{level}</p>
              </div>
              <button type="button" onClick={() => setOpen(false)} className="rounded-full p-1 text-coffee/45 hover:bg-white/50">
                <X size={16} />
              </button>
            </div>

            <div className="max-h-56 space-y-2 overflow-y-auto px-4 py-3">
              {messages.map((m, idx) => (
                <motion.div
                  key={`${m.from}-${idx}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <p
                    className={`max-w-[82%] rounded-2xl px-3 py-2 text-xs leading-relaxed ${
                      m.from === 'user' ? 'bg-coffee text-cream' : 'bg-white/75 text-coffee/75'
                    }`}
                  >
                    {m.text}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="border-t border-latte/60 px-4 py-3">
              <div className="mb-2 flex items-center justify-between text-[10px] text-coffee/50">
                <span>互动经验</span>
                <span className="font-mono">{agentExp % 100}/100</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-latte/60">
                <motion.div
                  className="h-full rounded-full bg-moss"
                  animate={{ width: `${agentExp % 100}%` }}
                  transition={{ type: 'spring', stiffness: 180, damping: 22 }}
                />
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {QUICK_REPLIES.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => talk(item)}
                    className="rounded-full bg-white/80 px-3 py-1.5 text-[11px] text-coffee/70 shadow-sm"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => {
          setOpen((v) => !v)
          if (!open) interactWithAgent(8)
        }}
        whileTap={{ scale: 0.94 }}
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-auto relative h-16 w-16 overflow-hidden rounded-full border-4 border-white bg-pink shadow-xl shadow-coffee/25"
        aria-label="打开陪伴型宠物 Agent 对话"
      >
        <span className="absolute -right-1 -top-1 grid h-6 w-6 place-items-center rounded-full bg-moss text-cream shadow-sm">
          {open ? <Sparkles size={13} /> : <MessageCircle size={13} />}
        </span>
        <ClayAvatar score={dropScore} size={58} hair="medium" />
        <span className="absolute bottom-0 right-0 grid h-5 w-5 place-items-center rounded-full bg-coffee text-cream">
          <Send size={10} />
        </span>
      </motion.button>
    </div>
  )
}
