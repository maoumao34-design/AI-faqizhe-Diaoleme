import { Navigate, Route, Routes } from 'react-router-dom'
import TabLayout from './layouts/TabLayout'
import Hello from './pages/Hello'
import Scan from './pages/Scan'
import Report from './pages/Report'
import Tasks from './pages/Tasks'
import Hairstyle from './pages/Hairstyle'
import Records from './pages/Records'
import Me from './pages/Me'

export default function App() {
  return (
    <div className="relative h-[100dvh] w-[448px] max-w-full bg-cream shadow-2xl shadow-coffee/20 overflow-hidden">
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route element={<TabLayout />}>
          <Route path="/tab/scan" element={<Scan />} />
          <Route path="/tab/report" element={<Report />} />
          <Route path="/tab/records" element={<Records />} />
          <Route path="/tab/tasks" element={<Tasks />} />
          <Route path="/tab/hairstyle" element={<Hairstyle />} />
          <Route path="/tab/me" element={<Me />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}
