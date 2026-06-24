import { useState, useCallback, useEffect } from 'react'
import PhotoCard from '../components/PhotoCard'
import SectionHeader from '../components/SectionHeader'
import Button from '../components/Button'
import { StaggerGroup, StaggerItem } from '../components/Reveal'
import { previewPhotos as photos } from '../data/photos'
import { useLanguage } from '../i18n/LanguageContext'

export default function Photography({ onMore }) {
  const { t } = useLanguage()
  const [active, setActive] = useState(null)

  const openPhoto = useCallback((photo) => setActive(photo), [])
  const closePhoto = useCallback(() => setActive(null), [])

  // Esc to close + lock background scroll while open
  useEffect(() => {
    if (!active) return
    const onKeyDown = (e) => { if (e.key === 'Escape') closePhoto() }
    window.addEventListener('keydown', onKeyDown)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = prevOverflow
    }
  }, [active, closePhoto])

  const fullSrc = active && (active.src || `https://lh3.googleusercontent.com/d/${active.driveId}=w2000`)

  return (
    <section id="photography" className="py-20 md:py-28 bg-f1-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col gap-10">

        <SectionHeader
          label={t.photography.label}
          title={t.photography.title}
        />

        <StaggerGroup className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6" stagger={0.07}>
          {photos.map((photo) => (
            <StaggerItem key={photo.driveId} className="aspect-[4/3]">
              <PhotoCard {...photo} onClick={() => openPhoto(photo)} />
            </StaggerItem>
          ))}
        </StaggerGroup>

        {/* More — opens the full photo gallery page */}
        <div className="flex justify-center pt-2">
          <Button variant="mint" onClick={onMore}>
            {t.photography.moreBtn}
          </Button>
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
    </section>
  )
}
