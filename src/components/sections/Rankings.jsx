import { Trophy } from 'lucide-react'
import { RANKINGS } from '../../data/content'
import { RevealGroup, RevealItem } from '../ui/Reveal'
import styles from './Rankings.module.css'

export default function Rankings() {
  return (
    <section className={styles.section} aria-labelledby="rank-title">
      <RevealGroup className={`container ${styles.grid}`}>
        <RevealItem className={styles.title}>
          <Trophy size={44} aria-hidden="true" />
          <h2 id="rank-title">Our Rankings</h2>
          <p>Top Boarding School</p>
        </RevealItem>
        <ul className={styles.cards}>
          {RANKINGS.map((r) => (
            <RevealItem as="li" key={r.text} className={styles.card} data-cursor>
              <p className={styles.num}>{r.rank}</p>
              <h3>{r.place}</h3>
              <p className={styles.text}>{r.text}</p>
            </RevealItem>
          ))}
        </ul>
      </RevealGroup>
    </section>
  )
}
