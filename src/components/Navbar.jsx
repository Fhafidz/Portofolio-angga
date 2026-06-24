import { useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'

export default function Navbar() {
  const { lang, toggleLang, t } = useLanguage()
  const [active, setActive] = useState('#hero')
  const [open, setOpen] = useState(false)

  const links = useMemo(() => [
    { label: t.nav.home, href: '#hero' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.projects, href: '#videography' },
    { label: t.nav.contact, href: '#contact' },
  ], [t])

  useEffect(() => {
    const ids = links.map(l => l.href.replace('#', ''))
    let ticking = false

    function update() {
      ticking = false
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i])
        if (el && window.scrollY >= el.offsetTop - 140) {
          setActive('#' + ids[i])
          break
        }
      }
    }

    function onScroll() {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [links])

  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-30"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Main nav bar */}
      <nav className="bg-f1-black/90 backdrop-blur-md border-b-2 border-mint">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="group flex items-center gap-3 select-none">
            <span className="font-heading font-extrabold text-white text-lg tracking-tight leading-none transition-transform duration-300 group-hover:scale-105">
              Goyy<span className="text-mint group-hover:drop-shadow-[0_0_8px_#00D2BE] transition-all">.</span>
            </span>
          </a>

          {/* Desktop links */}
          <motion.ul
            className="hidden md:flex items-center gap-7"
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.4 } } }}
          >
            {links.map(link => (
              <motion.li
                key={link.href}
                variants={{ hidden: { opacity: 0, y: -12 }, show: { opacity: 1, y: 0 } }}
                transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
              >
                <a
                  href={link.href}
                  className={`font-heading font-medium text-sm tracking-wide transition-colors duration-200 ${
                    active === link.href ? 'text-mint' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              </motion.li>
            ))}
          </motion.ul>

          {/* CTA + Language Selector + hamburger */}
          <div className="flex items-center gap-4">
            {/* Language switcher (Globe Single Button) */}
            <button
              onClick={toggleLang}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/15 hover:border-mint text-xs font-heading font-bold text-white hover:text-mint transition-all duration-300 cursor-pointer"
              aria-label="Switch Language"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth={2}>
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                <path d="M2 12h20" />
              </svg>
              <span>{lang === 'id' ? 'ID' : 'EN'}</span>
            </button>

            <button
              onClick={() => setOpen(o => !o)}
              aria-label="Toggle menu"
              className="md:hidden flex flex-col gap-1.5 cursor-pointer"
            >
              <span className={`w-6 h-[2px] bg-white transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-6 h-[2px] bg-white transition-all ${open ? 'opacity-0' : ''}`} />
              <span className={`w-6 h-[2px] bg-white transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-f1-black/95 backdrop-blur-md ${
          open ? 'max-h-96 border-b border-mint/30' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col px-6 py-5 gap-4">
          {links.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className={`font-heading font-semibold text-base ${
                  active === link.href ? 'text-mint' : 'text-white/80'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="flex items-center pt-4 border-t border-white/10">
            {/* Language switcher (Mobile Single Button) */}
            <button
              onClick={toggleLang}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/15 text-xs font-heading font-bold text-white cursor-pointer"
              aria-label="Switch Language"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth={2}>
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                <path d="M2 12h20" />
              </svg>
              <span>{lang === 'id' ? 'ID' : 'EN'}</span>
            </button>
          </li>
        </ul>
      </div>
    </motion.header>
  )
}
