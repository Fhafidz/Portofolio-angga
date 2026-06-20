import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring, animate } from 'framer-motion'
import Button from '../components/Button'
import { DiagonalStreaks } from '../components/HeroBackgrounds'

// Counts up from 0 → `to` once `start` is true
function Counter({ to, suffix = '+', start }) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!start) return
    const controls = animate(0, to, {
      duration: 1.6,
      delay: 0.7, // tunggu preloader selesai fade-out
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setVal(Math.floor(v)),
    })
    return () => controls.stop()
  }, [to, start])
  return <span className="tabular-nums">{val}{suffix}</span>
}

export default function Hero({ lang, ready = true }) {
  const sectionRef = useRef(null)

  // Scroll tracking scoped to the hero section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  // Smooth spring for the parallax values
  const rawImageY  = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const rawTextY   = useTransform(scrollYProgress, [0, 1], ['0%', '8%'])
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  const imageY = useSpring(rawImageY,  { stiffness: 80, damping: 20 })
  const textY  = useSpring(rawTextY,   { stiffness: 80, damping: 20 })

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
  }
  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 2, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <motion.section
      id="hero"
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={ready ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
      className="relative min-h-screen bg-f1-black flex flex-col justify-center overflow-hidden"
    >
      {/* Animated diagonal green speed streaks */}
      <DiagonalStreaks />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-28 pb-16 grid grid-cols-1 lg:grid-cols-12 items-center gap-10">

        {/* Left: Text — subtle upward drift on scroll */}
        <motion.div
          style={{ y: textY }}
          variants={container}
          initial="hidden"
          animate={ready ? 'show' : 'hidden'}
          className="lg:col-span-7 flex flex-col gap-6"
        >
          <motion.span
            variants={item}
            className="text-mint font-heading font-semibold text-xs tracking-[0.3em] uppercase"
          >
            {lang === 'id' ? 'Sinematografer · Fotografer · Editor' : 'Cinematographer · Photographer · Editor'}
          </motion.span>

          <motion.h1
            variants={item}
            className="font-heading font-extrabold text-4xl sm:text-5xl md:text-7xl text-white uppercase tracking-tight leading-[0.98]"
          >
            Erlangga<br />
            <span className="text-f1-silver">Putra Widanta</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-f1-silver font-body text-base md:text-lg max-w-lg leading-relaxed"
          >
            {lang === 'id'
              ? 'Membawa cerita hidup lewat videografi sinematik dan fotografi — ritme potongan yang dinamis, komposisi yang kuat, dan presisi teknis di setiap frame.'
              : 'Bringing stories to life through cinematic videography and photography — dynamic pacing, strong composition, and technical precision in every frame.'}
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-3 pt-2">
            <Button href="#paddock" variant="mint">
              {lang === 'id' ? 'Lihat Karya' : 'See Work'}
            </Button>
            <Button href="#about" variant="ghost">
              {lang === 'id' ? 'Profil Kreator' : 'The Creator'}
            </Button>
          </motion.div>

          <motion.div
            variants={item}
            className="flex items-center gap-8 sm:gap-10 pt-6"
          >
            {[
              { to: 10, label: lang === 'id' ? 'Proyek Video' : 'Video Projects' },
              { to: 15, label: lang === 'id' ? 'Proyek Foto' : 'Photo Projects' },
              { to: 5,  label: lang === 'id' ? 'Tahun Pengalaman' : 'Years Experience' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="font-heading font-extrabold text-2xl md:text-3xl text-white leading-none">
                  <Counter to={stat.to} start={ready} />
                </span>
                <span className="font-heading text-[10px] md:text-xs text-f1-silver uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Image — deeper parallax drift (moves faster upward) */}
        <motion.div
          style={{ y: imageY }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={ready ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 relative"
        >
          <motion.div
            className="relative overflow-hidden card-f1 bg-gradient-to-b from-petronas/30 to-f1-black card-f1-glow shimmer-card"
            whileHover={{ scale: 1.02, y: -6 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          >
            <motion.img
              src="/assets/images/hero-photo.png"
              alt="Cinematic hero"
              className="w-full object-cover"
              style={{ aspectRatio: '3/4' }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />
            {/* Viewfinder brackets — animate in with stagger */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-white/70 pointer-events-none animate-bracket-reveal" style={{ animationDelay: '0.4s' }} />
            <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-white/70 pointer-events-none animate-bracket-reveal" style={{ animationDelay: '0.55s' }} />
            <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-white/70 pointer-events-none animate-bracket-reveal" style={{ animationDelay: '0.7s' }} />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-white/70 pointer-events-none animate-bracket-reveal" style={{ animationDelay: '0.85s' }} />

            {/* Bottom gradient + tag */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-f1-black to-transparent" />
            <div className="tag-f1 absolute bottom-5 left-5 bg-mint px-4 py-2">
              <span className="font-heading font-bold text-sm text-f1-black uppercase tracking-wide">
                Showreel 2026
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue — fades out as soon as user starts scrolling */}
      <motion.div
        style={{ opacity: scrollOpacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="font-heading text-[10px] text-f1-silver tracking-[0.3em] uppercase">Scroll</span>
        <span className="w-px h-10 bg-gradient-to-b from-mint to-transparent" />
      </motion.div>
    </motion.section>
  )
}
