import { type MouseEvent } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Facebook, Instagram, MapPin, MessageCircle, Music2, type LucideIcon } from 'lucide-react'
import { scrollToSection } from '../../lib/lenis'
import { MAPS_URL, socialLinks, type SocialIcon } from '../../data/social'

const FOOTER_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Redes', href: '#redes' },
  { label: 'Contacto', href: '#contacto' },
  { label: 'Envíos', href: '/envios' },
  { label: 'PQRS', href: '/pqrs' },
]

const socialIcons: Record<SocialIcon, LucideIcon> = {
  Instagram,
  Facebook,
  Music2,
  MessageCircle,
}

export function Footer() {
  const navigate = useNavigate()
  const location = useLocation()

  const handleAnchor = (e: MouseEvent<HTMLAnchorElement>, href: string): void => {
    e.preventDefault()
    if (href.startsWith('#')) {
      if (location.pathname !== '/') navigate('/' + href)
      else scrollToSection(href)
    } else {
      navigate(href) // ruta como /pqrs
    }
  }

  return (
    <footer className="relative overflow-hidden border-t border-t-accent bg-[#070617]">
      {/* Watermark */}
      <div
        className="pointer-events-none absolute inset-0 flex select-none items-center justify-center"
        aria-hidden="true"
      >
        <span className="font-display text-[clamp(8rem,28vw,22rem)] leading-none text-white opacity-[0.04]">
          CMB
        </span>
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3">
        {/* Logo + descripción */}
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Logo Grupo CMB"
              className="h-12 w-12 rounded-lg object-cover ring-1 ring-white/10"
            />
            <p className="font-display text-[2rem] leading-none">
              <span className="text-accent">CMB</span>{' '}
              <span className="text-white">PARK TOOL</span>
            </p>
          </div>
          <p className="mt-5 whitespace-pre-line font-body text-sm leading-relaxed text-muted">
            {'Centro de Mantenimiento de Bicicletas\nCalle 16 #28-97, San Andrés\nPasto, Nariño, Colombia'}
          </p>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline mt-4 inline-flex items-center gap-2 font-accent text-[0.7rem] uppercase tracking-[0.14em] text-accent"
          >
            <MapPin size={13} /> Ver en Google Maps →
          </a>
        </div>

        {/* Links */}
        <nav aria-label="Enlaces del sitio">
          <ul className="space-y-3">
            {FOOTER_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => handleAnchor(e, link.href)}
                  className="link-underline font-body text-sm text-white transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Redes */}
        <div>
          <p className="mb-4 font-accent text-[0.72rem] uppercase tracking-[0.14em] text-accent">
            · Síguenos
          </p>
          <div className="flex gap-5">
            {socialLinks.map((social) => {
              const Icon = socialIcons[social.icon]
              return (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition-[color,transform] duration-200 hover:scale-[1.15] hover:text-accent"
                  aria-label={social.platform}
                >
                  <Icon size={22} strokeWidth={1.5} />
                </a>
              )
            })}
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/[0.07] px-6 py-6 text-center">
        <p className="font-accent text-[0.68rem] text-muted">
          © 2026 Grupo CMB · Pasto, Nariño, Colombia · Todos los derechos reservados
        </p>
      </div>
    </footer>
  )
}
