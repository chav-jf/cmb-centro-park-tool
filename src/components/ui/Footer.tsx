import { type MouseEvent } from 'react'
import { Facebook, Instagram, MessageCircle, Music2, type LucideIcon } from 'lucide-react'
import { scrollToSection } from '../../lib/lenis'
import { socialLinks, type SocialIcon } from '../../data/social'

const FOOTER_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Contacto', href: '#contacto' },
  { label: 'PQRS', href: '#contacto' },
]

const socialIcons: Record<SocialIcon, LucideIcon> = {
  Instagram,
  Facebook,
  Music2,
  MessageCircle,
}

export function Footer() {
  const handleAnchor = (e: MouseEvent<HTMLAnchorElement>, href: string): void => {
    e.preventDefault()
    scrollToSection(href)
  }

  return (
    <footer className="relative overflow-hidden border-t border-t-accent bg-[#050505]">
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
          <p className="font-display text-[2rem] leading-none">
            <span className="text-accent">CMB</span>{' '}
            <span className="text-white">PARK TOOL</span>
          </p>
          <p className="mt-4 whitespace-pre-line font-body text-sm leading-relaxed text-muted">
            {'Centro de Mantenimiento de Bicicletas\nPasto, Nariño, Colombia'}
          </p>
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
