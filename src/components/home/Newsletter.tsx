import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMail, FiCheck } from 'react-icons/fi'

const Newsletter = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
      setEmail('')
    }, 1000)
  }

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white -z-10" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-100 rounded-bl-full opacity-30 -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent-100 rounded-tr-full opacity-30 -z-10" />
      
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-2xl shadow-custom-lg p-8 md:p-12 relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-bl-full opacity-50 -z-10" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent-50 rounded-full opacity-30 -z-10" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 border border-primary-100 mb-6">
                <FiMail className="text-primary-600 w-4 h-4 mr-2" />
                <span className="text-primary-700 font-medium text-sm">Weekly Insights</span>
              </div>
              
              <h2 className="heading-lg mb-6">
                Subscribe to My <span className="gradient-text">Weekly Newsletter</span>
              </h2>
              
              <p className="text-lg text-secondary-700 leading-relaxed mb-6">
                Stay updated with my latest initiatives, emerging technologies, weekly wins, 
                challenges, and actionable business tips delivered straight to your inbox every week.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="bg-primary-100 p-1 rounded-full text-primary-600 mr-3 mt-1">
                    <FiCheck className="w-4 h-4" />
                  </span>
                  <span className="text-secondary-800">New business initiatives I'm working on</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-100 p-1 rounded-full text-primary-600 mr-3 mt-1">
                    <FiCheck className="w-4 h-4" />
                  </span>
                  <span className="text-secondary-800">Emerging technologies and tools</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-100 p-1 rounded-full text-primary-600 mr-3 mt-1">
                    <FiCheck className="w-4 h-4" />
                  </span>
                  <span className="text-secondary-800">Weekly wins and challenges</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-100 p-1 rounded-full text-primary-600 mr-3 mt-1">
                    <FiCheck className="w-4 h-4" />
                  </span>
                  <span className="text-secondary-800">Actionable business growth tips</span>
                </li>
              </ul>
            </div>
            
            <div className="lg:col-span-5">
              <div className="bg-secondary-50 rounded-xl p-6 md:p-8 border border-secondary-100">
                <h3 className="text-xl font-semibold mb-4">Join the Community</h3>
                <p className="text-secondary-700 mb-6">
                  Get exclusive insights and strategies I don't share anywhere else.
                </p>
                
                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-800 flex items-start">
                    <FiCheck className="w-5 h-5 mr-3 mt-0.5 text-green-600" />
                    <div>
                      <p className="font-medium">Thank you for subscribing!</p>
                      <p className="text-sm mt-1">You'll receive your first newsletter soon.</p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-secondary-700 mb-2 font-medium">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-secondary-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your email address"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className={`w-full btn-primary py-3 flex items-center justify-center ${
                        isLoading ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                    >
                      {isLoading ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Subscribing...
                        </>
                      ) : (
                        'Subscribe Now'
                      )}
                    </button>
                    <p className="text-xs text-secondary-500 mt-3 text-center">
                      I respect your privacy. Unsubscribe at any time.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Newsletter
