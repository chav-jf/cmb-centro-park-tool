import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useCounter } from '../hooks/useCounter'
import { stats, type Stat } from '../data/stats'
import { socialLinks } from '../data/social'
import { fadeUpItem, staggerContainer, VIEWPORT_ONCE } from '../lib/motion'

function StatCard({ stat }: { stat: Stat }) {
  const numberRef = useRef<HTMLSpanElement>(null)
  useCounter(stat.target, numberRef)

  return (
    <motion.div
      variants={fadeUpItem}
      className="border border-line border-t-2 border-t-accent bg-surface p-8 transition-colors duration-300 hover:border-accent"
    >
      <p className="font-display text-[4.5rem] leading-none text-white">
        <span ref={numberRef}>0</span>
        <span className="text-accent">{stat.suffix}</span>
      </p>
      <p className="mt-3 whitespace-pre-line font-accent text-[0.7rem] uppercase leading-relaxed tracking-[0.14em] text-muted">
        {stat.label}
      </p>
    </motion.div>
  )
}

const instagram = socialLinks[0]

export function AboutSection() {
  return (
    <section id="nosotros" className="bg-[#0A0A0A] py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[55fr_45fr]">
        {/* Columna texto — queda fija mientras los stats se revelan */}
        <div className="self-start lg:sticky lg:top-28">
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
              · Sobre Nosotros
            </motion.p>
            <motion.h2
              variants={fadeUpItem}
              className="mt-6 whitespace-pre-line font-display text-[clamp(3rem,6vw,7.5rem)] leading-[0.92] text-white"
            >
              {'EL TALLER QUE\nTU BICI\nMERECE'}
            </motion.h2>
            <motion.p
              variants={fadeUpItem}
              className="mt-8 max-w-[560px] font-body leading-[1.65] text-[#8a8a8a]"
            >
              Somos el Grupo CMB, el centro de mantenimiento de bicicletas más especializado de
              Pasto, Nariño. Con más de 15 años de experiencia, usamos herramientas Park Tool
              certificadas y respaldamos cada trabajo con los más altos estándares del sector
              ciclístico.
            </motion.p>
            <motion.p
              variants={fadeUpItem}
              className="mt-5 max-w-[560px] font-body leading-[1.65] text-[#8a8a8a]"
            >
              Desde 2021 somos distribuidores en Colombia de ND Tuned: barras, tubos, sistema OVR,
              kits de mantenimiento, amortiguadores y accesorios para suspensiones. Le apostamos a
              la calidad, la tecnología y el servicio personalizado.
            </motion.p>
            <motion.div variants={fadeUpItem} className="mt-8">
              <a
                href={instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline font-accent text-[0.8rem] tracking-[0.08em] text-white transition-colors hover:text-accent"
              >
                → Síguenos en Instagram {instagram.handle}
              </a>
            </motion.div>
            <motion.div
              variants={fadeUpItem}
              className="group relative mt-12 hidden overflow-hidden border border-line border-t-2 border-t-accent lg:block"
            >
              <img
                src="/gallery/largeimage.webp"
                alt="Interior del taller CMB con herramientas Park Tool"
                loading="lazy"
                className="aspect-[16/10] w-full object-cover"
              />
              <div className="absolute inset-0 bg-bg/40 transition-opacity duration-500 group-hover:opacity-0" />
            </motion.div>
          </motion.div>
        </div>

        {/* Columna stats 2×2 */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          variants={staggerContainer(0.12)}
          className="grid content-start gap-4 sm:grid-cols-2"
        >
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
