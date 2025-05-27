import { motion } from 'framer-motion'

const ServicesHero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-50 via-white to-white -z-10" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary-50 rounded-full opacity-50 -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-50 rounded-full opacity-40 -z-10" />
      <div className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full border-4 border-primary-100 opacity-30 -z-10" />
      
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 border border-primary-100 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary-500 mr-2"></span>
            <span className="text-primary-700 font-medium text-sm">Expert Services</span>
          </div>
          
          <h1 className="heading-xl mb-6">
            My <span className="relative">
              <span className="gradient-text">Services</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.5C32 1.5 62 1.5 101 5.5C138.333 9.166 170 9.166 199 5.5" stroke="#4b63ef" strokeWidth="2" strokeLinecap="round" fill="none" />
              </svg>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-secondary-700 mb-8 leading-relaxed">
            Comprehensive consulting solutions designed to help your business scale
            efficiently and sustainably across multiple verticals, backed by legal expertise.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Service Card 1 */}
          <div className="bg-white rounded-xl shadow-custom p-8 border border-secondary-100 hover:border-primary-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mx-auto mb-6 transform rotate-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">Business Scaling</h3>
            <p className="text-secondary-700 text-center mb-4">Strategic approaches to grow your business efficiently with proven methodologies.</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-secondary-700">
                <span className="w-2 h-2 rounded-full bg-primary-500 mr-2"></span>
                Operational optimization
              </li>
              <li className="flex items-center text-secondary-700">
                <span className="w-2 h-2 rounded-full bg-primary-500 mr-2"></span>
                Growth strategy development
              </li>
              <li className="flex items-center text-secondary-700">
                <span className="w-2 h-2 rounded-full bg-primary-500 mr-2"></span>
                Market expansion planning
              </li>
            </ul>
          </div>

          {/* Service Card 2 */}
          <div className="bg-white rounded-xl shadow-custom p-8 border border-secondary-100 hover:border-primary-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mx-auto mb-6 transform -rotate-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">AI Implementation</h3>
            <p className="text-secondary-700 text-center mb-4">Leverage cutting-edge AI solutions to transform your business operations.</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-secondary-700">
                <span className="w-2 h-2 rounded-full bg-primary-500 mr-2"></span>
                AI strategy development
              </li>
              <li className="flex items-center text-secondary-700">
                <span className="w-2 h-2 rounded-full bg-primary-500 mr-2"></span>
                Automation implementation
              </li>
              <li className="flex items-center text-secondary-700">
                <span className="w-2 h-2 rounded-full bg-primary-500 mr-2"></span>
                Data-driven decision making
              </li>
            </ul>
          </div>

          {/* Service Card 3 */}
          <div className="bg-white rounded-xl shadow-custom p-8 border border-secondary-100 hover:border-primary-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mx-auto mb-6 transform rotate-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">Legal Strategy</h3>
            <p className="text-secondary-700 text-center mb-4">Strategic legal solutions to protect and optimize your business operations.</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-secondary-700">
                <span className="w-2 h-2 rounded-full bg-primary-500 mr-2"></span>
                Business structure optimization
              </li>
              <li className="flex items-center text-secondary-700">
                <span className="w-2 h-2 rounded-full bg-primary-500 mr-2"></span>
                Compliance strategy
              </li>
              <li className="flex items-center text-secondary-700">
                <span className="w-2 h-2 rounded-full bg-primary-500 mr-2"></span>
                Risk management planning
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesHero
