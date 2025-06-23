import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
    return (
        <section className="relative  min-h-screen">
            {/* Background Image */}
            {/* <div className="absolute inset-0 z-0 "> */}
                <Image
                    src="/images/hero.png"
                    alt="Background"
                    fill
                    className="object-cover w-full h-full "
                    priority

                />
            {/* </div> */}

             


        </section>
    )
}