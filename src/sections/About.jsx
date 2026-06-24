import { useRef, useState, useEffect } from 'react'
import { animate, useInView } from 'framer-motion'
import Reveal from '../components/Reveal'
import SectionHeader from '../components/SectionHeader'
import Button from '../components/Button'
import { useLanguage } from '../i18n/LanguageContext'

// Counts up from 0 → `to` once scrolled into view
function Counter({ to, suffix = '+' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!inView) return
    const controls = animate(0, to, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setVal(Math.floor(v)),
    })
    return () => controls.stop()
  }, [inView, to])
  return <span ref={ref} className="tabular-nums">{val}{suffix}</span>
}

export default function About() {
  const { t } = useLanguage()
  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col gap-10 relative z-10">

        <SectionHeader
          label={t.about.label}
          title={t.about.title}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Driver card */}
          <Reveal direction="right" duration={2}>
            <div className="card-f1 relative overflow-hidden h-full min-h-[360px] md:min-h-[420px] bg-f1-black card-f1-glow shimmer-card">
              {/* Photo — temporarily hidden
              <img
                src="/assets/images/driver-photo.png"
                alt="Erlangga"
                className="absolute inset-0 w-full h-full object-cover object-top filter contrast-[1.05] z-0"
              /> */}
              {/* Bottom fade into the card */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-f1-black via-f1-black/70 to-transparent z-[5] pointer-events-none" />

              {/* Viewfinder brackets — staggered reveal */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-white/70 pointer-events-none z-20 animate-bracket-reveal" style={{ animationDelay: '0.1s' }} />
              <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-white/70 pointer-events-none z-20 animate-bracket-reveal" style={{ animationDelay: '0.25s' }} />
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-white/70 pointer-events-none z-20 animate-bracket-reveal" style={{ animationDelay: '0.4s' }} />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-white/70 pointer-events-none z-20 animate-bracket-reveal" style={{ animationDelay: '0.55s' }} />

              {/* Name — bottom left */}
              <div className="absolute bottom-6 left-7 z-20 max-w-[55%]">
                <h3 className="font-heading font-extrabold text-3xl md:text-4xl text-white leading-[0.95] uppercase">
                  Erlangga<br />Putra Widanta
                </h3>
              </div>
            </div>
          </Reveal>

          {/* Metrics card */}
          <Reveal direction="left" delay={0.1} duration={2}>
            <div className="card-f1 h-full bg-f1-card p-8 flex flex-col gap-6 card-f1-glow">
              <div className="flex flex-col gap-1">
                <span className="text-mint font-heading font-semibold text-xs tracking-[0.3em] uppercase">
                  {t.about.cardLabel}
                </span>
                <h3 className="font-heading font-bold text-2xl text-white">
                  {t.about.cardTitle}
                </h3>
              </div>

              <div className="flex flex-col gap-4 text-f1-silver font-body text-sm leading-relaxed">
                <p>{t.about.desc1}</p>
                <p>{t.about.desc2}</p>
              </div>

              {/* Stats counters */}
              <div className="grid grid-cols-3 gap-3 mt-auto pt-2 border-t border-white/5">
                {[
                  { to: 10, label: t.about.statVideo },
                  { to: 15, label: t.about.statPhoto },
                  { to: 5,  label: t.about.statYears },
                ].map((stat) => (
                  <div key={stat.label} className="flex flex-col gap-1 items-center text-center">
                    <span className="font-heading font-extrabold text-2xl md:text-3xl text-mint leading-none">
                      <Counter to={stat.to} />
                    </span>
                    <span className="font-heading text-[10px] text-f1-silver uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* CV Download Button */}
              <div className="pt-2">
                <Button
                  href="/assets/cv-erlangga-2026.pdf"
                  variant="mint"
                  className="w-full justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="CV_ERLANGGA_2026.pdf"
                >
                  {t.about.downloadCv}
                </Button>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}
