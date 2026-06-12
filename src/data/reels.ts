export interface Reel {
  id: string
  /** Ruta del video en /public (vacío = slot "Próximamente"). */
  src: string
  caption: string
  hashtags: string[]
  platform: 'Instagram' | 'TikTok' | 'Facebook'
  /** Link al post real (opcional). */
  href?: string
}

/**
 * Reels verticales 9:16. Para añadir uno nuevo:
 * 1. Pega el .mp4 (formato vertical 720×1280) en `public/videos/`.
 * 2. Agrega una entrada aquí con su `src`, caption y hashtags.
 * Los slots con `src: ''` se muestran como "Próximamente".
 */
export const reels: Reel[] = [
  {
    id: 'rockshox-purga',
    src: '/videos/video.mp4',
    caption: 'Purga rápida del damper delantero RockShox',
    hashtags: ['rockshoxbrain', 'rockshox', 'suspensionservicecenter', 'mechanicbikecolombia'],
    platform: 'Instagram',
    href: 'https://instagram.com/cmbcentroparktool',
  },
  {
    id: 'placeholder-1',
    src: '',
    caption: 'Tu próximo reel CMB',
    hashtags: ['cmbcentroparktool', 'parktool'],
    platform: 'TikTok',
  },
  {
    id: 'placeholder-2',
    src: '',
    caption: 'Tu próximo reel CMB',
    hashtags: ['suspensionlab', 'ndtuned'],
    platform: 'Facebook',
  },
]
