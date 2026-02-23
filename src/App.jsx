import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ComingSoon from './pages/ComingSoon'
import BusinessModel from './pages/BusinessModel'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/business-model" element={<BusinessModel />} />
        <Route path="*" element={<ComingSoon />} />
      </Routes>
    </BrowserRouter>
  )
}
