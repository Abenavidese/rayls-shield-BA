'use client'

import { useEffect, useRef } from 'react'

export function GeometricMesh() {
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

    const drawMesh = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const gridSize = 80
      const cols = Math.ceil(canvas.width / gridSize) + 1
      const rows = Math.ceil(canvas.height / gridSize) + 1

      ctx.strokeStyle = '#F4FF4A'
      ctx.lineWidth = 0.5

      // Draw mesh lines
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * gridSize
          const y = j * gridSize
          const offset = Math.sin(time + i * 0.2 + j * 0.2) * 10

          ctx.globalAlpha = 0.1

          if (i < cols - 1) {
            ctx.beginPath()
            ctx.moveTo(x + offset, y)
            ctx.lineTo(x + gridSize + offset, y)
            ctx.stroke()
          }

          if (j < rows - 1) {
            ctx.beginPath()
            ctx.moveTo(x, y + offset)
            ctx.lineTo(x, y + gridSize + offset)
            ctx.stroke()
          }
        }
      }

      time += 0.02
      animationFrame = requestAnimationFrame(drawMesh)
    }

    drawMesh()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-20"
    />
  )
}
