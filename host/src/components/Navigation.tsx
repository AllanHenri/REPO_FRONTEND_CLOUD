import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

interface NavigationProps {
  onSelectMFE: (mfeName: string) => void
  currentMFE: string | null
}

export const Navigation: React.FC<NavigationProps> = ({ onSelectMFE, currentMFE }) => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [showUserMenu, setShowUserMenu] = useState(false)

  const mfes = [
    { id: 'inscriptions', label: '💳 Ingressos', icon: '🎟️' },
    { id: 'scientific', label: '📚 Submissões', icon: '📖' },
    { id: 'schedule', label: '📅 Agenda', icon: '🗓️' },
  ]

  const handleLogout = () => {
    logout()
    navigate('/login')
    setShowUserMenu(false)
  }

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-white shadow-md z-50 flex items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="text-2xl font-bold text-primary">📚 EduEvents</div>
          <p className="text-sm text-gray-600 ml-4">Plataforma de Congressos Acadêmicos</p>
        </div>

        {user && (
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg transition"
            >
              <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" />
              <div className="text-left">
                <div className="text-sm font-semibold">{user.name}</div>
                <div className="text-xs text-gray-600">{user.role}</div>
              </div>
            </button>

            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
                <div className="px-4 py-2 border-b">
                  <p className="text-sm text-gray-600">{user.email}</p>
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 text-red-600 transition"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </header>

      {/* Sidebar */}
      <aside className="fixed left-0 top-16 bottom-0 w-64 bg-gray-50 border-r border-gray-200 p-4 overflow-y-auto">
        <nav className="space-y-2">
          <div className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-4">
            Módulos
          </div>
          {mfes.map((mfe) => (
            <button
              key={mfe.id}
              onClick={() => onSelectMFE(mfe.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                currentMFE === mfe.id
                  ? 'bg-primary text-white font-semibold'
                  : 'text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="text-xl">{mfe.icon}</span>
              <span>{mfe.label}</span>
            </button>
          ))}
        </nav>

        {/* Info Card */}
        <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <h4 className="font-semibold text-sm text-blue-900 mb-2">💡 Dica</h4>
          <p className="text-xs text-blue-800">
            Cada módulo é independente e carrega sob demanda para melhor performance.
          </p>
        </div>
      </aside>
    </>
  )
}
