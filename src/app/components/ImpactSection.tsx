import Image from 'next/image'

export function ImpactSection() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Impact
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Sustainable Farming</h3>
            <p className="text-gray-600">
              Supporting local farmers with sustainable agricultural practices and fair trade principles.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Community Development</h3>
            <p className="text-gray-600">
              Creating economic opportunities and improving livelihoods in rural communities.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Environmental Care</h3>
            <p className="text-gray-600">
              Minimizing our environmental footprint through eco-friendly production methods.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}