import { useState } from 'react'
import { motion } from 'framer-motion'
import { STACK_ICONS } from './stackIcons'

// Drive thumbnail sources — try in order if one fails to load
const thumbSources = (id) => [
  `https://lh3.googleusercontent.com/d/${id}=w1000`,
  `https://drive.google.com/thumbnail?id=${id}&sz=w1000`,
]

export default function VideoCard({ driveId, poster, title, category, description, stack, onClick }) {
  const sources = poster ? [poster] : thumbSources(driveId)
  const [srcIdx, setSrcIdx] = useState(0)
  const failed = srcIdx >= sources.length

  return (
    <motion.div
      className="group relative card-f1 overflow-hidden bg-f1-card card-f1-glow flex flex-col h-full cursor-pointer"
      onClick={onClick}
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden shrink-0 bg-gradient-to-br from-f1-card via-petronas/20 to-f1-black">
        {!failed && (
          <img
            src={sources[srcIdx]}
            alt={title}
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => setSrcIdx((i) => i + 1)}
            className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
          />
        )}
        {/* Dark overlay on hover for play affordance */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
        {/* Play badge — grey by default, mint on hover */}
        <div className="absolute inset-0 flex items-center justify-center z-[2] select-none pointer-events-none">
          <span className="w-14 h-14 rounded-full bg-white/15 backdrop-blur-sm text-white flex items-center justify-center text-xl font-bold transition-all duration-300 group-hover:bg-mint group-hover:text-f1-black group-hover:scale-110">
            ▶
          </span>
        </div>
      </div>

      {/* Info Content Container */}
      <div className="p-5 flex flex-col gap-3 flex-grow">
        <div className="flex items-center justify-between gap-2">
          {category && (
            <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5 font-heading font-extrabold text-[9px] text-mint uppercase tracking-wider">
              {category}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2 items-start">
          <div className="tag-f1 bg-mint text-f1-black px-3 py-1.5 font-heading font-extrabold text-xs md:text-sm uppercase tracking-wide">
            {title}
          </div>
          {description && (
            <p className="text-f1-silver font-body text-xs leading-relaxed line-clamp-2">
              {description}
            </p>
          )}
        </div>

        {/* Tech Stack badges */}
        {stack && stack.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-auto pt-2 border-t border-white/5">
            {stack.map((item, idx) => (
              <span key={idx} className="flex items-center gap-1.5 px-2 py-1 rounded bg-white/5 border border-white/5 font-heading font-extrabold text-[9px] text-white/80 tracking-wide uppercase">
                {STACK_ICONS[item] || null}
                {item}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}

