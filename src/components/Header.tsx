import Link from 'next/link'
import Image from 'next/image'
import { ShoppingBag } from 'lucide-react';

export default function Header() {
    return (
        <header className="absolute w-full z-50">
            <nav className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center space-x-2">
                        {/* <Image
                            src="/images/hero.png"
                            alt="Cyperus Logo"
                            width={40}
                            height={40}
                            className="rounded-full"
                        />
                        <span className="text-2xl font-bold text-amber-900">Cyperus</span> */}
                    </Link>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/shop" className="text-[#774001]  font-black hover:text-[#DFCFB2]">Shop</Link>
                        <Link href="/about" className="text-[#774001]  font-black  hover:text-[#DFCFB2]">About</Link>
                        <Link href="/journal" className="text-[#774001]  font-black  hover:text-[#DFCFB2]">Journal</Link>
                        <Link href="/contact" className="text-[#774001]  font-black  hover:text-[#DFCFB2]">Contact</Link>
                    </div>

                    <div className="flex items-center space-x-4">
                        <button className="p-2">
                            <span className="relative">
                            <ShoppingBag />
                                <span className="absolute -top-2 -right-2 bg-[#3C4B1E] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                    0
                                </span>
                            </span>
                        </button>
                        <Link
                            href="/login"
                            className="px-4 py-2 text-[#774001] border border-[#DFCFB2] rounded-full hover:bg-[#DFCFB2] font-bold font-italic"
                        >
                            Log in
                        </Link>
                        <Link
                            href="/store"
                            className="px-4 py-2 bg-[#3C4B1E] text-white rounded-full hover:bg-amber-700"
                        >
                            Shop now →
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
} 