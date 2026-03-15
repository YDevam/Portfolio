import { useState } from 'react'
import { PROJECTS, PROJECT_CATEGORIES } from '../data/index.js'

function ProjectDetail({ proj, onBack }) {
  return (
    <div className="page-enter page-padded" style={{ paddingTop: 110, minHeight: '100vh', padding: '110px 60px 80px' }}>
      <div style={{ maxWidth: 860, margin: '0 auto' }}>
        <button onClick={onBack} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--ff-d)', fontSize: 12, fontWeight: 700, letterSpacing: '.12em', color: 'var(--muted)', marginBottom: 32, display: 'flex', alignItems: 'center', gap: 8, transition: 'color .2s' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}>
          ← BACK TO WORK
        </button>

        <div style={{ height: 5, width: 80, background: `linear-gradient(90deg,${proj.color},transparent)`, borderRadius: 3, marginBottom: 24 }} />
        <span className="tag" style={{ borderColor: `${proj.color}44`, color: proj.color, background: `${proj.color}11`, marginBottom: 20, display: 'inline-block' }}>{proj.category}</span>

        <h1 style={{ fontFamily: 'var(--ff-d)', fontWeight: 800, fontSize: 'clamp(40px,7vw,88px)', letterSpacing: '-.05em', lineHeight: 0.92, marginBottom: 28, background: `linear-gradient(135deg,var(--text),${proj.color})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{proj.title}</h1>
        <p style={{ fontSize: 18, color: 'var(--muted)', lineHeight: 1.7, fontWeight: 300, maxWidth: 640, marginBottom: 48 }}>{proj.desc}</p>

        <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18, marginBottom: 48 }}>
          {proj.metrics.map(m => (
            <div key={m.label} style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: 16, padding: '24px 22px' }}>
              <div style={{ fontFamily: 'var(--ff-d)', fontWeight: 800, fontSize: 36, letterSpacing: '-.04em', color: proj.color, marginBottom: 6 }}>{m.val}</div>
              <div style={{ fontSize: 12, color: 'var(--muted)', letterSpacing: '.06em' }}>{m.label.toUpperCase()}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 48 }}>
          {proj.tags.map(t => <span key={t} className="tag gray">{t}</span>)}
        </div>

        <div style={{ background: 'var(--card-bg)', border: `1px solid ${proj.color}22`, borderRadius: 20, padding: 32, position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: -60, right: -60, width: 200, height: 200, background: `radial-gradient(circle,${proj.color}12,transparent 65%)`, pointerEvents: 'none' }} />
          <h3 style={{ fontFamily: 'var(--ff-d)', fontWeight: 700, fontSize: 18, marginBottom: 14, color: 'var(--text)' }}>About this project</h3>
          <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.75 }}>{proj.title} was built over the course of {proj.year === '2024' ? '6' : '8'} months as a {proj.category.toLowerCase()} solution. The architecture prioritises scalability and developer experience using modern tooling throughout. Every decision was driven by performance benchmarks and real user feedback.</p>
          <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.75, marginTop: 14 }}>The biggest challenge was ensuring sub-second response times at scale — solved through careful caching strategies, optimistic UI updates, and a microservice approach to the backend layer.</p>
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ proj, index, onClick }) {
  return (
    <div className="card-hover" onClick={onClick} style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: 20, overflow: 'hidden', animation: `fadeUp .5s ${index * 0.07}s both` }}>
      <div style={{ height: 4, background: `linear-gradient(90deg,${proj.color},transparent)` }} />
      <div style={{ height: 140, background: 'var(--bg2)', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse 80% 80% at 50% 50%,${proj.color}15 0%,transparent 70%)` }} />
        <div style={{ width: 72, height: 72, borderRadius: '50%', border: `2px solid ${proj.color}55`, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
          <div style={{ width: 40, height: 40, borderRadius: '50%', border: `1.5px solid ${proj.color}88`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: proj.color, boxShadow: `0 0 12px ${proj.color}` }} />
          </div>
        </div>
        <div style={{ position: 'absolute', top: 14, left: 14 }}>
          <span className="tag" style={{ borderColor: `${proj.color}44`, color: proj.color, background: `${proj.color}11` }}>{proj.category}</span>
        </div>
        <div style={{ position: 'absolute', top: 14, right: 14, fontFamily: 'var(--ff-d)', fontSize: 11, color: 'var(--muted)', fontWeight: 500 }}>{proj.year}</div>
      </div>
      <div style={{ padding: '22px 24px 24px' }}>
        <h3 style={{ fontFamily: 'var(--ff-d)', fontWeight: 800, fontSize: 23, letterSpacing: '-.03em', marginBottom: 8, color: 'var(--text)' }}>{proj.title}</h3>
        <p style={{ fontSize: 13.5, color: 'var(--muted)', lineHeight: 1.6, marginBottom: 16 }}>{proj.desc}</p>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 18 }}>
          {proj.tags.map(t => <span key={t} className="tag gray">{t}</span>)}
        </div>
        <div style={{ display: 'flex', gap: 16 }}>
          {proj.metrics.map(m => (
            <div key={m.label}>
              <div style={{ fontFamily: 'var(--ff-d)', fontWeight: 800, fontSize: 18, color: proj.color, letterSpacing: '-.02em' }}>{m.val}</div>
              <div style={{ fontSize: 11, color: 'var(--muted)', letterSpacing: '.04em' }}>{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function WorkPage({ onNav }) {
  const [filter,   setFilter]   = useState('All')
  const [selected, setSelected] = useState(null)
  const visible = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === filter)
  if (selected) return <ProjectDetail proj={selected} onBack={() => setSelected(null)} />

  return (
    <div className="page-enter page-padded" style={{ paddingTop: 110, minHeight: '100vh', padding: '110px 60px 80px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <p style={{ fontFamily: 'var(--ff-d)', fontSize: 11, fontWeight: 700, letterSpacing: '.18em', color: 'var(--cyan)', marginBottom: 16 }}>SELECTED WORK</p>
        <h1 style={{ fontFamily: 'var(--ff-d)', fontWeight: 800, fontSize: 'clamp(38px,6vw,76px)', letterSpacing: '-.04em', lineHeight: 1, marginBottom: 16, background: 'linear-gradient(135deg,var(--text) 30%,var(--cyan))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
          Projects &amp; Case Studies
        </h1>
        <p style={{ fontSize: 17, color: 'var(--muted)', fontWeight: 300, lineHeight: 1.6, maxWidth: 560, marginBottom: 44 }}>A curated collection of work spanning full-stack apps, design systems, 3D visualisations, and high-performance APIs.</p>

        {/* Filter chips */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 48 }}>
          {PROJECT_CATEGORIES.map(cat => (
            <button key={cat} onClick={() => setFilter(cat)} style={{ fontFamily: 'var(--ff-d)', fontSize: 11, fontWeight: 700, letterSpacing: '.1em', padding: '8px 18px', borderRadius: 30, cursor: 'pointer', transition: 'all .2s', background: filter === cat ? 'rgba(255,34,51,0.12)' : 'var(--card-bg)', border: filter === cat ? '1px solid rgba(255,34,51,0.45)' : '1px solid var(--card-border)', color: filter === cat ? 'var(--cyan)' : 'var(--muted)' }}>
              {cat}
            </button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: 22 }}>
          {visible.map((proj, i) => <ProjectCard key={proj.id} proj={proj} index={i} onClick={() => setSelected(proj)} />)}
        </div>
      </div>
    </div>
  )
}
