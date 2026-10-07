import { motion, useScroll, useSpring } from 'framer-motion'
import styles from './ScrollProgress.module.css'

/** Reading-progress bar fixed to the top of the viewport. Uses transform only (GPU-friendly). */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 })

  return <motion.div className={styles.bar} style={{ scaleX }} aria-hidden="true" />
}
