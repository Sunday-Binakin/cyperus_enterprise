import Hero from '@/components/Hero'
import Features from '@/components/Features'
// import ProductGrid from '@/components/ProductGrid'
import ProductCategories from '@/components/ProductCategories'
import TopProducts from '@/components/TopProducts'
import Newsletter from '@/components/Newsletter'
import Story from '@/components/Story'


export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <ProductCategories />
      <TopProducts />
      {/* <ProductGrid /> */}
      <Story />
      <Newsletter />
    </>
  )
}