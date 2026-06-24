import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import Reveal from '../components/Reveal'
import { useLanguage } from '../i18n/LanguageContext'

const row1Tools = [
  {
    name: 'Adobe Premiere Pro',
    category: 'Editing',
    color: 'hover:border-blue-600/30 hover:shadow-[0_0_12px_rgba(37,99,235,0.1)]',
    icon: (
      <div className="w-7 h-7 rounded bg-[#1a0a2e] border border-[#a78bfa] flex items-center justify-center font-heading font-extrabold text-[10px] text-[#a78bfa] select-none shrink-0">
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
      <div className="w-7 h-7 rounded bg-[#03161a] border border-[#22d3ee] flex items-center justify-center font-heading font-extrabold text-[10px] text-[#22d3ee] select-none shrink-0">
        Ca
      </div>
    )
  },
  {
    name: 'Figma',
    category: 'UI/UX Design',
    color: 'hover:border-pink-500/30 hover:shadow-[0_0_12px_rgba(236,72,153,0.1)]',
    icon: (
      <div className="w-7 h-7 rounded bg-[#1a0a2e] border border-[#c084fc] flex items-center justify-center font-heading font-extrabold text-[10px] text-[#c084fc] select-none shrink-0">
        Fi
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
      <div className="w-7 h-7 rounded bg-[#021a17] border border-[#2DEFD0] flex items-center justify-center font-heading font-extrabold text-[10px] text-[#2DEFD0] select-none shrink-0">
        Cc
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
      <div className="w-7 h-7 rounded bg-[#1a1208] border border-[#e0903c] flex items-center justify-center font-heading font-extrabold text-[10px] text-[#e0903c] select-none shrink-0">
        Dv
      </div>
    )
  },
  {
    name: 'ChatGPT',
    category: 'AI Copywriting',
    color: 'hover:border-emerald-500/30 hover:shadow-[0_0_12px_rgba(16,185,129,0.1)]',
    icon: (
      <div className="w-7 h-7 rounded bg-[#04140f] border border-[#10a37f] flex items-center justify-center font-heading font-extrabold text-[8px] text-[#10a37f] select-none shrink-0 tracking-tighter">
        GPT
      </div>
    )
  },
  {
    name: 'Gemini AI',
    category: 'AI Assistant',
    color: 'hover:border-blue-500/30 hover:shadow-[0_0_12px_rgba(59,130,246,0.1)]',
    icon: (
      <div className="w-7 h-7 rounded bg-[#0a1322] border border-[#6ea8fe] flex items-center justify-center font-heading font-extrabold text-[10px] text-[#6ea8fe] select-none shrink-0">
        Gm
      </div>
    )
  },
  {
    name: 'R Studio',
    category: 'Data Analytics',
    color: 'hover:border-blue-700/30 hover:shadow-[0_0_12px_rgba(29,78,216,0.1)]',
    icon: (
      <div className="w-7 h-7 rounded bg-[#0a1622] border border-[#75AADB] flex items-center justify-center font-heading font-extrabold text-[10px] text-[#75AADB] select-none shrink-0">
        R
      </div>
    )
  }
]

export default function TechStack() {
  const { t } = useLanguage()
  // Duplicate tools arrays for seamless looping
  const duplicatedRow1 = [...row1Tools, ...row1Tools, ...row1Tools, ...row1Tools]
  const duplicatedRow2 = [...row2Tools, ...row2Tools, ...row2Tools, ...row2Tools]

  return (
    <section id="tech-stack" className="py-16 md:py-24 bg-f1-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col gap-10">
        <SectionHeader
          label={t.tech.label}
          title={t.tech.title}
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
