import { SPORTS, SPORTS_COPY } from '../../data/content'
import { RevealGroup, RevealItem } from '../ui/Reveal'
import SafeImage from '../ui/SafeImage'
import styles from './Sports.module.css'

export default function Sports() {
  const [a, strike, b, accent] = SPORTS_COPY.lead
  return (
    <section id="sports" className={styles.section} aria-labelledby="sports-title">
      <div className="container">
        <h2 id="sports-title" className={styles.heading}>Sports <em>?</em></h2>
        <p className={styles.lead}>
          {a}<s>{strike}</s>{b}<em>{accent}</em>
        </p>
        <p className={styles.sub}><span className={styles.badge}>{SPORTS_COPY.badge}</span>{SPORTS_COPY.sub}</p>

        <RevealGroup as="ul" className={styles.grid}>
          {SPORTS.map((s) => (
            <RevealItem as="li" key={s.name} className={styles.card} data-cursor>
              <div className={styles.photo}>
                <SafeImage src={s.src} alt={s.name} fallback={s.name.charAt(0)} />
              </div>
              <p className={styles.name}>{s.name}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
