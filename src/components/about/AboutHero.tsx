import { motion } from 'framer-motion'

const AboutHero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-50 via-white to-white -z-10" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary-50 rounded-bl-full opacity-50 -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent-50 rounded-tr-full opacity-40 -z-10" />
      
      {/* Animated dots pattern */}
      <div className="absolute inset-0 bg-[url('/src/assets/dots-pattern.svg')] bg-repeat opacity-5 -z-10"></div>
      
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 border border-primary-100 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary-500 mr-2"></span>
              <span className="text-primary-700 font-medium text-sm">My Journey</span>
            </div>
            
            <h1 className="heading-xl mb-6">
              About <span className="relative">
                <span className="gradient-text">Ali Sheikh</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5.5C32 1.5 62 1.5 101 5.5C138.333 9.166 170 9.166 199 5.5" stroke="#4b63ef" strokeWidth="2" strokeLinecap="round" fill="none" />
                </svg>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-secondary-700 mb-6 leading-relaxed">
              Multi-disciplinary entrepreneur and strategist with a track record of building 
              scalable operations across telecommunications, property development, automotive, 
              and tech industries.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="bg-white rounded-xl shadow-custom p-6 border border-secondary-100 hover:border-primary-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-700">15+</div>
                <div className="text-secondary-700 font-medium">Years Experience</div>
              </div>
              <div className="bg-white rounded-xl shadow-custom p-6 border border-secondary-100 hover:border-primary-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-700">5</div>
                <div className="text-secondary-700 font-medium">Industries</div>
              </div>
              <div className="bg-white rounded-xl shadow-custom p-6 border border-secondary-100 hover:border-primary-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-700">3+</div>
                <div className="text-secondary-700 font-medium">Current Ventures</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -top-4 -right-4 left-8 bottom-8 border-2 border-primary-200 rounded-2xl -z-10"></div>
              
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-custom-lg border-4 border-white">
                <img
                  src="https://images.pexels.com/photos/5989925/pexels-photo-5989925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Ali Sheikh portrait"
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-custom p-4 md:p-6 max-w-xs card-hover">
                <div className="flex items-start gap-4">
                  <div className="bg-accent-100 p-3 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-secondary-900">Community Builder</h3>
                    <p className="text-secondary-600 text-sm">Collective Growth Focus</p>
                  </div>
                </div>
              </div>
              
              {/* Small decorative element */}
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-primary-100 rounded-full opacity-80 -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutHero
