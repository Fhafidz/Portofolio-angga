import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import Reveal from '../components/Reveal'
import { useLanguage } from '../i18n/LanguageContext'

const contactLinks = [
  {
    name: 'Instagram',
    value: '@putrawidantaa',
    url: 'https://www.instagram.com/putrawidantaa/',
    type: 'Social'
  },
  {
    name: 'LinkedIn',
    value: 'in/erlanggawidanta',
    url: 'https://www.linkedin.com/in/erlanggawidanta/',
    type: 'Professional'
  },
  {
    name: 'TikTok',
    value: '@anggaputraaaz',
    url: 'https://www.tiktok.com/@anggaputraaaz',
    type: 'Social'
  },
  {
    name: 'WhatsApp',
    value: '+62 812 1485 4856',
    url: 'https://wa.me/6281214854856',
    type: 'Direct'
  },
  {
    name: 'Email',
    value: 'anggawidantaa@gmail.com',
    url: 'mailto:anggawidantaa@gmail.com',
    type: 'Direct'
  }
]

export default function Contact() {
  const { t } = useLanguage()
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const rawHeadingY = useTransform(scrollYProgress, [0, 1], [50, -30])
  const headingY = useSpring(rawHeadingY, { stiffness: 60, damping: 20 })

  return (
    <section id="contact" ref={sectionRef} className="py-20 md:py-28 bg-f1-dark-grey relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col gap-12 relative z-10">
        
        <SectionHeader
          label={t.contact.label}
          title={t.contact.title}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-4">
          
          {/* Left: Section Details */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <Reveal direction="up" className="flex flex-col gap-5">
              <span className="font-heading font-extrabold text-xs md:text-sm text-mint tracking-[0.2em] font-bold">
                05 / CONNECTION
              </span>
              <h3 className="font-heading font-extrabold text-4xl md:text-5xl text-white tracking-tight uppercase leading-none">
                <motion.span style={{ y: headingY }} className="block">
                  Open<br />Channels.
                </motion.span>
              </h3>
              <p className="text-f1-silver font-body text-sm leading-relaxed max-w-sm">
                {t.contact.description}
              </p>
              
              {/* Main location details styled cleanly in the column */}
              <div className="flex flex-col gap-1.5 mt-4 pt-6 border-t border-white/10">
                <span className="font-heading font-extrabold text-xs text-mint tracking-[0.2em] uppercase">
                  {t.contact.mainLocation}
                </span>
                <span className="font-heading font-bold text-lg text-white">
                  Kudus, Jawa Tengah, Indonesia
                </span>
              </div>
            </Reveal>
          </div>

          {/* Right: Premium Links List (Editorial Row-based design) */}
          <div className="lg:col-span-8 w-full flex flex-col">
            {contactLinks.map((link, idx) => (
              <Reveal key={link.name} direction="up" delay={idx * 0.05}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-5 md:py-6 border-b border-white/10 hover:border-mint/30 transition-colors group w-full"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-8">
                    <span className="font-heading font-extrabold text-[9px] tracking-widest text-mint uppercase w-24">
                      {link.type}
                    </span>
                    <span className="font-heading font-extrabold text-xl md:text-3xl text-white group-hover:text-mint transition-colors duration-300">
                      {link.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3">
                    <span className="hidden sm:block font-mono text-xs md:text-sm text-f1-silver group-hover:text-white transition-colors duration-300 truncate max-w-[160px] md:max-w-none">
                      {link.value}
                    </span>
                    <span className="text-f1-silver group-hover:text-mint transition-colors duration-300 text-lg arrow-bounce">
                      →
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
