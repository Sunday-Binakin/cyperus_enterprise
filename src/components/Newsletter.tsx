'use client'

import { Mail } from 'lucide-react'

export default function Newsletter() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission
    }

    return (
        <section className="bg-[#475A22] rounded-2xl py-16 px-8 my-16 mx-4">
            <div className="container mx-auto max-w-2xl text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-2">
                    Get Health Updates in Your Inbox!
                    <Mail className="w-8 h-8 text-white" />
                </h2>

                <p className="text-white mb-8">
                    Join our community for exclusive offers, product launches, and health tips
                    — no spam, just the good stuff.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 px-6 py-3 rounded-full border-2 border-white/20 focus:border-white focus:outline-none bg-transparent text-white placeholder:text-white/70"
                    />
                    <button
                        type="submit"
                        className="bg-white text-[#475A22] px-8 py-3 rounded-full hover:bg-white/90 transition"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    )
}