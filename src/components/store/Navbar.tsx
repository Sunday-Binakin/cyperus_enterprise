'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-sm fixed w-full z-50 top-0">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16 ">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/images/logo.jpg"
                            alt="logo"
                            width={100}
                            height={50}
                            className="object-cover h-[50px]"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-gray-600 hover:text-[#475A22]">
                            Home
                        </Link>
                        {/* <Link href="/store" className="text-[#475A22] font-medium">
                            Store
                        </Link> */}
                        <button className="relative">
                            <ShoppingCart className="w-6 h-6 text-[#475A22]" />
                            <span className="absolute -top-2 -right-2 bg-[#475A22] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                0
                            </span>
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-[#475A22]"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <Link
                                href="/"
                                className="block px-3 py-2 text-gray-600 hover:text-[#475A22]"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                href="/store"
                                className="block px-3 py-2 text-[#475A22] font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Store
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
} 