import { Product } from '@/types/product'

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Tigernut Flour',
    description: 'Organic, gluten-free tigernut flour perfect for baking. Rich in fiber and nutrients, our premium tigernut flour is stone-ground to ensure the finest texture for your recipes.',
    price: 12.99,
    category: 'Flour',
    image: '/images/nut(1).jpg',
    stock: 50,
    rating: 4.5,
    reviews: 128,
    features: ['Gluten-free', 'Organic', 'High in fiber', 'Stone-ground', 'Resealable packaging'],
    specifications: {
      'Weight': '1 lb',
      'Origin': 'West Africa',
      'Packaging': 'Resealable bag',
      'Shelf Life': '12 months',
      'Storage': 'Cool, dry place'
    }
  },
  {
    id: '2',
    name: 'Organic Cassava Flour',
    description: 'Fine-textured, grain-free cassava flour. Perfect for paleo baking and cooking. Made from 100% organic cassava root.',
    price: 14.99,
    category: 'Flour',
     image: '/images/nut(2).jpg',
    stock: 45,
    rating: 4.7,
    reviews: 96,
    features: ['Grain-free', 'Paleo-friendly', 'Organic', 'Versatile', 'Fine texture'],
    specifications: {
      'Weight': '2 lb',
      'Origin': 'Brazil',
      'Packaging': 'Kraft paper bag',
      'Shelf Life': '18 months',
      'Storage': 'Cool, dry place'
    }
  },
  {
    id: '3',
    name: 'Raw Cyperus Nuts',
    description: 'Premium raw cyperus nuts, carefully selected and processed to maintain maximum nutritional value. Perfect for snacking or adding to recipes.',
    price: 9.99,
    category: 'Nuts',
     image: '/images/nut(3).jpg',
    stock: 75,
    rating: 4.8,
    reviews: 156,
    features: ['Raw', 'Unprocessed', 'High in protein', 'Natural sweetness', 'Versatile use'],
    specifications: {
      'Weight': '8 oz',
      'Origin': 'Niger',
      'Packaging': 'Resealable pouch',
      'Shelf Life': '6 months',
      'Storage': 'Refrigerate after opening'
    }
  },
  {
    id: '4',
    name: 'Cyperus Nut Milk',
    description: 'Creamy, dairy-free milk alternative made from organic cyperus nuts. Naturally sweet and perfect for beverages, cereals, and cooking.',
    price: 6.99,
    category: 'Beverages',
     image: '/images/nut(4).jpg',
    stock: 60,
    rating: 4.6,
    reviews: 89,
    features: ['Dairy-free', 'No added sugars', 'Rich in nutrients', 'Creamy texture', 'Versatile use'],
    specifications: {
      'Volume': '32 fl oz',
      'Origin': 'USA',
      'Packaging': 'Recyclable carton',
      'Shelf Life': '10 days',
      'Storage': 'Refrigerate'
    }
  },
  {
    id: '5',
    name: 'Mixed Nut Granola',
    description: 'Crunchy granola blend made with cyperus nuts, seeds, and dried fruits. Perfect for breakfast or as a healthy snack.',
    price: 8.99,
    category: 'Snacks',
     image: '/images/nut(5).jpg',
    stock: 40,
    rating: 4.4,
    reviews: 67,
    features: ['Gluten-free', 'No added sugars', 'High in fiber', 'Crunchy texture', 'Natural ingredients'],
    specifications: {
      'Weight': '12 oz',
      'Origin': 'USA',
      'Packaging': 'Resealable bag',
      'Shelf Life': '3 months',
      'Storage': 'Cool, dry place'
    }
  },  {
    id: 'citrus-limon-clove',
    name: 'Citrus Lemon & Clove Blend',
    description: 'A refreshing and aromatic blend of citrus, lemon, and clove. Perfect for tea, baking, or natural home fragrance.',
    price: 11.99,
    category: 'Beverages',
    image: '/images/nut(6).jpg',
    stock: 35,
    rating: 4.9,
    reviews: 42,
    features: ['Natural ingredients', 'Aromatic blend', 'Multiple uses', 'Premium quality', 'Unique flavor'],
    specifications: {
      'Weight': '4 oz',
      'Origin': 'Mixed',
      'Packaging': 'Premium tin',
      'Shelf Life': '24 months',
      'Storage': 'Cool, dry place'
    }
  },
  {
    id: '6',
    name: 'Organic Chia Seeds',
    description: 'Premium organic chia seeds, packed with omega-3s and fiber. Perfect for smoothies, baking, or as a topping.',
    price: 7.99,
    category: 'Seeds',
    image: '/images/nut(4).jpg',
    stock: 85,
    rating: 4.9,
    reviews: 203,
    features: ['Organic', 'High in omega-3', 'Rich in fiber', 'Versatile use', 'Non-GMO'],
    specifications: {
      'Weight': '16 oz',
      'Origin': 'Mexico',
      'Packaging': 'Resealable pouch',
      'Shelf Life': '24 months',
      'Storage': 'Cool, dry place'
    }
  }
]
