import React, { useMemo } from 'react'

export default function HeartBackground({ count = 22 }: { count?: number }) {
  // Generate randomized heart data once
  const hearts = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      const left = Math.random() * 100;                // % horizontal
      const size = 14 + Math.random() * 40;            // px
      const delay = Math.random() * 6;                 // s
      const duration = 6 + Math.random() * 8;          // s
      const opacity = 0.2 + Math.random() * 0.6;       // opacity range
      const rotate = (Math.random() - 0.5) * 40;       // deg tilt
      const hueShift = Math.random() * 50 - 25;        // color variation
      return { id: `heart-${i}`, left, size, delay, duration, opacity, rotate, hueShift };
    });
  }, [count]);

  return (
    <div className="heart-bg" aria-hidden>
      {hearts.map(h => (
        <span
          key={h.id}
          className="heart"
          style={{
            left: `${h.left}%`,
            width: h.size,
            height: h.size,
            fontSize: `${h.size * 0.8}px`,
            opacity: h.opacity,
            animationDelay: `${h.delay}s, ${h.delay + 0.1}s`,
            animationDuration: `${h.duration}s, 700ms`,
            transform: `rotate(${h.rotate}deg)`,
            filter: `hue-rotate(${h.hueShift}deg)`,
          }}
        >
          ❤
        </span>
      ))}
    </div>
  );
}
