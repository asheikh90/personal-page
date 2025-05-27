import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { FiHeart, FiUsers, FiBookOpen, FiGift } from 'react-icons/fi'

const Community = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const initiatives = [
    {
      icon: <FiHeart className="w-6 h-6" />,
      title: 'Shia Community Support',
      description:
        'Lifetime commitment to supporting and uplifting the Shia community through various initiatives and programs.',
    },
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: 'Mentorship Programs',
      description:
        'Guiding the next generation of entrepreneurs through dedicated mentorship and knowledge sharing.',
    },
    {
      icon: <FiBookOpen className="w-6 h-6" />,
      title: 'Educational Resources',
      description:
        'Creating and sharing valuable resources to help others learn from my experiences and avoid costly mistakes.',
    },
    {
      icon: <FiGift className="w-6 h-6" />,
      title: 'Giving Back',
      description:
        'Committed to sharing success by contributing to causes that create positive change in communities.',
    },
  ]

  return (
    <section className="section-padding bg-secondary-50" ref={ref}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-lg mb-6">
              Community <span className="gradient-text">Involvement</span>
            </h2>
            <p className="text-lg text-secondary-700 mb-6">
              Beyond business consulting, I'm deeply committed to giving back to the 
              community. My lifelong involvement with the Shia community has shaped 
              my values and approach to both business and life.
            </p>
            <p className="text-lg text-secondary-700 mb-8">
              I believe in sharing knowledge and experiences to help others avoid 
              costly mistakes and accelerate their path to success. Through mentorship, 
              educational resources, and community support, I'm building a legacy of 
              positive impact.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {initiatives.map((initiative, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-primary-100 p-2 rounded-lg text-primary-600 mr-4 mt-1">
                    {initiative.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{initiative.title}</h3>
                    <p className="text-secondary-600 text-sm">{initiative.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/about" className="btn-primary">
              Learn More About My Community Work
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-custom-lg">
                <img
                  src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Ali Sheikh with community members"
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Quote overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-secondary-900 to-transparent p-6 md:p-8">
                <blockquote className="text-white italic text-lg">
                  "Success is meaningful when shared with others. My mission is to empower 
                  communities through knowledge and opportunity."
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
