import Image from 'next/image'

export function ImpactSection() {
    return (
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Impact</h2>
              <p className="text-lg mb-8">
                At Cyperus Enterprise, we're committed to making a difference. Through our sustainable practices and community partnerships, we're:
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Supporting local farmers and communities
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Implementing zero-waste production
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Creating employment opportunities
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Promoting healthy living through natural products
                </li>
              </ul>
            </div>
            <div className="relative h-96">
              <Image
                src="/images/impact.jpg"
                alt="Our Impact"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    )
  }