import React, { useMemo } from 'react'
import './FullPageHearts.css'

export default function FullPageHearts() {
  const hearts = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => ({
      id: `heart-${i}`,
      left: Math.random() * 100,
      delay: Math.random() * 4,
      duration: 10 + Math.random() * 5,
      size: 5 + Math.random() * 20,
      opacity: 0.6 + Math.random() * 0.4,
      swayAmount: (Math.random() - 0.5) * 150,
    }))
  }, [])

  return(
  <div className="full-page-hearts" aria-hidden="true">
    {hearts.map(heart => (
      <div
        key={heart.id}
        className="falling-heart"
        style={{
          left: `${heart.left}%`,
          animationDelay: `${heart.delay}s`,
          animationDuration: `${heart.duration}s`,
          fontSize: `${heart.size}px`,
          opacity: heart.opacity,
          '--sway-amount': `${heart.swayAmount}px`,
        } as React.CSSProperties & { '--sway-amount': string }}
      >
        🩷
      </div>
    ))}
  </div>
)

}
