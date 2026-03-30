import { useState, useCallback } from 'react'
import { mockTickets, Ticket } from '../mocks/registrationData'

export const useRegistrations = () => {
  const [tickets, setTickets] = useState<Ticket[]>(mockTickets)
  const [cart, setCart] = useState<Ticket[]>([])

  const addToCart = useCallback((ticketId: string) => {
    const ticket = tickets.find((t) => t.id === ticketId)
    if (ticket) {
      setCart((prev) => [...prev, { ...ticket, quantity: 1 }])
    }
  }, [tickets])

  const removeFromCart = useCallback((ticketId: string) => {
    setCart((prev) => prev.filter((t) => t.id !== ticketId))
  }, [])

  const updateQuantity = useCallback((ticketId: string, quantity: number) => {
    setCart((prev) =>
      prev.map((t) =>
        t.id === ticketId ? { ...t, quantity: Math.max(0, quantity) } : t,
      ),
    )
  }, [])

  const clearCart = useCallback(() => {
    setCart([])
  }, [])

  const getTotalPrice = useCallback(() => {
    return cart.reduce((total, ticket) => total + ticket.price * ticket.quantity, 0)
  }, [cart])

  return {
    tickets,
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
  }
}
