import { useTheme } from '../context/ThemeContext.jsx'

const FOOTER_COLS = [
  { title: 'Navigation', links: ['Home','Work','About','Skills','Blog','Contact'], navigate: true },
  { title: 'Connect',    links: ['GitHub','LinkedIn','Twitter','Resume PDF'], navigate: false },
  { title: 'Services',   links: ['Web Development','UI/UX Design','Design Systems','Performance Audits','Consulting'], navigate: false },
]

export default function Footer({ onNav }) {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <footer style={{
      background: 'var(--bg2)',
      borderTop: `1px solid ${isDark ? 'rgba(255,34,51,0.12)' : 'rgba(204,10,30,0.1)'}`,
      padding: '56px 60px 32px',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div className="footer-grid" style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: 40, marginBottom: 48,
        }}>
          {/* Brand */}
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: 11, marginBottom: 18 }}>
              <div style={{
                width: 36, height: 36, borderRadius: 9,
                background: 'linear-gradient(135deg,var(--cyan),var(--blue))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--ff-d)', fontWeight: 800, fontSize: 13, color: '#fff',
                boxShadow: '0 0 18px rgba(255,34,51,0.28)',
              }}>DY</div>
              <span style={{ fontFamily: 'var(--ff-d)', fontWeight: 600, fontSize: 15, letterSpacing: '.045em', color: 'var(--text)' }}>
                Devam Yadav
              </span>
            </div>
            <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.7, maxWidth: 280 }}>
              Full stack developer building fast, beautiful, and durable web products.
            </p>
          </div>

          {/* Link columns */}
          {FOOTER_COLS.map(col => (
            <div key={col.title}>
              <h4 style={{
                fontFamily: 'var(--ff-d)', fontWeight: 700, fontSize: 11,
                letterSpacing: '.15em', color: 'var(--muted)', marginBottom: 18,
              }}>{col.title.toUpperCase()}</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {col.links.map(link => (
                  <button key={link} onClick={() => col.navigate && onNav(link)} style={{
                    background: 'none', border: 'none',
                    cursor: col.navigate ? 'pointer' : 'default',
                    textAlign: 'left', padding: 0,
                    fontSize: 14, color: 'var(--muted)',
                    transition: 'color .2s', fontFamily: 'var(--ff-b)',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
                  >{link}</button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ height: 1, background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.07)', marginBottom: 28 }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
          <span style={{ fontSize: 13, color: 'var(--muted)' }}>
            <span style={{
              display: 'inline-block', width: 6, height: 6, borderRadius: '50%',
              background: 'var(--cyan)', boxShadow: '0 0 6px var(--cyan)',
              marginRight: 8, verticalAlign: 'middle',
            }} />
            © 2025 Devam Yadav — Built with React + Express.
          </span>
          <span style={{ fontSize: 13, color: 'var(--muted)' }}>
            Full Stack Developer
          </span>
        </div>
      </div>
    </footer>
  )
}
