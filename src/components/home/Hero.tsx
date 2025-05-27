import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiCheck } from 'react-icons/fi'

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-radial from-primary-50 via-white to-white -z-10" />
      
      {/* Animated background shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent-100 rounded-full filter blur-3xl opacity-30 animate-pulse-slow -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary-100 rounded-full filter blur-3xl opacity-40 animate-pulse-slow -z-10" />
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-secondary-100 rounded-full filter blur-3xl opacity-20 animate-pulse-slow -z-10" />
      
      {/* Decorative grid pattern */}
      <div className="absolute inset-0 bg-[url('/src/assets/grid-pattern.svg')] bg-center opacity-5 -z-10" />
      
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 max-w-xl"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 border border-primary-100 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary-500 mr-2"></span>
              <span className="text-primary-700 font-medium text-sm">Business Strategist & Growth Expert</span>
            </div>
            
            <h1 className="heading-xl mb-6">
              Scale Your Business With Proven{' '}
              <span className="relative">
                <span className="gradient-text">Strategies</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5.5C32 1.5 62 1.5 101 5.5C138.333 9.166 170 9.166 199 5.5" stroke="#4b63ef" strokeWidth="2" strokeLinecap="round" fill="none" />
                </svg>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-secondary-700 mb-8 leading-relaxed">
              Leverage my experience scaling multiple businesses across telecommunications, 
              property development, automotive, and tech industries. From T-Mobile 
              franchises to auto body shops and ADAS calibration.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary-100">
                  <FiCheck className="text-primary-700 w-4 h-4" />
                </div>
                <span className="ml-2 text-secondary-800">Automotive</span>
              </div>
              <div className="flex items-center">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary-100">
                  <FiCheck className="text-primary-700 w-4 h-4" />
                </div>
                <span className="ml-2 text-secondary-800">Technology</span>
              </div>
              <div className="flex items-center">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary-100">
                  <FiCheck className="text-primary-700 w-4 h-4" />
                </div>
                <span className="ml-2 text-secondary-800">Community Buying</span>
              </div>
              <div className="flex items-center">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary-100">
                  <FiCheck className="text-primary-700 w-4 h-4" />
                </div>
                <span className="ml-2 text-secondary-800">Consulting</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary group">
                Schedule a Consultation
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link
                to="/services"
                className="btn-secondary flex items-center justify-center group"
              >
                Explore Services
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Image and stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-custom-lg border-4 border-white">
              <img
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Ali Sheikh consulting with clients"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/50 to-transparent"></div>
            </div>
            
            {/* Floating stats cards */}
            <div className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-12 bg-white rounded-xl shadow-custom p-4 md:p-6 max-w-xs card-hover">
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-secondary-900">Multi-Industry</h3>
                  <p className="text-secondary-600 text-sm">15+ Years Experience</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 md:-top-8 md:-right-12 bg-white rounded-xl shadow-custom p-4 md:p-6 max-w-xs card-hover">
              <div className="flex items-start gap-4">
                <div className="bg-accent-100 p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-secondary-900">Community Power</h3>
                  <p className="text-secondary-600 text-sm">Collective Buying Leverage</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
