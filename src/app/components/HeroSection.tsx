'use client'

export function HeroSection() {
  return (
    <section className="relative bg-primary-900 text-white">
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Discover the Power of Tigernut
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Experience the natural goodness of our premium tigernut products, sustainably sourced and crafted with care.
          </p>
          <div className="flex gap-4">
            <a href="/products" className="bg-white text-primary-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
              Shop Now
            </a>
            <a href="/about" className="border border-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}