import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Check,
  Layers,
  MessageSquare,
  Settings2,
  Truck,
  Wrench,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import { TiltCard } from '../components/interactive/TiltCard'
import { scrollToSection } from '../lib/lenis'
import { services, type ServiceIcon } from '../data/services'
import { fadeUpItem, staggerContainer, VIEWPORT_ONCE } from '../lib/motion'

const serviceIcons: Record<ServiceIcon, LucideIcon> = {
  Wrench,
  Settings2,
  Zap,
  Truck,
  Layers,
  MessageSquare,
}

export function ServicesSection() {
  const navigate = useNavigate()

  return (
    <section id="servicios" className="bg-bg py-28">
      <div className="mx-auto max-w-7xl px-6">
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
            · Grupo CMB
          </motion.p>
          <motion.h2
            variants={fadeUpItem}
            className="mt-6 whitespace-pre-line font-display text-[clamp(3rem,6vw,7.5rem)] leading-[0.92] text-white"
          >
            {'NUESTRAS\nESPECIALIDADES'}
          </motion.h2>
          <motion.p
            variants={fadeUpItem}
            className="mt-6 max-w-[480px] font-body leading-[1.65] text-[#9a96b8]"
          >
            Seis divisiones. Una sola misión: que tu bicicleta ruede perfecta.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          variants={staggerContainer(0.08)}
          className="mt-16 grid gap-px bg-white/[0.04] md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = serviceIcons[service.icon]
            return (
              <motion.div key={service.id} variants={fadeUpItem} className="h-full">
                <TiltCard className="flex h-full flex-col border border-line border-t-2 border-t-accent bg-surface p-10">
                  <Icon size={32} color="#5B4BD6" strokeWidth={1.5} />
                  <p className="mt-6 font-accent text-[0.68rem] uppercase tracking-[0.15em] text-accent">
                    {service.tag}
                  </p>
                  <h3 className="mt-3 whitespace-pre-line font-display text-[clamp(1.6rem,2.8vw,2.2rem)] leading-[1.02] text-white">
                    {service.name}
                  </h3>
                  <p className="mt-4 max-w-[320px] font-body text-[0.9rem] leading-[1.65] text-[#9a96b8]">
                    {service.description}
                  </p>
                  <ul className="mt-6 space-y-2.5">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5">
                        <Check size={14} color="#5B4BD6" strokeWidth={2.5} />
                        <span className="font-body text-[0.85rem] text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-8">
                    <button
                      type="button"
                      onClick={() =>
                        service.id === 'pqrs' ? navigate('/pqrs') : scrollToSection('#contacto')
                      }
                      className="link-underline font-accent text-[0.75rem] uppercase tracking-[0.14em] text-accent transition-transform duration-200 hover:translate-x-1"
                    >
                      {service.id === 'pqrs' ? 'Ver PQRS →' : 'Solicitar →'}
                    </button>
                  </div>
                </TiltCard>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
