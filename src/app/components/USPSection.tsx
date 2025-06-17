'use client'

import { motion } from 'framer-motion'

export function USPSection() {
  const usps = [
    {
      title: "First Gender-Specific Variants",
      description: "Specialized formulations targeting specific health needs for both men and women, backed by scientific research.",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Farm-to-Bottle Sourcing",
      description: "Direct partnerships with local farmers ensuring premium quality and fair trade practices throughout our supply chain.",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
        </svg>
      )
    },
    {
      title: "Zero-Waste Production",
      description: "Sustainable processing methods where every part of the tigernut is utilized, with by-products converted into nutritious poultry feed.",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    },
    {
      title: "Cultural Innovation",
      description: "Blending traditional African superfood knowledge with modern nutrition science to create innovative health products.",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose Cyperus</h2>
          <p className="text-gray-600 text-lg">Discover what makes our tigernut products unique and beneficial for your health</p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {usps.map((usp, index) => (
            <motion.div 
              key={usp.title} 
              className="relative group"
              variants={itemVariants}
            >
              <div className="absolute inset-0 bg-primary-900/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"/>
              <div className="relative p-8">
                <div className="text-primary-900 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {usp.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{usp.title}</h3>
                <p className="text-gray-600 leading-relaxed">{usp.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}