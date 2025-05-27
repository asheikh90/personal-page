import Hero from '../components/home/Hero'
import Services from '../components/home/Services'
import About from '../components/home/About'
import Testimonials from '../components/home/Testimonials'
import Community from '../components/home/Community'
import CTA from '../components/home/CTA'
import { useEffect } from 'react'

const HomePage = () => {
  useEffect(() => {
    document.title = 'Ali Sheikh | Business Consultant'
  }, [])

  return (
    <>
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Community />
      <CTA />
    </>
  )
}

export default HomePage
