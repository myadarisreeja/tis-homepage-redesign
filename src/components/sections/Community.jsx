import { PEOPLE, PEOPLE_GROUPS } from '../../data/people'
import { RevealItem, RevealGroup } from '../ui/Reveal'
import Rail from '../ui/Rail'
import SafeImage from '../ui/SafeImage'
import styles from './Community.module.css'

const initials = (name) =>
  name.replace(/\b(Shri|Dr|Late|Ms)\b|\bJi\b/g, '').trim().split(/\s+/).slice(0, 2).map((w) => w[0]).join('')

export default function Community() {
  return (
    <section id="community" className={styles.section}>
      {PEOPLE_GROUPS.map((group) => (
        <div key={group.id} className={styles.group}>
          <RevealGroup className={`container ${styles.head}`}>
            <RevealItem as="h2" id={`${group.id}-title`}>
              {group.id === 'sports' ? <>Influential Personalities <em>On Campus</em></> : <>Leaders <em>of India</em></>}
            </RevealItem>
            {group.subtitle && <RevealItem as="p" className={styles.sub}>{group.subtitle}</RevealItem>}
          </RevealGroup>

          <Rail label={group.title}>
            {PEOPLE[group.id].map((person) => (
              <li key={person.name} className={styles.card} data-cursor>
                <div className={styles.photo}>
                  <SafeImage src={person.image} alt={person.name} fallback={initials(person.name)} />
                </div>
                <h3 className={styles.name}>{person.name}</h3>
                <p className={styles.role}>{person.role}</p>
              </li>
            ))}
          </Rail>
        </div>
      ))}
    </section>
  )
}
