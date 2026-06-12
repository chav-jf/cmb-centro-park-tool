import { motion } from 'framer-motion'
import { ArrowUpRight, Check } from 'lucide-react'
import { MagneticButton } from '../components/interactive/MagneticButton'
import { waLink } from '../data/social'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { fadeUpItem, staggerContainer, VIEWPORT_ONCE } from '../lib/motion'

const marcas = ['Fox', 'RockShox', 'Specialized', 'Otras marcas']
const trabajos = ['Barras', 'Amortiguadores', 'Horquillas', 'Dirección', 'Retenes']

export function SuspensionSection() {
  const reduced = useReducedMotion()

  return (
    <section id="suspensiones" className="overflow-hidden bg-[#0C0A24] py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1fr_auto]">
        {/* Texto */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          variants={staggerContainer(0.1)}
        >
          <motion.p
            variants={fadeUpItem}
            className="font-accent text-[0.72rem] uppercase tracking-[0.18em] text-accent"
          >
            · Servicios Especializados
          </motion.p>
          <motion.h2
            variants={fadeUpItem}
            className="mt-6 whitespace-pre-line font-display text-[clamp(3rem,6vw,7.5rem)] leading-[0.92] text-white"
          >
            {'SERVICIO DE\nSUSPENSIONES'}
          </motion.h2>

          <motion.p
            variants={fadeUpItem}
            className="mt-8 max-w-[560px] font-body leading-[1.65] text-[#9a96b8]"
          >
            Nos especializamos en el mantenimiento de suspensiones para bicicletas, respaldados por
            marcas y empresas del sector con más de 15 años de experiencia. Le apostamos a la calidad
            en el servicio, al uso adecuado de herramientas y nuevas tecnologías.
          </motion.p>
          <motion.p
            variants={fadeUpItem}
            className="mt-5 max-w-[560px] font-body leading-[1.65] text-[#9a96b8]"
          >
            Desde 2021 somos distribuidores en Colombia de productos{' '}
            <span className="font-accent uppercase tracking-wide text-accent">ND Tuned</span>:
            barras, tubos, sistema OVR, kits de mantenimiento, herramienta, amortiguadores y demás
            accesorios para tus suspensiones.
          </motion.p>

          {/* Marcas */}
          <motion.div variants={fadeUpItem} className="mt-10">
            <p className="font-accent text-[0.66rem] uppercase tracking-[0.15em] text-muted">
              Marcas que atendemos
            </p>
            <div className="mt-3 flex flex-wrap gap-2.5">
              {marcas.map((m) => (
                <span
                  key={m}
                  className="border border-line bg-surface px-4 py-2 font-accent text-[0.72rem] uppercase tracking-[0.1em] text-white/85"
                >
                  {m}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Trabajos */}
          <motion.div variants={fadeUpItem} className="mt-6">
            <p className="font-accent text-[0.66rem] uppercase tracking-[0.15em] text-muted">
              Qué intervenimos
            </p>
            <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2.5">
              {trabajos.map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Check size={14} color="#5B4BD6" strokeWidth={2.5} />
                  <span className="font-body text-[0.9rem] text-white/85">{t}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUpItem} className="mt-10">
            <MagneticButton
              href={waLink('Hola CMB! Quiero servicio de suspensión para mi bicicleta.')}
              external
              className="bg-accent px-8 py-4 font-accent text-[0.8rem] uppercase tracking-[0.14em] text-white transition-colors duration-200 hover:bg-accent-h"
            >
              Agendar servicio de suspensión
              <ArrowUpRight size={18} strokeWidth={2} />
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* Video decorativo (9:16) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_ONCE}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="justify-self-center lg:justify-self-end lg:mr-10 xl:mr-20"
        >
          <div className="relative aspect-[9/16] w-[clamp(240px,70vw,340px)] overflow-hidden border border-line border-t-2 border-t-accent shadow-[0_24px_70px_rgba(91,75,214,0.25)]">
            <video
              src="/videos/suspension.mp4"
              autoPlay={!reduced}
              muted
              loop
              playsInline
              preload="metadata"
              className="h-full w-full object-cover"
              aria-hidden="true"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/15" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4">
              <p className="font-accent text-[0.62rem] uppercase tracking-[0.16em] text-white/80">
                Suspension Lab · CMB
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
