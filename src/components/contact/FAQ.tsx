import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiPlus, FiMinus } from 'react-icons/fi'

const FAQ = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqs = [
    {
      question: "What industries do you specialize in?",
      answer:
        "I have extensive experience across multiple industries including automotive (body shops, ADAS calibration), oil & lubricants, payment processing, solar energy, and technology. My strategies are adaptable to various business models and can be customized to your specific industry needs.",
    },
    {
      question: "How long does a typical consulting engagement last?",
      answer:
        "The duration varies based on your specific needs and goals. Some clients benefit from short-term engagements focused on specific challenges (1-3 months), while others prefer ongoing strategic partnerships (6-12 months). During our initial consultation, we will discuss your objectives and determine the optimal timeframe for your situation.",
    },
    {
      question: "What makes your approach to business scaling different?",
      answer:
        "My approach is unique because it combines hands-on experience from building and scaling multiple businesses with cutting-edge strategies in AI and automation. I focus on sustainable growth rather than quick fixes, and I provide practical, actionable advice rather than theoretical concepts. Additionally, I tailor my strategies to your specific business context rather than applying one-size-fits-all solutions.",
    },
    {
      question: "Do you offer implementation support or just strategy?",
      answer:
        "I offer both strategic planning and implementation support. While some clients prefer to have me develop the strategy that their team implements, others value having me involved throughout the implementation process to ensure proper execution and make adjustments as needed. We can discuss the level of involvement that works best for your situation.",
    },
    {
      question: "How do you measure the success of your consulting services?",
      answer:
        "Success is measured by concrete business outcomes aligned with your goals. Depending on your objectives, this might include revenue growth, cost reduction, efficiency improvements, successful market expansion, or other key performance indicators. We will establish clear metrics at the beginning of our engagement and track progress throughout our work together.",
    },
    {
      question: "What is your community involvement about?",
      answer:
        "I have a lifelong commitment to supporting the Shia community through various initiatives. I believe in giving back and sharing the knowledge I have gained through my business experiences. My community work includes mentorship programs, educational resources, and initiatives designed to help others avoid costly mistakes and accelerate their path to success.",
    },
  ]

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
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-secondary-600">
            Find answers to common questions about my consulting services and approach.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-secondary-200 rounded-xl overflow-hidden"
              >
                <button
                  className="flex justify-between items-center w-full p-6 text-left bg-white hover:bg-secondary-50 transition-colors"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                  <span className="ml-4 flex-shrink-0">
                    {openIndex === index ? (
                      <FiMinus className="w-5 h-5 text-primary-600" />
                    ) : (
                      <FiPlus className="w-5 h-5 text-primary-600" />
                    )}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="p-6 pt-0 text-secondary-600">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
