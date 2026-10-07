import styles from './Button.module.css'

/** Renders an <a> when given href, otherwise a <button>. */
export default function Button({ href, variant = 'red', className = '', children, ...rest }) {
  const classes = `${styles.btn} ${styles[variant]} ${className}`
  if (href) {
    const external = href.startsWith('http')
    return (
      <a href={href} className={classes} {...(external && { target: '_blank', rel: 'noreferrer' })} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  )
}
