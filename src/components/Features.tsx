import Image from 'next/image';
import Link from 'next/link';

export default function Features() {
    const features = [
        {
            title: "We Bring the Best Food!",
            description: "Get it now →",
            image: "/images/lemon.png",
            link: "/shop",
        },
        {
            title: "Premium Quality, Always.",
            description: "Healthy Products",
            image: "/images/original.png",
            link: "/about",
        },
        {
            title: "Best Products for Your Health",
            description: "Explore Now",
            image: "/images/prostate.png",
            link: "/products",
        },
        {
            title: "Your Health Corner",
            description: "Discover More",
            image: "/images/choconut.png",
            link: "/health",
        },
    ];

    return (
        <section className="py-16 px-4 md:px-20 bg-gray-50">
            <div className="container mx-auto">
                <h2 className="text-4xl font-extrabold text-center text-[#774001] mb-12">
                    We Help To Keep You Healthy
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <Link href={feature.link} key={index}>
                            <div className="relative rounded-2xl overflow-hidden shadow-lg transition-shadow duration-300 group h-[400px]">
                                <div className="relative w-full h-full">
                                    <Image
                                        src={feature.image}
                                        alt={feature.title}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />

                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <h3 className="text-xl font-extrabold text-white mb-2">
                                            {feature.title}
                                        </h3>
                                        <p className="font-medium text-[#DFCFB2] group-hover:text-white transition-colors">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}