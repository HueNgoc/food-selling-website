import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { FoodCategories } from "@/components/food-categories"
import { PopularDishes } from "@/components/popular-dishes"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <FoodCategories />
      <PopularDishes />
      <Footer />
    </main>
  )
}
