import Image from 'next/image'
import { theme } from '../theme'

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-[#8B4513]">
        <div className="absolute inset-0">
          <Image
            src="/images/cover.jpg"
            alt="About Cyperus Enterprise"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative h-full flex items-center justify-center text-center text-white px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-['var(--font-bebas-neue)'] mb-6">Our Story</h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
              Revolutionizing health and wellness through the power of tigernut
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-['var(--font-bebas-neue)'] text-[#8B4513] mb-8">Our Mission</h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                At Cyperus Enterprise, we're on a mission to bring the ancient wisdom of tigernut to modern wellness. We believe in creating products that not only taste great but also contribute to your overall health and well-being.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Through sustainable farming practices and innovative processing methods, we're committed to delivering the highest quality tigernut products while supporting local communities and protecting our environment.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center space-x-3 text-[#8B4513]">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg">Premium Quality Products</span>
                </div>
                <div className="flex items-center space-x-3 text-[#8B4513]">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg">Sustainable Farming</span>
                </div>
                <div className="flex items-center space-x-3 text-[#8B4513]">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg">Community Support</span>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl transform md:translate-x-8">
                <Image
                  src="/images/nut_5.jpg"
                  alt="Our Mission"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-['var(--font-bebas-neue)'] text-center text-[#8B4513] mb-16">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Sustainability",
                description: "We're committed to environmentally responsible practices throughout our supply chain, from farming to packaging.",
                icon: (
                  <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                )
              },
              {
                title: "Innovation",
                description: "We continuously explore new ways to bring the benefits of tigernut to modern lifestyles through research and development.",
                icon: (
                  <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
              {
                title: "Community",
                description: "We believe in fair trade practices and supporting the communities that help bring our products to life.",
                icon: (
                  <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )
              }
            ].map((value) => (
              <div key={value.title} className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="text-[#8B4513] mb-8">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-['var(--font-bebas-neue)'] mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-['var(--font-bebas-neue)'] text-center text-[#8B4513] mb-16">Our Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                name: "Sarah Johnson",
                role: "Chief Executive Officer",
                image: "/images/nut_6.jpg"
              },
              {
                name: "Michael Chen",
                role: "Head of Research & Development",
                image: "/images/nut_2.jpg"
              },
              {
                name: "Elena Rodriguez",
                role: "Sustainability Director",
                image: "/images/nut_3.jpg"
              }
            ].map((member) => (
              <div key={member.name} className="text-center group">
                <div className="relative w-56 h-56 mx-auto mb-6 rounded-full overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl font-['var(--font-bebas-neue)'] mb-2">{member.name}</h3>
                <p className="text-[#8B4513]">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
} 