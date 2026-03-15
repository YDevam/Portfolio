export default function SectionDivider({ label }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
      <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg,transparent,rgba(255,34,51,0.4))' }} />
      <span style={{
        fontFamily: 'var(--ff-d)', fontSize: 11, fontWeight: 700,
        letterSpacing: '.2em', color: 'var(--cyan)', whiteSpace: 'nowrap',
      }}>
        {label}
      </span>
      <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg,rgba(255,34,51,0.4),transparent)' }} />
    </div>
  )
}
