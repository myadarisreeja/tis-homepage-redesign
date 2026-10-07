import { useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { ArrowDown, MessageCircle } from 'lucide-react'
import { SITE } from '../../data/content'
import styles from './FloatingActions.module.css'

/** Fixed helpers from the original site: Apply Now edge tab, WhatsApp + assistant bubble, scroll-down arrow. */
export default function FloatingActions() {
  const { scrollYProgress } = useScroll()
  const [atEnd, setAtEnd] = useState(false)
  useMotionValueEvent(scrollYProgress, 'change', (v) => setAtEnd(v > 0.97))

  const scrollDown = () => window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' })

  return (
    <>
      <a href={SITE.applyUrl} target="_blank" rel="noreferrer" className={styles.apply}>Apply Now</a>

      <motion.a
        href={SITE.whatsappUrl} target="_blank" rel="noreferrer" className={styles.bubble}
        initial={{ opacity: 0, y: 16, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className={styles.avatar} aria-hidden="true">E</span>
        <span>Hey! I am Eva, your virtual admission assistant</span>
      </motion.a>
      <a href={SITE.whatsappUrl} target="_blank" rel="noreferrer" className={styles.whatsapp} aria-label="Chat with us on WhatsApp">
        <MessageCircle size={26} aria-hidden="true" />
      </a>

      <AnimatePresence>
        {!atEnd && (
          <motion.button
            type="button" className={styles.down} onClick={scrollDown} aria-label="Scroll down"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          >
            <ArrowDown size={22} aria-hidden="true" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
