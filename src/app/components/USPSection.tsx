export function USPSection() {
    const usps = [
      {
        title: "First Gender-Specific Variants",
        description: "Specialized formulations targeting specific health needs",
        icon: "🎯"
      },
      {
        title: "Farm-to-Bottle Sourcing",
        description: "Direct partnerships with local farmers ensuring quality",
        icon: "🌾"
      },
      {
        title: "Zero-Waste Production",
        description: "Sustainable processing with by-products used for poultry feed",
        icon: "♻️"
      },
      {
        title: "Cultural Innovation",
        description: "Modern twist on traditional superfood",
        icon: "🌟"
      }
    ]
  
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Cyperus</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {usps.map((usp) => (
              <div key={usp.title} className="text-center">
                <div className="text-4xl mb-4">{usp.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{usp.title}</h3>
                <p className="text-gray-600">{usp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }