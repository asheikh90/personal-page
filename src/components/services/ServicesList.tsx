import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiTrendingUp, FiZap, FiCpu, FiUsers, FiTarget, FiBarChart2 } from 'react-icons/fi'

const ServicesList = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: 'Business Scaling',
      description:
        'Strategic approaches to grow your business efficiently across multiple markets and verticals. I help identify growth opportunities, optimize operations, and implement systems that support sustainable expansion.',
      features: [
        'Market expansion strategy',
        'Operational scaling frameworks',
        'Growth-focused team building',
        'Capital efficiency planning',
      ],
      color: 'bg-blue-50 text-blue-600',
    },
    {
      icon: <FiZap className="w-8 h-8" />,
      title: 'Process Optimization',
      description:
        'Streamline operations and eliminate inefficiencies to maximize productivity and profitability. I analyze your current processes, identify bottlenecks, and implement solutions that save time and resources.',
      features: [
        'Workflow analysis and redesign',
        'Efficiency benchmarking',
        'Cost reduction strategies',
        'Quality improvement systems',
      ],
      color: 'bg-purple-50 text-purple-600',
    },
    {
      icon: <FiCpu className="w-8 h-8" />,
      title: 'AI Implementation',
      description:
        'Leverage cutting-edge AI solutions to automate tasks and gain competitive advantages. I help identify the right AI technologies for your business and implement them in ways that deliver measurable results.',
      features: [
        'AI opportunity assessment',
        'Technology selection and integration',
        'Automation implementation',
        'ROI measurement frameworks',
      ],
      color: 'bg-green-50 text-green-600',
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: 'Community Buying Power',
      description:
        'Harness the collective purchasing power of a community to secure better rates and terms from vendors and service providers. I help businesses join forces to reduce costs while maintaining quality.',
      features: [
        'Vendor negotiation strategies',
        'Group purchasing organization',
        'Cost-sharing frameworks',
        'Collective bargaining tactics',
      ],
      color: 'bg-amber-50 text-amber-600',
    },
    {
      icon: <FiTarget className="w-8 h-8" />,
      title: 'Market Positioning',
      description:
        'Develop a distinctive market position that attracts your ideal customers and differentiates you from competitors. I help clarify your unique value proposition and align your offerings with market needs.',
      features: [
        'Competitive landscape analysis',
        'Value proposition development',
        'Positioning strategy creation',
        'Brand alignment planning',
      ],
      color: 'bg-red-50 text-red-600',
    },
    {
      icon: <FiBarChart2 className="w-8 h-8" />,
      title: 'Performance Analytics',
      description:
        'Implement data-driven decision making through effective analytics and reporting systems. I help establish key metrics, build dashboards, and create processes for continuous performance improvement.',
      features: [
        'KPI identification and tracking',
        'Dashboard development',
        'Data-driven decision frameworks',
        'Performance review systems',
      ],
      color: 'bg-indigo-50 text-indigo-600',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card hover:translate-y-[-8px]"
            >
              <div className={`${service.color} p-4 rounded-lg inline-block mb-4`}>
                {service.icon}
              </div>
              <h3 className="heading-md mb-4">{service.title}</h3>
              <p className="text-secondary-600 mb-6">{service.description}</p>
              
              <h4 className="font-semibold text-lg mb-3">Key Features:</h4>
              <ul className="space-y-2 mb-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesList
