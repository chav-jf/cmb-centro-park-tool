interface MarqueeProps {
  text: string
  /** Duración de un ciclo completo en segundos. */
  duration?: number
  className?: string
}

const REPETITIONS = 4

export function Marquee({ text, duration = 35, className = '' }: MarqueeProps) {
  return (
    <div className={`marquee-track overflow-hidden whitespace-nowrap ${className}`}>
      <div
        className="animate-marquee gpu inline-flex w-max"
        style={{ animationDuration: `${duration}s` }}
      >
        {Array.from({ length: REPETITIONS }, (_, i) => (
          <span key={i} aria-hidden={i > 0}>
            {text}
          </span>
        ))}
      </div>
    </div>
  )
}
