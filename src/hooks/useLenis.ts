import { useEffect } from 'react'
import { gsap, ScrollTrigger } from '../lib/gsap'
import { createLenis, destroyLenis } from '../lib/lenis'
import { useReducedMotion } from './useReducedMotion'

/** Inicializa Lenis (scroll suave global) sincronizado con el ticker de GSAP. */
export function useLenis(): void {
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced) return

    const lenis = createLenis()
    const onScroll = (): void => {
      ScrollTrigger.update()
    }
    lenis.on('scroll', onScroll)

    const tick = (time: number): void => {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(tick)
      destroyLenis()
    }
  }, [reduced])
}
