import { AnimatePresence, motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import styles from './ThemeToggle.module.css'

/** Sliding switch with a sun/moon icon that rotates in and out on change. */
export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark'
  const Icon = isDark ? Moon : Sun

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={onToggle}
      role="switch"
      aria-checked={isDark}
      aria-label="Dark mode"
    >
      <motion.span className={styles.thumb} layout transition={{ type: 'spring', stiffness: 500, damping: 32 }} data-dark={isDark}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={theme}
            className={styles.icon}
            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
          >
            <Icon size={16} aria-hidden="true" />
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </button>
  )
}
