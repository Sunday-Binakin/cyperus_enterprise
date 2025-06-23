import { Product, ProductCategory } from '@/types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Organic Tigernut Milk',
    description: 'Fresh and creamy organic tigernut milk. Rich in nutrients and naturally sweet.',
    price: 7.99,
    category: 'tigernut_milk',
    image: '/images/tigernut_1.jpg',
    inStock: true,
    weight: '1L',
    tags: ['organic', 'dairy-free', 'vegan'],
  },
  {
    id: '2',
    name: 'Premium Tigernut Flour',
    description: 'Fine-ground tigernut flour perfect for baking and cooking.',
    price: 12.99,
    category: 'tigernut_flour',
    image: '/images/tigernut_2.PNG',
    inStock: true,
    weight: '500g',
    tags: ['gluten-free', 'organic', 'baking'],
  },
  {
    id: '3',
    name: 'Raw Tigernuts',
    description: 'Premium quality raw tigernuts, perfect for snacking.',
    price: 9.99,
    category: 'raw_tigernuts',
    image: '/images/tigernut_3.JPG',
    inStock: true,
    weight: '250g',
    tags: ['raw', 'organic', 'snack'],
  },
  // Add more products as needed
];
