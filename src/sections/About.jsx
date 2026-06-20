import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import Reveal from '../components/Reveal'
import SectionHeader from '../components/SectionHeader'
import Button from '../components/Button'

function SkillBar({ label, width, delay }) {
  const [filled, setFilled] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setFilled(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="flex flex-col gap-2">
      <span className="font-heading font-medium text-sm text-white/80">{label}</span>
      <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-mint rounded-full transition-all duration-1000 ease-out"
          style={{ width: filled ? width : '0%', transitionDelay: `${delay}ms` }}
        />
      </div>
    </div>
  )
}

export default function About({ lang }) {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  // Ghost number drifts upward as section scrolls into view
  const rawGhostY = useTransform(scrollYProgress, [0, 1], [60, -60])
  const ghostY = useSpring(rawGhostY, { stiffness: 60, damping: 18 })

  // Blobs move in opposite directions for depth
  const rawBlob1Y = useTransform(scrollYProgress, [0, 1], [-30, 30])
  const rawBlob2Y = useTransform(scrollYProgress, [0, 1], [30, -30])
  const blob1Y = useSpring(rawBlob1Y, { stiffness: 40, damping: 15 })
  const blob2Y = useSpring(rawBlob2Y, { stiffness: 40, damping: 15 })

  const skills = [
    { label: lang === 'id' ? 'Tempo & Ritme Video' : 'Video Pacing & Rhythm', width: '92%' },
    { label: lang === 'id' ? 'Fotografi & Komposisi' : 'Photography & Composition', width: '90%' },
    { label: lang === 'id' ? 'Pewarnaan & Tampilan Sinematik' : 'Color Grading & Cinematic Look', width: '88%' },
    { label: lang === 'id' ? 'Pencampuran Audio & Desain Suara' : 'Audio Mixing & Sound Design', width: '80%' },
    { label: lang === 'id' ? 'Grafis Gerak & Efek Visual' : 'Motion Graphics & VFX', width: '75%' },
  ]

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-28 bg-f1-dark-grey relative overflow-hidden">
      {/* Background gradients — parallax drift */}
      <motion.div
        style={{ y: blob1Y }}
        className="absolute top-0 right-0 w-96 h-96 bg-petronas/10 rounded-full blur-3xl pointer-events-none select-none"
      />
      <motion.div
        style={{ y: blob2Y }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-mint/5 rounded-full blur-3xl pointer-events-none select-none"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col gap-10 relative z-10">

        <SectionHeader
          label={lang === 'id' ? 'Profil Kreator' : 'Creator Profile'}
          title={lang === 'id' ? 'Profil Kreator' : 'The Creator'}
          action={<Button href="#contact" variant="mint">{lang === 'id' ? 'Hubungi Saya' : 'Meet the Creator'}</Button>}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Driver card */}
          <Reveal direction="right" duration={2}>
            <div className="card-f1 relative overflow-hidden h-full min-h-[360px] md:min-h-[420px] bg-f1-black card-f1-glow shimmer-card">
              {/* Photo — full bleed (its own green gradient fills the card) */}
              <img
                src="/assets/images/driver-photo.png"
                alt="Erlangga"
                className="absolute inset-0 w-full h-full object-cover filter contrast-[1.05] z-0"
                style={{ objectPosition: '65% 0%' }}
              />
              {/* Bottom fade into the card */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-f1-black via-f1-black/70 to-transparent z-[5] pointer-events-none" />

              {/* Viewfinder brackets — staggered reveal */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-white/70 pointer-events-none z-20 animate-bracket-reveal" style={{ animationDelay: '0.1s' }} />
              <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-white/70 pointer-events-none z-20 animate-bracket-reveal" style={{ animationDelay: '0.25s' }} />
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-white/70 pointer-events-none z-20 animate-bracket-reveal" style={{ animationDelay: '0.4s' }} />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-white/70 pointer-events-none z-20 animate-bracket-reveal" style={{ animationDelay: '0.55s' }} />

              {/* Ghost numbers — parallax + breathing opacity */}
              <div className="absolute bottom-2 left-4 flex flex-col pointer-events-none select-none z-[8]">
                <motion.span
                  style={{ y: ghostY }}
                  className="font-heading font-extrabold text-[80px] md:text-[130px] leading-[0.8] text-stroke-f1 animate-ghost-breathe"
                >
                  63
                </motion.span>
                <motion.span
                  style={{ y: ghostY }}
                  className="font-heading font-extrabold text-[80px] md:text-[130px] leading-[0.8] text-stroke-f1 animate-ghost-breathe"
                >
                  12
                </motion.span>
              </div>

              {/* Name */}
              <div className="absolute top-12 left-7 z-20 max-w-[50%] md:max-w-[55%]">
                <p className="mb-3 text-mint font-heading font-semibold text-[10px] md:text-xs tracking-widest uppercase">
                  {lang === 'id' ? 'Videografer & Fotografer' : 'Videographer & Photographer'}
                </p>
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
                  {lang === 'id' ? 'Metrik Performa' : 'Performance Metrics'}
                </span>
                <h3 className="font-heading font-bold text-2xl text-white">
                  {lang === 'id' ? 'Kemampuan Kreator' : 'Creator Capabilities'}
                </h3>
              </div>

              <div className="flex flex-col gap-5">
                {skills.map((skill, i) => (
                  <SkillBar key={skill.label} {...skill} delay={i * 120} />
                ))}
              </div>

              <div className="grid grid-cols-2 gap-3 mt-auto pt-2">
                {[
                  { k: lang === 'id' ? 'Peran' : 'Role', v: lang === 'id' ? 'Videografer · Fotografer' : 'Videographer · Photographer' },
                  { k: lang === 'id' ? 'Gaya' : 'Style', v: lang === 'id' ? 'Sinematik' : 'Cinematic' },
                  { k: lang === 'id' ? 'Tools' : 'Tools', v: 'Premiere · AE · Lightroom' },
                  { k: 'Status', v: lang === 'id' ? 'Tersedia' : 'Available' },
                ].map(s => (
                  <div key={s.k} className="rounded-xl bg-white/5 px-4 py-3 border border-white/5 hover:border-mint/20 transition-colors">
                    <p className="text-mint font-heading text-[10px] tracking-[0.2em] uppercase">{s.k}</p>
                    <p className="text-white font-heading font-bold text-sm">{s.v}</p>
                  </div>
                ))}
              </div>

              {/* CV Download / View Button */}
              <div className="pt-2">
                <Button
                  href="/assets/cv-erlangga-2026.pdf"
                  variant="mint"
                  className="w-full justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="CV_ERLANGGA_2026.pdf"
                >
                  {lang === 'id' ? 'Lihat & Unduh CV Kreator' : 'View & Download CV'}
                </Button>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}
