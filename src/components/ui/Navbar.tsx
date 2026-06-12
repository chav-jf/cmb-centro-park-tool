import { useEffect, useState, type MouseEvent } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { MagneticButton } from '../interactive/MagneticButton'
import { scrollToSection } from '../../lib/lenis'
import { waLink } from '../../data/social'

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Redes', href: '#redes' },
  { label: 'Contacto', href: '#contacto' },
]

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const onScroll = (): void => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleAnchor = (e: MouseEvent<HTMLAnchorElement>, href: string): void => {
    e.preventDefault()
    setMenuOpen(false)
    if (location.pathname !== '/') {
      navigate('/' + href) // p.ej. '/#servicios' → la home hace scroll al montar
    } else {
      scrollToSection(href)
    }
  }

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter] duration-300 ${
          scrolled || menuOpen ? 'bg-[rgba(8,8,8,0.88)] backdrop-blur-xl' : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex h-[88px] max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              setMenuOpen(false)
              if (location.pathname !== '/') navigate('/')
              else scrollToSection('body', 0)
            }}
            className="flex items-center gap-3 transition-transform hover:scale-[1.02]"
          >
            <img
              src="/logo.png"
              alt="Logo Grupo CMB"
              className="h-12 w-12 rounded-lg object-cover ring-1 ring-white/10"
            />
            <span className="font-display text-[2rem] leading-none">
              <span className="text-accent">CMB</span>{' '}
              <span className="text-white">PARK TOOL</span>
            </span>
          </a>

          {/* Links desktop */}
          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleAnchor(e, link.href)}
                  className="link-underline font-body text-[0.95rem] text-white transition-colors duration-200 hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA desktop */}
          <div className="hidden lg:block">
            <MagneticButton
              href={waLink('Hola CMB! Quiero solicitar un servicio para mi bicicleta.')}
              external
              className="border border-accent bg-accent px-6 py-3 font-accent text-[0.75rem] uppercase tracking-[0.14em] text-white transition-colors duration-200 hover:border-accent-h hover:bg-accent-h"
            >
              Solicitar Servicio
            </MagneticButton>
          </div>

          {/* Hamburger mobile */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="text-white lg:hidden"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </header>

      {/* Menú mobile full-screen */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.5, ease: EASE }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-[rgba(8,8,8,0.96)] backdrop-blur-xl lg:hidden"
            data-lenis-prevent
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => handleAnchor(e, link.href)}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: EASE, delay: 0.15 + i * 0.08 }}
                className="font-display text-5xl text-white transition-colors hover:text-accent"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.5 }}
            >
              <a
                href={waLink('Hola CMB! Quiero solicitar un servicio para mi bicicleta.')}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-accent bg-accent px-8 py-3 font-accent text-[0.8rem] uppercase tracking-[0.14em] text-white"
              >
                Solicitar Servicio
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
