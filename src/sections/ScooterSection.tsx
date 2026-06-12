import { motion } from 'framer-motion'
import { ArrowUpRight, Check, Instagram, MapPin, Phone } from 'lucide-react'
import { MagneticButton } from '../components/interactive/MagneticButton'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { fadeUpItem, staggerContainer, VIEWPORT_ONCE } from '../lib/motion'

const SCOOTER_IG = 'https://www.instagram.com/cmb.taller.scooters/'
const SCOOTER_PHONE = '+57 304 366 2199'
const SCOOTER_WA = `https://wa.me/573043662199?text=${encodeURIComponent(
  'Hola CMB! Quiero agendar mantenimiento para mi scooter / bici eléctrica.',
)}`

const beneficios = [
  'Prolonga la vida útil de tu scooter y evita costosas reparaciones mayores.',
  'Conducción segura: frenos ajustados, neumáticos con presión adecuada y componentes en buen estado.',
  'Rendimiento óptimo gracias a la lubricación, limpieza y ajuste de los componentes clave.',
  'Ahorro a largo plazo al prevenir problemas y mantener un consumo eficiente de energía.',
]

export function ScooterSection() {
  const reduced = useReducedMotion()

  return (
    <section id="scooters" className="overflow-hidden bg-bg py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Encabezado */}
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
            · Movilidad Eléctrica
          </motion.p>
          <motion.h2
            variants={fadeUpItem}
            className="mt-6 whitespace-pre-line font-display text-[clamp(3rem,6vw,7.5rem)] leading-[0.92] text-white"
          >
            {'SERVICIO DE\nSCOOTERS'}
          </motion.h2>
          <motion.p
            variants={fadeUpItem}
            className="mt-8 max-w-[640px] font-body leading-[1.65] text-[#9a96b8]"
          >
            Mantenimiento y reparación de scooters, patinetas y bicicletas eléctricas: neumáticos,
            revisión de batería, frenos y motor. En Pasto, moverte en scooter también implica
            responsabilidad: conoce las normas de tránsito y rueda seguro. Si necesitas una revisión
            —o estás pensando en tener la tuya— visítanos.
          </motion.p>
        </motion.div>

        {/* Media + beneficios */}
        <div className="mt-14 grid items-start gap-12 lg:grid-cols-[auto_1fr]">
          {/* Video decorativo 9:16 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_ONCE}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="justify-self-center"
          >
            <div className="relative aspect-[9/16] w-[clamp(240px,70vw,320px)] overflow-hidden border border-line border-t-2 border-t-accent shadow-[0_24px_70px_rgba(91,75,214,0.25)]">
              <video
                src="/videos/Scooter.mp4"
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
                  CMB Taller de Scooter
                </p>
              </div>
            </div>
          </motion.div>

          {/* Beneficios + contacto */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT_ONCE}
            variants={staggerContainer(0.08)}
          >
            <motion.p
              variants={fadeUpItem}
              className="font-body leading-[1.65] text-[#9a96b8]"
            >
              En CMB reparamos tu scooter, bici o moto eléctrica con los más altos estándares
              técnicos. Nuestro equipo capacitado se enfoca en el mantenimiento preventivo para una
              conducción segura y sin preocupaciones.
            </motion.p>

            <motion.p
              variants={fadeUpItem}
              className="mt-8 font-display text-[1.8rem] leading-tight text-white"
            >
              ¿Por qué hacer el mantenimiento adecuado?
            </motion.p>
            <motion.ul variants={fadeUpItem} className="mt-5 space-y-3.5">
              {beneficios.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <Check size={16} color="#5B4BD6" strokeWidth={2.5} className="mt-1 shrink-0" />
                  <span className="font-body text-[0.95rem] leading-relaxed text-white/85">{b}</span>
                </li>
              ))}
            </motion.ul>

            {/* Contacto scooter */}
            <motion.div
              variants={fadeUpItem}
              className="mt-8 grid gap-3 border-t border-line pt-8 sm:grid-cols-2"
            >
              <a
                href={SCOOTER_IG}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 font-body text-[0.92rem] text-white/85 transition-colors hover:text-accent"
              >
                <Instagram size={18} className="shrink-0 text-accent" />
                @cmb.taller.scooters
              </a>
              <a
                href={SCOOTER_WA}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 font-body text-[0.92rem] text-white/85 transition-colors hover:text-accent"
              >
                <Phone size={18} className="shrink-0 text-accent" />
                {SCOOTER_PHONE}
              </a>
              <p className="flex items-start gap-3 font-body text-[0.92rem] text-white/85 sm:col-span-2">
                <MapPin size={18} className="mt-0.5 shrink-0 text-accent" />
                Calle 16 #28-97, San Andrés (diagonal al parque Rumipamba), Pasto, Nariño · 520002
              </p>
            </motion.div>

            <motion.div variants={fadeUpItem} className="mt-8">
              <MagneticButton
                href={SCOOTER_WA}
                external
                className="bg-accent px-8 py-4 font-accent text-[0.8rem] uppercase tracking-[0.14em] text-white transition-colors duration-200 hover:bg-accent-h"
              >
                Agendar mantenimiento de scooter
                <ArrowUpRight size={18} strokeWidth={2} />
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>

        {/* Imagen promocional */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_ONCE}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-16 max-w-2xl overflow-hidden border border-line border-t-2 border-t-accent"
        >
          <img
            src="/gallery/SCOOTER.png"
            alt="Servicio de mantenimiento de scooters y bicicletas eléctricas CMB"
            loading="lazy"
            className="w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  )
}
