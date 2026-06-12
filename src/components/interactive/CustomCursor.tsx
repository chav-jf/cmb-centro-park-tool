import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useIsTouch } from '../../hooks/useIsTouch'
import { useReducedMotion } from '../../hooks/useReducedMotion'

const CURSOR_SPRING = { stiffness: 350, damping: 25 }
const CURSOR_SIZE = 12
const HOVER_SCALE = 4 // 12px → 48px
const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], input, textarea, select, label, [data-cursor-hover]'

export function CustomCursor() {
  const isTouch = useIsTouch()
  const reduced = useReducedMotion()
  const enabled = !isTouch && !reduced

  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, CURSOR_SPRING)
  const springY = useSpring(y, CURSOR_SPRING)

  useEffect(() => {
    if (!enabled) {
      document.body.classList.remove('has-custom-cursor')
      return
    }
    document.body.classList.add('has-custom-cursor')

    const onMove = (e: globalThis.MouseEvent): void => {
      x.set(e.clientX - CURSOR_SIZE / 2)
      y.set(e.clientY - CURSOR_SIZE / 2)
      setVisible(true)
    }
    const onOver = (e: globalThis.MouseEvent): void => {
      setHovering(e.target instanceof Element && e.target.closest(INTERACTIVE_SELECTOR) !== null)
    }
    const onLeave = (): void => setVisible(false)

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    document.documentElement.addEventListener('mouseleave', onLeave)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      document.documentElement.removeEventListener('mouseleave', onLeave)
      document.body.classList.remove('has-custom-cursor')
    }
  }, [enabled, x, y])

  if (!enabled) return null

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-3 w-3 rounded-full bg-accent"
      style={{ x: springX, y: springY }}
      animate={{
        scale: hovering ? HOVER_SCALE : 1,
        opacity: visible ? (hovering ? 0.4 : 1) : 0,
      }}
      transition={{ type: 'spring', ...CURSOR_SPRING }}
    />
  )
}
