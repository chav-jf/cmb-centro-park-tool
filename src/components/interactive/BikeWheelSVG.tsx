interface BikeWheelSVGProps {
  size: number
  opacity: number
  /** Duración de una vuelta completa en segundos. */
  duration: number
  direction?: 'normal' | 'reverse'
  className?: string
}

const SPOKE_COUNT = 16
const RIM_RADIUS = 92

const spokes = Array.from({ length: SPOKE_COUNT }, (_, i) => {
  const angle = (i * (360 / SPOKE_COUNT) * Math.PI) / 180
  return {
    x2: 100 + RIM_RADIUS * Math.cos(angle),
    y2: 100 + RIM_RADIUS * Math.sin(angle),
  }
})

export function BikeWheelSVG({
  size,
  opacity,
  duration,
  direction = 'normal',
  className = '',
}: BikeWheelSVGProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={`gpu ${className}`}
      style={{
        opacity,
        animation: `wheel-spin ${duration}s linear infinite ${direction}`,
      }}
      aria-hidden="true"
    >
      {/* Neumático */}
      <circle cx="100" cy="100" r="96" stroke="rgba(204,0,0,0.3)" strokeWidth="10" fill="none" />
      {/* Aro exterior */}
      <circle cx="100" cy="100" r={RIM_RADIUS} stroke="#CC0000" strokeWidth="5" fill="none" />
      {/* Spokes */}
      {spokes.map((s, i) => (
        <line key={i} x1="100" y1="100" x2={s.x2} y2={s.y2} stroke="#CC0000" strokeWidth="2" />
      ))}
      {/* Buje */}
      <circle cx="100" cy="100" r="12" stroke="#CC0000" strokeWidth="3" fill="#080808" />
      {/* Tornillo del buje */}
      <circle cx="100" cy="100" r="4" fill="#CC0000" />
    </svg>
  )
}
