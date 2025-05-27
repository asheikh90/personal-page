import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const NotFoundPage = () => {
  useEffect(() => {
    document.title = 'Page Not Found | Ali Sheikh'
  }, [])

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-secondary-50 min-h-screen flex items-center">
      <div className="container-custom text-center">
        <h1 className="heading-xl mb-6">
          <span className="gradient-text">404</span> - Page Not Found
        </h1>
        <p className="text-lg md:text-xl text-secondary-600 mb-8 max-w-2xl mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn-primary">
          Return to Home
        </Link>
      </div>
    </section>
  )
}

export default NotFoundPage
