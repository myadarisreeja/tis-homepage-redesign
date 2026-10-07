import { VOICES } from '../../data/content'
import { RevealGroup, RevealItem } from '../ui/Reveal'
import SafeImage from '../ui/SafeImage'
import styles from './Voices.module.css'

function Doodle() {
  return (
    <svg className={styles.doodle} viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" aria-hidden="true">
      <path d="M8 38 L22 34" /><path d="M14 20 L26 28" /><path d="M32 8 L34 22" />
    </svg>
  )
}

export default function Voices() {
  return (
    <section className={styles.section} aria-label="What our students say">
      <div className="container">
        {VOICES.map((v, i) => (
          <RevealGroup key={v.quote} className={`${styles.row} ${i % 2 ? styles.flip : ''}`}>
            <RevealItem as="blockquote" className={styles.text}>
              <p className={styles.quote}>“{v.quote}”</p>
              <p className={styles.body}>{v.text}</p>
            </RevealItem>
            <RevealItem className={styles.portrait} data-cursor>
              <div className={styles.circle} style={{ background: v.portrait.bg }}>
                <SafeImage src={v.portrait.src} alt={v.portrait.alt} fallback="TIS" />
              </div>
              <Doodle />
            </RevealItem>
          </RevealGroup>
        ))}

        <RevealGroup className={styles.big} aria-label="Tula’s is made for the future">
          <RevealItem as="p" className={styles.small}>TULA’S IS…</RevealItem>
          <RevealItem as="p" className={styles.line}>MADE FOR</RevealItem>
          <RevealItem as="p" className={styles.line}>THE <em>future</em></RevealItem>
        </RevealGroup>
      </div>
    </section>
  )
}
