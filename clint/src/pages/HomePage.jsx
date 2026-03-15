import SculptureCanvas from '../components/SculptureCanvas.jsx'
import DeviceFrame     from '../components/DeviceFrame.jsx'
import SectionDivider  from '../components/SectionDivider.jsx'
import { STATS }       from '../data/index.js'

const FLOAT_TAGS = [
  { label: 'NEURAL NET', style: { top: '19%', left: '7%' } },
  { label: '3D ENGINE',  style: { bottom: '26%', right: '6%',  animationDelay: '2s' } },
  { label: 'WEBGL 2.0',  style: { top: '53%',   left: '4%',   animationDelay: '1s' } },
  { label: 'SHADER FX',  style: { top: '32%',   right: '8%',  animationDelay: '3s' } },
]

const CARD_ROWS = [
  ['Email',      'devamyadav2006@gmail.com',        true ],
  ['Location',   'India',                   false],
  ['Stack',      'React · Node.js ',    false],
  ['GitHub',     'github.com/Tech-Devam',      true ],
  ['Experience', '2+ Years',                false],
]

export default function HomePage({ onNav }) {
  return (
    <div className="page-enter" style={{ paddingTop: 77 }}>

      {/* ── Hero ── */}
      <section className="hero-split" style={{ display: 'flex', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
          background: 'radial-gradient(ellipse 58% 65% at 72% 42%,rgba(255,34,51,0.07) 0%,transparent 68%),' +
                      'radial-gradient(ellipse 48% 55% at 18% 68%,rgba(136,0,34,0.05) 0%,transparent 68%)',
        }} />

        {/* Left */}
        <div className="hero-left-panel" style={{ flex: '0 0 50%', width: '50%', padding: '64px 44px 60px 60px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 26, position: 'relative', zIndex: 2 }}>

          {/* Badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 9, width: 'fit-content', background: 'rgba(255,34,51,0.07)', border: '1px solid rgba(255,34,51,0.3)', borderRadius: 40, padding: '7px 17px', fontFamily: 'var(--ff-d)', fontSize: 11, fontWeight: 700, letterSpacing: '.14em', color: 'var(--cyan)', animation: 'fadeUp .6s .05s both' }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--cyan)', boxShadow: '0 0 8px var(--cyan)', display: 'block', animation: 'pulseGlow 2.2s ease-in-out infinite' }} />
            AVAILABLE FOR WORK
          </div>

          {/* Hello */}
          <div style={{ animation: 'fadeUp .6s .2s both' }}>
            <h1 className="hello-text" style={{ fontFamily: 'var(--ff-d)', fontWeight: 800, fontSize: 'clamp(72px,9vw,128px)', lineHeight: 0.87, letterSpacing: '-.05em', background: 'linear-gradient(138deg,var(--text) 10%,var(--muted) 48%,var(--cyan) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Hello<span style={{ display: 'inline-block', WebkitTextFillColor: 'var(--cyan)', animation: 'blink 1.1s step-end infinite' }}>_</span>
            </h1>
          </div>

          {/* Sub */}
          <div style={{ animation: 'fadeUp .6s .35s both' }}>
            <p style={{ fontSize: 22, fontWeight: 300, color: 'var(--muted)' }}>
              I'm <strong style={{ fontWeight: 600, color: 'var(--text)' }}>Devam Yadav</strong>
            </p>
            <p style={{ fontFamily: 'var(--ff-d)', fontSize: 16, fontWeight: 500, color: 'var(--cyan)', letterSpacing: '.025em', marginTop: 4 }}>
              Full Stack Developer
            </p>
          </div>

          {/* Glass card */}
          <div className="glass-card" style={{ background: 'var(--glass)', backdropFilter: 'blur(36px)', WebkitBackdropFilter: 'blur(36px)', border: '1px solid var(--border-c)', borderRadius: 22, padding: '24px 26px', maxWidth: 385, position: 'relative', overflow: 'hidden', animation: 'fadeUp .6s .5s both' }}>
            <div style={{ position: 'absolute', top: -70, right: -60, width: 170, height: 170, background: 'radial-gradient(circle,rgba(255,34,51,0.12),transparent 65%)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: -50, left: -50, width: 140, height: 140, background: 'radial-gradient(circle,rgba(136,0,34,0.1),transparent 65%)', pointerEvents: 'none' }} />

            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18, position: 'relative', zIndex: 1 }}>
              <div style={{ width: 48, height: 48, borderRadius: 13, flexShrink: 0, background: 'linear-gradient(135deg,var(--cyan),var(--blue))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--ff-d)', fontWeight: 800, fontSize: 17, color: '#fff', boxShadow: '0 0 22px rgba(255,34,51,0.3)' }}>DY</div>
              <div>
                <div style={{ fontFamily: 'var(--ff-d)', fontWeight: 700, fontSize: 17, color: 'var(--text)' }}>Devam Yadav</div>
                <div style={{ fontSize: 12.5, color: 'var(--muted)', marginTop: 2 }}>· Full Stack Engineer</div>
              </div>
              <div style={{ marginLeft: 'auto', background: 'rgba(255,34,51,0.1)', border: '1px solid rgba(255,34,51,0.38)', borderRadius: 20, padding: '5px 12px', fontFamily: 'var(--ff-d)', fontSize: 10, fontWeight: 700, color: 'var(--cyan)', letterSpacing: '.09em', whiteSpace: 'nowrap' }}>OPEN</div>
            </div>

            <div style={{ height: 1, background: 'linear-gradient(90deg,rgba(255,34,51,0.4),transparent)', marginBottom: 15, position: 'relative', zIndex: 1 }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20, position: 'relative', zIndex: 1 }}>
              {CARD_ROWS.map(([label, value, accent]) => (
                <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 13.5 }}>
                  <span style={{ color: 'var(--muted)' }}>{label}</span>
                  <span style={{ color: accent ? 'var(--cyan)' : 'var(--text)' }}>{value}</span>
                </div>
              ))}
            </div>

            <button className="btn-ghost" style={{ width: '100%', borderRadius: 12, position: 'relative', zIndex: 1 }} onClick={() => onNav('Contact')}>
              GET IN TOUCH →
            </button>
          </div>
        </div>

        {/* Right — Canvas */}
        <div className="hero-right-panel" style={{ flex: '0 0 50%', width: '50%', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>
          <div style={{ position: 'absolute', width: '65%', height: '65%', borderRadius: '50%', background: 'radial-gradient(circle,rgba(255,34,51,0.1) 0%,transparent 68%)', pointerEvents: 'none' }} />
          <SculptureCanvas />
          {FLOAT_TAGS.map(({ label, style }) => (
            <div key={label} style={{ position: 'absolute', background: 'rgba(255,34,51,0.07)', border: '1px solid rgba(255,34,51,0.25)', borderRadius: 8, padding: '6px 14px', fontFamily: 'var(--ff-d)', fontSize: 10.5, fontWeight: 700, color: 'var(--cyan)', letterSpacing: '.1em', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', animation: 'floatBob 4s ease-in-out infinite', ...style }}>
              {label}
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <div className="stats-bar-inner" style={{ display: 'flex', justifyContent: 'center', background: 'var(--bg2)', borderTop: '1px solid var(--card-border)', borderBottom: '1px solid var(--card-border)' }}>
        {STATS.map(({ num, label }) => (
          <div key={label} style={{ flex: 1, maxWidth: 220, padding: '28px 24px', textAlign: 'center', borderRight: '1px solid var(--card-border)' }}>
            <div style={{ fontFamily: 'var(--ff-d)', fontSize: 38, fontWeight: 800, letterSpacing: '-.04em', lineHeight: 1, background: 'linear-gradient(135deg,var(--text),var(--cyan))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{num}</div>
            <div style={{ fontSize: 11, color: 'var(--muted)', letterSpacing: '.06em', marginTop: 4 }}>{label}</div>
          </div>
        ))}
      </div>

      {/* Responsive Preview */}
      <section className="section-padded" style={{ padding: '52px 60px 72px', background: 'var(--bg2)', borderTop: '1px solid var(--card-border)' }}>
        <div style={{ marginBottom: 44 }}><SectionDivider label="RESPONSIVE PREVIEW" /></div>
        <div className="devices-row" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: 28 }}>
          <DeviceFrame type="desktop" label="Desktop — 1440px" />
          <DeviceFrame type="tablet"  label="Tablet — 768px"   />
          <DeviceFrame type="mobile"  label="Mobile — 390px"   />
        </div>
      </section>

      {/* CTA */}
      <section className="section-padded" style={{ padding: '64px 60px', textAlign: 'center', background: 'var(--bg)', borderTop: '1px solid var(--card-border)' }}>
        <p style={{ fontFamily: 'var(--ff-d)', fontSize: 11, fontWeight: 700, letterSpacing: '.18em', color: 'var(--cyan)', marginBottom: 20 }}>
          READY TO BUILD SOMETHING?
        </p>
        <h2 style={{ fontFamily: 'var(--ff-d)', fontSize: 'clamp(32px,5vw,62px)', fontWeight: 800, letterSpacing: '-.03em', lineHeight: 1.05, marginBottom: 28, background: 'linear-gradient(135deg,var(--text) 30%,var(--cyan))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
          Let's create something<br />extraordinary together.
        </h2>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="btn-primary" onClick={() => onNav('Contact')}>Start a Project →</button>
          <button className="btn-ghost"   onClick={() => onNav('Work')}>View My Work</button>
        </div>
      </section>
    </div>
  )
}
