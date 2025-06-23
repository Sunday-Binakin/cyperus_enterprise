import Image from 'next/image';
import Link from 'next/link';

export default function ProductCategories() {
    const categories = [
        {
            name: "Original",
            icon: "/images/lemon.png",
            link: "/category/original",
        },
        {
            name: "Lemon Variant",
            icon: "/images/lemon.png",
            link: "/category/lemon",
        },
        {
            name: "Choconut",
            icon: "/images/choconut.png",
            link: "/category/choconut",
        },
        {
            name: "Citrus Limon & Clove Variant",
            icon: "/images/prostate.png",
            link: "/category/prostate",
        },
        {
            name: "Lemon Grass Variant",
            icon: "/images/lemon.png",
            link: "/category/powder",
        },
        {
            name: "Kola Variant",
            icon: "/images/kola.png",
            link: "/category/milk",
        },
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-extrabold text-center text-[#774001] mb-12">
                    Product Categories
                </h2>

                <div className="flex flex-wrap justify-center gap-10 md:gap-12">
                    {categories.map((category, index) => (
                        <Link
                            href={category.link}
                            key={index}
                            className="flex flex-col items-center group transition-transform transform hover:scale-105"
                        >
                            <div className="w-28 h-28 relative mb-4 border-2 border-[#DFCFB2] rounded-full flex items-center justify-center bg-white shadow-md transition-shadow duration-300 group-hover:shadow-lg">
                                <Image
                                    src={category.icon}
                                    alt={category.name}
                                    fill
                                    className="object-contain p-3 transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>
                            <span className="text-lg font-semibold text-[#774001] group-hover:text-[#3C4B1E]">
                                {category.name}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}