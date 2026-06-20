import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Preloader({ onComplete, lang }) {
  const [progress, setProgress] = useState(0)
  const [timecode, setTimecode] = useState('00:00:00:00')

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            onComplete()
          }, 600)
          return 100
        }
        
        const increment = Math.floor(Math.random() * 8) + 4
        return Math.min(prev + increment, 100)
      })
    }, 80)

    return () => clearInterval(interval)
  }, [onComplete])

  useEffect(() => {
    let frame = 0
    const timecodeInterval = setInterval(() => {
      frame += 1
      const ff = (frame % 24).toString().padStart(2, '0') // 24fps
      const ss = Math.floor((frame / 24) % 60).toString().padStart(2, '0')
      const mm = Math.floor((frame / 1440) % 60).toString().padStart(2, '0')
      setTimecode(`00:${mm}:${ss}:${ff}`)
    }, 41.67)

    return () => clearInterval(timecodeInterval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
      }}
      className="fixed inset-0 bg-[#0a0a0a] z-50 flex flex-col justify-center items-center p-8 select-none text-white overflow-hidden font-heading"
    >
      {/* Top Header Overlay: Minimal Timecode & Rec Dot */}
      <div className="absolute top-8 left-8 right-8 flex justify-between items-center text-[10px] tracking-[0.2em] font-heading text-white/40 uppercase">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff3b30] animate-pulse" />
          <span className="font-bold text-white/60">REC</span>
        </div>
        <div className="tabular-nums font-bold">
          {timecode}
        </div>
      </div>

      {/* Main Centered Content */}
      <div className="w-full max-w-md flex flex-col items-center text-center gap-10">
        
        {/* Typography */}
        <div className="flex flex-col items-center gap-3">
          <span className="text-mint font-heading font-bold text-xs tracking-[0.3em] uppercase">
            {lang === 'id' ? 'PORTOFOLIO SINEMATIK & FOTOGRAFI' : 'CINEMATIC & PHOTOGRAPHY PORTFOLIO'}
          </span>
          <h1 className="font-heading font-extrabold text-3xl md:text-4xl tracking-tight leading-none uppercase">
            ERLANGGA<br />PUTRA WIDANTA
          </h1>
          <p className="text-white/30 text-[10px] tracking-[0.15em] uppercase font-heading font-bold mt-1">
            {lang === 'id' ? 'MEMUAT SHOWREEL 2026' : 'LOADING SHOWREEL 2026'}
          </p>
        </div>

        {/* Progress Bar Container: Centered single thin line (1px) */}
        <div className="w-full flex flex-col gap-3">
          <div className="h-[1px] w-full bg-white/10 relative">
            <motion.div 
              className="h-full bg-mint"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut', duration: 0.15 }}
            />
          </div>

          {/* Status texts & percentage details */}
          <div className="flex justify-between items-center text-[9px] tracking-[0.2em] font-heading font-bold text-white/30 uppercase">
            <span>INITIALIZING</span>
            <span className="text-white font-extrabold tabular-nums">
              {progress.toString().padStart(3, '0')}/100
            </span>
          </div>
        </div>

      </div>
    </motion.div>
  )
}
