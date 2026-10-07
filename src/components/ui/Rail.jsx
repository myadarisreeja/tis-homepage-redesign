import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import styles from './Rail.module.css'

/** Horizontal scroll-snap list with prev/next buttons. Children must be <li> elements. */
export default function Rail({ label, children, className = '', light = false }) {
  const ref = useRef(null)
  const scroll = (dir) => ref.current?.scrollBy({ left: dir * ref.current.clientWidth * 0.8, behavior: 'smooth' })

  return (
    <div className={styles.wrap}>
      <ul ref={ref} className={`${styles.rail} ${className}`} tabIndex={0} aria-label={label}>
        {children}
      </ul>
      <div className={`container ${styles.controls}`}>
        <button type="button" className={`${styles.arrow} ${light ? styles.light : ''}`} onClick={() => scroll(-1)} aria-label={`Previous: ${label}`}>
          <ChevronLeft size={22} aria-hidden="true" />
        </button>
        <button type="button" className={`${styles.arrow} ${light ? styles.light : ''}`} onClick={() => scroll(1)} aria-label={`Next: ${label}`}>
          <ChevronRight size={22} aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
