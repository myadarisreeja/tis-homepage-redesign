import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { HERO } from '../../data/content'
import SafeImage from '../ui/SafeImage'
import styles from './Hero.module.css'

const INTERVAL_MS = 3800

/** Hand-drawn double underline that draws itself once on load. */
function Stroke() {
  const draw = (delay) => ({
    initial: { pathLength: 0 },
    animate: { pathLength: 1 },
    transition: { delay, duration: 0.6, ease: 'easeOut' },
  })
  return (
    <svg className={styles.stroke} viewBox="0 0 300 24" fill="none" aria-hidden="true">
      <motion.path d="M6 7 C90 2 210 4 294 6" stroke="var(--yellow)" strokeWidth="4" strokeLinecap="round" {...draw(0.8)} />
      <motion.path d="M34 18 C110 14 190 15 266 17" stroke="var(--yellow)" strokeWidth="4" strokeLinecap="round" {...draw(1)} />
    </svg>
  )
}

function Orb({ item, slideKey, className }) {
  return (
    <div className={className}>
      <AnimatePresence mode="wait">
        <motion.div
          key={slideKey}
          className={styles.orb}
          style={{ background: item.bg }}
          initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.6, rotate: 10 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <SafeImage src={item.src} alt={item.alt} fallback="TIS" loading="eager" />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default function Hero() {
  const reduceMotion = useReducedMotion()
  const [index, setIndex] = useState(0)

  // Swap the photo pair on a timer; skipped when the user prefers reduced motion.
  useEffect(() => {
    if (reduceMotion) return undefined
    const id = window.setInterval(() => setIndex((i) => (i + 1) % HERO.slides.length), INTERVAL_MS)
    return () => window.clearInterval(id)
  }, [reduceMotion])

  const slide = HERO.slides[index]

  return (
    <section id="top" className={styles.hero} aria-label="Welcome">
      <div className={`container ${styles.inner}`}>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="sr-only">{HERO.srTitle}. </span>
          <span aria-hidden="true">
            LET’S DO <em>it</em>
            <br />
            With <em>Tulas</em>
          </span>
          <Stroke />
        </motion.h1>
        <Orb item={slide.main} slideKey={`m${index}`} className={styles.main} />
        <Orb item={slide.side} slideKey={`s${index}`} className={styles.side} />
      </div>
    </section>
  )
}
