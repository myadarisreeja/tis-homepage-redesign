import { motion } from 'framer-motion'

/*
 * Scroll-triggered staggered reveal.
 * <RevealGroup> observes the viewport once; each <RevealItem> inside staggers in.
 * Duration 0.5s sits inside the 0.3–0.6s guideline from the brief.
 */
const group = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export function RevealGroup({ as = 'div', children, ...rest }) {
  const Tag = motion[as]
  return (
    <Tag variants={group} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} {...rest}>
      {children}
    </Tag>
  )
}

export function RevealItem({ as = 'div', children, ...rest }) {
  const Tag = motion[as]
  return (
    <Tag variants={item} {...rest}>
      {children}
    </Tag>
  )
}
