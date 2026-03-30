import React, { useState } from 'react'
import { DashboardPage } from './pages/DashboardPage'
import { SpeakersPage } from './pages/SpeakersPage'
import { useFavorites } from './hooks/useFavorites'

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'dashboard' | 'speakers' | 'favorites'>(
    'dashboard',
  )
  const { favorites } = useFavorites()

  return (
    <div className="w-full bg-gray-50 min-h-screen p-4">
      {/* Navigation */}
      <div className="mb-6 flex gap-2">
        <button
          onClick={() => setCurrentPage('dashboard')}
          className={`px-4 py-2 rounded-lg font-semibold transition ${
            currentPage === 'dashboard'
              ? 'bg-primary text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          Programação
        </button>
        <button
          onClick={() => setCurrentPage('speakers')}
          className={`px-4 py-2 rounded-lg font-semibold transition ${
            currentPage === 'speakers'
              ? 'bg-primary text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          Palestrantes
        </button>
        <button
          onClick={() => setCurrentPage('favorites')}
          className={`px-4 py-2 rounded-lg font-semibold transition relative ${
            currentPage === 'favorites'
              ? 'bg-primary text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          Favoritos
          {favorites.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-yellow-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {favorites.length}
            </span>
          )}
        </button>
      </div>

      {/* Content */}
      {currentPage === 'dashboard' && <DashboardPage />}
      {currentPage === 'speakers' && <SpeakersPage />}
      {currentPage === 'favorites' && (
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-900">⭐ Minhas Palestras Favoritas</h1>
          <p className="text-gray-600">
            {favorites.length === 0
              ? 'Você ainda não marcou nenhuma palestra como favorita.'
              : `Você tem ${favorites.length} palestra(s) marcada(s).`}
          </p>
        </div>
      )}
    </div>
  )
}

export default App
