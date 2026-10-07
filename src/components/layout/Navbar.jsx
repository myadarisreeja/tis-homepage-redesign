import { useState } from 'react'
import { ChevronDown, Menu, Phone } from 'lucide-react'
import { NAV_ITEMS, SITE } from '../../data/content'
import SafeImage from '../ui/SafeImage'
import ThemeToggle from '../animation/ThemeToggle'
import MobileNav from './MobileNav'
import styles from './Navbar.module.css'

const linkProps = (href) => (href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})

export default function Navbar({ theme, onToggleTheme, onEnquire }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className={styles.header}>
        <div className={styles.strip}>
          <div className={`container ${styles.stripInner}`}>
            <a href={SITE.helplineHref} className={styles.helpline}>
              <Phone size={15} aria-hidden="true" />
              <span>ADMISSIONS HELPLINE NO. {SITE.helpline}</span>
            </a>
            <button type="button" className={styles.enquire} onClick={onEnquire}>Enquire Now</button>
          </div>
        </div>

        <div className={styles.bar}>
          <div className={`container ${styles.barInner}`}>
            <a href="#top" className={styles.logo} aria-label={`${SITE.name} home`}>
              <SafeImage src={SITE.logo} alt={SITE.name} fallback="TIS" loading="eager" />
            </a>

            <nav className={styles.nav} aria-label="Primary">
              <ul className={styles.list}>
                {NAV_ITEMS.map((item) => (
                  <li key={item.label} className={styles.item}>
                    <a href={item.href} className={styles.link} {...linkProps(item.href)}>
                      {item.label}
                      {item.children && <ChevronDown size={13} aria-hidden="true" />}
                    </a>
                    {item.children && (
                      <ul className={styles.menu}>
                        {item.children.map((c) => (
                          <li key={c.label}>
                            <a href={c.href} {...linkProps(c.href)}>{c.label}</a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <div className={styles.actions}>
              <ThemeToggle theme={theme} onToggle={onToggleTheme} />
              <button
                type="button" className={styles.burger} onClick={() => setMenuOpen(true)}
                aria-label="Open menu" aria-expanded={menuOpen} aria-controls="mobile-nav"
              >
                <Menu size={24} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileNav open={menuOpen} onClose={() => setMenuOpen(false)} onEnquire={onEnquire} />
    </>
  )
}
