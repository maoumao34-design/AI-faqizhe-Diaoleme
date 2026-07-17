import { Outlet } from 'react-router-dom'
import { motion } from 'framer-motion'
import PetAgentFloat from '../components/PetAgentFloat'
import TabBar from './TabBar'

export default function TabLayout() {
  return (
    <div className="relative h-full w-full bg-cream">
      <motion.div
        className="absolute inset-x-0 top-0 bottom-20 overflow-y-auto overscroll-y-contain"
      >
        <Outlet />
      </motion.div>
      <PetAgentFloat />
      <TabBar />
    </div>
  )
}
