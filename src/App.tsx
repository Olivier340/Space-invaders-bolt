import React, { useState } from 'react'
import GameBoard from './components/GameBoard'

export default function App() {
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)

  const startGame = () => {
    setScore(0)
    setGameOver(false)
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <GameBoard score={score} gameOver={gameOver} startGame={startGame} />
    </div>
  )
}
