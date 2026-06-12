import { motion } from 'framer-motion'
import { Facebook, Instagram, Music2, type LucideIcon } from 'lucide-react'
import { SocialGallery } from '../components/ui/SocialGallery'
import { socialLinks } from '../data/social'
import { fadeUpItem, staggerContainer, VIEWPORT_ONCE } from '../lib/motion'

const galleryIcons: Record<string, LucideIcon> = {
  Instagram,
  Facebook,
  Music2,
}

const galleryNetworks = socialLinks.filter((s) => s.icon in galleryIcons)

export function GallerySection() {
  return (
    <section id="galeria" className="bg-bg py-28">
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
            · Redes Sociales
          </motion.p>
          <motion.h2
            variants={fadeUpItem}
            className="mt-6 whitespace-pre-line font-display text-[clamp(3rem,6vw,7.5rem)] leading-[0.92] text-white"
          >
            {'CMB\nEN ACCIÓN'}
          </motion.h2>
          <motion.p
            variants={fadeUpItem}
            className="mt-6 max-w-[480px] font-body leading-[1.65] text-[#8a8a8a]"
          >
            @cmbcentroparktool — Inspírate con nuestro trabajo diario
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          variants={staggerContainer(0.04)}
          className="mt-16"
        >
          <motion.div variants={fadeUpItem}>
            <SocialGallery />
          </motion.div>
        </motion.div>

        {/* Links sociales */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          variants={staggerContainer(0.08)}
          className="mt-12 flex flex-col items-center gap-6"
        >
          <motion.div variants={fadeUpItem} className="flex flex-wrap justify-center gap-4">
            {galleryNetworks.map((social) => {
              const Icon = galleryIcons[social.icon]
              return (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 border border-white/20 px-6 py-3 font-accent text-[0.75rem] uppercase tracking-[0.14em] text-white transition-colors duration-200 hover:border-accent hover:bg-accent"
                >
                  <Icon size={16} strokeWidth={1.5} />
                  {social.platform}
                </a>
              )
            })}
          </motion.div>
          <motion.p variants={fadeUpItem} className="font-body text-sm text-muted">
            Síguenos para más contenido de ciclismo desde Pasto, Nariño
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
