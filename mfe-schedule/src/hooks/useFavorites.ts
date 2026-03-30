import { useState } from 'react'

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<string[]>(() => {
    const stored = localStorage.getItem('schedule_favorites')
    return stored ? JSON.parse(stored) : []
  })

  const toggleFavorite = (talkId: string) => {
    setFavorites((prev) => {
      const updated = prev.includes(talkId) ? prev.filter((id) => id !== talkId) : [...prev, talkId]
      localStorage.setItem('schedule_favorites', JSON.stringify(updated))
      return updated
    })
  }

  const isFavorited = (talkId: string) => favorites.includes(talkId)

  return { favorites, toggleFavorite, isFavorited }
}
