import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from '../pages/About'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import Settings from '../pages/Settings'
import Clients from '../pages/Clients'
import NotFound from '../pages/NotFound' 
import FeedbackForm from '../pages/FeedbackForm'
import Analytics from '../pages/Analytcs'
import Terms from '../pages/terms/terms'
import PrivacyTerms from '../pages/terms/privacyTerms'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/feedback" element={<FeedbackForm />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/termosecondicoes" element={<Terms />} />
        <Route path="/politica-de-privacidade" element={<PrivacyTerms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
