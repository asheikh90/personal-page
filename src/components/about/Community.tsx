import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Community = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="heading-lg mb-4">
            Community <span className="gradient-text">Involvement</span>
          </h2>
          <p className="text-lg text-secondary-600">
            My commitment to the Shia community has been a lifelong journey of service,
            support, and giving back. I believe in creating positive change through
            meaningful action.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="heading-md mb-6">Lifelong Support & Engagement</h3>
            <p className="text-lg text-secondary-700 mb-6">
              Throughout my life, I've been actively involved in supporting and 
              strengthening the Shia community. This commitment has shaped my values 
              and approach to both business and personal endeavors.
            </p>
            <p className="text-lg text-secondary-700 mb-6">
              From organizing community events to supporting educational initiatives, 
              I've worked to create opportunities for connection, growth, and mutual support.
            </p>
            <p className="text-lg text-secondary-700 mb-6">
              My experiences in business have given me unique insights that I'm passionate 
              about sharing with the community, helping others avoid costly mistakes and 
              accelerate their path to success.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-secondary-50 rounded-xl p-8 shadow-custom">
              <h3 className="heading-md mb-6">Giving Back Initiative</h3>
              <p className="text-lg text-secondary-700 mb-6">
                I'm building a platform to share all the secrets I've discovered along my 
                entrepreneurial journey—what works, what doesn't, and how to save yourself 
                hundreds of thousands of dollars and years of time.
              </p>
              <p className="text-lg text-secondary-700 mb-6">
                This knowledge-sharing initiative is designed to empower community members 
                with practical business insights, strategies, and lessons that I've learned 
                through both successes and failures.
              </p>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <blockquote className="text-lg italic text-secondary-800">
                  "My goal is to create a legacy of knowledge that helps others achieve 
                  success more efficiently and effectively than I did. When we share what 
                  we've learned, we strengthen the entire community."
                </blockquote>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Community
