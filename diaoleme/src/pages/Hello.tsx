import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import ClayAvatar from '../components/ClayAvatar'

export default function Hello() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Background blobs + cream wash */}
      <div className="absolute inset-0 bg-cream" />
      <BackgroundBlobs />

      {/* Centered content column */}
      <div className="relative z-10 h-full w-full px-6 flex flex-col items-center justify-center">
        <motion.div
          className="flex items-center gap-2 text-coffee/70 font-body"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Sparkles size={14} className="text-moss" />
          <span className="text-xs tracking-wider">你的掉发陪伴日记</span>
        </motion.div>

        <motion.h1
          className="mt-2 font-display text-[64px] leading-none text-coffee tracking-wider text-center"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 18 }}
        >
          掉了么<span className="text-moss">？</span>
        </motion.h1>

        <motion.p
          className="mt-3 text-coffee/60 font-body text-sm text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          拍照一下，让黏土小人告诉你
        </motion.p>

        <motion.div
          className="my-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, type: 'spring' }}
        >
          <ClayAvatar score={72} size={180} hair="medium" />
        </motion.div>

        <motion.div
          className="w-full max-w-xs"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Link
            to="/tab/scan"
            className="block w-full active:scale-[0.98] transition-all font-medium text-center py-3.5 rounded-2xl shadow-sm"
            style={{ background: '#3A2F28', color: '#FFF8F0' }}
          >
            来看看今天的发量 →
          </Link>
        </motion.div>

        <motion.p
          className="absolute bottom-6 inset-x-0 text-center text-xs text-coffee/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          治愈系每日陪伴 · 无焦虑不掉头
        </motion.p>
      </div>
    </div>
  )
}

function BackgroundBlobs() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute -top-24 -left-16 w-72 h-72 rounded-full bg-pink/40 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/3 -right-20 w-80 h-80 rounded-full bg-moss/25 blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, -40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-20 left-1/4 w-64 h-64 rounded-full bg-tangerine/15 blur-3xl"
        animate={{ x: [0, 25, 0], y: [0, -20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
