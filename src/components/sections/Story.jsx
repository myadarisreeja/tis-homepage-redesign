import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { STORY } from '../../data/content'
import SafeImage from '../ui/SafeImage'
import styles from './Story.module.css'

function Panel({ panel }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  // Background drifts slower than the page, which gives the full-bleed photo depth.
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <article ref={ref} className={styles.panel} aria-labelledby={`story-${panel.id}`}>
      <motion.div className={styles.bg} style={{ y }}>
        <SafeImage src={panel.src} alt="" fallback="TIS" />
      </motion.div>
      <div className={styles.shade} />
      <motion.div
        className={`container ${styles.content}`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 id={`story-${panel.id}`} className={styles.headline}>
          {panel.lines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>
        {panel.copy && (
          <div className={styles.copy}>
            {panel.copy.map((p) => <p key={p}>{p}</p>)}
          </div>
        )}
      </motion.div>
    </article>
  )
}

export default function Story() {
  return (
    <section id="story" aria-label="Why Tulas International School">
      {STORY.panels.map((panel) => (
        <Panel key={panel.id} panel={panel} />
      ))}
    </section>
  )
}
