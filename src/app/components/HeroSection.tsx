'use client'

import Image from 'next/image'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-background.jpg"
          alt="Tigernut products showcase"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Nature's Superfood, Reimagined
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8">
          Premium Tigernut Products for Health & Wellness
        </p>
        <div className="flex gap-4 justify-center">
          <Link 
            href="/shop" 
            className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary-dark transition"
          >
            Shop Now
          </Link>
          <Link 
            href="/about" 
            className="bg-white text-primary px-8 py-3 rounded-full hover:bg-gray-100 transition"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}