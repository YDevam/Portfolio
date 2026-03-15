import { useEffect, useRef } from 'react'

export default function SkillBar({ name, level, delay = 0 }) {
  const barRef = useRef(null)

  useEffect(() => {
    const el = barRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.style.width = `${level}%`; observer.disconnect() } },
      { threshold: 0.1 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [level])

  return (
    <div style={{ marginBottom: 18 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
        <span style={{ fontSize: 14, color: 'var(--text)' }}>{name}</span>
        <span style={{ fontFamily: 'var(--ff-d)', fontSize: 12, fontWeight: 700, color: 'var(--cyan)', letterSpacing: '.05em' }}>
          {level}%
        </span>
      </div>
      <div style={{ height: 4, background: 'var(--card-border)', borderRadius: 4, overflow: 'hidden' }}>
        <div ref={barRef} style={{
          height: '100%', width: 0, borderRadius: 4,
          background: 'linear-gradient(90deg,var(--cyan),var(--blue))',
          transition: `width 1.2s ${delay}s cubic-bezier(.4,0,.2,1)`,
          boxShadow: '0 0 8px rgba(255,34,51,0.4)',
        }} />
      </div>
    </div>
  )
}
