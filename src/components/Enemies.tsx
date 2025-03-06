import React, { useState, useEffect } from 'react'

export default function Enemies() {
  const [enemyPos, setEnemyPos] = useState<number[]>([
    0, 1, 2, 3, 4, 5, 6, 7, 8
  ])
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    const moveEnemies = setInterval(() => {
      setEnemyPos(prev => {
        const newPositions = prev.map(pos => pos + direction)
        if (Math.min(...newPositions) <= 0 || Math.max(...newPositions) >= 8) {
          setDirection(prev => -prev)
          return prev.map(pos => pos + direction * 2)
        }
        return newPositions
      })
    }, 1000)

    return () => clearInterval(moveEnemies)
  }, [direction])

  return (
    <>
      {enemyPos.map((pos, index) => (
        <div
          key={index}
          style={{ left: `${pos * 10}%` }}
          className="absolute top-4 w-8 h-8 bg-red-500 rounded"
        />
      ))}
    </>
  )
}
