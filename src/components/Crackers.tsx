import React, { useMemo } from 'react'
import './Crackers.css'

export default function Crackers() {
  // Create a set of confetti pieces with randomized properties
  const pieces = useMemo(() => {
    const count = 40
    return Array.from({ length: count }).map((_, i) => ({
      id: `confetti-${i}`,
      left: Math.random() * 100,
      // Start near the bottom so pieces rise up
      top: 80 + Math.random() * 15, // 80-95% from top (bottom of screen)
      delay: Math.random() * 6,
      duration: 2 + Math.random() * 3,
      size: 8 + Math.random() * 14,
      rotate: Math.random() * 360,
      colorIdx: Math.floor(Math.random() * 5),
    }))
  }, [])

  return (
    <div className="crackers" aria-hidden="true">
      {pieces.map(p => (
        <span
          key={p.id}
          className={`confetti confetti-color-${p.colorIdx}`}
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            width: `${p.size}px`,
            height: `${p.size * 1.4}px`,
            transform: `rotate(${p.rotate}deg)`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  )
}
