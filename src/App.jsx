import { useRef, useState, useEffect, useCallback } from 'react'
import { AnimatePresence } from 'framer-motion'
import './App.css'
import AudioControl from './components/AudioControl'
import Navbar from './components/Navbar'
import Preloader from './components/Preloader'
import Hero from './sections/Hero'
import About from './sections/About'
import TechStack from './sections/TechStack'
import Paddock from './sections/Paddock'
import Gallery from './sections/Gallery'
import Contact from './sections/Contact'

export default function App() {
  const [loading, setLoading]                 = useState(true)
  const [isPlaying, setIsPlaying]             = useState(false)
  const [lang, setLang]                       = useState('en')
  const [showBackTop, setShowBackTop]         = useState(false)
  const [showMusicHint, setShowMusicHint]     = useState(false)
  const audioRef                              = useRef(null)
  const audioPausedForVideoRef                = useRef(false) // track if WE paused for video
  const fadeIntervalRef                       = useRef(null)  // current volume fade interval

  // Fade audio volume up to target; clears any in-flight fade first so
  // overlapping toggles never stack multiple intervals on the same element.
  const fadeInAudio = useCallback((target = 0.25, step = 0.05, ms = 200) => {
    const audio = audioRef.current
    if (!audio) return
    if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current)
    fadeIntervalRef.current = setInterval(() => {
      const vol = Math.min(audio.volume + step, target)
      audio.volume = vol
      if (vol >= target) {
        clearInterval(fadeIntervalRef.current)
        fadeIntervalRef.current = null
      }
    }, ms)
  }, [])

  // Clear any running fade on unmount
  useEffect(() => () => {
    if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current)
  }, [])

  // Manage body overflow based on loading state
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [loading])

  // After the preloader finishes, nudge the user to play music for ~4s
  useEffect(() => {
    if (loading) return
    const show = setTimeout(() => setShowMusicHint(true), 700) // wait for preloader fade-out
    const hide = setTimeout(() => setShowMusicHint(false), 4700)
    return () => { clearTimeout(show); clearTimeout(hide) }
  }, [loading])

  // Show back-to-top button once user scrolls past ~80vh (rAF-throttled)
  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        ticking = false
        setShowBackTop(window.scrollY > window.innerHeight * 0.8)
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function getOrCreateAudio() {
    if (!audioRef.current) {
      audioRef.current = new Audio('/assets/audio/hans-zimmer-f1.mp3')
      audioRef.current.loop = true
      audioRef.current.volume = 0
      audioRef.current.currentTime = 10 // mulai dari detik ke-10
    }
    return audioRef.current
  }

  const toggleAudio = useCallback(() => {
    setShowMusicHint(false)
    const audio = getOrCreateAudio()
    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
      return
    }
    audio.play().catch(() => {})
    fadeInAudio()
    setIsPlaying(true)
  }, [isPlaying, fadeInAudio])

  // Called by Paddock when lightbox video opens — pause audio
  const handleVideoOpen = useCallback(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.pause()
      setIsPlaying(false)
      audioPausedForVideoRef.current = true
    }
  }, [isPlaying])

  // Called by Paddock when lightbox video closes — resume if we paused it
  const handleVideoClose = useCallback(() => {
    if (audioPausedForVideoRef.current && audioRef.current) {
      audioRef.current.volume = 0
      audioRef.current.play().catch(() => {})
      fadeInAudio()
      setIsPlaying(true)
      audioPausedForVideoRef.current = false
    }
  }, [fadeInAudio])

  // Footer nav — same labels as Navbar
  const footerNav = lang === 'id'
    ? [
        { label: 'Grid Start', href: '#hero' },
        { label: 'Kreator',    href: '#about' },
        { label: 'Paddock',    href: '#paddock' },
        { label: 'Parc Fermé', href: '#parc-ferme' },
        { label: 'Kontak',     href: '#contact' },
      ]
    : [
        { label: 'Grid Start', href: '#hero' },
        { label: 'The Creator', href: '#about' },
        { label: 'The Paddock', href: '#paddock' },
        { label: 'Parc Fermé', href: '#parc-ferme' },
        { label: 'Contact',    href: '#contact' },
      ]

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <Preloader key="preloader" lang={lang} onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      <div className="bg-f1-black min-h-screen">
        <Navbar lang={lang} setLang={setLang} />
        <Hero lang={lang} ready={!loading} />
        <About lang={lang} />
        <TechStack lang={lang} />
        <Paddock lang={lang} onVideoOpen={handleVideoOpen} onVideoClose={handleVideoClose} />
        <Gallery lang={lang} />
        <Contact lang={lang} />

        {/* Footer */}
        <footer className="bg-f1-black overflow-hidden">
          {/* Large wordmark block */}
          <div className="border-t border-mint pt-12 pb-4">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex items-end justify-between gap-8">
              {/* Wordmark */}
              <h2
                className="font-heading font-extrabold uppercase leading-none select-none shrink-0"
                style={{
                  fontSize: 'clamp(4.5rem, 16vw, 14rem)',
                  color: 'transparent',
                  WebkitTextStroke: '1.5px rgba(255,255,255,1)',
                  letterSpacing: '-0.03em',
                }}
              >
                GOYY<span style={{ WebkitTextStroke: '1.5px #2DEFD0', color: 'transparent' }}>.</span>
              </h2>

              {/* Right info panel — nav matches navbar */}
              <div className="hidden md:flex flex-col items-end gap-3 pb-2">
                <nav className="flex flex-col items-end gap-2">
                  {footerNav.map(({ label, href }) => (
                    <a
                      key={href}
                      href={href}
                      className="font-heading font-bold text-xs tracking-[0.15em] uppercase text-white/25 hover:text-mint transition-colors duration-200"
                    >
                      {label}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/5 py-5">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between gap-4">
              <p className="font-body text-xs text-white/30 tracking-wide">
                © 2026 Created by{' '}
                <span className="text-f1-silver font-semibold">Fariz Hafidz</span>
              </p>
              <a
                href="#hero"
                className="group flex items-center gap-2 font-heading font-extrabold text-[10px] tracking-[0.25em] text-mint hover:text-white uppercase transition-colors duration-300"
              >
                <span className="inline-block transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↑</span>
                BACK TO GRID
              </a>
            </div>
          </div>
        </footer>

        {/* Floating Back-to-Top button — appears after scrolling past hero */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className={`fixed bottom-24 right-6 z-40 w-10 h-10 rounded-full border border-white/15 bg-f1-card flex items-center justify-center text-white hover:border-mint hover:text-mint hover:shadow-[0_0_15px_rgba(0,210,190,0.3)] transition-all duration-300 cursor-pointer ${
            showBackTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>

        {/* Music hint — appears briefly after the preloader, points to the audio button */}
        <div
          className={`fixed bottom-8 right-20 z-40 flex items-center gap-2 transition-all duration-500 ${
            showMusicHint ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-3 pointer-events-none'
          }`}
        >
          <div className="bg-f1-card border border-mint/40 rounded-lg px-3 py-2 shadow-[0_0_20px_rgba(45,239,208,0.2)] max-w-[200px]">
            <p className="font-heading text-xs text-white leading-snug">
              {lang === 'id'
                ? 'Putar musik untuk pengalaman terbaik'
                : 'Play music for the best experience'}
            </p>
          </div>
          <span className="text-mint text-lg animate-pulse">→</span>
        </div>

        <AudioControl isPlaying={isPlaying} onToggle={toggleAudio} />
      </div>
    </>
  )
}
