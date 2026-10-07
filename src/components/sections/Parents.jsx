import { PARENTS } from '../../data/content'
import { RevealGroup, RevealItem } from '../ui/Reveal'
import styles from './Parents.module.css'

export default function Parents() {
  return (
    <section id="parents" className={styles.section} aria-labelledby="parents-title">
      <div className="container">
        <RevealGroup className={styles.head}>
          <RevealItem as="h2" id="parents-title">From The <em>Parents</em></RevealItem>
          <RevealItem as="p" className={styles.quote}>{PARENTS.quote}</RevealItem>
        </RevealGroup>

        <RevealGroup as="ul" className={styles.reels}>
          {PARENTS.videos.map((v) => (
            <RevealItem as="li" key={v.src} className={styles.reel}>
              {/* preload="none" keeps the page light: video data loads only when played. */}
              <video controls playsInline preload="none" aria-label={v.label}>
                <source src={v.src} type="video/mp4" />
              </video>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
