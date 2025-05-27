import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      name: 'Michael Rodriguez',
      position: 'CEO, AutoTech Solutions',
      content:
        'Ali\'s strategic guidance transformed our auto body shop operations. His insights into scaling and implementing new technologies increased our efficiency by 40% and expanded our customer base significantly.',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      name: 'Sarah Johnson',
      position: 'Founder, TechStart Inc.',
      content:
        'Working with Ali on our AI implementation strategy was game-changing. His ability to blend technical knowledge with practical business applications helped us develop solutions that actually drive ROI.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      name: 'David Chen',
      position: 'Operations Director, Calibrate Systems',
      content:
        'Ali\'s legal expertise was invaluable when structuring our business. He provided clear guidance on compliance issues while helping us optimize our operations for growth. Highly recommended!',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ]

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const goToTestimonial = (index) => {
    setActiveIndex(index)
  }

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-50 to-white -z-10" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-50 rounded-bl-full opacity-50 -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent-50 rounded-tr-full opacity-40 -z-10" />
      
      {/* Quote marks */}
      <div className="absolute top-20 left-10 text-primary-200 opacity-20 -z-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 border border-primary-100 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary-500 mr-2"></span>
            <span className="text-primary-700 font-medium text-sm">Client Success Stories</span>
          </div>
          
          <h2 className="heading-lg mb-6">
            What My <span className="gradient-text">Clients</span> Say
          </h2>
          
          <p className="text-lg text-secondary-700 leading-relaxed">
            I've helped businesses across multiple industries achieve their growth goals.
            Here's what some of my clients have to say about our work together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="relative bg-white rounded-2xl shadow-custom-lg p-8 md:p-12 border border-secondary-100 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-bl-full opacity-50 -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent-50 rounded-full opacity-30 -z-10" />
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-4 flex justify-center md:justify-start">
                <div className="relative">
                  {/* Image frame */}
                  <div className="absolute -top-3 -left-3 right-3 bottom-3 border-2 border-primary-200 rounded-xl -z-10"></div>
                  
                  {/* Testimonial image */}
                  <div className="w-48 h-48 rounded-xl overflow-hidden border-4 border-white shadow-lg">
                    <img
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-8">
                <div className="mb-6">
                  <svg className="w-10 h-10 text-primary-200 mb-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  
                  <p className="text-xl text-secondary-800 italic leading-relaxed mb-6">
                    "{testimonials[activeIndex].content}"
                  </p>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-secondary-900">{testimonials[activeIndex].name}</h4>
                    <p className="text-secondary-600">{testimonials[activeIndex].position}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToTestimonial(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          activeIndex === index ? 'bg-primary-600 scale-125' : 'bg-secondary-300'
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                      />
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <button
                      onClick={prevTestimonial}
                      className="w-10 h-10 rounded-full border border-secondary-200 flex items-center justify-center text-secondary-700 hover:bg-primary-50 hover:border-primary-200 hover:text-primary-600 transition-all duration-300"
                      aria-label="Previous testimonial"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="w-10 h-10 rounded-full border border-secondary-200 flex items-center justify-center text-secondary-700 hover:bg-primary-50 hover:border-primary-200 hover:text-primary-600 transition-all duration-300"
                      aria-label="Next testimonial"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
