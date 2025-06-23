import { products } from '@/data/products';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Star, Truck, Shield, ArrowLeft, Package, Leaf, Check, Heart } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/store/Navbar';

interface ProductPageProps {
    params: {
        productId: string;
    };
}

export default function ProductPage({ params }: ProductPageProps) {
    const product = products.find((p) => p.id === params.productId);
    const relatedProducts = products
        .filter((p) => p.category === product?.category && p.id !== product?.id)
        .slice(0, 4);

    if (!product) {
        notFound();
    }

    const benefits = [
        {
            icon: <Truck className="w-6 h-6" />,
            title: "Free Delivery",
            description: "For orders over GH₵100"
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Quality Guarantee",
            description: "100% Original Products"
        },
        {
            icon: <Package className="w-6 h-6" />,
            title: "Secure Packaging",
            description: "Safe & Sealed"
        },
        {
            icon: <Leaf className="w-6 h-6" />,
            title: "Natural Products",
            description: "100% Organic"
        }
    ];

    return (
        <div className="min-h-screen bg-[#F8F9FA]">
            <Navbar />

            {/* Breadcrumb */}
            <div className="container mx-auto px-4 pt-24 pb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Link href="/store" className="hover:text-[#3C4C18]">Store</Link>
                    <span>/</span>
                    <span className="text-[#3C4C18]">{product.name}</span>
                </div>
            </div>

            <main className="container mx-auto px-4 py-8">
                {/* Product Details Card */}
                <div className="bg-white rounded-3xl shadow-sm overflow-hidden mb-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-8">
                        {/* Left Column - Images */}
                        <div className="space-y-6">
                            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-50">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                />
                                <button className="absolute top-4 right-4 p-3 bg-white/90 rounded-full hover:bg-white transition-colors">
                                    <Heart className="w-5 h-5 text-[#3C4C18]" />
                                </button>
                            </div>
                        </div>

                        {/* Right Column - Product Info */}
                        <div className="space-y-6">
                            {/* Category & Status */}
                            <div className="flex items-center justify-between">
                                <span className="px-4 py-2 bg-[#3C4C18]/10 text-[#3C4C18] rounded-full text-sm font-medium">
                                    {product.category.split('_').map(word =>
                                        word.charAt(0).toUpperCase() + word.slice(1)
                                    ).join(' ')}
                                </span>
                                {product.inStock ? (
                                    <span className="flex items-center gap-1.5 text-green-600">
                                        <Check className="w-4 h-4" />
                                        In Stock
                                    </span>
                                ) : (
                                    <span className="text-red-500">Out of Stock</span>
                                )}
                            </div>

                            {/* Title */}
                            <div>
                                <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-1">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star
                                                key={star}
                                                className="w-5 h-5 fill-yellow-400 text-yellow-400"
                                            />
                                        ))}
                                    </div>
                                    <span className="text-gray-500">(4.8) · 120 Reviews</span>
                                </div>
                            </div>

                            {/* Price */}
                            <div className="flex items-baseline gap-4 py-4 border-b border-gray-100">
                                <span className="text-4xl font-bold text-[#3C4C18]">
                                    GH₵ {product.price.toFixed(2)}
                                </span>
                                <span className="text-lg text-gray-500 line-through">
                                    GH₵ {(product.price * 1.2).toFixed(2)}
                                </span>
                                <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium">
                                    Save {((0.2 * 100).toFixed(0))}%
                                </span>
                            </div>

                            {/* Description */}
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Description</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {product.description}
                                </p>
                            </div>

                            {/* Product Metadata */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-8">
                                    <div>
                                        <span className="text-gray-600 block text-sm">Weight</span>
                                        <span className="font-medium">{product.weight}</span>
                                    </div>
                                    <div>
                                        <span className="text-gray-600 block text-sm">Category</span>
                                        <span className="font-medium">
                                            {product.category.split('_').map(word =>
                                                word.charAt(0).toUpperCase() + word.slice(1)
                                            ).join(' ')}
                                        </span>
                                    </div>
                                </div>

                                {/* Tags */}
                                <div>
                                    <span className="text-gray-600 block text-sm mb-2">Product Tags</span>
                                    <div className="flex flex-wrap gap-2">
                                        {product.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Add to Cart Section */}
                            <div className="space-y-4 pt-6">
                                <div className="flex gap-4">
                                    <div className="flex items-center border rounded-full">
                                        <button className="px-4 py-2 text-gray-600 hover:text-[#3C4C18]">-</button>
                                        <span className="px-4 font-medium">1</span>
                                        <button className="px-4 py-2 text-gray-600 hover:text-[#3C4C18]">+</button>
                                    </div>
                                    <button
                                        className={`flex-1 py-3 px-6 rounded-full text-lg font-medium transition-all duration-300 ${product.inStock
                                            ? 'bg-[#3C4C18] text-white hover:bg-[#3C4C18]/90 transform hover:-translate-y-1'
                                            : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                                            }`}
                                        disabled={!product.inStock}
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Benefits Section */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-gray-50">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <div className="p-3 bg-white rounded-full text-[#3C4C18]">
                                    {benefit.icon}
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-900">{benefit.title}</h3>
                                    <p className="text-sm text-gray-500">{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <div className="space-y-8">
                        <h2 className="text-2xl font-bold text-gray-900">Related Products</h2>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            {relatedProducts.map((relatedProduct) => (
                                <Link
                                    key={relatedProduct.id}
                                    href={`/store/${relatedProduct.id}`}
                                    className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <div className="relative aspect-square">
                                        <Image
                                            src={relatedProduct.image}
                                            alt={relatedProduct.name}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                            sizes="(max-width: 768px) 100vw, 25vw"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-medium text-gray-900 group-hover:text-[#3C4C18] transition-colors">
                                            {relatedProduct.name}
                                        </h3>
                                        <p className="text-[#3C4C18] font-medium mt-2">
                                            GH₵ {relatedProduct.price.toFixed(2)}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
} 