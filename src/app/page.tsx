import { HeroSection } from '../app/components/HeroSection'
import { ProductCategories } from '../app/components/ProductCategories'
import { USPSection } from '../app/components/USPSection'
import { FeaturedProducts } from '../app/components/FeaturedProducts'
import { ImpactSection } from '../app/components/ImpactSection'
import { NewsletterSection } from '../app/components/NewsletterSection'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <>
      <Navbar/>
      <main className="flex min-h-screen flex-col">
        <HeroSection />
        <ProductCategories />
        <USPSection />
        <FeaturedProducts />
        <ImpactSection />
        <NewsletterSection />
      </main>
    </>
  )
}