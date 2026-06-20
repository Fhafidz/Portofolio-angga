import { useState } from 'react'

// Drive image sources — try in order if one fails to load
const imgSources = (id) => [
  `https://lh3.googleusercontent.com/d/${id}=w1200`,
  `https://drive.google.com/thumbnail?id=${id}&sz=w1200`,
]

export default function PhotoCard({ driveId, src, title, onClick }) {
  const sources = src ? [src] : imgSources(driveId)
  const [srcIdx, setSrcIdx] = useState(0)
  const failed = srcIdx >= sources.length

  return (
    <div
      className="group relative card-f1 overflow-hidden bg-gradient-to-br from-f1-card via-petronas/20 to-f1-black w-full h-full card-f1-glow cursor-pointer"
      onClick={onClick}
    >
      {!failed && (
        <img
          src={sources[srcIdx]}
          alt={title || ''}
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={() => setSrcIdx((i) => i + 1)}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          style={{ minHeight: '200px' }}
        />
      )}

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />

      {/* Teal banner tag */}
      {title && (
        <div className="tag-f1 absolute bottom-0 left-0 max-w-[88%] bg-mint px-4 py-3 translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <h3 className="font-heading font-bold text-sm text-f1-black leading-tight">{title}</h3>
        </div>
      )}
    </div>
  )
}
