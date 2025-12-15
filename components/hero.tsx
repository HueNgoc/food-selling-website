import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Giao hàng nhanh trong 30 phút
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-foreground lg:text-6xl text-balance">
              Đặt món ngon mỗi ngày
            </h1>

            <p className="text-lg text-muted-foreground text-pretty max-w-xl">
              Khám phá hàng nghìn món ăn từ các nhà hàng uy tín. Giao hàng nhanh chóng, đảm bảo chất lượng và vệ sinh an
              toàn thực phẩm.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Tìm món ăn, nhà hàng..."
                  className="h-12 w-full rounded-lg border border-input bg-background pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <Button size="lg" className="h-12">
                Tìm kiếm
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="/delicious-vietnamese-pho-soup.jpg"
                  alt="Phở bò"
                  className="rounded-2xl object-cover w-full h-64 shadow-lg"
                />
                <img
                  src="/fresh-spring-rolls.jpg"
                  alt="Gỏi cuốn"
                  className="rounded-2xl object-cover w-full h-48 shadow-lg"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="/banh-mi-sandwich.jpg"
                  alt="Bánh mì"
                  className="rounded-2xl object-cover w-full h-48 shadow-lg"
                />
                <img
                  src="/vietnamese-coffee.jpg"
                  alt="Cà phê"
                  className="rounded-2xl object-cover w-full h-64 shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
