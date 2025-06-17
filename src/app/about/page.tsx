'use client'

import { useState } from 'react'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    image: "/images/team-1.jpg",
    bio: "With over 15 years of experience in sustainable agriculture, Sarah leads our mission to revolutionize tigernut farming in Ghana."
  },
  {
    name: "Kwame Mensah",
    role: "Head of Operations",
    image: "/images/team-2.jpg",
    bio: "Kwame brings 10 years of agricultural expertise and ensures our farming practices meet the highest standards."
  },
  {
    name: "Ama Osei",
    role: "Product Development",
    image: "/images/team-3.jpg",
    bio: "Ama&apos;s background in food science helps us create innovative tigernut products that delight our customers."
  }
]

const values = [
  {
    title: "Sustainability",
    description: "We practice regenerative farming methods that enrich the soil and protect local ecosystems.",
    icon: "🌱"
  },
  {
    title: "Quality",
    description: "Every product undergoes rigorous quality control to ensure the highest standards.",
    icon: "✨"
  },
  {
    title: "Community",
    description: "We work closely with local farmers and communities to create lasting positive impact.",
    icon: "🤝"
  },
  {
    title: "Innovation",
    description: "We continuously research and develop new ways to maximize the benefits of tigernuts.",
    icon: "💡"
  }
]

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('mission')

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[60vh] bg-[#8B4513] text-white">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <Image
            src="/images/about-hero.jpg"
            alt="Tigernut Farm"
            fill
            className="object-cover"
          />
          <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-['var(--font-bebas-neue)'] mb-6">
                Our Story
              </h1>
              <p className="text-xl md:text-2xl text-gray-200">
                Pioneering sustainable tigernut farming in Ghana while empowering local communities.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex space-x-4 mb-12">
                <button
                  onClick={() => setActiveTab('mission')}
                  className={`px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 ${
                    activeTab === 'mission'
                      ? 'bg-[#8B4513] text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Our Mission
                </button>
                <button
                  onClick={() => setActiveTab('vision')}
                  className={`px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 ${
                    activeTab === 'vision'
                      ? 'bg-[#8B4513] text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Our Vision
                </button>
              </div>
              
              <div className="bg-white rounded-2xl p-12 shadow-xl">
                {activeTab === 'mission' ? (
                  <div>
                    <h2 className="text-4xl font-['var(--font-bebas-neue)'] mb-6 text-[#8B4513]">
                      Our Mission
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      At Cyperus Enterprise, we&apos;re dedicated to revolutionizing tigernut farming in Ghana through sustainable practices, innovative processing methods, and community empowerment. We strive to create high-quality tigernut products while ensuring environmental stewardship and economic growth for local farmers.
                    </p>
                  </div>
                ) : (
                  <div>
                    <h2 className="text-4xl font-['var(--font-bebas-neue)'] mb-6 text-[#8B4513]">
                      Our Vision
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      We envision a future where tigernut farming becomes a cornerstone of Ghana&apos;s agricultural economy, providing sustainable livelihoods for farmers while delivering premium products to consumers worldwide. Through innovation and collaboration, we aim to establish Ghana as the global leader in tigernut production and processing.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-['var(--font-bebas-neue)'] text-center mb-16 text-[#8B4513]">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-2xl font-['var(--font-bebas-neue)'] mb-4 text-[#8B4513]">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-['var(--font-bebas-neue)'] text-center mb-16 text-[#8B4513]">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-80">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-['var(--font-bebas-neue)'] mb-2 text-[#8B4513]">
                      {member.name}
                    </h3>
                    <p className="text-lg text-gray-600 mb-4">
                      {member.role}
                    </p>
                    <p className="text-gray-700">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
} 