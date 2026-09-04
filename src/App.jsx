import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import GenderGate from './components/GenderGate.jsx'
import PathNav from './components/PathNav.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import PWAUpdateToast from './components/PWAUpdateToast.jsx'
import Analytics from './components/Analytics.jsx'
import Home from './pages/Home.jsx'
import Basics from './pages/Basics.jsx'
import Purity from './pages/Purity.jsx'
import PrayerTimes from './pages/PrayerTimes.jsx'
import HowToPray from './pages/HowToPray.jsx'
import TypesOfSalah from './pages/TypesOfSalah.jsx'
import Duas from './pages/Duas.jsx'
import Beyond from './pages/Beyond.jsx'
import Quiz from './pages/Quiz.jsx'
import Glossary from './pages/Glossary.jsx'

function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <GenderGate />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basics" element={<Basics />} />
          <Route path="/purity" element={<Purity />} />
          <Route path="/times" element={<PrayerTimes />} />
          <Route path="/how-to-pray" element={<HowToPray />} />
          <Route path="/types" element={<TypesOfSalah />} />
          <Route path="/duas" element={<Duas />} />
          <Route path="/beyond" element={<Beyond />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/glossary" element={<Glossary />} />
        </Routes>
        <PathNav />
      </main>
      <Footer />
      <PWAUpdateToast />
      <Analytics />
    </div>
  )
}

export default App
