import type { MouseEvent } from 'react'
import { useMotionValue, useSpring, type MotionValue } from 'framer-motion'

const TILT_RANGE = 8 // grados: -8 a +8
const SPRING = { stiffness: 160, damping: 20 }

export interface TiltControls {
  rotateX: MotionValue<number>
  rotateY: MotionValue<number>
  onMouseMove: (e: MouseEvent<HTMLElement>) => void
  onMouseLeave: () => void
}

/** rotateX/rotateY según la posición del mouse relativa al centro del elemento. */
export function useTilt(disabled = false): TiltControls {
  const rx = useMotionValue(0)
  const ry = useMotionValue(0)
  const rotateX = useSpring(rx, SPRING)
  const rotateY = useSpring(ry, SPRING)

  const onMouseMove = (e: MouseEvent<HTMLElement>): void => {
    if (disabled) return
    const rect = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    ry.set(px * TILT_RANGE * 2)
    rx.set(-py * TILT_RANGE * 2)
  }

  const onMouseLeave = (): void => {
    rx.set(0)
    ry.set(0)
  }

  return { rotateX, rotateY, onMouseMove, onMouseLeave }
}
