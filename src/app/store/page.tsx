'use client';

import { useState, useMemo, useEffect } from 'react';
import { products } from '@/data/products';
import { FilterOptions, ProductCategory } from '@/types/product';
import Image from 'next/image';
import { Search, Filter, Star, ShoppingCart, Heart, X } from 'lucide-react';
import Navbar from '@/components/store/Navbar';
import Cart from '@/components/store/Cart';
import ProductCard from '@/components/store/ProductCard';

export default function StorePage() {
    const [filters, setFilters] = useState<FilterOptions>({
        category: 'all',
        inStock: 'all',
        priceRange: null,
        searchQuery: '',
    });
    const [showFilters, setShowFilters] = useState(false);
    const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
        }, 20000); // 20 seconds

        return () => clearInterval(interval);
    }, []);

    const filteredProducts = useMemo(() => {
        return products.filter(product => {
            if (filters.category !== 'all' && product.category !== filters.category) return false;
            if (filters.inStock !== 'all' && product.inStock !== filters.inStock) return false;
            if (filters.searchQuery) {
                const searchLower = filters.searchQuery.toLowerCase();
                return (
                    product.name.toLowerCase().includes(searchLower) ||
                    product.description.toLowerCase().includes(searchLower) ||
                    product.tags.some(tag => tag.toLowerCase().includes(searchLower))
                );
            }
            return true;
        });
    }, [filters]);

    return (
        <div className="min-h-screen bg-[#F9F9F9]">
            <Navbar />
            <Cart />

            {/* Hero Section */}
            <div className="relative text-white py-20 mt-16">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="relative w-full h-full">
                        <Image
                            src="/images/slider1.jpg"
                            alt="Store Hero Background"
                            fill
                            className={`object-cover transition-opacity duration-1000 ${currentSlide === 0 ? 'opacity-100' : 'opacity-0'
                                }`}
                            priority
                        />
                        <Image
                            src="/images/slider2.png"
                            alt="Store Hero Background 2"
                            fill
                            className={`object-cover transition-opacity duration-1000 ${currentSlide === 1 ? 'opacity-100' : 'opacity-0'
                                }`}
                            priority
                        />
                    </div>
                </div>
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto">
                        Discover our premium selection of tigernut products, crafted with care and quality.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <main className="container mx-auto px-4 -mt-10 pb-16">
                {/* Search and Filter Bar */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                        {/* Search */}
                        <div className="flex-1">
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Search for products..."
                                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-gray-50 border-none focus:outline-none focus:ring-2 focus:ring-[#475A22]/20 transition-all"
                                    value={filters.searchQuery}
                                    onChange={(e) => setFilters({ ...filters, searchQuery: e.target.value })}
                                />
                            </div>
                        </div>

                        {/* Filter Toggle */}
                        <div className="mt-4 md:mt-0">
                            <button
                                onClick={() => setShowFilters(!showFilters)}
                                className={`flex items-center justify-center gap-2 px-6 py-4 rounded-xl transition-all duration-300 ${showFilters
                                    ? 'bg-[#475A22] text-white'
                                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                                    }`}
                            >
                                <Filter className="w-5 h-5 " />
                                <span className="font-medium">Filters</span>
                                <span className="bg-white/20 px-2 py-1 rounded-lg text-sm ml-2">
                                    {Object.values(filters).filter(value => value !== 'all' && value !== '').length}
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Filter Options */}
                    {showFilters && (
                        <div className="mt-8 pt-8 border-t border-gray-100">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {/* Category Filter */}
                                <div className="space-y-4">
                                    <label className="block text-sm font-semibold text-gray-800">Category</label>
                                    <div className="space-y-2">
                                        {(['all', 'tigernut_milk', 'tigernut_flour', 'raw_tigernuts', 'tigernut_oil', 'tigernut_snacks'] as const).map((category) => (
                                            <button
                                                key={category}
                                                onClick={() => setFilters({ ...filters, category: category as ProductCategory | 'all' })}
                                                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 ${filters.category === category
                                                    ? 'bg-[#475A22] text-white'
                                                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                                                    }`}
                                            >
                                                <span className="capitalize">
                                                    {category === 'all' ? 'All Categories' : category.split('_').join(' ')}
                                                </span>
                                                {filters.category === category && (
                                                    <div className="w-2 h-2 rounded-full bg-white" />
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Availability Filter */}
                                <div className="space-y-4">
                                    <label className="block text-sm font-semibold text-gray-800">Availability</label>
                                    <div className="space-y-2">
                                        {[
                                            { value: 'all', label: 'All' },
                                            { value: 'true', label: 'In Stock' },
                                            { value: 'false', label: 'Out of Stock' }
                                        ].map((option) => (
                                            <button
                                                key={option.value}
                                                onClick={() => setFilters({ ...filters, inStock: option.value as any })}
                                                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 ${filters.inStock.toString() === option.value
                                                    ? 'bg-[#475A22] text-white'
                                                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                                                    }`}
                                            >
                                                {option.label}
                                                {filters.inStock.toString() === option.value && (
                                                    <div className="w-2 h-2 rounded-full bg-white" />
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Price Range Filter */}
                                <div className="space-y-4">
                                    <label className="block text-sm font-semibold text-gray-800">Price Range</label>
                                    <div className="space-y-4">
                                        <div className="flex gap-4">
                                            <div className="flex-1">
                                                <input
                                                    type="number"
                                                    placeholder="Min"
                                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border-none focus:outline-none focus:ring-2 focus:ring-[#475A22]/20"
                                                    value={filters.priceRange?.min || ''}
                                                    onChange={(e) => setFilters({
                                                         
                                                        ...filters,
                                                        priceRange: {
                                                            min: Number(e.target.value) || 0,
                                                            max: filters.priceRange?.max || 0
                                                        }
                                                    })}
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <input
                                                    type="number"
                                                    placeholder="Max"
                                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border-none focus:outline-none focus:ring-2 focus:ring-[#475A22]/20"
                                                    value={filters.priceRange?.max || ''}
                                                    onChange={(e) => setFilters({
                                                        ...filters,
                                                        priceRange: {
                                                            min: filters.priceRange?.min || 0,
                                                            max: Number(e.target.value) || 0
                                                        }
                                                    })}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Active Filters & Reset */}
                                <div className="space-y-4">
                                    <label className="block text-sm font-semibold text-gray-800">Active Filters</label>
                                    <div className="space-y-2">
                                        {Object.entries(filters).map(([key, value]) => {
                                            if (value === 'all' || value === '' || !value) return null;
                                            return (
                                                <div key={key} className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-xl">
                                                    <span className="text-sm text-gray-600 capitalize">
                                                        {key === 'priceRange'
                                                            ? `$${value.min} - $${value.max}`
                                                            : value.toString().split('_').join(' ')}
                                                    </span>
                                                    <button
                                                        onClick={() => {
                                                            if (key === 'priceRange') {
                                                                setFilters({ ...filters, [key]: null });
                                                            } else {
                                                                setFilters({ ...filters, [key]: 'all' });
                                                            }
                                                        }}
                                                        className="ml-auto text-gray-400 hover:text-red-500"
                                                    >
                                                        <X className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            );
                                        })}
                                        <button
                                            onClick={() => setFilters({
                                                category: 'all',
                                                inStock: 'all',
                                                priceRange: null,
                                                searchQuery: '',
                                            })}
                                            className="w-full px-4 py-3 rounded-xl bg-gray-50 text-gray-700 hover:bg-gray-100 transition-colors"
                                        >
                                            Reset All Filters
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-16">
                        <div className="bg-white rounded-2xl p-8 max-w-md mx-auto">
                            <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">No Products Found</h3>
                            <p className="text-gray-500">
                                Try adjusting your search or filter criteria to find what you're looking for.
                            </p>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
} 