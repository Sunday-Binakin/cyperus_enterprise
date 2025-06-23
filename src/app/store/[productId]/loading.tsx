import { Truck, Shield, ArrowLeft, Star } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/store/Navbar';

export default function Loading() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navbar */}
            <Navbar />

            {/* Back to Store Link */}
            <div className="container mx-auto px-4 pt-24 pb-4">
                <Link
                    href="/store"
                    className="inline-flex items-center text-[#3C4C18] hover:text-[#3C4C18]/80 transition-colors"
                >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Back to Store
                </Link>
            </div>

            <main className="container mx-auto px-4 py-8">
                <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                        {/* Image Skeleton */}
                        <div className="space-y-4">
                            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-200 animate-pulse" />
                        </div>

                        {/* Content Skeleton */}
                        <div className="space-y-6">
                            <div className="w-32 h-8 bg-gray-200 animate-pulse rounded-full" />

                            <div>
                                <div className="h-10 bg-gray-200 animate-pulse rounded w-3/4 mb-4" />
                                <div className="flex items-center gap-2">
                                    <div className="flex items-center gap-1">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <div key={star} className="w-5 h-5 bg-gray-200 animate-pulse rounded" />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-baseline gap-4">
                                <div className="h-10 w-32 bg-gray-200 animate-pulse rounded" />
                                <div className="h-8 w-24 bg-gray-200 animate-pulse rounded" />
                            </div>

                            <div className="h-24 bg-gray-200 animate-pulse rounded" />

                            <div className="space-y-4 py-6 border-y border-gray-100">
                                <div className="h-6 w-32 bg-gray-200 animate-pulse rounded" />
                                <div className="flex flex-wrap gap-2">
                                    {[1, 2, 3].map((tag) => (
                                        <div key={tag} className="w-20 h-6 bg-gray-200 animate-pulse rounded-full" />
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="h-24 bg-gray-200 animate-pulse rounded-xl" />
                                <div className="h-24 bg-gray-200 animate-pulse rounded-xl" />
                            </div>

                            <div className="h-14 bg-gray-200 animate-pulse rounded-full" />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
} 