import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Facebook,
  Instagram,
  Music2,
  Play,
  Volume2,
  VolumeX,
  type LucideIcon,
} from 'lucide-react'
import type { Reel } from '../../data/reels'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { useIsTouch } from '../../hooks/useIsTouch'

const platformIcons: Record<Reel['platform'], LucideIcon> = {
  Instagram,
  TikTok: Music2,
  Facebook,
}

interface ReelCardProps {
  reel: Reel
  /** Abre el reel en el lightbox con sonido. */
  onOpen: (reel: Reel) => void
}

export function ReelCard({ reel, onOpen }: ReelCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [muted, setMuted] = useState(true)
  const [inView, setInView] = useState(false)
  const reduced = useReducedMotion()
  const isTouch = useIsTouch()
  const Icon = platformIcons[reel.platform]
  const isEmpty = reel.src === ''

  // Autoplay silenciado solo cuando el reel está en viewport.
  useEffect(() => {
    const el = containerRef.current
    const video = videoRef.current
    if (!el || !video || isEmpty) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting)
        if (entry.isIntersecting && !reduced) {
          void video.play().catch(() => undefined)
        } else {
          video.pause()
        }
      },
      { threshold: 0.5 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [reduced, isEmpty])

  const toggleMute = (e: React.MouseEvent): void => {
    e.stopPropagation()
    const video = videoRef.current
    if (!video) return
    video.muted = !video.muted
    setMuted(video.muted)
  }

  // Slot "Próximamente"
  if (isEmpty) {
    return (
      <div className="group relative flex aspect-[9/16] flex-col items-center justify-center gap-4 overflow-hidden border-2 border-dashed border-white/10 bg-surface transition-colors duration-300 hover:border-[rgba(91,75,214,0.45)]">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-surface2 transition-colors duration-300 group-hover:border-accent">
          <Play size={26} className="ml-1 text-[#56527d] transition-colors duration-300 group-hover:text-accent" />
        </div>
        <p className="px-6 text-center font-accent text-[0.7rem] uppercase tracking-[0.14em] text-[#56527d]">
          Próximamente
        </p>
        <div className="absolute right-3 top-3 text-[#56527d]">
          <Icon size={18} strokeWidth={1.5} />
        </div>
      </div>
    )
  }

  return (
    <motion.div
      ref={containerRef}
      onClick={() => onOpen(reel)}
      whileHover={reduced || isTouch ? undefined : { y: -6 }}
      transition={{ type: 'spring', stiffness: 200, damping: 22 }}
      style={{ boxShadow: '0 0 0 rgba(91,75,214,0)' }}
      className="group relative aspect-[9/16] cursor-pointer overflow-hidden border border-line transition-shadow duration-300 hover:shadow-[0_24px_70px_rgba(91,75,214,0.3)]"
    >
      <video
        ref={videoRef}
        src={reel.src}
        muted={muted}
        loop
        playsInline
        preload="metadata"
        className="h-full w-full object-cover"
      />

      {/* Degradado inferior para legibilidad */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/20" />

      {/* Indicador de play (reduced-motion o pausa) */}
      {(reduced || !inView) && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/90 backdrop-blur-sm">
            <Play size={24} className="ml-1 text-white" fill="white" />
          </div>
        </div>
      )}

      {/* Plataforma */}
      <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-black/50 px-2.5 py-1 backdrop-blur-sm">
        <Icon size={14} className="text-white" strokeWidth={2} />
        <span className="font-accent text-[0.6rem] uppercase tracking-[0.1em] text-white">
          {reel.platform}
        </span>
      </div>

      {/* Botón de sonido */}
      <button
        type="button"
        onClick={toggleMute}
        className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-accent"
        aria-label={muted ? 'Activar sonido' : 'Silenciar'}
      >
        {muted ? <VolumeX size={15} /> : <Volume2 size={15} />}
      </button>

      {/* Caption + hashtags */}
      <div className="absolute inset-x-0 bottom-0 p-4">
        <p className="font-body text-[0.85rem] font-medium leading-snug text-white">
          {reel.caption}
        </p>
        <p className="mt-1.5 font-accent text-[0.62rem] leading-relaxed text-white/60">
          {reel.hashtags.map((h) => `#${h}`).join(' ')}
        </p>
      </div>
    </motion.div>
  )
}
