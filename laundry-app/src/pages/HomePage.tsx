import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="font-sans">
      {/* Hero Section - Kid Friendly */}
      <section className="bg-gradient-to-br from-yellow-300 via-pink-300 to-purple-400 relative overflow-hidden">
        {/* Floating bubbles background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white/30 rounded-full animate-bounce"
              style={{
                width: `${Math.random() * 60 + 20}px`,
                height: `${Math.random() * 60 + 20}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${Math.random() * 3 + 2}s`,
              }}
            />
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <div className="inline-block mb-4">
                <span className="text-6xl">🧺✨</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-purple-800 mb-6 leading-tight">
                Magic Laundry 
                <br />
                <span className="text-pink-600">Adventure!</span>
              </h1>
              <p className="text-xl md:text-2xl text-purple-700 mb-8">
                We turn dirty clothes into sparkly clean treasures! 
                🌟 Fast, fun, and super fresh!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link
                  to="/book"
                  className="px-8 py-4 bg-yellow-400 text-purple-800 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-lg text-center border-4 border-yellow-500"
                >
                  🚀 Start Adventure!
                </Link>
                <Link
                  to="/services"
                  className="px-8 py-4 bg-white text-pink-600 rounded-full font-bold text-lg hover:bg-pink-50 transition-all transform hover:scale-105 shadow-lg text-center border-4 border-pink-300"
                >
                  🎨 See Magic Tricks
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-4 border-white">
                <div className="text-center">
                  <span className="text-9xl">🧼👕🌈</span>
                  <p className="text-purple-600 font-bold text-xl mt-4">Your Clothes' Happy Place!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Kid Friendly */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-purple-800 mb-4">
              🌟 Why Kids & Parents Love Us! 🌟
            </h2>
            <p className="text-xl text-purple-600 max-w-2xl mx-auto">
              Making laundry day the BEST day!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg border-4 border-yellow-300 hover:border-yellow-400 transition-all transform hover:scale-105">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-4xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold text-purple-800 mb-3 text-center">Super Speedy!</h3>
              <p className="text-gray-600 text-center">
                Like magic! Your clothes come back clean in 1-2 days. Zoom! 🏃‍♂️💨
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border-4 border-green-300 hover:border-green-400 transition-all transform hover:scale-105">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-4xl">🌿</span>
              </div>
              <h3 className="text-2xl font-bold text-purple-800 mb-3 text-center">Eco-Friendly Magic!</h3>
              <p className="text-gray-600 text-center">
                We use special gentle soaps that are safe for kids and our planet Earth! 🌍💚
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border-4 border-pink-300 hover:border-pink-400 transition-all transform hover:scale-105">
              <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-4xl">🎁</span>
              </div>
              <h3 className="text-2xl font-bold text-purple-800 mb-3 text-center">Happy Guarantee!</h3>
              <p className="text-gray-600 text-center">
                If you're not smiling, we'll make it right! Your happiness is our mission! 😊
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section - Kid Friendly */}
      <section className="py-20 bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-purple-800 mb-4">
              🎯 Our Magical Journey! 🎯
            </h2>
            <p className="text-xl text-purple-600 max-w-2xl mx-auto">
              4 Easy Steps to Clean Clothes Paradise!
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { 
                step: 1, 
                icon: '📅',
                color: 'from-yellow-400 to-orange-400',
                title: 'Pick Your Time', 
                description: 'Choose when we visit your castle!' 
              },
              { 
                step: 2, 
                icon: '🚗',
                color: 'from-green-400 to-teal-400',
                title: 'We Come to You!', 
                description: 'Our friendly driver knocks on your door!' 
              },
              { 
                step: 3, 
                icon: '✨',
                color: 'from-blue-400 to-purple-400',
                title: 'Magic Cleaning!', 
                description: 'We wash with love and special care!' 
              },
              { 
                step: 4, 
                icon: '🎉',
                color: 'from-pink-400 to-red-400',
                title: 'Fresh Delivery!', 
                description: 'Clean, fluffy clothes return home!' 
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className={`w-24 h-24 bg-gradient-to-br ${item.color} text-white rounded-full flex items-center justify-center text-5xl mx-auto mb-4 shadow-lg border-4 border-white`}>
                  {item.icon}
                </div>
                <div className="bg-white rounded-2xl p-4 shadow-md border-2 border-purple-200">
                  <h3 className="text-lg font-bold text-purple-800 mb-2">Step {item.step}: {item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/book"
              className="inline-flex px-10 py-5 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-bold text-xl hover:from-pink-600 hover:to-purple-600 transition-all transform hover:scale-105 shadow-xl border-4 border-white"
            >
              🎪 Begin Your Quest! 🎪
            </Link>
          </div>
        </div>
      </section>

      {/* Fun Stats Section */}
      <section className="py-16 bg-yellow-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '10,000+', label: 'Happy Families', emoji: '👨‍👩‍👧‍👦' },
              { number: '50,000+', label: 'Loads Cleaned', emoji: '👕' },
              { number: '99%', label: 'Smile Rate', emoji: '😊' },
              { number: '24/7', label: 'Magic Available', emoji: '⭐' },
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border-4 border-yellow-400">
                <div className="text-4xl mb-2">{stat.emoji}</div>
                <div className="text-3xl font-bold text-purple-800 mb-2">{stat.number}</div>
                <div className="text-purple-600 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Kid Friendly */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-pink-600 to-red-500 text-white relative overflow-hidden">
        {/* Decorative stars */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-yellow-300 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 20 + 10}px`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            >
              ⭐
            </div>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="text-6xl mb-6">🎈🎊🌈</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for a Clean Clothes Adventure?
          </h2>
          <p className="text-xl md:text-2xl text-purple-100 mb-8">
            Join thousands of happy families who trust Magic Laundry! 
            Your clothes will thank you! 🙌
          </p>
          <Link
            to="/book"
            className="inline-flex px-10 py-5 bg-yellow-400 text-purple-800 rounded-full font-bold text-xl hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-2xl border-4 border-yellow-500"
          >
            🚀 Launch Your Laundry Mission! 🚀
          </Link>
          <p className="mt-6 text-purple-200 text-lg">
            👶 Kid-friendly • 🌱 Eco-safe • 💖 Love guaranteed
          </p>
        </div>
      </section>
    </div>
  );
}
