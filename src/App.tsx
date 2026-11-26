import { Route, Routes } from 'react-router'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'
import Insurance101Page from './pages/Insurance101Page'
import CalculatorPage from './pages/CalculatorPage'
import ScenariosPage from './pages/ScenariosPage'
import AboutPage from './pages/AboutPage'
import SourcesPage from './pages/SourcesPage'
import MethodologyPage from './pages/MethodologyPage'
import PrivacyPage from './pages/PrivacyPage'
import DisclaimerPage from './pages/DisclaimerPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F1E6] text-[#171717]">
      <Header />

      <main className="flex-1 p-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/insurance-101" element={<Insurance101Page />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/scenarios" element={<ScenariosPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/sources" element={<SourcesPage />} />
          <Route path="/methodology" element={<MethodologyPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App