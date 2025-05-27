import { useEffect } from 'react'
import AboutHero from '../components/about/AboutHero'
import Journey from '../components/about/Journey'
import Philosophy from '../components/about/Philosophy'
import Community from '../components/about/Community'
import CTA from '../components/home/CTA'

const AboutPage = () => {
  useEffect(() => {
    document.title = 'About | Ali Sheikh'
  }, [])

  return (
    <>
      <AboutHero />
      <Journey />
      <Philosophy />
      <Community />
      <CTA />
    </>
  )
}

export default AboutPage
