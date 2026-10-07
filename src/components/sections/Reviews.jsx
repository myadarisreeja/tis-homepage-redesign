import { REVIEWS, REVIEWS_BG } from '../../data/content'
import { RevealGroup, RevealItem } from '../ui/Reveal'
import Rail from '../ui/Rail'
import SafeImage from '../ui/SafeImage'
import styles from './Reviews.module.css'

export default function Reviews() {
  return (
    <section className={styles.section} style={{ '--bg-img': `url(${REVIEWS_BG})` }} aria-labelledby="reviews-title">
      <RevealGroup className={`container ${styles.head}`}>
        <RevealItem as="h2" id="reviews-title">Google Reviews</RevealItem>
      </RevealGroup>

      <Rail label="Google reviews" light>
        {REVIEWS.map((r) => (
          <li key={r.name} className={styles.card}>
            <SafeImage src={r.avatar} alt={r.name} fallback={r.name.charAt(0)} className={styles.avatar} />
            <h3 className={styles.name}>{r.name}</h3>
            <p className={styles.relation}>{r.relation}</p>
            <p className={styles.text}>{r.text}</p>
          </li>
        ))}
      </Rail>
    </section>
  )
}
