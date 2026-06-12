import { motion } from 'framer-motion'
import { ReelCard } from '../components/ui/ReelCard'
import { reels } from '../data/reels'
import { socialLinks } from '../data/social'
import { fadeUpItem, staggerContainer, VIEWPORT_ONCE } from '../lib/motion'

const instagram = socialLinks[0]

export function RedesSection() {
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
            El taller en video. Suspensiones, ND Tuned y el día a día de CMB en TikTok. Síguenos en{' '}
            {instagram.handle}.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          variants={staggerContainer(0.1)}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {reels.map((reel) => (
            <motion.div key={reel.id} variants={fadeUpItem}>
              <ReelCard reel={reel} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
