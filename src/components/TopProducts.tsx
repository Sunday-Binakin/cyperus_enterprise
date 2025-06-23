import Image from 'next/image';
import { Star } from 'lucide-react';

export default function TopProducts() {
    const products = [
        {
            name: "Original Tigernut Drink",
            rating: 4.9,
            price: 26,
            oldPrice: 35,
            image: "/images/tigernut_1.jpg",
        },
        {
            name: "Lemon Tigernut Blend",
            rating: 4.9,
            price: 26,
            oldPrice: 35,
            image: "/images/tigernut_2.png",
        },
        {
            name: "Premium Choconut Mix",
            rating: 4.9,
            price: 26,
            oldPrice: 35,
            image: "/images/tigernut_3.jpg",
        },
        {
            name: "Citrus Limon & Clove Variant",
            rating: 4.9,
            price: 26,
            oldPrice: 35,
            image: "/images/tigernut_4.jpg",
        },
        {
            name: "Wellness Package",
            rating: 4.9,
            price: 26,
            oldPrice: 35,
            image: "/images/tigernut_5.jpg",
        },
        {
            name: "Energy Boost Mix",
            rating: 4.9,
            price: 26,
            oldPrice: 35,
            image: "/images/tigernut_6.jpg",
        },
    ].slice(0, 6);

    return (
        <section className="py-16 px-4 bg-gray-100">
            <div className="container mx-auto">
                <div className="flex justify-between items-center mb-10">
                    <h2 className="text-4xl font-extrabold text-[#774001]">Top Picks for Health</h2>
                    <div className="flex gap-4">
                        <button className="px-6 py-2 border border-[#DFCFB2] rounded-full bg-white shadow-md hover:shadow-lg transition">
                            Filter
                        </button>
                        <button className="px-6 py-2 border border-[#DFCFB2] rounded-full bg-white shadow-md hover:shadow-lg transition">
                            Sort
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {products.map((product, index) => (
                        <div key={index} className="bg-white rounded-2xl p-6 shadow-lg transition-transform transform hover:scale-105">
                            <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover transition-transform duration-300 ease-in-out"
                                />
                            </div>
                            <h3 className="font-semibold text-xl text-[#774001] mb-2">{product.name}</h3>
                            <div className="flex items-center mb-2">
                                <Star className="w-5 h-5 fill-[#FFD700]" />
                                <span className="text-lg text-[#3C4B1E] ml-1">{product.rating}</span>
                            </div>
                            <div className="flex items-center justify-between mb-4">
                                <span className="font-bold text-2xl text-[#774001]">GH₵{product.price}</span>
                                <span className="text-sm text-gray-400 line-through">GH₵{product.oldPrice}</span>
                            </div>
                            <button className="w-full py-2 bg-[#3C4B1E] text-white rounded-full hover:bg-[#774001] transition-colors">
                                Add to cart
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}