import React from 'react'

export default function Player({ position }: { position: number }) {
  return (
    <div
      style={{ left: `${position * 10}%` }}
      className="absolute bottom-4 w-8 h-8 bg-blue-500 rounded transition-all duration-100"
    />
  )
}
