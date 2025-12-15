"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Star } from "lucide-react"
import { useState } from "react"

interface Dish {
  id: number
  name: string
  description: string
  price: number
  image: string
  rating: number
  reviews: number
}

const dishes: Dish[] = [
  {
    id: 1,
    name: "Phở bò đặc biệt",
    description: "Phở bò truyền thống với nước dùng đậm đà, thịt bò tươi ngon",
    price: 65000,
    image: "/vietnamese-pho-beef-soup.jpg",
    rating: 4.8,
    reviews: 234,
  },
  {
    id: 2,
    name: "Bánh mì thịt nướng",
    description: "Bánh mì giòn tan với thịt nướng thơm lừng, rau sống tươi mát",
    price: 35000,
    image: "/vietnamese-banh-mi-sandwich.jpg",
    rating: 4.9,
    reviews: 567,
  },
  {
    id: 3,
    name: "Bún chả Hà Nội",
    description: "Bún chả truyền thống với chả nướng thơm phức, nước mắm chua ngọt",
    price: 55000,
    image: "/vietnamese-bun-cha-grilled-pork.jpg",
    rating: 4.7,
    reviews: 189,
  },
  {
    id: 4,
    name: "Cơm tấm sườn bì",
    description: "Cơm tấm dẻo thơm kèm sườn nướng, bì và chả trứng",
    price: 45000,
    image: "/vietnamese-broken-rice-com-tam.jpg",
    rating: 4.6,
    reviews: 312,
  },
  {
    id: 5,
    name: "Gỏi cuốn tôm thịt",
    description: "Gỏi cuốn tươi mát với tôm, thịt heo và rau thơm",
    price: 40000,
    image: "/vietnamese-fresh-spring-rolls.jpg",
    rating: 4.8,
    reviews: 445,
  },
  {
    id: 6,
    name: "Cà phê sữa đá",
    description: "Cà phê phin truyền thống đậm đà, ngọt dịu",
    price: 25000,
    image: "/vietnamese-iced-coffee.jpg",
    rating: 4.9,
    reviews: 678,
  },
]

export function PopularDishes() {
  const [cart, setCart] = useState<{ [key: number]: number }>({})

  const addToCart = (dishId: number) => {
    setCart((prev) => ({
      ...prev,
      [dishId]: (prev[dishId] || 0) + 1,
    }))
  }

  return (
    <section id="menu" className="py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground lg:text-4xl">Món ăn phổ biến</h2>
          <p className="mt-3 text-muted-foreground text-lg">Những món ăn được yêu thích nhất</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dishes.map((dish) => (
            <Card key={dish.id} className="overflow-hidden border-border hover:shadow-lg transition-all">
              <div className="relative overflow-hidden">
                <img
                  src={dish.image || "/placeholder.svg"}
                  alt={dish.name}
                  className="h-48 w-full object-cover transition-transform hover:scale-105"
                />
                <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-background/90 px-2.5 py-1">
                  <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                  <span className="text-sm font-medium text-foreground">{dish.rating}</span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-card-foreground mb-2 text-balance">{dish.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{dish.description}</p>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-primary">{dish.price.toLocaleString("vi-VN")}đ</p>
                    <p className="text-xs text-muted-foreground">{dish.reviews} đánh giá</p>
                  </div>

                  <Button onClick={() => addToCart(dish.id)} size="icon" className="h-11 w-11 rounded-full">
                    <Plus className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
