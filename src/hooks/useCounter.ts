import { useEffect, type RefObject } from 'react'
import { gsap } from '../lib/gsap'
import { useReducedMotion } from './useReducedMotion'

function format(value: number, target: number): string {
  const floored = Math.floor(value)
  return target >= 1000 ? floored.toLocaleString('es-CO') : floored.toString()
}

/** Anima el textContent del elemento de 0 a `target` al entrar en viewport (una sola vez). */
export function useCounter(target: number, ref: RefObject<HTMLElement>): void {
  const reduced = useReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (reduced) {
      el.textContent = format(target, target)
      return
    }

    const counter = { val: 0 }
    el.textContent = format(0, target)
    const tween = gsap.to(counter, {
      val: target,
      duration: 2.5,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 80%', once: true },
      onUpdate() {
        el.textContent = format(counter.val, target)
      },
    })

    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [target, ref, reduced])
}
