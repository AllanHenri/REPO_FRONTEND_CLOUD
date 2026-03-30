import React, { useState } from 'react'
import { DashboardPage } from './pages/DashboardPage'
import { SubmitPage } from './pages/SubmitPage'

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'dashboard' | 'submit'>('dashboard')

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
          Dashboard
        </button>
        <button
          onClick={() => setCurrentPage('submit')}
          className={`px-4 py-2 rounded-lg font-semibold transition ${
            currentPage === 'submit'
              ? 'bg-primary text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          Enviar Artigo
        </button>
      </div>

      {/* Content */}
      {currentPage === 'dashboard' && <DashboardPage />}
      {currentPage === 'submit' && <SubmitPage />}
    </div>
  )
}

export default App
