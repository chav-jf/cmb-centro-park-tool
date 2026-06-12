import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { BikeWheelSVG } from '../components/interactive/BikeWheelSVG'
import { MagneticButton } from '../components/interactive/MagneticButton'
import { scrollToSection } from '../lib/lenis'
import { waLink } from '../data/social'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { EASE } from '../lib/motion'

const H1_LINES = ['EXPERTOS', 'EN TU RODADA']

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const yTag = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : -60])
  const yTitle = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : -130])
  const yCta = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : -200])

  return (
    <section
      ref={sectionRef}
      className="relative flex h-screen min-h-[640px] items-center overflow-hidden bg-bg"
    >
      {/* Glow central */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 60%, rgba(91,75,214,0.14) 0%, transparent 65%)',
        }}
        aria-hidden="true"
      />

      {/* Capa 0 — ruedas SVG rotando (inmóviles ante el scroll) */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute -bottom-[10%] -right-[10%]">
          <BikeWheelSVG size={720} opacity={0.055} duration={70} />
        </div>
        <div className="absolute -top-[5%] -right-[5%]">
          <BikeWheelSVG size={420} opacity={0.035} duration={100} direction="reverse" />
        </div>
        <div className="absolute left-[5%] top-[15%]">
          <BikeWheelSVG size={220} opacity={0.09} duration={45} />
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        {/* Capa 1 — lenta */}
        <motion.div style={{ y: yTag }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: EASE, delay: 0.15 }}
            className="font-accent text-[0.72rem] uppercase tracking-[0.18em] text-accent"
          >
            Pasto, Nariño — Colombia · Desde 2008
          </motion.p>
        </motion.div>

        {/* Capa 2 — media */}
        <motion.div style={{ y: yTitle }}>
          <h1 className="mt-6 font-display text-[clamp(4.5rem,11vw,13rem)] leading-[0.88] text-white">
            {H1_LINES.map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, ease: EASE, delay: 0.3 + i * 0.12 }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>
        </motion.div>

        {/* Capa 3 — rápida */}
        <motion.div style={{ y: yCta }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: EASE, delay: 0.7 }}
          >
            <p className="mt-8 max-w-[520px] font-body text-[1.05rem] leading-[1.65] text-[#9a96b8]">
              Grupo CMB — Centro especializado en mantenimiento de bicicletas. Distribuidores ND
              Tuned en Colombia desde 2021.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <MagneticButton
                href={waLink('Hola CMB! Quiero solicitar un servicio para mi bicicleta.')}
                external
                className="bg-accent px-8 py-4 font-accent text-[0.8rem] uppercase tracking-[0.14em] text-white transition-colors duration-200 hover:bg-accent-h"
              >
                Solicitar Servicio
                <ArrowUpRight size={18} strokeWidth={2} />
              </MagneticButton>
              <MagneticButton
                onClick={() => scrollToSection('#servicios')}
                className="border border-white/30 px-8 py-4 font-accent text-[0.8rem] uppercase tracking-[0.14em] text-white transition-colors duration-200 hover:border-accent hover:text-accent"
              >
                Ver Servicios
              </MagneticButton>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.65, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3"
        aria-hidden="true"
      >
        <span
          className="font-accent text-[0.6rem] uppercase tracking-[0.3em] text-muted"
          style={{ writingMode: 'vertical-lr' }}
        >
          Scroll
        </span>
        <div className="animate-scroll-line h-10 w-px bg-accent" />
      </motion.div>
    </section>
  )
}
