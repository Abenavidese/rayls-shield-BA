'use client'

import { useEffect, useRef } from 'react'

export function GeometricBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    let animationFrame: number
    let time = 0

    const drawGeometricLines = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.strokeStyle = '#F4FF4A'
      ctx.lineWidth = 1

      const spacing = 100
      const numLines = Math.ceil(canvas.width / spacing) + 1

      for (let i = 0; i < numLines; i++) {
        const x = i * spacing + (Math.sin(time + i * 0.5) * 20)
        
        ctx.globalAlpha = 0.1 + Math.sin(time + i * 0.3) * 0.05
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x + Math.sin(time + i) * 100, canvas.height)
        ctx.stroke()
      }

      // Draw floating triangles
      for (let i = 0; i < 5; i++) {
        const x = (canvas.width / 6) * i + Math.sin(time + i) * 50
        const y = canvas.height / 2 + Math.cos(time + i * 0.7) * 100
        const size = 30 + Math.sin(time + i * 0.5) * 10

        ctx.globalAlpha = 0.08
        ctx.beginPath()
        ctx.moveTo(x, y - size)
        ctx.lineTo(x + size, y + size)
        ctx.lineTo(x - size, y + size)
        ctx.closePath()
        ctx.stroke()
      }

      time += 0.01
      animationFrame = requestAnimationFrame(drawGeometricLines)
    }

    drawGeometricLines()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-30"
    />
  )
}
