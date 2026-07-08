import { NavLink } from 'react-router-dom'
import { Camera, Clock, ListTodo, Scissors, User } from 'lucide-react'
import { motion } from 'framer-motion'

const TABS = [
  { to: '/tab/scan', label: '拍摄', Icon: Camera },
  { to: '/tab/records', label: '记录', Icon: Clock },
  { to: '/tab/tasks', label: '今日任务', Icon: ListTodo },
  { to: '/tab/hairstyle', label: '发型', Icon: Scissors },
  { to: '/tab/me', label: '我的', Icon: User },
]

export default function TabBar() {
  return (
    <nav className="absolute bottom-0 inset-x-0 bg-cream/95 backdrop-blur border-t border-latte/60 px-1 py-1.5 z-50">
      <div className="flex justify-between items-center px-1">
        {TABS.map(({ to, label, Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `relative flex flex-col items-center gap-0.5 px-2 py-1 rounded-2xl font-body text-[10px] transition-colors ${
                isActive ? 'text-moss-deep' : 'text-coffee/50'
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <motion.div
                    layoutId="active-tab-pill"
                    className="absolute inset-0 bg-moss/15 rounded-2xl"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <Icon size={18} />
                <span>{label}</span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
