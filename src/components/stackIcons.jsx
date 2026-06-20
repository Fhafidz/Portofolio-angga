/**
 * Shared tech-stack badge icons, keyed by tool name.
 * Used by VideoCard (grid) and the Paddock lightbox.
 */
export const STACK_ICONS = {
  'Premiere Pro': (
    <div className="w-3.5 h-3.5 rounded-[2px] bg-[#00041d] border border-[#00c8ff] flex items-center justify-center font-heading font-extrabold text-[6px] text-[#00c8ff] select-none shrink-0">
      Pr
    </div>
  ),
  'After Effects': (
    <div className="w-3.5 h-3.5 rounded-[2px] bg-[#0d001a] border border-[#d2a6ff] flex items-center justify-center font-heading font-extrabold text-[6px] text-[#d2a6ff] select-none shrink-0">
      Ae
    </div>
  ),
  'DaVinci': (
    <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-amber-600 via-red-500 to-blue-500 flex items-center justify-center select-none shrink-0">
      <svg className="w-2 h-2 text-white fill-none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <circle cx="12" cy="12" r="10" />
      </svg>
    </div>
  ),
  'Lightroom': (
    <div className="w-3.5 h-3.5 rounded-[2px] bg-[#00041d] border border-[#00c3ff] flex items-center justify-center font-heading font-extrabold text-[6px] text-[#00c3ff] select-none shrink-0">
      Lr
    </div>
  ),
  'Photoshop': (
    <div className="w-3.5 h-3.5 rounded-[2px] bg-[#00041d] border border-[#00a8ff] flex items-center justify-center font-heading font-extrabold text-[6px] text-[#00a8ff] select-none shrink-0">
      Ps
    </div>
  ),
  'Illustrator': (
    <div className="w-3.5 h-3.5 rounded-[2px] bg-[#1e0a00] border border-[#ff9a00] flex items-center justify-center font-heading font-extrabold text-[6px] text-[#ff9a00] select-none shrink-0">
      Ai
    </div>
  ),
  'CapCut': (
    <div className="w-3.5 h-3.5 rounded-[2px] bg-black border border-mint flex items-center justify-center select-none shrink-0">
      <svg className="w-2 h-2 text-mint fill-none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6a3 3 0 100-6 3 3 0 000 6zm0 12a3 3 0 100-6 3 3 0 000 6zM20 4L8.5 12 20 20M8.12 12h11.76" />
      </svg>
    </div>
  ),
}
