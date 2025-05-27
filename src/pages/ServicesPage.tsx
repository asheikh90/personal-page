import { useEffect } from 'react'
import ServicesHero from '../components/services/ServicesHero'
import ServicesList from '../components/services/ServicesList'
import Process from '../components/services/Process'
import Industries from '../components/services/Industries'
import CTA from '../components/home/CTA'

const ServicesPage = () => {
  useEffect(() => {
    document.title = 'Services | Ali Sheikh'
  }, [])

  return (
    <>
      <ServicesHero />
      <ServicesList />
      <Process />
      <Industries />
      <CTA />
    </>
  )
}

export default ServicesPage
