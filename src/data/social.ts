export type SocialIcon = 'Instagram' | 'Facebook' | 'Music2' | 'MessageCircle'

export interface SocialLink {
  platform: string
  handle: string
  url: string
  icon: SocialIcon
}

/**
 * Número placeholder — reemplazar por el número real de CMB
 * (formato internacional sin "+": 57 + 10 dígitos).
 */
export const WHATSAPP_NUMBER = '573000000000'

export function waLink(text?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`
  return text ? `${base}?text=${encodeURIComponent(text)}` : base
}

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
