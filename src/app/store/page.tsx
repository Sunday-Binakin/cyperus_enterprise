'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Sample product data - in a real app, this would come from an API or database
const products = [
  {
    id: 1,
    name: "Premium Tigernut Milk",
    category: "beverages",
    price: 29.99,
    image: "/images/nut_1.jpg",
    description: "Naturally sweet and creamy tigernut milk, perfect for your daily nutrition.",
    rating: 4.8,
    reviews: 124
  },
  {
    id: 2,
    name: "Raw Tigernut Flour",
    category: "flour",
    price: 24.99,
    image: "/images/nut_2.jpg",
    description: "Gluten-free flour alternative, rich in fiber and nutrients.",
    rating: 4.9,
    reviews: 89
  },
  {
    id: 3,
    name: "Organic Whole Tigernuts",
    category: "nuts",
    price: 19.99,
    image: "/images/nut_3.jpg",
    description: "Premium quality whole tigernuts, perfect for snacking.",
    rating: 4.7,
    reviews: 156
  },
  {
    id: 4,
    name: "Tigernut Protein Blend",
    category: "supplements",
    price: 39.99,
    image: "/images/nut_4.jpg",
    description: "High-protein blend for post-workout recovery.",
    rating: 4.6,
    reviews: 78
  },
  {
    id: 5,
    name: "Tigernut Oil",
    category: "oils",
    price: 34.99,
    image: "/images/nut_5.jpg",
    description: "Cold-pressed tigernut oil for cooking and skincare.",
    rating: 4.9,
    reviews: 92
  },
  {
    id: 6,
    name: "Tigernut Trail Mix",
    category: "snacks",
    price: 14.99,
    image: "/images/nut_6.jpg",
    description: "Healthy mix of tigernuts, dried fruits, and seeds.",
    rating: 4.8,
    reviews: 143
  }
]

const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'beverages', name: 'Beverages' },
  { id: 'flour', name: 'Flour' },
  { id: 'nuts', name: 'Nuts' },
  { id: 'supplements', name: 'Supplements' },
  { id: 'oils', name: 'Oils' },
  { id: 'snacks', name: 'Snacks' }
]

export default function StorePage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('featured')

  const filteredProducts = products.filter(product => 
    selectedCategory === 'all' || product.category === selectedCategory
  )

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price
    if (sortBy === 'price-desc') return b.price - a.price
    if (sortBy === 'rating') return b.rating - a.rating
    return 0 // featured
  })

  return (
    <main className="min-h-screen">
      {/* Store Header */}
      <section className="bg-[#8B4513] text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-['var(--font-bebas-neue)'] mb-6">Our Products</h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Discover our range of premium tigernut products, crafted with care for your health and wellness.
            </p>
          </div>
        </div>
      </section>

      {/* Store Content */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 space-y-6 md:space-y-0">
            <div className="flex flex-wrap gap-3">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-[#8B4513] text-white shadow-lg transform scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-6 py-3 border border-gray-300 rounded-full text-lg focus:ring-2 focus:ring-[#8B4513] focus:border-transparent transition-all duration-300 cursor-pointer bg-white"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {sortedProducts.map(product => (
              <Link 
                key={product.id}
                href={`/store/${product.id}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative h-80">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-['var(--font-bebas-neue)'] group-hover:text-[#8B4513] transition-colors">
                      {product.name}
                    </h3>
                    <span className="text-2xl font-bold text-[#8B4513]">
                      ${product.price}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-gray-600">({product.reviews})</span>
                    </div>
                    <button className="bg-[#8B4513] text-white px-6 py-2 rounded-full hover:bg-[#6F3410] transition-colors duration-300 transform hover:scale-105">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
