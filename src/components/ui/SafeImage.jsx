import { useState } from 'react'
import styles from './SafeImage.module.css'

/**
 * <img> that degrades to a styled placeholder if the remote file fails to load,
 * so the layout never shows a broken-image icon.
 */
export default function SafeImage({ src, alt, fallback, className = '', ...rest }) {
  const [failed, setFailed] = useState(false)

  if (failed || !src) {
    return (
      <div className={`${styles.fallback} ${className}`} role="img" aria-label={alt}>
        <span aria-hidden="true">{fallback ?? alt.charAt(0)}</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={className}
      onError={() => setFailed(true)}
      {...rest}
    />
  )
}
