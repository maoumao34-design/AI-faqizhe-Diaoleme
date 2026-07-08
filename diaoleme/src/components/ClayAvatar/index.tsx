import type { Mood } from '../../types'

interface Props {
  score?: number | null
  mood?: Mood
  size?: number
  hair?: 'none' | 'short' | 'medium' | 'long' | 'curly' | 'bun'
  className?: string
}

function scoreToMood(score: number | null | undefined): Mood {
  if (score == null) return 'good'
  if (score >= 80) return 'great'
  if (score >= 50) return 'good'
  if (score >= 30) return 'neutral'
  return 'sad'
}

export default function ClayAvatar({
  score = null,
  mood,
  size = 160,
  hair = 'short',
  className = '',
}: Props) {
  const derivedMood = mood ?? scoreToMood(score)

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={`drop-shadow-md ${className}`}
      aria-hidden
    >
      <defs>
        <radialGradient id="headGrad" cx="40%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#FFE4D6" />
          <stop offset="100%" stopColor="#F5C6CB" />
        </radialGradient>
        <radialGradient id="mossGrad" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#B8D8A4" />
          <stop offset="100%" stopColor="#9BBF8A" />
        </radialGradient>
      </defs>

      {/* Head */}
      <circle cx="100" cy="115" r="65" fill="url(#headGrad)" />

      {/* Ears */}
      <ellipse cx="38" cy="115" rx="10" ry="14" fill="#F5C6CB" />
      <ellipse cx="162" cy="115" rx="10" ry="14" fill="#F5C6CB" />
      <ellipse cx="38" cy="115" rx="5" ry="8" fill="#E8A6AE" />
      <ellipse cx="162" cy="115" rx="5" ry="8" fill="#E8A6AE" />

      {/* Hair layer */}
      <HairLayer kind={hair} />

      {/* Cheek blush */}
      <circle cx="65" cy="125" r="9" fill="#E67A5A" opacity="0.35" />
      <circle cx="135" cy="125" r="9" fill="#E67A5A" opacity="0.35" />

      {/* Eyes */}
      <Eye cx={70} cy={100} mood={derivedMood} />
      <Eye cx={130} cy={100} mood={derivedMood} />

      {/* Mouth */}
      <Mouth mood={derivedMood} />

      {/* Tear when sad */}
      {derivedMood === 'sad' && (
        <path
          d="M60 118 q5 10 0 14 q-5 -4 0 -14 z"
          fill="#5DADEC"
          opacity="0.7"
        />
      )}
    </svg>
  )
}

function Eye({ cx, cy, mood }: { cx: number; cy: number; mood: Mood }) {
  if (mood === 'great') {
    return (
      <path
        d={`M${cx - 8} ${cy} q8 -8 16 0`}
        stroke="#3A2F28"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
    )
  }
  return <circle cx={cx} cy={cy} r="4" fill="#3A2F28" />
}

function Mouth({ mood }: { mood: Mood }) {
  switch (mood) {
    case 'great':
      return (
        <path
          d="M75 135 Q100 160 125 135"
          stroke="#3A2F28"
          strokeWidth="3"
          fill="#E67A5A"
          opacity="0.8"
          strokeLinecap="round"
        />
      )
    case 'good':
      return (
        <path
          d="M80 135 Q100 150 120 135"
          stroke="#3A2F28"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
      )
    case 'neutral':
      return (
        <line
          x1={85}
          y1={140}
          x2={115}
          y2={140}
          stroke="#3A2F28"
          strokeWidth="3"
          strokeLinecap="round"
        />
      )
    case 'sad':
      return (
        <path
          d="M80 145 Q100 132 120 145"
          stroke="#3A2F28"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
      )
  }
}

function HairLayer({ kind }: { kind: Props['hair'] }) {
  switch (kind) {
    case 'none':
      return null
    case 'short':
      return (
        <path
          d="M40 90 Q100 30 160 90 Q160 70 130 55 Q100 40 70 55 Q40 70 40 90 Z"
          fill="url(#mossGrad)"
        />
      )
    case 'medium':
      return (
        <>
          <path
            d="M35 95 Q100 20 165 95 Q170 80 140 60 Q100 35 60 60 Q30 80 35 95 Z"
            fill="url(#mossGrad)"
          />
          <path
            d="M40 110 Q50 145 65 160"
            stroke="#9BBF8A"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M160 110 Q150 145 135 160"
            stroke="#9BBF8A"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
          />
        </>
      )
    case 'long':
      return (
        <>
          <path
            d="M30 95 Q100 15 170 95 Q175 80 145 60 Q100 30 55 60 Q25 80 30 95 Z"
            fill="url(#mossGrad)"
          />
          <path
            d="M38 100 Q40 170 55 195"
            stroke="#9BBF8A"
            strokeWidth="14"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M162 100 Q160 170 145 195"
            stroke="#9BBF8A"
            strokeWidth="14"
            fill="none"
            strokeLinecap="round"
          />
        </>
      )
    case 'curly':
      return (
        <>
          <path
            d="M35 95 Q100 25 165 95 Q165 75 140 60 Q100 35 60 60 Q35 75 35 95 Z"
            fill="url(#mossGrad)"
          />
          {[60, 80, 100, 120, 140].map((x, i) => (
            <circle key={i} cx={x} cy={55 + (i % 2) * 10} r="12" fill="#9BBF8A" />
          ))}
        </>
      )
    case 'bun':
      return (
        <>
          <path
            d="M35 95 Q100 30 165 95 Q165 75 140 60 Q100 35 60 60 Q35 75 35 95 Z"
            fill="url(#mossGrad)"
          />
          <circle cx="100" cy="45" r="22" fill="#9BBF8A" />
          <circle cx="100" cy="45" r="10" fill="#7FA66E" />
        </>
      )
  }
}
