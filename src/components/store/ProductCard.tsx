'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, ShoppingCart, Star, Plus, Eye } from 'lucide-react';
import { Product } from '@/types/product';

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [isLiked, setIsLiked] = useState(false);

    const formatPrice = (price: number) => {
        return `GH₵‎ ${price.toFixed(2)}`;
    };

    return (
        <div
            className="group relative bg-white rounded-[2rem] overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Product Image Container */}
            <div className="relative h-[380px] overflow-hidden bg-gray-50">
                <Link href={`/store/${product.id}`} className="block h-full">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>

                {/* Quick Actions */}
                <div className={`absolute top-4 right-4 flex flex-col gap-2 transition-all duration-300 ${isHovered ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                    }`}>
                    <button
                        onClick={() => setIsLiked(!isLiked)}
                        className={`p-3 rounded-full backdrop-blur-sm transition-all duration-300 ${isLiked ? 'bg-red-500 text-white' : 'bg-white/80 hover:bg-white text-gray-700'
                            }`}
                    >
                        <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                    </button>
                    <Link
                        href={`/store/${product.id}`}
                        className="p-3 rounded-full bg-white/80 hover:bg-white text-gray-700 backdrop-blur-sm transition-all duration-300 block"
                    >
                        <Eye className="w-5 h-5" />
                    </Link>
                </div>

                {/* Category Tag */}
                <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm text-sm font-medium text-[#475A22]">
                        {product.category.split('_').map(word =>
                            word.charAt(0).toUpperCase() + word.slice(1)
                        ).join(' ')}
                    </span>
                </div>

                {/* Stock Status */}
                {!product.inStock && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                        <span className="px-6 py-3 bg-red-500 text-white rounded-full font-medium">
                            Out of Stock
                        </span>
                    </div>
                )}
            </div>

            {/* Product Info */}
            <div className="p-6">
                <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                        <Link href={`/store/${product.id}`} className="block">
                            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[#475A22] transition-colors">
                                {product.name}
                            </h3>
                        </Link>
                        <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium text-gray-600">4.8</span>
                        </div>
                    </div>
                    <p className="text-sm text-gray-500">{product.weight}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {product.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 bg-gray-50 text-gray-600 text-xs font-medium rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-6 line-clamp-2">
                    {product.description}
                </p>

                {/* Price and Add to Cart */}
                <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-[#475A22]">
                            {formatPrice(product.price)}
                        </span>
                        <span className="text-sm text-gray-500 line-through">
                            {formatPrice(product.price * 1.2)}
                        </span>
                    </div>

                    <button
                        disabled={!product.inStock}
                        className={`
                            flex items-center gap-2 px-6 py-3 rounded-full font-medium
                            transform transition-all duration-300
                            ${product.inStock
                                ? 'bg-[#475A22] text-white hover:bg-[#475A22]/90 hover:-translate-y-1'
                                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            }
                        `}
                    >
                        <Plus className="w-5 h-5" />
                        <span>Add</span>
                    </button>
                </div>
            </div>
        </div>
    );
} 