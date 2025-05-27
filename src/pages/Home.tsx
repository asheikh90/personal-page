import { Helmet } from 'react-helmet-async'
import Hero from '../components/home/Hero'
import About from '../components/home/About'
import Services from '../components/home/Services'
import Testimonials from '../components/home/Testimonials'
import CTA from '../components/home/CTA'
import Newsletter from '../components/home/Newsletter'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Ali Sheikh | Business Strategist & Growth Expert</title>
        <meta
          name="description"
          content="Ali Sheikh helps businesses scale across automotive, tech, and consulting industries with proven strategies and community buying power."
        />
      </Helmet>

      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Newsletter />
      <CTA />
    </>
  )
}

export default Home
