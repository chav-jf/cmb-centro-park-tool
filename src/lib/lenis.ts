import Lenis from '@studio-freight/lenis'

let instance: Lenis | null = null

export function createLenis(): Lenis {
  if (!instance) {
    instance = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
      orientation: 'vertical',
    })
  }
  return instance
}

export function getLenis(): Lenis | null {
  return instance
}

export function destroyLenis(): void {
  instance?.destroy()
  instance = null
}

/** Scroll suave a un anchor (#id) con Lenis; cae a scrollIntoView si Lenis no está activo. */
export function scrollToSection(selector: string, offset = -72): void {
  if (instance) {
    instance.scrollTo(selector, { offset })
    return
  }
  document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
