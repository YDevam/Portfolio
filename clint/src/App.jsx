import { useState, useCallback } from 'react'
import { ThemeProvider }  from './context/ThemeContext.jsx'
import GrainOverlay       from './components/GrainOverlay.jsx'
import Nav                from './components/Nav.jsx'
import Footer             from './components/Footer.jsx'
import HomePage           from './pages/HomePage.jsx'
import WorkPage           from './pages/WorkPage.jsx'
import AboutPage          from './pages/AboutPage.jsx'
import SkillsPage         from './pages/SkillsPage.jsx'
import BlogPage           from './pages/BlogPage.jsx'
import ContactPage        from './pages/ContactPage.jsx'

const PAGE_MAP = {
  Home: HomePage, Work: WorkPage, About: AboutPage,
  Skills: SkillsPage, Blog: BlogPage, Contact: ContactPage,
}

function AppInner() {
  const [page, setPage] = useState('Home')

  const handleNav = useCallback(dest => {
    setPage(dest)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const PageComponent = PAGE_MAP[page] ?? HomePage

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', transition: 'background .3s' }}>
      <GrainOverlay />
      <Nav active={page} onNav={handleNav} />
      <main><PageComponent onNav={handleNav} /></main>
      <Footer onNav={handleNav} />
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <AppInner />
    </ThemeProvider>
  )
}
