import { COLLABORATIONS } from '../../data/content'
import { RevealGroup, RevealItem } from '../ui/Reveal'
import SafeImage from '../ui/SafeImage'
import styles from './Collaborations.module.css'

/** Logo ticker (CSS keyframes). The second half is a hidden duplicate so the loop is seamless. */
export default function Collaborations() {
  const logos = (hidden) =>
    COLLABORATIONS.map((logo) => (
      <li key={`${hidden}${logo.src}`} className={styles.logo}>
        <SafeImage src={logo.src} alt={hidden ? '' : logo.alt} fallback="•" />
      </li>
    ))

  return (
    <section className={styles.section} aria-labelledby="collab-title">
      <RevealGroup className={`container ${styles.head}`}>
        <RevealItem as="h2" id="collab-title">12+ <em>COLLABORATIONS</em></RevealItem>
      </RevealGroup>
      <div className={styles.viewport}>
        <ul className={styles.track}>{logos('a')}</ul>
        <ul className={styles.track} aria-hidden="true">{logos('b')}</ul>
      </div>
    </section>
  )
}
