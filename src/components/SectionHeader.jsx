import Reveal from './Reveal'

/**
 * Section header ala Mercedes F1.
 * label (mint, kecil, uppercase) opsional di atas judul.
 * action: node (mis. <Button/> atau <CarouselNav/>) ditaruh di kanan.
 */
export default function SectionHeader({ label, title, action }) {
  return (
    <Reveal direction="up">
      <div className="flex items-end justify-between gap-6 flex-wrap">
        <div className="flex flex-col gap-2">
          {label && (
            <span className="text-mint font-heading font-semibold text-xs tracking-[0.3em] uppercase">
              {label}
            </span>
          )}
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-white tracking-tight leading-none">
            {title}
          </h2>
        </div>

        {action && <div className="shrink-0">{action}</div>}
      </div>
    </Reveal>
  )
}
