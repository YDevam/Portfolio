import { useEffect, useRef } from 'react'

export default function SculptureCanvas() {
  const canvasRef = useRef(null)
  const rafRef    = useRef(null)
  const mouseRef  = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let t = 0

    const resize = () => {
      canvas.width  = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const onMouse = e => {
      const r = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: (e.clientX - r.left) / r.width  - 0.5,
        y: (e.clientY - r.top)  / r.height - 0.5,
      }
    }
    window.addEventListener('mousemove', onMouse)

    // Read accent colour from CSS variable each frame so it reacts to theme changes
    function getAccent() {
      return getComputedStyle(document.documentElement).getPropertyValue('--cyan').trim() || '#FF2233'
    }
    function getBlue() {
      return getComputedStyle(document.documentElement).getPropertyValue('--blue').trim() || '#880022'
    }

    function project(x, y, z, rx, ry) {
      const x1 =  x * Math.cos(ry) + z * Math.sin(ry)
      const z1 = -x * Math.sin(ry) + z * Math.cos(ry)
      const y2 =  y * Math.cos(rx) - z1 * Math.sin(rx)
      const z2 =  y * Math.sin(rx) + z1 * Math.cos(rx)
      const fov   = 500
      const scale = fov / (fov + z2 + 180)
      return { px: x1 * scale, py: y2 * scale, z: z2, s: scale }
    }

    function drawIco(cx, cy, r, rx, ry, color, alpha, lw = 1) {
      const phi  = (1 + Math.sqrt(5)) / 2
      const norm = Math.sqrt(1 + phi * phi)
      const base = [
        [-1,phi,0],[1,phi,0],[-1,-phi,0],[1,-phi,0],
        [0,-1,phi],[0,1,phi],[0,-1,-phi],[0,1,-phi],
        [phi,0,-1],[phi,0,1],[-phi,0,-1],[-phi,0,1],
      ]
      const edges = [
        [0,1],[0,5],[0,7],[0,10],[0,11],[1,5],[1,7],[1,8],[1,9],
        [2,3],[2,4],[2,6],[2,10],[2,11],[3,4],[3,6],[3,8],[3,9],
        [4,5],[4,9],[4,11],[5,9],[5,11],[6,7],[6,8],[6,10],
        [7,8],[7,10],[8,9],[10,11],
      ]
      const projected = base.map(([bx, by, bz]) => {
        const p = project(bx / norm * r, by / norm * r, bz / norm * r, rx, ry)
        return { px: p.px + cx, py: p.py + cy, z: p.z }
      })
      ctx.strokeStyle = color
      ctx.lineWidth   = lw
      edges.forEach(([a, b]) => {
        const A = projected[a], B = projected[b]
        const fade = Math.max(0.12, (A.z + B.z) / (2 * r) + 0.7)
        ctx.globalAlpha = alpha * Math.min(1, fade)
        ctx.beginPath(); ctx.moveTo(A.px, A.py); ctx.lineTo(B.px, B.py); ctx.stroke()
      })
      ctx.globalAlpha = 1
    }

    function drawRing(cx, cy, r, rx, ry, color, alpha) {
      const segs = 72, pts = []
      for (let i = 0; i < segs; i++) {
        const a = (i / segs) * Math.PI * 2
        const p = project(Math.cos(a) * r, 0, Math.sin(a) * r, rx, ry)
        pts.push({ px: p.px + cx, py: p.py + cy, z: p.z })
      }
      ctx.strokeStyle = color; ctx.lineWidth = 1.2
      for (let i = 0; i < segs; i++) {
        const A = pts[i], B = pts[(i + 1) % segs]
        const fade = Math.max(0.05, (A.z + B.z) / (2 * r) + 0.65)
        ctx.globalAlpha = alpha * Math.min(1, fade)
        ctx.beginPath(); ctx.moveTo(A.px, A.py); ctx.lineTo(B.px, B.py); ctx.stroke()
      }
      ctx.globalAlpha = 1
    }

    function drawParticles(cx, cy, mx, my) {
      const n = 160
      const accent = getAccent()
      for (let i = 0; i < n; i++) {
        const seed  = i * 2.399
        const phi2  = Math.acos(1 - 2 * (i + 0.5) / n)
        const theta = seed
        const br    = 155 + Math.sin(t * 0.8 + i * 0.3) * 8
        const px    = Math.sin(phi2) * Math.cos(theta) * br
        const py    = Math.sin(phi2) * Math.sin(theta) * br
        const pz    = Math.cos(phi2) * br
        const p     = project(px, py, pz, t * 0.18 + my * 0.3, t * 0.22 + mx * 0.3)
        const al    = Math.max(0, (p.z + br) / (br * 2) * 0.7)
        const sz    = Math.max(0.5, p.s * 1.2)
        ctx.globalAlpha = al
        ctx.fillStyle   = accent
        ctx.beginPath(); ctx.arc(p.px + cx, p.py + cy, sz, 0, Math.PI * 2); ctx.fill()
      }
      ctx.globalAlpha = 1
    }

    function tick() {
      const W = canvas.width, H = canvas.height, cx = W / 2, cy = H / 2
      const { x: mx, y: my } = mouseRef.current
      const accent = getAccent()
      const blue   = getBlue()

      ctx.clearRect(0, 0, W, H)

      const g = ctx.createRadialGradient(cx, cy, 10, cx, cy, 220)
      g.addColorStop(0, 'rgba(255,34,51,0.07)')
      g.addColorStop(1, 'transparent')
      ctx.fillStyle = g; ctx.fillRect(0, 0, W, H)

      const rx = t * 0.22 + my * 0.4
      const ry = t * 0.33 + mx * 0.4

      drawParticles(cx, cy, mx, my)
      drawRing(cx, cy, 185, Math.PI / 3.2 + rx * 0.5, ry * 0.7 + t * 0.11, accent, 0.32)
      drawRing(cx, cy, 155, Math.PI / 4.5 + rx * 0.4, ry * 0.5 - t * 0.08, blue,   0.22)
      drawIco(cx, cy, 130, rx,          ry,          accent, 0.55, 1.1)
      drawIco(cx, cy, 82,  -rx * 1.2,  -ry * 0.9,   blue,   0.38, 0.9)
      drawIco(cx, cy, 40,   rx * 1.8,   ry * 1.5,   accent, 0.75, 1.4)

      ctx.globalAlpha = 0.9
      const cg = ctx.createRadialGradient(cx, cy, 0, cx, cy, 18)
      cg.addColorStop(0, 'rgba(255,34,51,0.9)')
      cg.addColorStop(1, 'transparent')
      ctx.fillStyle = cg; ctx.beginPath(); ctx.arc(cx, cy, 18, 0, Math.PI * 2); ctx.fill()
      ctx.globalAlpha = 1

      t += 0.007
      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouse)
    }
  }, [])

  return <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />
}
