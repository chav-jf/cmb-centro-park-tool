export interface Reel {
  id: string
  /** ID del video de TikTok (data-video-id del embed). */
  tiktokId: string
  caption: string
  hashtags: string[]
  /** URL del post en TikTok. */
  url: string
}

const PROFILE = 'https://www.tiktok.com/@cmbcentroparktool/video'

/**
 * Reels de TikTok de @cmbcentroparktool. Para cambiar uno, reemplaza el
 * `tiktokId` por el data-video-id del nuevo embed.
 */
export const reels: Reel[] = [
  {
    id: 'organizacion-taller',
    tiktokId: '7519539556534783238',
    caption: 'La organización correcta del taller siempre será fundamental.',
    hashtags: ['workshop', 'mechaniclife', 'bikemechanic'],
    url: `${PROFILE}/7519539556534783238`,
  },
  {
    id: 'dia-habitual',
    tiktokId: '7623941012028689671',
    caption: 'Un día habitual de trabajo.',
    hashtags: ['rockshoxsuspension', 'suspensionlab', 'tallerdebicicletas'],
    url: `${PROFILE}/7623941012028689671`,
  },
  {
    id: 'bombas-ndtuned',
    tiktokId: '7548083077759667461',
    caption: 'Te presentamos las bombas para suspensiones ND Tuned.',
    hashtags: ['ndtunedproducts', 'ndtunedcolombia', 'suspensionbiketools'],
    url: `${PROFILE}/7548083077759667461`,
  },
]
