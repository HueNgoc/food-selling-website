import { Utensils, Coffee, Pizza, IceCream } from "lucide-react"

const categories = [
  {
    name: "Món chính",
    icon: Utensils,
    count: "150+ món",
    color: "bg-orange-100 text-orange-600 dark:bg-orange-950 dark:text-orange-400",
  },
  {
    name: "Đồ uống",
    icon: Coffee,
    count: "80+ món",
    color: "bg-amber-100 text-amber-600 dark:bg-amber-950 dark:text-amber-400",
  },
  {
    name: "Pizza",
    icon: Pizza,
    count: "45+ món",
    color: "bg-red-100 text-red-600 dark:bg-red-950 dark:text-red-400",
  },
  {
    name: "Tráng miệng",
    icon: IceCream,
    count: "60+ món",
    color: "bg-pink-100 text-pink-600 dark:bg-pink-950 dark:text-pink-400",
  },
]

export function FoodCategories() {
  return (
    <section className="py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground lg:text-4xl">Danh mục món ăn</h2>
          <p className="mt-3 text-muted-foreground text-lg">Khám phá các món ăn yêu thích của bạn</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <button
                key={category.name}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 text-left transition-all hover:shadow-lg hover:scale-105"
              >
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${category.color} mb-4`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-1">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.count}</p>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
