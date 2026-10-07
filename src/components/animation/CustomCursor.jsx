import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import useFinePointer from '../../hooks/useFinePointer'
import styles from './CustomCursor.module.css'

const INTERACTIVE = 'a, button, input, select, textarea, label, [data-cursor]'

/**
 * Mouse-follower ring + dot. Position lives in motion values (no React re-renders on move);
 * state only changes when entering/leaving interactive elements. Not rendered on touch devices.
 */
export default function CustomCursor() {
  const fine = useFinePointer()
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const ringX = useSpring(x, { stiffness: 450, damping: 38, mass: 0.4 })
  const ringY = useSpring(y, { stiffness: 450, damping: 38, mass: 0.4 })
  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!fine) return undefined

    const onMove = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setVisible(true)
    }
    const onOver = (e) => setHovering(Boolean(e.target.closest?.(INTERACTIVE)))
    const onLeave = () => setVisible(false)

    window.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('pointerover', onOver, { passive: true })
    document.documentElement.addEventListener('mouseleave', onLeave)
    return () => {
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerover', onOver)
      document.documentElement.removeEventListener('mouseleave', onLeave)
    }
  }, [fine, x, y])

  if (!fine) return null

  return (
    <div className={styles.root} aria-hidden="true">
      <motion.div
        className={styles.ring}
        style={{ x: ringX, y: ringY }}
        animate={{ scale: hovering ? 1.7 : 1, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.25 }}
      />
      <motion.div className={styles.dot} style={{ x, y }} animate={{ opacity: visible && !hovering ? 1 : 0 }} />
    </div>
  )
}
