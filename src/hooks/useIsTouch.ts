import { useEffect, useState } from 'react'

const QUERY = '(hover: none), (pointer: coarse)'

export function useIsTouch(): boolean {
  const [isTouch, setIsTouch] = useState<boolean>(
    () => typeof window !== 'undefined' && window.matchMedia(QUERY).matches,
  )

  useEffect(() => {
    const mq = window.matchMedia(QUERY)
    const onChange = (e: MediaQueryListEvent): void => setIsTouch(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return isTouch
}
