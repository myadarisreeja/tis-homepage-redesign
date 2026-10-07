import { useCallback, useState } from 'react'
import { MotionConfig } from 'framer-motion'
import useTheme from './hooks/useTheme'
import ScrollProgress from './components/animation/ScrollProgress'
import CustomCursor from './components/animation/CustomCursor'
import Navbar from './components/layout/Navbar'
import FloatingActions from './components/layout/FloatingActions'
import EnquireModal from './components/layout/EnquireModal'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Voices from './components/sections/Voices'
import Sports from './components/sections/Sports'
import Story from './components/sections/Story'
import Secret from './components/sections/Secret'
import Stats from './components/sections/Stats'
import Rankings from './components/sections/Rankings'
import Community from './components/sections/Community'
import Recognition from './components/sections/Recognition'
import Parents from './components/sections/Parents'
import Reviews from './components/sections/Reviews'
import Collaborations from './components/sections/Collaborations'

export default function App() {
  const { theme, toggleTheme } = useTheme()
  const [enquireOpen, setEnquireOpen] = useState(false)
  const openEnquire = useCallback(() => setEnquireOpen(true), [])
  const closeEnquire = useCallback(() => setEnquireOpen(false), [])

  return (
    // reducedMotion="user" makes every Framer Motion animation respect the OS setting.
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main">Skip to content</a>
      <ScrollProgress />
      <CustomCursor />
      <Navbar theme={theme} onToggleTheme={toggleTheme} onEnquire={openEnquire} />
      <main id="main">
        <Hero />
        <Voices />
        <Sports />
        <Story />
        <Secret />
        <Stats />
        <Rankings />
        <Community />
        <Recognition />
        <Parents />
        <Reviews />
        <Collaborations />
      </main>
      <Footer />
      <FloatingActions />
      <EnquireModal open={enquireOpen} onClose={closeEnquire} />
    </MotionConfig>
  )
}
