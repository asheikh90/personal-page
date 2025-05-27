import { useEffect } from 'react'
import ContactHero from '../components/contact/ContactHero'
import FAQ from '../components/contact/FAQ'

const ContactPage = () => {
  useEffect(() => {
    document.title = 'Contact | Ali Sheikh'
  }, [])

  return (
    <>
      <ContactHero />
      <FAQ />
    </>
  )
}

export default ContactPage
