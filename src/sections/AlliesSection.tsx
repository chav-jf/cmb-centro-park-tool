import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, FileText } from 'lucide-react'
import { alliedBrands, type AlliedBrand } from '../data/allies'
import { fadeUpItem, staggerContainer, VIEWPORT_ONCE } from '../lib/motion'

/** Wordmark creativo por marca (monocromático sobre oscuro, estilo partners). */
function Wordmark({ id }: { id: AlliedBrand['id'] }): ReactNode {
  if (id === 'andreani') {
    return (
      <span className="flex items-center gap-1.5">
        <span className="font-body text-[2.1rem] font-extrabold italic tracking-tight text-white">
          Andreani
        </span>
        <svg width="22" height="26" viewBox="0 0 22 26" aria-hidden="true">
          <path d="M2 2 L13 13 L2 24 L7 24 L18 13 L7 2 Z" fill="#FF2E1F" transform="skewX(-8)" />
        </svg>
      </span>
    )
  }
  if (id === 'session') {
    return (
      <span className="flex flex-col items-center">
        <span className="font-body text-[2rem] font-black italic uppercase tracking-[0.12em] text-white">
          Session
        </span>
        <span className="mt-1 font-accent text-[0.55rem] uppercase tracking-[0.32em] text-white/55">
          we make you faster
        </span>
      </span>
    )
  }
  // ND Tuned
  return (
    <span className="flex items-baseline gap-2">
      <span className="font-body text-[2.3rem] font-black leading-none text-accent">ND</span>
      <span className="font-accent text-[1.15rem] uppercase tracking-[0.3em] text-white">tuned</span>
    </span>
  )
}

export function AlliesSection() {
  return (
    <section id="aliados" className="bg-[#0C0A24] py-24">
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
            · Marcas Aliadas
          </motion.p>
          <motion.h2
            variants={fadeUpItem}
            className="mt-6 whitespace-pre-line font-display text-[clamp(3rem,6vw,7.5rem)] leading-[0.92] text-white"
          >
            {'EXPLORA LOS\nCATÁLOGOS'}
          </motion.h2>
          <motion.p
            variants={fadeUpItem}
            className="mt-6 max-w-[520px] font-body leading-[1.65] text-[#9a96b8]"
          >
            Distribuidores oficiales en Colombia. Consulta el catálogo de cada marca y pide lo que
            necesites para tu suspensión.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          variants={staggerContainer(0.1)}
          className="mt-14 grid gap-5 md:grid-cols-3"
        >
          {alliedBrands.map((brand) => (
            <motion.a
              key={brand.id}
              variants={fadeUpItem}
              href={brand.catalogUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 200, damping: 22 }}
              className={`group relative flex flex-col items-center overflow-hidden border bg-surface px-8 py-12 text-center transition-[border-color,box-shadow] duration-300 hover:shadow-[0_24px_70px_rgba(91,75,214,0.25)] ${
                brand.highlight
                  ? 'border-[rgba(91,75,214,0.4)] hover:border-[rgba(91,75,214,0.7)]'
                  : 'border-line hover:border-[rgba(91,75,214,0.45)]'
              }`}
            >
              {/* Etiqueta catálogo */}
              <span className="absolute right-4 top-4 flex items-center gap-1.5 font-accent text-[0.58rem] uppercase tracking-[0.14em] text-muted">
                <FileText size={12} /> Catálogo
              </span>
              {brand.highlight && (
                <span className="absolute left-4 top-4 font-accent text-[0.58rem] uppercase tracking-[0.14em] text-accent">
                  Distribuidor
                </span>
              )}

              {/* Wordmark */}
              <div className="flex h-24 items-center justify-center">
                <Wordmark id={brand.id} />
              </div>

              <p className="mt-2 font-accent text-[0.68rem] uppercase tracking-[0.12em] text-muted">
                {brand.tagline}
              </p>

              <span className="link-underline mt-8 inline-flex items-center gap-2 font-accent text-[0.74rem] uppercase tracking-[0.14em] text-accent transition-transform duration-200 group-hover:translate-x-1">
                Ver catálogo <ExternalLink size={14} />
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
