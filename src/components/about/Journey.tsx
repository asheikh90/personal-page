import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Journey = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const journeyItems = [
    {
      year: '2009',
      title: 'T-Mobile Sales Career',
      description: 'Started my professional journey in sales at T-Mobile, building a foundation in customer service and business operations.',
    },
    {
      year: '2015',
      title: 'T-Mobile Franchise Expansion',
      description: 'Raised $600K from private investors to open 5 T-Mobile retail stores, developing skills in fundraising and multi-location management.',
    },
    {
      year: '2017',
      title: 'International Property Development',
      description: 'Transitioned to digital marketing and sales management for an international property developer with projects in Dubai and Pakistan.',
    },
    {
      year: '2019',
      title: 'Family Automotive Business',
      description: 'Joined the family automotive business, bringing fresh perspectives and growth strategies to an established operation.',
    },
    {
      year: '2023',
      title: 'Consulting Practice Launch',
      description: 'Formalized consulting services to help other businesses scale using proven methodologies from my diverse industry experience.',
    },
    {
      year: '2025',
      title: 'Multi-Location Expansion & ADAS Calibration',
      description: 'Scaled automotive business to a second location and launched DriveCal, a specialized ADAS calibration service to meet emerging market needs.',
    },
  ]

  return (
    <section className="section-padding bg-white relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-50 to-white -z-10" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-50 rounded-bl-full opacity-30 -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent-50 rounded-tr-full opacity-30 -z-10" />
      
      {/* Animated dots pattern */}
      <div className="absolute inset-0 bg-[url('/src/assets/dots-pattern.svg')] bg-repeat opacity-5 -z-10"></div>
      
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 border border-primary-100 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary-500 mr-2"></span>
            <span className="text-primary-700 font-medium text-sm">My Path</span>
          </div>
          
          <h2 className="heading-lg mb-4">
            My <span className="gradient-text">Entrepreneurial Journey</span>
          </h2>
          <p className="text-lg text-secondary-600">
            From my first role in telecommunications to building a diverse portfolio across multiple
            industries, my path has been defined by continuous learning, adaptation, and growth.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-primary-200 transform md:translate-x-[-0.5px]"></div>

          <div className="space-y-12">
            {journeyItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="md:w-1/2 pb-8 md:pb-0">
                  <div
                    className={`md:pr-12 md:pl-0 ${
                      index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'
                    }`}
                  >
                    <span className="inline-block bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
                      {item.year}
                    </span>
                    <h3 className="heading-sm mb-3">{item.title}</h3>
                    <p className="text-secondary-600">{item.description}</p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-6 h-6 rounded-full bg-primary-600 border-4 border-white shadow transform translate-x-[-10px] md:translate-x-[-12px]"></div>

                <div className="md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Coming Soon Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-primary-50 to-accent-50 p-1 rounded-xl">
            <div className="bg-white rounded-lg px-8 py-6 shadow-custom">
              <h3 className="heading-sm mb-3">Coming Soon</h3>
              <p className="text-secondary-700">
                New ventures and expansions on the horizon. Stay tuned for the next chapter of innovation and growth.
              </p>
              <div className="mt-4 inline-flex items-center px-4 py-2 rounded-full bg-accent-50 border border-accent-100">
                <span className="text-accent-700 font-medium text-sm">New Ventures Launching Soon</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Journey
