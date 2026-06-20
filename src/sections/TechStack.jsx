import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import Reveal from '../components/Reveal'

const row1Tools = [
  {
    name: 'Adobe Premiere Pro',
    category: 'Editing',
    color: 'hover:border-blue-600/30 hover:shadow-[0_0_12px_rgba(37,99,235,0.1)]',
    icon: (
      <div className="w-7 h-7 rounded bg-[#00041d] border border-[#00c8ff] flex items-center justify-center font-heading font-extrabold text-[10px] text-[#00c8ff] select-none shrink-0">
        Pr
      </div>
    )
  },
  {
    name: 'Adobe After Effects',
    category: 'VFX & Motion',
    color: 'hover:border-indigo-600/30 hover:shadow-[0_0_12px_rgba(79,70,229,0.1)]',
    icon: (
      <div className="w-7 h-7 rounded bg-[#0d001a] border border-[#d2a6ff] flex items-center justify-center font-heading font-extrabold text-[10px] text-[#d2a6ff] select-none shrink-0">
        Ae
      </div>
    )
  },
  {
    name: 'Adobe Lightroom',
    category: 'Photo Editing',
    color: 'hover:border-sky-500/30 hover:shadow-[0_0_12px_rgba(0,195,255,0.1)]',
    icon: (
      <div className="w-7 h-7 rounded bg-[#00041d] border border-[#00c3ff] flex items-center justify-center font-heading font-extrabold text-[10px] text-[#00c3ff] select-none shrink-0">
        Lr
      </div>
    )
  },
  {
    name: 'Adobe Photoshop',
    category: 'Photo Editing',
    color: 'hover:border-blue-500/30 hover:shadow-[0_0_12px_rgba(0,168,255,0.1)]',
    icon: (
      <div className="w-7 h-7 rounded bg-[#00041d] border border-[#00a8ff] flex items-center justify-center font-heading font-extrabold text-[10px] text-[#00a8ff] select-none shrink-0">
        Ps
      </div>
    )
  },
  {
    name: 'Canva',
    category: 'Design Layout',
    color: 'hover:border-blue-400/30 hover:shadow-[0_0_12px_rgba(96,165,250,0.1)]',
    icon: (
      <div className="w-7 h-7 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center font-heading font-extrabold text-[10px] text-white select-none shrink-0">
        C
      </div>
    )
  },
  {
    name: 'Figma',
    category: 'UI/UX Design',
    color: 'hover:border-pink-500/30 hover:shadow-[0_0_12px_rgba(236,72,153,0.1)]',
    icon: (
      <div className="w-7 h-7 rounded bg-black border border-white/20 flex items-center justify-center select-none shrink-0">
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
          <path fill="#1abcfe" d="M12 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0z" />
          <path fill="#0acf83" d="M6 18a3 3 0 0 1 3-3h3v3a3 3 0 1 1-6 0z" />
          <path fill="#ff7262" d="M12 3h3a3 3 0 1 1 0 6h-3V3z" />
          <path fill="#f24e1e" d="M6 6a3 3 0 0 1 3-3h3v6H9a3 3 0 0 1-3-3z" />
          <path fill="#a259ff" d="M6 12a3 3 0 0 1 3-3h3v6H9a3 3 0 0 1-3-3z" />
        </svg>
      </div>
    )
  }
]

const row2Tools = [
  {
    name: 'CapCut',
    category: 'Editing Mobile',
    color: 'hover:border-cyan-500/30 hover:shadow-[0_0_12px_rgba(6,182,212,0.1)]',
    icon: (
      <div className="w-7 h-7 rounded bg-black border border-mint flex items-center justify-center select-none shrink-0">
        <svg className="w-3.5 h-3.5 text-mint fill-none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 6a3 3 0 100-6 3 3 0 000 6zm0 12a3 3 0 100-6 3 3 0 000 6zM20 4L8.5 12 20 20M8.12 12h11.76" />
        </svg>
      </div>
    )
  },
  {
    name: 'VN',
    category: 'Editing Mobile',
    color: 'hover:border-amber-500/30 hover:shadow-[0_0_12px_rgba(245,158,11,0.1)]',
    icon: (
      <div className="w-7 h-7 rounded bg-black border border-white flex items-center justify-center font-heading font-extrabold text-[9px] text-white select-none shrink-0 tracking-tighter">
        VN
      </div>
    )
  },
  {
    name: 'DaVinci Resolve',
    category: 'Color Grading',
    color: 'hover:border-orange-500/30 hover:shadow-[0_0_12px_rgba(249,115,22,0.1)]',
    icon: (
      <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-amber-600 via-red-500 to-blue-500 flex items-center justify-center select-none shrink-0">
        <svg className="w-3 h-3 text-white fill-none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <circle cx="12" cy="12" r="9" />
        </svg>
      </div>
    )
  },
  {
    name: 'ChatGPT',
    category: 'AI Copywriting',
    color: 'hover:border-emerald-500/30 hover:shadow-[0_0_12px_rgba(16,185,129,0.1)]',
    icon: (
      <div className="w-7 h-7 rounded bg-emerald-950/20 border border-emerald-500/80 flex items-center justify-center select-none shrink-0">
        <svg className="w-3.5 h-3.5 text-emerald-400 fill-none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21l5.438-3.11M17 14.5a3.5 3.5 0 0 0 0-7H6.75A3.75 3.75 0 0 0 3 11.25M21 11.25a3.75 3.75 0 0 1-3.75 3.75H12" />
        </svg>
      </div>
    )
  },
  {
    name: 'Gemini AI',
    category: 'AI Assistant',
    color: 'hover:border-blue-500/30 hover:shadow-[0_0_12px_rgba(59,130,246,0.1)]',
    icon: (
      <div className="w-7 h-7 rounded bg-blue-950/20 border border-blue-400/80 flex items-center justify-center select-none shrink-0">
        <svg className="w-3.5 h-3.5 text-blue-400 fill-blue-400 animate-pulse" viewBox="0 0 24 24">
          <path d="M12 2c0 5.523 4.477 10 10 10-5.523 0-10 4.477-10 10 0-5.523-4.477-10-10-10 5.523 0 10-4.477 10-10z" />
        </svg>
      </div>
    )
  },
  {
    name: 'R Studio',
    category: 'Data Analytics',
    color: 'hover:border-blue-700/30 hover:shadow-[0_0_12px_rgba(29,78,216,0.1)]',
    icon: (
      <div className="w-7 h-7 rounded-full bg-[#75AADB] flex items-center justify-center font-heading font-extrabold text-sm text-white select-none shrink-0 shadow-inner">
        R
      </div>
    )
  }
]

export default function TechStack({ lang }) {
  // Duplicate tools arrays for seamless looping
  const duplicatedRow1 = [...row1Tools, ...row1Tools, ...row1Tools, ...row1Tools]
  const duplicatedRow2 = [...row2Tools, ...row2Tools, ...row2Tools, ...row2Tools]

  return (
    <section id="tech-stack" className="py-16 md:py-24 bg-f1-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col gap-10">
        <SectionHeader
          label={lang === 'id' ? 'Alat Kerja' : 'Tech Stack'}
          title={lang === 'id' ? 'Peralatan & Teknologi' : 'Tools & Technologies'}
        />

        <Reveal direction="up">
          <div className="flex flex-col gap-6 w-full select-none py-2 mask-fade-x">
            
            {/* Row 1: Right to Left */}
            <div className="relative w-full overflow-hidden">
              <div className="animate-marquee hover:[animation-play-state:paused] flex gap-4 md:gap-5">
                {duplicatedRow1.map((tool, index) => (
                  <motion.div
                    key={`r1-${index}`}
                    whileHover={{ scale: 1.06, y: -4 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className={`flex items-center gap-4 px-5 py-3.5 bg-white/[0.01] border border-white/10 card-f1 transition-all duration-300 min-w-[200px] md:min-w-[250px] shrink-0 ${tool.color}`}
                  >
                    {tool.icon}
                    <div className="flex flex-col gap-1">
                      <span className="font-heading font-extrabold text-white text-xs md:text-sm leading-none tracking-wide">
                        {tool.name}
                      </span>
                      <span className="px-1.5 py-0.5 rounded bg-black/40 border border-white/5 font-heading font-extrabold text-[8px] text-mint uppercase tracking-wider w-max leading-none">
                        {tool.category}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Row 2: Left to Right (Reverse) */}
            <div className="relative w-full overflow-hidden">
              <div className="animate-marquee-reverse hover:[animation-play-state:paused] flex gap-4 md:gap-5">
                {duplicatedRow2.map((tool, index) => (
                  <motion.div
                    key={`r2-${index}`}
                    whileHover={{ scale: 1.06, y: -4 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className={`flex items-center gap-4 px-5 py-3.5 bg-white/[0.01] border border-white/10 card-f1 transition-all duration-300 min-w-[200px] md:min-w-[250px] shrink-0 ${tool.color}`}
                  >
                    {tool.icon}
                    <div className="flex flex-col gap-1">
                      <span className="font-heading font-extrabold text-white text-xs md:text-sm leading-none tracking-wide">
                        {tool.name}
                      </span>
                      <span className="px-1.5 py-0.5 rounded bg-black/40 border border-white/5 font-heading font-extrabold text-[8px] text-mint uppercase tracking-wider w-max leading-none">
                        {tool.category}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  )
}
