import { useEffect, useState } from 'react'

const QUERY = '(hover: hover) and (pointer: fine)'

/** True only on devices with a precise hovering pointer (mouse/trackpad), false on touch. */
export default function useFinePointer() {
  const [fine, setFine] = useState(() => window.matchMedia(QUERY).matches)

  useEffect(() => {
    const mq = window.matchMedia(QUERY)
    const onChange = (e) => setFine(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return fine
}
