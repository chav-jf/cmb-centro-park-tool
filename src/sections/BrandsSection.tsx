import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { brands } from '../data/brands'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { fadeUpItem, staggerContainer, VIEWPORT_ONCE } from '../lib/motion'

export function BrandsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : -30])

  return (
    <section ref={sectionRef} className="bg-[#0D0D0D] py-24">
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
            · Distribuidores &amp; Marcas Aliadas
          </motion.p>
          <motion.h2
            variants={fadeUpItem}
            className="mt-6 whitespace-pre-line font-display text-[clamp(3rem,6vw,7.5rem)] leading-[0.92] text-white"
          >
            {'TRABAJAMOS CON\nLO MEJOR'}
          </motion.h2>
        </motion.div>

        <motion.div
          style={{ y }}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          variants={staggerContainer(0.08)}
          className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6"
        >
          {brands.map((brand) => (
            <motion.div
              key={brand.name}
              variants={fadeUpItem}
              className={`flex flex-col items-center justify-center gap-2 bg-surface px-8 py-6 text-center transition-[transform,border-color] duration-300 hover:scale-[1.04] ${
                brand.highlight
                  ? 'border border-[rgba(204,0,0,0.35)] hover:border-[rgba(204,0,0,0.6)]'
                  : 'border border-white/[0.06] hover:border-[rgba(204,0,0,0.3)]'
              }`}
            >
              <p
                className={`font-display text-[1.8rem] leading-none ${
                  brand.highlight ? 'text-accent' : 'text-white'
                }`}
              >
                {brand.name}
              </p>
              {brand.highlight && (
                <p className="font-accent text-[0.6rem] uppercase tracking-[0.14em] text-accent">
                  Distribuidor Colombia
                </p>
              )}
              <p className="font-accent text-[0.68rem] leading-snug text-muted">{brand.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
