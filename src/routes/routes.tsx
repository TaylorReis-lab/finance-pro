import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from '../pages/About'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}
