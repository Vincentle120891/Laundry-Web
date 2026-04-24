import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Professional Laundry Service at Your Doorstep
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Skip the laundry room. We pick up, clean, and deliver your clothes with care. 
                Fresh, clean clothes without the hassle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/book"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
                >
                  Book a Pickup
                </Link>
                <Link
                  to="/services"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors text-center"
                >
                  View Services
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="/hero.png"
                alt="Laundry service illustration"
                className="rounded-2xl shadow-2xl"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose LaundryPro?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We make laundry day effortless with our premium service
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast & Convenient</h3>
              <p className="text-gray-600">
                Schedule pickups and deliveries at your convenience. Most orders delivered within 24-48 hours.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Guaranteed</h3>
              <p className="text-gray-600">
                Professional cleaning with eco-friendly detergents. Your clothes are treated with the utmost care.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Secure & Trusted</h3>
              <p className="text-gray-600">
                Track your order in real-time. Insured service with secure payment options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Getting your laundry done has never been easier
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Book Online', description: 'Schedule your pickup in under 2 minutes' },
              { step: 2, title: 'We Pick Up', description: 'Our driver collects your laundry at your door' },
              { step: 3, title: 'We Clean', description: 'Professional cleaning with premium care' },
              { step: 4, title: 'We Deliver', description: 'Fresh, clean clothes delivered to you' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/book"
              className="inline-flex px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Start Your Order
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience Hassle-Free Laundry?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of satisfied customers who trust LaundryPro for their laundry needs.
          </p>
          <Link
            to="/book"
            className="inline-flex px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Book Your First Pickup
          </Link>
        </div>
      </section>
    </div>
  );
}
