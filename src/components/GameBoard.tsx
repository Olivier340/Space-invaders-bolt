import React, { useState, useEffect, useRef } from 'react'
import Player from './Player'
import Enemies from './Enemies'
import Bullet from './Bullet'

interface GameProps {
  score: number
  gameOver: boolean
  startGame: () => void
}

export default function GameBoard({ score, gameOver, startGame }: GameProps) {
  const [playerPos, setPlayerPos] = useState(0)
  const [bullets, setBullets] = useState<number[]>([])
  const gameBoardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setPlayerPos(prev => Math.max(0, prev - 1))
      }
      if (e.key === 'ArrowRight') {
        setPlayerPos(prev => Math.min(8, prev + 1))
      }
      if (e.key === ' ') {
        setBullets(prev => [...prev, playerPos])
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [playerPos])

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900">
      <div className="mb-4 text-white text-2xl">Score: {score}</div>
      <div
        ref={gameBoardRef}
        className="relative w-96 h-96 bg-gray-800 rounded-lg overflow-hidden"
      >
        <Player position={playerPos} />
        <Enemies />
        {bullets.map((bulletPos, index) => (
          <Bullet key={index} position={bulletPos} />
        ))}
        {gameOver && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-white text-center">
              <h2 className="text-4xl mb-4">Game Over!</h2>
              <button
                onClick={startGame}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Play Again
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default GameBoard
