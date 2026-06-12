import { motion } from 'framer-motion'
import { ExternalLink, FileText } from 'lucide-react'
import { alliedBrands } from '../data/allies'
import { fadeUpItem, staggerContainer, VIEWPORT_ONCE } from '../lib/motion'

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
              className={`group relative flex flex-col items-center overflow-hidden border bg-surface px-8 py-10 text-center transition-[border-color,box-shadow] duration-300 hover:shadow-[0_24px_70px_rgba(91,75,214,0.25)] ${
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

              {/* Logo en placa del color de su fondo */}
              <div
                className="mt-4 flex h-24 w-full items-center justify-center rounded-lg px-6 ring-1 ring-white/10"
                style={{ backgroundColor: brand.plate }}
              >
                <img
                  src={brand.logo}
                  alt={`Logo ${brand.name}`}
                  loading="lazy"
                  className="max-h-12 w-auto max-w-full object-contain"
                />
              </div>

              <p className="mt-5 font-accent text-[0.68rem] uppercase tracking-[0.12em] text-muted">
                {brand.tagline}
              </p>

              <span className="link-underline mt-6 inline-flex items-center gap-2 font-accent text-[0.74rem] uppercase tracking-[0.14em] text-accent transition-transform duration-200 group-hover:translate-x-1">
                Ver catálogo <ExternalLink size={14} />
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
