import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiTarget, FiTrendingUp, FiUsers, FiRefreshCw } from 'react-icons/fi'

const Philosophy = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const principles = [
    {
      icon: <FiTarget className="w-6 h-6" />,
      title: 'Strategic Vision',
      description:
        'Every successful business needs a clear, actionable vision that guides all decisions and initiatives.',
    },
    {
      icon: <FiTrendingUp className="w-6 h-6" />,
      title: 'Sustainable Growth',
      description:
        'Growth should be sustainable and built on solid foundations, not just rapid expansion at any cost.',
    },
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: 'People-Centered',
      description:
        'Businesses thrive when they value their people—both employees and customers—above all else.',
    },
    {
      icon: <FiRefreshCw className="w-6 h-6" />,
      title: 'Continuous Adaptation',
      description:
        'The ability to adapt to changing markets and technologies is essential for long-term success.',
    },
  ]

  return (
    <section className="section-padding bg-secondary-50" ref={ref}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-custom-lg">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Ali Sheikh working with clients"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="heading-lg mb-6">
              My Business <span className="gradient-text">Philosophy</span>
            </h2>
            <p className="text-lg text-secondary-700 mb-8">
              My approach to business is built on principles I've developed through years 
              of hands-on experience across multiple industries. These core beliefs guide 
              how I help businesses transform and scale.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {principles.map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-white rounded-xl shadow-custom p-6"
                >
                  <div className="bg-primary-100 p-3 rounded-lg text-primary-600 inline-block mb-4">
                    {principle.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{principle.title}</h3>
                  <p className="text-secondary-600">{principle.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Philosophy
