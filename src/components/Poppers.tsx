import React, { useMemo } from 'react'
import './Poppers.css'

// Each popper launches a burst of confetti upward with a pop animation
export default function Poppers() {
  // Popper positions (bottom row)
  const poppers = useMemo(() => {
    return [15, 35, 55, 75].map((left, i) => ({
      id: `popper-${i}`,
      left,
      delay: i * 1.2,
    }))
  }, [])

  return (
    <div className="poppers" aria-hidden="true">
      {poppers.map(p => (
        <div
          key={p.id}
          className="popper-container"
          style={{ left: `${p.left}%`, animationDelay: `${p.delay}s` }}
        >
          <div className="popper">
            <div className="popper-body" />
            <div className="popper-neck" />
          </div>
          <div className="popper-burst" />
        </div>
      ))}
    </div>
  )
}
