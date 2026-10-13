export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white px-6 md:px-20 py-16 text-gray-800">
      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">
          About <span className="text-purple-600">GharMitra</span>
        </h1>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Your trusted platform for home services and repairs near you.
        </p>
      </div>

      {/* About Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop"
            alt="About Us"
            className="rounded-2xl shadow-lg w-full h-[350px] object-cover"
          />
        </div>

        <div>
          <h2 className="text-3xl font-semibold mb-6 text-purple-600">
            Who We Are
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            GharMitra helps people easily find trusted professionals for home
            services like cleaning, plumbing, electrical repair, shifting, and more.
          </p>

          <p className="text-gray-600 leading-relaxed mb-4">
            Our goal is to make home services simple, fast, and reliable for everyone.
          </p>

          <p className="text-gray-600 leading-relaxed">
            We connect customers with verified service providers to ensure quality
            work and customer satisfaction.
          </p>
        </div>
      </div>

      {/* Simple Features */}
      <div className="max-w-6xl mx-auto mt-20 grid md:grid-cols-3 gap-8">
        <div className="bg-purple-50 p-8 rounded-2xl text-center">
          <div className="text-5xl mb-4">🛠️</div>
          <h3 className="text-xl font-semibold mb-3">Trusted Services</h3>
          <p className="text-gray-600">
            Verified professionals for every home service need.
          </p>
        </div>

        <div className="bg-purple-50 p-8 rounded-2xl text-center">
          <div className="text-5xl mb-4">⚡</div>
          <h3 className="text-xl font-semibold mb-3">Quick Booking</h3>
          <p className="text-gray-600">
            Easy and fast service booking anytime.
          </p>
        </div>

        <div className="bg-purple-50 p-8 rounded-2xl text-center">
          <div className="text-5xl mb-4">💜</div>
          <h3 className="text-xl font-semibold mb-3">Customer Support</h3>
          <p className="text-gray-600">
            Dedicated support for a better customer experience.
          </p>
        </div>
      </div>
    </div>
  );
}
