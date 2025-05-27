import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiClock } from 'react-icons/fi'

const ContactHero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-50 via-white to-white -z-10" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-primary-50 rounded-br-full opacity-50 -z-10" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-accent-50 rounded-tl-full opacity-40 -z-10" />
      
      {/* Animated dots pattern */}
      <div className="absolute inset-0 bg-[url('/src/assets/dots-pattern.svg')] bg-repeat opacity-5 -z-10"></div>
      
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 border border-primary-100 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary-500 mr-2"></span>
              <span className="text-primary-700 font-medium text-sm">Get In Touch</span>
            </div>
            
            <h1 className="heading-xl mb-6">
              Let's <span className="relative">
                <span className="gradient-text">Connect</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5.5C32 1.5 62 1.5 101 5.5C138.333 9.166 170 9.166 199 5.5" stroke="#4b63ef" strokeWidth="2" strokeLinecap="round" fill="none" />
                </svg>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-secondary-700 mb-8 leading-relaxed">
              Ready to transform your business? I'm here to help you implement proven
              strategies for sustainable growth and success across automotive, tech, legal, and consulting industries.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start p-4 bg-white rounded-xl shadow-custom border border-secondary-100 hover:border-primary-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-3 rounded-lg text-white mr-4">
                  <FiMail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-secondary-900">Email</h3>
                  <a
                    href="mailto:AS@alisheikh313.com"
                    className="text-secondary-700 hover:text-primary-600 transition-colors"
                  >
                    AS@alisheikh313.com
                  </a>
                </div>
              </div>

              <div className="flex items-start p-4 bg-white rounded-xl shadow-custom border border-secondary-100 hover:border-primary-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-3 rounded-lg text-white mr-4">
                  <FiPhone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-secondary-900">Phone</h3>
                  <a
                    href="tel:+17327638486"
                    className="text-secondary-700 hover:text-primary-600 transition-colors"
                  >
                    (732) 763-8486
                  </a>
                </div>
              </div>

              <div className="flex items-start p-4 bg-white rounded-xl shadow-custom border border-secondary-100 hover:border-primary-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-3 rounded-lg text-white mr-4">
                  <FiClock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-secondary-900">Availability</h3>
                  <p className="text-secondary-700">
                    Monday - Friday: 9:00 AM - 5:00 PM EST
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-xl shadow-custom-lg p-8 border border-secondary-100">
              <h2 className="heading-md mb-6 text-center">Schedule a Consultation</h2>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-secondary-700 mb-2 font-medium">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-secondary-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-secondary-700 mb-2 font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-secondary-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-secondary-700 mb-2 font-medium">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 rounded-lg border border-secondary-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-secondary-700 mb-2 font-medium">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      className="w-full px-4 py-3 rounded-lg border border-secondary-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="automotive">Automotive Business Scaling</option>
                      <option value="adas-calibration">ADAS Calibration</option>
                      <option value="lubricants">Oil & Lubricant Distribution</option>
                      <option value="ai-implementation">AI Implementation</option>
                      <option value="legal-strategy">Legal Strategy & Compliance</option>
                      <option value="client-acquisition">Client Acquisition</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-secondary-700 mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-secondary-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="Tell me about your business and how I can help"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary py-4 group"
                >
                  Send Message
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactHero
