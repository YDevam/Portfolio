import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext.jsx'
import { NAV_LINKS } from '../data/index.js'

/* ── Sun / Moon icons (pure SVG, no deps) ── */
function SunIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1"  x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22"  x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1"  y1="12" x2="3"  y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22"  y1="19.78" x2="5.64"  y2="18.36"/>
      <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22"/>
    </svg>
  )
}
function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/>
    </svg>
  )
}

export default function Nav({ active, onNav }) {
  const { theme, toggle } = useTheme()
  const [scrolled,    setScrolled]    = useState(false)
  const [mobileOpen,  setMobileOpen]  = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Close mobile menu on nav
  const handleNav = (link) => {
    onNav(link)
    setMobileOpen(false)
  }

  const isDark = theme === 'dark'

  const navBg = isDark
    ? (scrolled ? 'rgba(5,5,13,0.94)' : 'rgba(5,5,13,0.68)')
    : (scrolled ? 'rgba(250,248,245,0.97)' : 'rgba(250,248,245,0.88)')

  const borderColor = isDark
    ? 'rgba(255,255,255,0.06)'
    : 'rgba(0,0,0,0.08)'

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 300,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '16px 52px',
        background: navBg,
        backdropFilter: 'blur(28px)', WebkitBackdropFilter: 'blur(28px)',
        borderBottom: `1px solid ${borderColor}`,
        transition: 'background .35s, border-color .35s',
      }}>
        {/* ── Brand ── */}
        <button onClick={() => handleNav('Home')} style={{
          display: 'flex', alignItems: 'center', gap: 11,
          background: 'none', border: 'none', cursor: 'pointer',
        }}>
          <div style={{
            width: 36, height: 36, borderRadius: 9,
            background: 'linear-gradient(135deg,var(--cyan),var(--blue))',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--ff-d)', fontWeight: 800, fontSize: 13,
            color: '#fff', letterSpacing: '-0.03em',
            boxShadow: '0 0 18px rgba(255,34,51,0.35)',
          }}>DY</div>
          <span style={{
            fontFamily: 'var(--ff-d)', fontWeight: 600,
            fontSize: 15, letterSpacing: '.045em', color: 'var(--text)',
          }}>Portfolio</span>
        </button>

        {/* ── Desktop links ── */}
        <div className="nav-links-desktop" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {NAV_LINKS.map(link => (
            <button key={link} onClick={() => handleNav(link)} style={{
              background:   active === link ? 'rgba(255,34,51,0.09)'         : 'transparent',
              border:       active === link ? '1px solid rgba(255,34,51,0.3)' : '1px solid transparent',
              color:        active === link ? 'var(--cyan)' : 'var(--muted)',
              cursor: 'pointer',
              fontFamily: 'var(--ff-b)', fontSize: 13.5, fontWeight: 400,
              letterSpacing: '.03em', padding: '7px 14px',
              borderRadius: 30, transition: 'all .2s',
            }}>{link}</button>
          ))}
        </div>

        {/* ── Desktop right: theme toggle + CTA ── */}
        <div className="nav-cta-desktop" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {/* Theme toggle */}
          <button onClick={toggle} title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'} style={{
            width: 38, height: 38, borderRadius: '50%',
            border: `1px solid ${isDark ? 'rgba(255,34,51,0.3)' : 'rgba(204,10,30,0.25)'}`,
            background: isDark ? 'rgba(255,34,51,0.07)' : 'rgba(204,10,30,0.07)',
            color: 'var(--cyan)', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all .22s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = isDark ? 'rgba(255,34,51,0.16)' : 'rgba(204,10,30,0.14)' }}
          onMouseLeave={e => { e.currentTarget.style.background = isDark ? 'rgba(255,34,51,0.07)' : 'rgba(204,10,30,0.07)' }}
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>
          <button className="btn-primary" onClick={() => handleNav('Contact')}>Hire Me →</button>
        </div>

        {/* ── Mobile right: theme + hamburger ── */}
        <div className="nav-mobile-btn" style={{ display: 'none', alignItems: 'center', gap: 8 }}>
          <button onClick={toggle} style={{
            width: 36, height: 36, borderRadius: '50%',
            border: '1px solid rgba(255,34,51,0.3)',
            background: 'rgba(255,34,51,0.07)',
            color: 'var(--cyan)', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>

          {/* Hamburger */}
          <button onClick={() => setMobileOpen(o => !o)} style={{
            width: 36, height: 36, borderRadius: 9,
            border: '1px solid rgba(255,34,51,0.3)',
            background: mobileOpen ? 'rgba(255,34,51,0.12)' : 'rgba(255,34,51,0.07)',
            color: 'var(--text)', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'background .2s',
          }}>
            {mobileOpen ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="3" y1="6"  x2="21" y2="6"/>
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* ── Mobile dropdown menu ── */}
      {mobileOpen && (
        <div style={{
          position: 'fixed', top: 69, left: 0, right: 0, zIndex: 299,
          background: isDark ? 'rgba(5,5,13,0.97)' : 'rgba(250,248,245,0.98)',
          backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
          borderBottom: `1px solid ${isDark ? 'rgba(255,34,51,0.15)' : 'rgba(204,10,30,0.12)'}`,
          padding: '12px 20px 20px',
          animation: 'mobileMenuIn .22s ease both',
        }}>
          {NAV_LINKS.map(link => (
            <button key={link} onClick={() => handleNav(link)} style={{
              display: 'block', width: '100%', textAlign: 'left',
              background: active === link ? 'rgba(255,34,51,0.09)' : 'transparent',
              border: active === link ? '1px solid rgba(255,34,51,0.25)' : '1px solid transparent',
              borderRadius: 10, padding: '12px 16px', marginBottom: 6,
              color: active === link ? 'var(--cyan)' : 'var(--text)',
              fontFamily: 'var(--ff-b)', fontSize: 15, fontWeight: 400,
              letterSpacing: '.02em', cursor: 'pointer',
              transition: 'all .18s',
            }}>
              {link}
            </button>
          ))}
          <button className="btn-primary" onClick={() => handleNav('Contact')} style={{ width: '100%', marginTop: 8, borderRadius: 12 }}>
            Hire Me →
          </button>
        </div>
      )}
    </>
  )
}
