import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { NAV_ITEMS, SITE } from '../../data/content'
import Button from '../ui/Button'
import styles from './MobileNav.module.css'

const linkProps = (href) => (href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})

export default function MobileNav({ open, onClose, onEnquire }) {
  // Close on Escape and lock page scroll while the drawer is open.
  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previous
    }
  }, [open, onClose])

  const enquire = () => {
    onClose()
    onEnquire()
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div className={styles.backdrop} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} aria-hidden="true" />
          <motion.aside
            id="mobile-nav" className={styles.drawer} role="dialog" aria-modal="true" aria-label="Site menu"
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <button type="button" className={styles.close} onClick={onClose} aria-label="Close menu" autoFocus>
              <X size={24} aria-hidden="true" />
            </button>
            <nav aria-label="Mobile">
              <ul>
                {NAV_ITEMS.map((item, i) => (
                  <motion.li key={item.label} className={styles.group} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.08 + i * 0.04, duration: 0.35 }}>
                    <a href={item.href} className={styles.link} onClick={onClose} {...linkProps(item.href)}>{item.label}</a>
                    {item.children && (
                      <ul className={styles.sub}>
                        {item.children.map((c) => (
                          <li key={c.label}><a href={c.href} onClick={onClose} {...linkProps(c.href)}>{c.label}</a></li>
                        ))}
                      </ul>
                    )}
                  </motion.li>
                ))}
              </ul>
            </nav>
            <div className={styles.cta}>
              <Button variant="light" onClick={enquire}>Enquire Now</Button>
              <Button variant="outlineLight" href={SITE.applyUrl}>Apply Now</Button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
