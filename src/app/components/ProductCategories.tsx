import Image from 'next/image'
import Link from 'next/link'

const categories = [
  {
    title: 'Premium Beverages',
    description: 'Natural, functional drinks for every lifestyle',
    image: '/images/beverages.jpg',
    link: '/shop/beverages'
  },
  {
    title: 'Nuts Collection',
    description: 'From 100g to bulk quantities',
    image: '/images/nuts.jpg',
    link: '/shop/nuts'
  },
  {
    title: 'Poultry Feed',
    description: 'Sustainable feed solutions',
    image: '/images/poultry-feed.jpg',
    link: '/shop/feed'
  }
]

export function ProductCategories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Product Range</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link 
              key={category.title} 
              href={category.link}
              className="group"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                <div className="relative h-64">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-105 transition"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}