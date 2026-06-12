import type { MouseEvent, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useMagnetic } from '../../hooks/useMagnetic'
import { useIsTouch } from '../../hooks/useIsTouch'
import { useReducedMotion } from '../../hooks/useReducedMotion'

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  /** Si se define, renderiza un <a>. */
  href?: string
  /** Abrir el href en pestaña nueva. */
  external?: boolean
  onClick?: (e: MouseEvent<HTMLElement>) => void
  type?: 'button' | 'submit'
  disabled?: boolean
  ariaLabel?: string
}

export function MagneticButton({
  children,
  className = '',
  href,
  external = false,
  onClick,
  type = 'button',
  disabled = false,
  ariaLabel,
}: MagneticButtonProps) {
  const isTouch = useIsTouch()
  const reduced = useReducedMotion()
  const { x, y, onMouseMove, onMouseLeave } = useMagnetic(isTouch || reduced)

  if (href) {
    return (
      <motion.a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        onClick={onClick}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{ x, y }}
        className={`inline-flex items-center justify-center gap-2 ${className}`}
        aria-label={ariaLabel}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ x, y }}
      className={`inline-flex items-center justify-center gap-2 ${className}`}
      aria-label={ariaLabel}
    >
      {children}
    </motion.button>
  )
}
