import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { ReelCard } from '../components/ui/ReelCard'
import { reels, type Reel } from '../data/reels'
import { socialLinks } from '../data/social'
import { fadeUpItem, staggerContainer, VIEWPORT_ONCE } from '../lib/motion'

const instagram = socialLinks[0]

export function RedesSection() {
  const [active, setActive] = useState<Reel | null>(null)

  return (
    <section id="redes" className="bg-[#0C0A24] py-28">
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
            · Redes
          </motion.p>
          <motion.h2
            variants={fadeUpItem}
            className="mt-6 whitespace-pre-line font-display text-[clamp(3rem,6vw,7.5rem)] leading-[0.92] text-white"
          >
            {'REELS\nEN MOVIMIENTO'}
          </motion.h2>
          <motion.p
            variants={fadeUpItem}
            className="mt-6 max-w-[520px] font-body leading-[1.65] text-[#9a96b8]"
          >
            El taller en video. Suspensiones, e-bikes y carbono — el día a día de CMB en reels.
            Síguenos en {instagram.handle}.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          variants={staggerContainer(0.08)}
          className="mt-16 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3"
        >
          {reels.map((reel) => (
            <motion.div key={reel.id} variants={fadeUpItem}>
              <ReelCard reel={reel} onOpen={setActive} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox del reel con sonido */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/92 p-4"
            data-lenis-prevent
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative aspect-[9/16] max-h-[88vh] overflow-hidden border border-line bg-surface"
            >
              <video
                src={active.src}
                autoPlay
                controls
                loop
                playsInline
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-x-0 top-0 bg-gradient-to-b from-black/60 to-transparent p-4">
                <p className="font-body text-sm font-medium text-white">{active.caption}</p>
              </div>
            </motion.div>
            <button
              type="button"
              onClick={() => setActive(null)}
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-accent"
              aria-label="Cerrar reel"
            >
              <X size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
