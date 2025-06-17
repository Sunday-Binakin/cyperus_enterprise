'use client'

import Image from 'next/image'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] bg-gradient-to-br from-primary-900 to-primary-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'url("/images/cover.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(8px)'
        }}/>
      </div>
      
      <div className="container mx-auto px-6 py-24 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[70vh]">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Discover the Power of <span className="text-yellow-400">Tigernut</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              Experience the natural goodness of our premium tigernut products, sustainably sourced and crafted with care for your health and wellness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/store" 
                className="inline-flex items-center justify-center bg-white text-primary-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-400 transition-all transform hover:scale-105"
              >
                Shop Now
              </Link>
              <Link 
                href="/about" 
                className="inline-flex items-center justify-center border-2 border-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary-900 transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>
          
          <div className="relative h-[500px] hidden md:block">
            <Image
              src="/images/nut_1.jpg"
              alt="Premium Tigernut Products"
              fill
              className="object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}