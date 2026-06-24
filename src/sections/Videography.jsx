import { useState, useCallback, useEffect } from 'react'
import VideoCard from '../components/VideoCard'
import { STACK_ICONS } from '../components/stackIcons'
import SectionHeader from '../components/SectionHeader'
import Button from '../components/Button'
import { StaggerGroup, StaggerItem } from '../components/Reveal'
import { useLanguage } from '../i18n/LanguageContext'
import { videos } from '../data/videos'

export default function Videography({ onVideoOpen, onVideoClose }) {
  const { lang, t } = useLanguage()
  const [activeVideo, setActiveVideo] = useState(null)

  const openVideo = useCallback((video) => {
    setActiveVideo(video)
    onVideoOpen?.()
  }, [onVideoOpen])

  const closeVideo = useCallback(() => {
    setActiveVideo(null)
    onVideoClose?.()
  }, [onVideoClose])

  // While the lightbox is open: close on Esc and lock background scroll
  useEffect(() => {
    if (!activeVideo) return
    const onKeyDown = (e) => { if (e.key === 'Escape') closeVideo() }
    window.addEventListener('keydown', onKeyDown)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = prevOverflow
    }
  }, [activeVideo, closeVideo])

  return (
    <section id="videography" className="py-20 md:py-28 bg-f1-dark-grey">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col gap-10">

        <SectionHeader
          label={t.videography.label}
          title={t.videography.title}
          action={
            <Button
              variant="mint"
              href="https://www.tiktok.com/@anggaputraaaz"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.videography.moreBtn}
            </Button>
          }
        />

        <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.18}>
          {videos.map((video) => (
            <StaggerItem key={video.driveId} className="w-full">
              <VideoCard
                {...video}
                category={video.category[lang]}
                description={video.description[lang]}
                onClick={() => openVideo(video)}
              />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>

      {/* Cinema Lightbox Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-10 transition-all duration-300 animate-fade-in"
          onClick={closeVideo}
          role="dialog"
          aria-modal="true"
          aria-label={activeVideo.title}
        >
          {/* Close button at top-right of screen */}
          <button
            onClick={closeVideo}
            className="absolute top-6 right-6 w-12 h-12 rounded-full border border-white/10 bg-white/5 hover:bg-mint hover:text-f1-black text-white flex items-center justify-center text-xl font-bold transition-all hover:scale-105 cursor-pointer z-50 shadow-lg"
            aria-label="Close video player"
          >
            ✕
          </button>

          {/* Modal Container */}
          <div
            className="relative w-full max-w-5xl bg-f1-card card-f1 overflow-hidden shadow-[0_0_50px_rgba(45,239,208,0.15)] flex flex-col border border-white/5"
            onClick={(e) => e.stopPropagation()} // Prevent close on clicking modal container
          >
            {/* Video Player — Google Drive embed */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={`https://drive.google.com/file/d/${activeVideo.driveId}/preview`}
                title={activeVideo.title}
                allow="autoplay; fullscreen"
                allowFullScreen
                className="w-full h-full"
              />
            </div>

            {/* Video Details */}
            <div className="p-6 flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="tag-f1 bg-mint text-f1-black px-4 py-2 font-heading font-extrabold text-sm md:text-base uppercase tracking-wide w-max">
                  {activeVideo.title}
                </div>
                <span className="px-2.5 py-0.5 rounded bg-white/5 border border-white/5 font-heading font-extrabold text-[10px] text-mint uppercase tracking-wider w-max">
                  {activeVideo.category[lang]}
                </span>
              </div>

              <p className="text-f1-silver font-body text-xs md:text-sm leading-relaxed">
                {activeVideo.description[lang]}
              </p>

              {/* Tech Stack badges with logos */}
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                {activeVideo.stack.map((item, idx) => (
                  <span
                    key={idx}
                    className="flex items-center gap-1.5 px-2 py-1 rounded bg-white/5 border border-white/5 font-heading font-extrabold text-[9px] text-white/80 uppercase"
                  >
                    {STACK_ICONS[item] || null}
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
