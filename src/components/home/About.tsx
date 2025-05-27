import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { FiCheck, FiArrowRight } from 'react-icons/fi'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const achievements = [
    'Started in T-Mobile sales, raised $600K for 5 stores',
    'International property sales & digital marketing',
    'Scaled family auto business to second location',
    'Founded DriveCal (ADAS calibration)',
    'Scaling Refinery X/BlackForge Lubricants',
    'Created BookedByAI for client acquisition',
    'Leveraging community buying power for better rates'
  ]

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-50 to-white -z-10" />
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-50 rounded-bl-full opacity-70 -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent-50 rounded-tr-full opacity-70 -z-10" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full border-8 border-primary-100 opacity-20 -z-10" />
      <div className="absolute bottom-1/3 left-1/3 w-32 h-32 rounded-full border-4 border-accent-200 opacity-20 -z-10" />
      
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -top-4 -left-4 right-8 bottom-8 border-2 border-primary-200 rounded-2xl -z-10"></div>
              
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-custom-lg border-4 border-white">
                <img
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Ali Sheikh portrait"
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Experience badge */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl shadow-lg p-4 md:p-6 card-hover">
                <div className="text-center">
                  <span className="block text-3xl font-bold">Multi</span>
                  <span className="text-primary-100">Disciplinary</span>
                </div>
              </div>
              
              {/* Small decorative element */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-accent-100 rounded-full opacity-80 -z-10"></div>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary-50 border border-secondary-100 mb-6">
              <span className="text-secondary-700 font-medium text-sm">About Me</span>
            </div>
            
            <h2 className="heading-lg mb-6">
              About <span className="gradient-text">Ali Sheikh</span>
            </h2>
            
            <p className="text-lg text-secondary-700 mb-6 leading-relaxed">
              Born in Queens and shaped by a diverse journey through telecommunications, property development, 
              and automotive industries, I combine sharp execution with systems thinking to 
              build, optimize, and scale businesses from zero to growth mode using lean, 
              data-backed strategies.
            </p>
            
            <p className="text-lg text-secondary-700 mb-8 leading-relaxed">
              My background includes a strong foundation in sales, management, recruiting, 
              and training, having led high-performance teams across industries. I leverage community 
              buying power to help businesses save money while scaling. As a relentless operator and 
              first-principles thinker, I don't chase trends — I build ecosystems.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="w-8 h-1 bg-primary-500 mr-3"></span>
                Key Achievements
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-primary-100 p-1 rounded-full text-primary-600 mr-3 mt-1">
                      <FiCheck className="w-4 h-4" />
                    </span>
                    <span className="text-secondary-800">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link to="/about" className="btn-primary group">
              Learn More About Me
              <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
