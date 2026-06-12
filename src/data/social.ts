export type SocialIcon = 'Instagram' | 'Facebook' | 'Music2' | 'MessageCircle'

export interface SocialLink {
  platform: string
  handle: string
  url: string
  icon: SocialIcon
}

/**
 * WhatsApp del taller CMB (celular 316 250 7345).
 * Formato internacional sin "+": 57 + 10 dígitos.
 */
export const WHATSAPP_NUMBER = '573162507345'

export function waLink(text?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`
  return text ? `${base}?text=${encodeURIComponent(text)}` : base
}

/** Ubicación del taller en Google Maps. */
export const MAPS_URL =
  'https://www.google.com/maps/place/Centro+de+mantenimiento+ParkTool/@1.2186172,-77.293269,15z/data=!4m10!1m2!2m1!1sCMB+PARK+TOOL+PASTO!3m6!1s0x8e2ed48063df1baf:0x2d0d399135ffe51e!8m2!3d1.2169752!4d-77.2823207!16s%2Fg%2F11c6qpxlyf'

/** URL de mapa embebible (sin API key) centrado en el taller. */
export const MAPS_EMBED =
  'https://maps.google.com/maps?q=1.2169752,-77.2823207&z=16&hl=es&output=embed'

export const socialLinks: SocialLink[] = [
  {
    platform: 'Instagram',
    handle: '@cmbcentroparktool',
    url: 'https://instagram.com/cmbcentroparktool',
    icon: 'Instagram',
  },
  {
    platform: 'Facebook',
    handle: 'CMB Centro ParkTool',
    url: 'https://facebook.com/cmbcentroparktool',
    icon: 'Facebook',
  },
  {
    platform: 'TikTok',
    handle: '@cmbcentroparktool',
    url: 'https://tiktok.com/@cmbcentroparktool',
    icon: 'Music2',
  },
  {
    platform: 'WhatsApp',
    handle: 'Chatea con nosotros',
    url: waLink('Hola CMB! Quiero información sobre sus servicios.'),
    icon: 'MessageCircle',
  },
]
