function MiniPage({ type }) {
  const isMobile  = type === 'mobile'
  const isDesktop = type === 'desktop'
  const height    = isDesktop ? 228 : isMobile ? 252 : 218

  return (
    <div style={{ background: 'var(--bg)', position: 'relative', overflow: 'hidden', height }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(ellipse 70% 60% at 68% 38%,rgba(255,34,51,0.09) 0%,transparent 68%)' }} />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: isMobile ? '6px 9px' : '8px 13px', borderBottom: '1px solid var(--card-border)', position: 'relative', zIndex: 1 }}>
        <div style={{ width: isMobile ? 14 : type === 'tablet' ? 16 : 19, height: isMobile ? 14 : type === 'tablet' ? 16 : 19, borderRadius: 4, background: 'linear-gradient(135deg,var(--cyan),var(--blue))' }} />
        {isDesktop && <div style={{ display: 'flex', gap: 8 }}>{['W','A','S'].map(l => <div key={l} style={{ width: 22, height: 3.5, borderRadius: 2, background: 'var(--muted)', opacity: 0.4 }} />)}</div>}
        <div style={{ width: isMobile ? 16 : 38, height: isMobile ? 11 : 14, borderRadius: isMobile ? 3 : 20, background: isMobile ? 'rgba(255,34,51,0.14)' : 'linear-gradient(135deg,var(--cyan),var(--blue))' }} />
      </div>
      <div style={{ display: 'flex', flexDirection: isDesktop ? 'row' : 'column', alignItems: 'center', gap: isMobile ? 7 : 8, padding: isMobile ? '10px 9px' : '13px', position: 'relative', zIndex: 1, height: 'calc(100% - 40px)', justifyContent: 'center' }}>
        {isDesktop ? (<>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <div style={{ width: 58, height: 28, borderRadius: 3, background: 'linear-gradient(135deg,var(--cyan),var(--blue))', opacity: 0.8 }} />
            <div style={{ width: 82, height: 5, borderRadius: 2, background: 'var(--muted)', opacity: 0.35 }} />
            <div style={{ width: 62, height: 5, borderRadius: 2, background: 'var(--cyan)', opacity: 0.45 }} />
            <div style={{ width: 130, height: 46, borderRadius: 6, marginTop: 5, background: 'var(--glass)', border: '1px solid var(--border-c)' }} />
          </div>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: 70, height: 70, borderRadius: '50%', border: '1.5px solid rgba(255,34,51,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--cyan)', boxShadow: '0 0 6px var(--cyan)' }} />
            </div>
          </div>
        </>) : (<>
          <div style={{ width: isMobile ? 38 : 50, height: isMobile ? 18 : 22, borderRadius: 2, background: 'linear-gradient(135deg,var(--cyan),var(--blue))', opacity: 0.8 }} />
          <div style={{ width: isMobile ? 74 : 88, height: 4.5, borderRadius: 2, background: 'var(--muted)', opacity: 0.35 }} />
          <div style={{ width: isMobile ? 56 : 66, height: 4.5, borderRadius: 2, background: 'var(--cyan)', opacity: 0.45 }} />
          <div style={{ width: isMobile ? 96 : '100%', height: isMobile ? 50 : 42, borderRadius: 6, background: 'var(--glass)', border: '1px solid var(--border-c)' }} />
          <div style={{ width: isMobile ? 46 : 58, height: isMobile ? 46 : 58, borderRadius: '50%', border: '1.5px solid rgba(255,34,51,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: isMobile ? 4 : 5, height: isMobile ? 4 : 5, borderRadius: '50%', background: 'var(--cyan)', boxShadow: '0 0 6px var(--cyan)' }} />
          </div>
        </>)}
      </div>
    </div>
  )
}

const Label = ({ c }) => <span style={{ fontFamily: 'var(--ff-d)', fontSize: 11, fontWeight: 500, letterSpacing: '.07em', color: 'var(--muted)' }}>{c}</span>

export default function DeviceFrame({ type, label }) {
  if (type === 'desktop') return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
      <Label c={label} />
      <div style={{ width: 420, background: 'var(--card-bg)', border: '1.5px solid var(--card-border)', borderRadius: '12px 12px 4px 4px', overflow: 'hidden', boxShadow: '0 24px 64px rgba(0,0,0,0.3),0 0 40px rgba(255,34,51,0.05)' }}>
        <div style={{ background: 'var(--bg2)', padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 6, borderBottom: '1px solid var(--card-border)' }}>
          {['#FF5F57','#FEBC2E','#28C840'].map(c => <div key={c} style={{ width: 6, height: 6, borderRadius: '50%', background: c }} />)}
          <div style={{ flex: 1, marginLeft: 8, background: 'var(--input-bg)', borderRadius: 4, padding: '3px 10px', fontSize: 9, color: 'var(--muted)' }}>devyash.dev</div>
        </div>
        <MiniPage type="desktop" />
        <div style={{ height: 6, background: 'var(--bg2)', borderTop: '1px solid var(--card-border)' }} />
      </div>
      <div style={{ width: 62, height: 11, background: 'var(--bg3)', borderRadius: '0 0 4px 4px' }} />
      <div style={{ width: 114, height: 3, background: 'var(--bg3)', borderRadius: 2 }} />
    </div>
  )
  if (type === 'tablet') return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
      <Label c={label} />
      <div style={{ width: 228, background: 'var(--card-bg)', border: '1.5px solid var(--card-border)', borderRadius: 17, overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.25)' }}>
        <div style={{ background: 'var(--bg2)', padding: 7, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 5, borderBottom: '1px solid var(--card-border)' }}>
          <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--muted)', opacity: 0.5 }} />
          <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--muted)', opacity: 0.3 }} />
        </div>
        <MiniPage type="tablet" />
        <div style={{ background: 'var(--bg2)', padding: 7, display: 'flex', justifyContent: 'center', borderTop: '1px solid var(--card-border)' }}>
          <div style={{ width: 24, height: 3, borderRadius: 3, background: 'var(--muted)', opacity: 0.4 }} />
        </div>
      </div>
    </div>
  )
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
      <Label c={label} />
      <div style={{ width: 122, background: 'var(--card-bg)', border: '1.5px solid var(--card-border)', borderRadius: 24, overflow: 'hidden', boxShadow: '0 18px 40px rgba(0,0,0,0.22)' }}>
        <div style={{ background: 'var(--bg2)', padding: 7, display: 'flex', justifyContent: 'center', borderBottom: '1px solid var(--card-border)' }}>
          <div style={{ width: 33, height: 5, borderRadius: 5, background: 'var(--muted)', opacity: 0.4 }} />
        </div>
        <MiniPage type="mobile" />
        <div style={{ background: 'var(--bg2)', padding: 6, display: 'flex', justifyContent: 'center', borderTop: '1px solid var(--card-border)' }}>
          <div style={{ width: 30, height: 3, borderRadius: 3, background: 'var(--muted)', opacity: 0.5 }} />
        </div>
      </div>
    </div>
  )
}
