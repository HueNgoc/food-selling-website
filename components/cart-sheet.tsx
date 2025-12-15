"use client"

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { ShoppingBag } from "lucide-react"

interface CartSheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CartSheet({ open, onOpenChange }: CartSheetProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="text-2xl">Giỏ hàng</SheetTitle>
          <SheetDescription>Xem lại đơn hàng của bạn trước khi thanh toán</SheetDescription>
        </SheetHeader>

        <div className="mt-8 flex flex-col h-[calc(100vh-12rem)]">
          <div className="flex-1 overflow-y-auto">
            <div className="flex flex-col items-center justify-center h-full text-center px-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted mb-4">
                <ShoppingBag className="h-10 w-10 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Giỏ hàng trống</h3>
              <p className="text-sm text-muted-foreground mb-6">Hãy thêm món ăn yêu thích vào giỏ hàng</p>
              <Button onClick={() => onOpenChange(false)}>Xem thực đơn</Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
