import { HeartPulse, Medal, Percent, TreePine } from 'lucide-react'
import { STATS } from '../../data/content'
import CountUp from '../ui/CountUp'
import { RevealGroup, RevealItem } from '../ui/Reveal'
import SafeImage from '../ui/SafeImage'
import styles from './Stats.module.css'

const ICONS = { campus: TreePine, sports: Medal, medical: HeartPulse, ratio: Percent }

export default function Stats() {
  return (
    <section className={styles.section} aria-label="TIS at a glance">
      <RevealGroup as="ul" className={`container ${styles.grid}`}>
        {STATS.map((s, i) => {
          if (s.kind === 'photo') {
            return (
              <RevealItem as="li" key={s.alt} className={`${styles.photo} ${s.wide ? styles.wide : ''}`}>
                <SafeImage src={s.src} alt={s.alt} fallback="TIS" />
              </RevealItem>
            )
          }
          const Icon = ICONS[s.icon]
          return (
            <RevealItem as="li" key={s.label} className={styles.stat} data-cursor style={{ '--i': i }}>
              <span className={styles.icon}><Icon size={30} aria-hidden="true" /></span>
              <p className={styles.value}>{s.text ?? <CountUp to={s.to} suffix={s.suffix} />}</p>
              <p className={styles.label}>{s.label}</p>
            </RevealItem>
          )
        })}
      </RevealGroup>
    </section>
  )
}
