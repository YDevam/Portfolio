import { useEffect, useRef } from 'react'

/**
 * Animated film-grain texture rendered on a fixed canvas overlay.
 * Redraws every ~90ms for a subtle organic feel.
 */
export default function GrainOverlay() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let timer

    function draw() {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
      const imageData = ctx.createImageData(canvas.width, canvas.height)
      const data = imageData.data
      for (let i = 0; i < data.length; i += 4) {
        const v = (Math.random() * 255) | 0
        data[i] = data[i + 1] = data[i + 2] = v
        data[i + 3] = 10
      }
      ctx.putImageData(imageData, 0, 0)
      timer = setTimeout(() => requestAnimationFrame(draw), 90)
    }

    requestAnimationFrame(draw)
    return () => clearTimeout(timer)
  }, [])

  return (
    <canvas
      ref={ref}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999,
        opacity: 0.9,
      }}
    />
  )
}
