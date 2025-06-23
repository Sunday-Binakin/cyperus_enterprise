import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-[#3C4F12] text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Cyperus Enterprise</h3>
                        <p className="text-green-200">
                            Premium quality tigernuts for your healthy lifestyle
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="/products" className="text-green-200 hover:text-white">Products</Link></li>
                            <li><Link href="/about" className="text-green-200 hover:text-white">About Us</Link></li>
                            <li><Link href="/contact" className="text-green-200 hover:text-white">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact</h4>
                        <ul className="space-y-2 text-green-200">
                            <li>Email: info@cyperus.com</li>
                            <li>Phone: (123) 456-7890</li>
                            <li>Address: 123 Tigernut Street</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
                        <form className="space-y-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 rounded-lg text-gray-900"
                            />
                            <button className="bg-green-700 text-white px-6 py-2 rounded-lg 
                hover:bg-green-800 transition w-full">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    )
} 