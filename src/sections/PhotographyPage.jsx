import { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PhotoCard from '../components/PhotoCard'
import { photos } from '../data/photos'
import { useLanguage } from '../i18n/LanguageContext'

export default function PhotographyPage({ open, onClose }) {
  const { t } = useLanguage()
  const [active, setActive] = useState(null)

  const openPhoto = useCallback((photo) => setActive(photo), [])
  const closePhoto = useCallback(() => setActive(null), [])

  // Lock body scroll while the page is open; Esc closes lightbox then page
  useEffect(() => {
    if (!open) return
    const onKeyDown = (e) => {
      if (e.key !== 'Escape') return
      if (active) closePhoto()
      else onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = prevOverflow
    }
  }, [open, active, closePhoto, onClose])

  const fullSrc = active && (active.src || `https://lh3.googleusercontent.com/d/${active.driveId}=w2000`)

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 bg-f1-black overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Header */}
          <div className="sticky top-0 z-10 bg-f1-black/90 backdrop-blur-md border-b-2 border-mint">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 h-16 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-mint font-heading font-semibold text-[10px] tracking-[0.3em] uppercase">
                  {t.photography.pageLabel}
                </span>
                <h2 className="font-heading font-extrabold text-lg md:text-xl text-white leading-none uppercase tracking-tight">
                  {t.photography.pageTitle}
                </h2>
              </div>
              <button
                onClick={onClose}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 hover:border-mint text-xs font-heading font-bold text-white hover:text-mint transition-all duration-300 cursor-pointer"
              >
                <span>←</span>
                {t.photography.back}
              </button>
            </div>
          </div>

          {/* Grid */}
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {photos.map((photo) => (
                <div key={photo.driveId} className="aspect-[4/3]">
                  <PhotoCard {...photo} onClick={() => openPhoto(photo)} />
                </div>
              ))}
            </div>
          </div>

          {/* Lightbox */}
          {active && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-10 animate-fade-in"
              onClick={closePhoto}
              role="dialog"
              aria-modal="true"
              aria-label={active.title || 'Photo'}
            >
              <button
                onClick={closePhoto}
                className="absolute top-6 right-6 w-12 h-12 rounded-full border border-white/10 bg-white/5 hover:bg-mint hover:text-f1-black text-white flex items-center justify-center text-xl font-bold transition-all hover:scale-105 cursor-pointer z-50 shadow-lg"
                aria-label="Close photo viewer"
              >
                ✕
              </button>
              <img
                src={fullSrc}
                alt={active.title || ''}
                referrerPolicy="no-referrer"
                onClick={(e) => e.stopPropagation()}
                className="max-w-full max-h-full object-contain card-f1 shadow-[0_0_50px_rgba(45,239,208,0.15)]"
              />
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
