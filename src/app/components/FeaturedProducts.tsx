import Image from 'next/image'
import Link from 'next/link'

const featuredProducts = [
  {
    name: "Premium Tigernut Flour",
    price: "$12.99",
    image: '/images/nut_1.jpg',
    slug: "1"
  },
  {
    name: "Citrus Lemon & Clove Blend",
    price: "$11.99",
    image: "/images/nut_2.jpg",
    slug: "citrus-limon-clove"
  },
  {
    name: "Raw Cyperus Nuts",
    price: "$9.99",
    image: "/images/nut_3.jpg",
    slug: "3"
  }
]

export function FeaturedProducts() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <Link 
              key={product.slug} 
              href={`/store/${product.slug}`}
              className="group"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                <div className="relative h-72">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-primary font-bold">{product.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}