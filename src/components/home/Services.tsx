import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      title: 'Business Scaling',
      description: 'Strategic approaches to grow your business efficiently with proven methodologies.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      color: 'from-primary-500 to-primary-600',
      features: ['Operational optimization', 'Growth strategy development', 'Market expansion planning'],
    },
    {
      title: 'Community Buying Power',
      description: 'Leverage collective purchasing to secure better rates and terms from vendors and service providers.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: 'from-accent-500 to-accent-600',
      features: ['Vendor negotiation', 'Group purchasing', 'Cost-sharing frameworks'],
    },
    {
      title: 'AI Implementation',
      description: 'Leverage cutting-edge AI solutions to transform your business operations.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: 'from-primary-600 to-primary-700',
      features: ['AI strategy development', 'Automation implementation', 'Data-driven decision making'],
    },
  ]

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.6,
      },
    }),
  }

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-secondary-50 -z-10" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary-50 rounded-br-full opacity-50 -z-10" />
      <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-accent-50 rounded-tl-full opacity-40 -z-10" />
      
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 border border-primary-100 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary-500 mr-2"></span>
            <span className="text-primary-700 font-medium text-sm">What I Offer</span>
          </div>
          
          <h2 className="heading-lg mb-6">
            Comprehensive <span className="gradient-text">Services</span> For Your Business
          </h2>
          
          <p className="text-lg text-secondary-700 leading-relaxed">
            From automotive to tech, telecommunications to consulting, I provide tailored solutions 
            to help your business scale efficiently and sustainably.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="bg-white rounded-xl shadow-custom p-8 border border-secondary-100 hover:border-primary-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mx-auto mb-6 text-white transform rotate-3`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-center">{service.title}</h3>
              
              <p className="text-secondary-700 text-center mb-6">{service.description}</p>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-secondary-700">
                    <span className="w-2 h-2 rounded-full bg-primary-500 mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link to="/services" className="flex items-center justify-center text-primary-600 font-medium hover:text-primary-700 transition-colors group">
                Learn More
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link to="/services" className="btn-primary inline-flex items-center group">
            View All Services
            <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Services
