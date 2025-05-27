import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Process = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const steps = [
    {
      number: '01',
      title: 'Discovery & Assessment',
      description:
        'We begin with a thorough assessment of your business, identifying strengths, challenges, and opportunities for growth.',
    },
    {
      number: '02',
      title: 'Strategy Development',
      description:
        'Based on the assessment, we create a customized strategy tailored to your specific goals and market position.',
    },
    {
      number: '03',
      title: 'Implementation',
      description:
        'We work together to implement the strategy, making adjustments as needed to ensure optimal results.',
    },
    {
      number: '04',
      title: 'Measurement & Refinement',
      description:
        'We track key metrics to measure success and continuously refine the approach for maximum impact.',
    },
  ]

  return (
    <section className="section-padding bg-secondary-50" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="heading-lg mb-4">
            My <span className="gradient-text">Consulting Process</span>
          </h2>
          <p className="text-lg text-secondary-600">
            A systematic approach to transforming your business through proven methodologies
            and tailored strategies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-custom p-6 relative"
            >
              {/* Step number */}
              <div className="absolute -top-5 left-6 bg-primary-600 text-white text-xl font-bold py-2 px-4 rounded-lg">
                {step.number}
              </div>
              
              {/* Content */}
              <div className="pt-6">
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-secondary-600">{step.description}</p>
              </div>
              
              {/* Arrow connector (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
