import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useTilt } from '../../hooks/useTilt'
import { useIsTouch } from '../../hooks/useIsTouch'
import { useReducedMotion } from '../../hooks/useReducedMotion'

interface TiltCardProps {
  children: ReactNode
  className?: string
}

const HOVER_SHADOW = '0 20px 60px rgba(91,75,214,0.25), 0 0 0 1px rgba(91,75,214,0.30)'
const REST_SHADOW = '0 0 0 rgba(91,75,214,0), 0 0 0 0 rgba(91,75,214,0)'

export function TiltCard({ children, className = '' }: TiltCardProps) {
  const isTouch = useIsTouch()
  const reduced = useReducedMotion()
  const disabled = isTouch || reduced
  const { rotateX, rotateY, onMouseMove, onMouseLeave } = useTilt(disabled)

  return (
    <motion.div
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
        transformStyle: 'preserve-3d',
        boxShadow: REST_SHADOW,
      }}
      whileHover={disabled ? undefined : { boxShadow: HOVER_SHADOW }}
      transition={{ type: 'spring', stiffness: 160, damping: 20 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
