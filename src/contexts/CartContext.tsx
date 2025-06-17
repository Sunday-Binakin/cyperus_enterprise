'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { Cart, CartContextType, CartItem } from '@/types/cart'
import { Product } from '@/types/product'

const initialCart: Cart = {
  items: [],
  totalItems: 0,
  subtotal: 0,
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Cart>(initialCart)

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (product: Product, quantity: number) => {
    setCart(prevCart => {
      const existingItem = prevCart.items.find(item => item.product.id === product.id)
      
      let newItems: CartItem[]
      if (existingItem) {
        newItems = prevCart.items.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      } else {
        newItems = [...prevCart.items, { product, quantity }]
      }

      const totalItems = newItems.reduce((sum, item) => sum + item.quantity, 0)
      const subtotal = newItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)

      return {
        items: newItems,
        totalItems,
        subtotal
      }
    })
  }

  const removeFromCart = (productId: string) => {
    setCart(prevCart => {
      const newItems = prevCart.items.filter(item => item.product.id !== productId)
      const totalItems = newItems.reduce((sum, item) => sum + item.quantity, 0)
      const subtotal = newItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)

      return {
        items: newItems,
        totalItems,
        subtotal
      }
    })
  }

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(productId)
      return
    }

    setCart(prevCart => {
      const newItems = prevCart.items.map(item =>
        item.product.id === productId
          ? { ...item, quantity }
          : item
      )
      const totalItems = newItems.reduce((sum, item) => sum + item.quantity, 0)
      const subtotal = newItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)

      return {
        items: newItems,
        totalItems,
        subtotal
      }
    })
  }

  const clearCart = () => {
    setCart(initialCart)
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
