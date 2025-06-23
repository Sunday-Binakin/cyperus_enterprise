import Image from 'next/image'
import Link from 'next/link'

export default function Story() {
    return (
        <section className="bg-[#475A22] rounded-2xl overflow-hidden my-16 mx-4">
            <div className="container mx-auto grid md:grid-cols-2 gap-8">
                {/* Left Content */}
                <div className="p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-white">Our Story</span>
                    </div>

                    <h2 className="text-4xl font-bold text-white mb-4">
                        More Than Just Tigernut Products<br />
                        It&apos;s a Promise to Your Health.
                    </h2>

                    <p className="text-white mb-8">
                        We&apos;re not just selling products — we&apos;re nourishing lives. Every
                        recipe is crafted with natural ingredients, guided by health experts,
                        and loved by thousands of satisfied customers. Discover why health-conscious
                        people choose us.
                    </p>

                    <Link
                        href="/about"
                        className="bg-white text-[#475A22] px-6 py-3 rounded-full inline-flex items-center hover:bg-opacity-90 transition w-fit"
                    >
                        Learn Our Story →
                    </Link>
                </div>

                {/* Right Image */}
                <div className="relative h-full min-h-[400px]">
                    <Image
                        src="/images/couple.jpg"
                        alt="Our Story"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
            </div>
        </section>
    )
} 