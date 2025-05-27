import { Link } from 'react-router-dom'
import { FiLinkedin, FiTwitter, FiInstagram, FiMail, FiPhone, FiArrowRight } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-secondary-950 text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-600 via-primary-400 to-accent-500"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-900/20 rounded-bl-full -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent-900/20 rounded-tr-full -z-10"></div>
      
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-heading font-bold">
                Ali<span className="text-primary-400">Sheikh</span>
              </span>
            </Link>
            <p className="text-secondary-300 max-w-xs leading-relaxed">
              Multi-disciplinary entrepreneur and strategist building scalable operations
              in automotive, tech, legal, and consulting industries.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="text-secondary-300 hover:text-primary-400 transition-colors p-2 bg-secondary-900/50 rounded-full hover:bg-secondary-900"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-secondary-300 hover:text-primary-400 transition-colors p-2 bg-secondary-900/50 rounded-full hover:bg-secondary-900"
                aria-label="Twitter"
              >
                <FiTwitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-secondary-300 hover:text-primary-400 transition-colors p-2 bg-secondary-900/50 rounded-full hover:bg-secondary-900"
                aria-label="Instagram"
              >
                <FiInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-secondary-300 hover:text-primary-400 transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-secondary-300 hover:text-primary-400 transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-secondary-300 hover:text-primary-400 transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-secondary-300 hover:text-primary-400 transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-semibold mb-4 text-white">Ventures</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services"
                  className="text-secondary-300 hover:text-primary-400 transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Auto Body Shops
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-secondary-300 hover:text-primary-400 transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  DriveCal (ADAS)
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-secondary-300 hover:text-primary-400 transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  BlackForge Lubricants
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-secondary-300 hover:text-primary-400 transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  BookedByAI
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="p-2 bg-secondary-900/50 rounded-lg text-primary-400 mt-0.5 mr-3">
                  <FiMail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-sm text-secondary-400 mb-1">Email</span>
                  <a
                    href="mailto:AS@alisheikh313.com"
                    className="text-secondary-300 hover:text-primary-400 transition-colors"
                  >
                    AS@alisheikh313.com
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="p-2 bg-secondary-900/50 rounded-lg text-primary-400 mt-0.5 mr-3">
                  <FiPhone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-sm text-secondary-400 mb-1">Phone</span>
                  <a
                    href="tel:+17327638486"
                    className="text-secondary-300 hover:text-primary-400 transition-colors"
                  >
                    (732) 763-8486
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-secondary-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary-400 text-sm">
            &copy; {currentYear} Ali Sheikh. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6 text-sm text-secondary-400">
            <a href="#" className="hover:text-primary-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
