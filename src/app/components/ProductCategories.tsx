import Image from 'next/image'
import Link from 'next/link'

const categories = [
  {
    title: 'Premium Beverages',
    description: 'Discover our range of natural, functional drinks crafted for your healthy lifestyle. Made with pure tigernut goodness.',
    image: '/images/nut_2.jpg',
    link: '/store/beverages'
  },
  {
    title: 'Nuts Collection',
    description: 'Explore our premium tigernut varieties, available in various sizes from personal packs to bulk quantities.',
    image: '/images/nut_3.jpg',
    link: '/store/nuts'
  },
  {
    title: 'Poultry Feed',
    description: 'High-quality, sustainable feed solutions that promote better health and growth for your poultry.',
    image: '/images/nut_4.jpg',
    link: '/store/feed'
  }
]

export function ProductCategories() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Product Range</h2>
          <p className="text-gray-600 text-lg">Explore our carefully curated selection of premium tigernut products</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link 
              key={category.title} 
              href={category.link}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-72">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-900 transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {category.description}
                </p>
                <div className="mt-6 flex items-center text-primary-900 font-semibold">
                  <span>Explore Products</span>
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}