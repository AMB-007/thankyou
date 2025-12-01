import { Routes, Route } from 'react-router-dom'
import SimpleMessage from './components/SimpleMessage'
import ThankYou from './components/ThankYou'
import HeartBackground from './components/HeartBackground'
import FullPageHearts from './components/FullPageHearts'
import './App.css'

export default function App() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start p-4 sm:p-6 relative overflow-hidden bg-gradient-to-br from-purple-900 via-gray-900 to-black">
      <FullPageHearts />
      <HeartBackground count={20} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-purple-900/20 pointer-events-none z-5" />
      <div className="relative z-10 w-full flex justify-center min-h-screen">
        <Routes>
          <Route path="/" element={<SimpleMessage />} />
          <Route path="/next" element={<ThankYou />} />
        </Routes>
      </div>
    </div>
  )
}

