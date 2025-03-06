import React, { useEffect } from 'react'

export default function Bullet({ position }: { position: number }) {
  useEffect(() => {
    const moveBullet = setInterval(() => {
      // Implement bullet movement logic
    }, 50)
    return () => clearInterval(moveBullet)
  }, [position])

  return (
    <div
      style={{ left: `${position * 10}%` }}
      className="absolute top-0 w-2 h-4 bg-yellow-400 rounded"
    />
  )
}
