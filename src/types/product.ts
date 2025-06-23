export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  image: string;
  inStock: boolean;
  weight: string;
  tags: string[];
}

export type ProductCategory =
  | 'tigernut_milk'
  | 'tigernut_flour'
  | 'raw_tigernuts'
  | 'tigernut_oil'
  | 'tigernut_snacks';

export interface FilterOptions {
  category: ProductCategory | 'all';
  inStock: boolean | 'all';
  priceRange: {
    min: number;
    max: number;
  } | null;
  searchQuery: string;
}
