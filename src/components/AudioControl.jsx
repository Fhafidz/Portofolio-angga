export default function AudioControl({ isPlaying, onToggle }) {
  const bars = [
    { delay: '0s' },
    { delay: '0.3s' },
    { delay: '0.1s' },
    { delay: '0.5s' },
  ]

  return (
    <button
      onClick={onToggle}
      aria-label={isPlaying ? 'Pause audio' : 'Play audio'}
      className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full flex items-center justify-center bg-f1-card border border-white/15 hover:border-mint hover:shadow-[0_0_15px_rgba(0,210,190,0.3)] transition-all duration-300 cursor-pointer"
    >
      {!isPlaying ? (
        <svg
          className="w-5 h-5 text-f1-silver"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
        </svg>
      ) : (
        <div className="flex items-end gap-[3px] h-5">
          {bars.map((bar, i) => (
            <span
              key={i}
              className="w-[3px] bg-mint origin-bottom"
              style={{
                height: '100%',
                animation: 'equalizer 1.2s ease-in-out infinite',
                animationDelay: bar.delay,
              }}
            />
          ))}
        </div>
      )}
    </button>
  )
}
