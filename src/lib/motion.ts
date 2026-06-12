import type { Variants } from 'framer-motion'

/** Easing premium compartido: cubic-bezier(0.22, 1, 0.36, 1) */
export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

export function staggerContainer(stagger: number): Variants {
  return {
    hidden: {},
    show: { transition: { staggerChildren: stagger } },
  }
}

export const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
}

export const VIEWPORT_ONCE = { once: true, margin: '-80px' } as const
