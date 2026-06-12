import type { MouseEvent } from 'react'
import { useMotionValue, useSpring, type MotionValue } from 'framer-motion'

const SPRING = { stiffness: 350, damping: 25 }
const STRENGTH = 0.35

export interface MagneticControls {
  x: MotionValue<number>
  y: MotionValue<number>
  onMouseMove: (e: MouseEvent<HTMLElement>) => void
  onMouseLeave: () => void
}

/** El elemento se desplaza hacia el cursor y regresa con spring al salir. */
export function useMagnetic(disabled = false): MagneticControls {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const x = useSpring(mx, SPRING)
  const y = useSpring(my, SPRING)

  const onMouseMove = (e: MouseEvent<HTMLElement>): void => {
    if (disabled) return
    const rect = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - (rect.left + rect.width / 2)) * STRENGTH)
    my.set((e.clientY - (rect.top + rect.height / 2)) * STRENGTH)
  }

  const onMouseLeave = (): void => {
    mx.set(0)
    my.set(0)
  }

  return { x, y, onMouseMove, onMouseLeave }
}
