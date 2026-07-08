import type { ReactNode } from 'react'
interface Props {
  children: ReactNode
  accent?: 'cream' | 'pink' | 'moss'
  className?: string
}

export default function StickerCard({
  children,
  accent = 'cream',
  className = '',
}: Props) {
  const bg = accent === 'cream'
    ? 'bg-cream-soft'
    : accent === 'pink'
      ? 'bg-pink-soft'
      : 'bg-moss/10'
  return (
    <div className={`${bg} border border-latte/60 rounded-3xl p-4 shadow-sm ${className}`}>
      {children}
    </div>
  )
}
