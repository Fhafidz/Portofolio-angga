import { motion } from 'framer-motion'

/* ─────────────────────────────────────────────────────────────
   Diagonal F1 speed streaks
   Garis mint miring (sesuai sudut clip-path situs), variasi tebal,
   ada 1–2 garis "hero" yang lebih terang.
───────────────────────────────────────────────────────────── */
const diagonalLines = [
  { id: 1, top: '8%',  width: '24vw', height: 1, opacity: 0.45, duration: 6,   delay: 0   },
  { id: 2, top: '20%', width: '16vw', height: 1, opacity: 0.3,  duration: 8,   delay: 1.5 },
  { id: 3, top: '32%', width: '34vw', height: 2, opacity: 0.7,  duration: 5,   delay: 0.8 }, // hero line
  { id: 4, top: '46%', width: '18vw', height: 1, opacity: 0.25, duration: 9,   delay: 2.4 },
  { id: 5, top: '58%', width: '28vw', height: 1, opacity: 0.4,  duration: 6.5, delay: 0.4 },
  { id: 6, top: '70%', width: '40vw', height: 3, opacity: 0.6,  duration: 4.5, delay: 1.8 }, // hero line
  { id: 7, top: '82%', width: '14vw', height: 1, opacity: 0.3,  duration: 7.5, delay: 3   },
  { id: 8, top: '92%', width: '22vw', height: 1, opacity: 0.45, duration: 5.5, delay: 1.2 },
]

export function DiagonalStreaks() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
      <div
        className="absolute inset-[-20%]"
        style={{ transform: 'rotate(-18deg)' }}
      >
        {diagonalLines.map((line) => (
          <motion.span
            key={line.id}
            className="absolute"
            style={{
              top: line.top,
              width: line.width,
              height: line.height,
              background: 'linear-gradient(90deg, transparent, #2DEFD0, transparent)',
              opacity: line.opacity,
              boxShadow: line.height > 1 ? '0 0 12px rgba(45,239,208,0.5)' : 'none',
            }}
            initial={{ x: '-50vw' }}
            animate={{ x: '160vw' }}
            transition={{ duration: line.duration, delay: line.delay, repeat: Infinity, ease: 'linear' }}
          />
        ))}
      </div>
    </div>
  )
}
