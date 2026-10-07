import { SECRET } from '../../data/content'
import { RevealGroup, RevealItem } from '../ui/Reveal'
import SafeImage from '../ui/SafeImage'
import styles from './Secret.module.css'

export default function Secret() {
  return (
    <section className={styles.section} aria-label="The secret to an awesome school">
      <RevealGroup className={`container ${styles.grid}`}>
        <div className={styles.text}>
          <RevealItem as="p" className={styles.established}>{SECRET.established}</RevealItem>
          <RevealItem as="h2" className={styles.question}>{SECRET.question}</RevealItem>
          <RevealItem as="p" className={styles.answer}>{SECRET.answer}</RevealItem>
          <RevealItem as="p" className={styles.punch}><em>{SECRET.punchline}</em></RevealItem>
        </div>
        <RevealItem as="figure" className={styles.figure}>
          <SafeImage src={SECRET.image.src} alt={SECRET.image.alt} fallback="TIS" />
        </RevealItem>
      </RevealGroup>
    </section>
  )
}
