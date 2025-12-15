"use client"

import { ShoppingCart, Menu, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { CartSheet } from "@/components/cart-sheet"

export function Header() {
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
                  <span className="text-xl font-bold text-primary-foreground">F</span>
                </div>
                <span className="text-xl font-bold text-foreground">FoodHub</span>
              </div>

              <nav className="hidden md:flex items-center gap-6">
                <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                  Trang chủ
                </a>
                <a
                  href="#menu"
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  Thực đơn
                </a>
                <a
                  href="#about"
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  Giới thiệu
                </a>
                <a
                  href="#contact"
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  Liên hệ
                </a>
              </nav>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <Search className="h-5 w-5" />
              </Button>

              <Button variant="ghost" size="icon" onClick={() => setCartOpen(true)} className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
                  0
                </span>
              </Button>

              <Button className="hidden md:flex">Đăng nhập</Button>

              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <CartSheet open={cartOpen} onOpenChange={setCartOpen} />
    </>
  )
}
