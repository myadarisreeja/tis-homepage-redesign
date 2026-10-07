import { ArrowUpRight } from 'lucide-react'
import { AWARDS, SITE } from '../../data/content'
import Button from '../ui/Button'
import { RevealGroup, RevealItem } from '../ui/Reveal'
import SafeImage from '../ui/SafeImage'
import styles from './Recognition.module.css'

export default function Recognition() {
  return (
    <section id="recognition" className={styles.section}>
      <div className="container">
        <RevealGroup className={styles.head}>
          <RevealItem as="h2"><em>Awards</em></RevealItem>
          <RevealItem as="p" className={styles.intro}>{AWARDS.intro}</RevealItem>
        </RevealGroup>

        <RevealGroup as="ul" className={styles.certs}>
          {AWARDS.images.map((img) => (
            <RevealItem as="li" key={img.alt} className={styles.cert} data-cursor>
              <SafeImage src={img.src} alt={img.alt} fallback="★" />
            </RevealItem>
          ))}
        </RevealGroup>

        <RevealGroup className={styles.tour}>
          <RevealItem as="div" className={styles.tourImg}>
            <SafeImage src={AWARDS.tourImage} alt="360 degree virtual tour" fallback="360°" />
          </RevealItem>
          <div className={styles.tourText}>
            <RevealItem as="p" className={styles.dive}>DIVE INTO OUR...</RevealItem>
            <RevealItem as="h2" className={styles.tourTitle}>VIRTUAL TOUR</RevealItem>
            <RevealItem>
              <Button variant="light" href={SITE.tourUrl}>Start the tour <ArrowUpRight size={18} aria-hidden="true" /></Button>
            </RevealItem>
          </div>
        </RevealGroup>
      </div>
    </section>
  )
}
