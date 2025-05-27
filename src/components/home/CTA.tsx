import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

const CTA = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 to-primary-800 -z-10" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary-800/50 rounded-bl-full -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary-700/30 rounded-tr-full -z-10" />
      
      {/* Animated dots pattern */}
      <div className="absolute inset-0 bg-[url('/src/assets/dots-pattern.svg')] bg-repeat opacity-5 -z-10"></div>
      
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-2xl shadow-custom-lg p-8 md:p-12 relative overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-bl-full opacity-50 -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent-50 rounded-full opacity-30 -z-10" />
            
            <div className="text-center mb-8">
              <h2 className="heading-lg mb-6">
                Ready to <span className="gradient-text">Scale</span> Your Business?
              </h2>
              <p className="text-lg text-secondary-700 leading-relaxed max-w-2xl mx-auto">
                Let's work together to implement proven strategies for sustainable growth 
                across automotive, tech, legal, and consulting industries. Schedule a consultation today.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="btn-primary group">
                Schedule a Consultation
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/services" className="btn-secondary group">
                Explore Services
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CTA
