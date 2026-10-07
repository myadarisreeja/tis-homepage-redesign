import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'
import { FOOTER_LINKS, SITE, SOCIALS } from '../../data/content'
import Button from '../ui/Button'
import SafeImage from '../ui/SafeImage'
import styles from './Footer.module.css'

const ICONS = { facebook: Facebook, twitter: Twitter, linkedin: Linkedin, instagram: Instagram, youtube: Youtube }

export default function Footer() {
  return (
    <footer className={styles.footer} style={{ '--campus': `url(${SITE.campusPhoto})` }}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.map}>
          <iframe title="Map to Tulas International School" src={SITE.mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>

        <address className={styles.address}>
          <SafeImage src={SITE.footerLogo} alt={SITE.name} fallback="TIS" className={styles.logo} />
          <p className={styles.name}>Tulas International School</p>
          <a href={SITE.mapUrl} target="_blank" rel="noreferrer">{SITE.address.replace('Tulas International School, ', '')}</a>
          <p>
            Landline No.{' '}
            {SITE.landlines.map((l, i) => (
              <span key={l.href}>{i > 0 && ', '}<a href={l.href}>{l.label}</a></span>
            ))}
          </p>
          <a href={SITE.helplineHref}>Admission Helpline No. {SITE.helpline}</a>
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </address>

        <nav aria-label="Footer" className={styles.nav}>
          <ul className={styles.links}>
            {FOOTER_LINKS.map((l) => (
              <li key={l.label}><a href={l.href} target="_blank" rel="noreferrer">{l.label}</a></li>
            ))}
          </ul>
        </nav>

        <div className={styles.buttons}>
          <Button variant="outlineLight" href={SITE.tourUrl}>Virtual Tour</Button>
          <Button variant="outlineLight" href={SITE.applyUrl}>Apply Now</Button>
          <Button variant="outlineLight" href="https://tis.fedena.com/">Fedena Login</Button>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>Copyright © 2026 Tulas International School, Dehradun | All Rights Reserved</p>
        <p>Designed and Managed By <a href="https://netpuppys.com" target="_blank" rel="noreferrer">NetPuppys</a></p>
        <ul className={styles.socials}>
          {SOCIALS.map(({ key, label, href }) => {
            const Icon = ICONS[key]
            return (
              <li key={key}>
                <a href={href} target="_blank" rel="noreferrer" aria-label={label} className={styles.social}><Icon size={18} aria-hidden="true" /></a>
              </li>
            )
          })}
        </ul>
      </div>
    </footer>
  )
}
