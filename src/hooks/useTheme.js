import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'tis-theme'

function getInitialTheme() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
    /* storage unavailable (private mode) */
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

/** Light/dark theme persisted in localStorage and applied as data-theme on <html>. */
export default function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      /* ignore */
    }
  }, [theme])

  const toggleTheme = useCallback(() => {
    const root = document.documentElement
    // Temporary class enables colour transitions only while toggling (keeps scrolling cheap).
    root.classList.add('theme-anim')
    window.setTimeout(() => root.classList.remove('theme-anim'), 450)
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  }, [])

  return { theme, toggleTheme }
}
