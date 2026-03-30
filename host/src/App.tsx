import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { AuthGuard } from './components/AuthGuard'
import { Navigation } from './components/Navigation'
import { Layout } from './components/Layout'
import { MFEContainer } from './components/MFEContainer'
import { useAuth } from './hooks/useAuth'

// Login Page
const LoginPage: React.FC = () => {
  const { login, isAuthenticated } = useAuth()
  const [email, setEmail] = useState('author@eduevents.com')
  const [password, setPassword] = useState('password123')
  const [loading, setLoading] = useState(false)

  if (isAuthenticated) {
    return <Navigate to="/inscriptions" replace />
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await login(email, password)
    } finally {
      setLoading(false)
    }
  }

  const demoAccounts = [
    { email: 'admin@eduevents.com', role: 'Admin' },
    { email: 'reviewer@eduevents.com', role: 'Reviewer' },
    { email: 'author@eduevents.com', role: 'Author' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">📚 EduEvents</h1>
            <p className="text-gray-600">Plataforma de Congressos Acadêmicos</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Senha
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50"
            >
              {loading ? 'Entrando...' : 'Entrar'}
            </button>
          </form>

          {/* Demo Accounts */}
          <div className="mt-8 pt-6 border-t">
            <p className="text-sm text-gray-600 mb-3">👤 Contas de demo disponíveis:</p>
            <div className="space-y-2">
              {demoAccounts.map((account) => (
                <button
                  key={account.email}
                  onClick={() => {
                    setEmail(account.email)
                    setPassword('password123')
                  }}
                  className="w-full text-left text-sm px-3 py-2 rounded hover:bg-gray-100 transition text-gray-700 border border-gray-200"
                >
                  <span className="font-medium">{account.email}</span>
                  <span className="text-gray-500"> ({account.role})</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Dashboard wrapper
const AppContent: React.FC = () => {
  const { isAuthenticated } = useAuth()
  const [currentMFE, setCurrentMFE] = useState<string | null>('inscriptions')

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  const mfeRoutes: Record<string, 'inscriptions' | 'scientific' | 'schedule'> = {
    inscriptions: 'inscriptions',
    scientific: 'scientific',
    schedule: 'schedule',
  }

  return (
    <div className="flex">
      <Navigation onSelectMFE={setCurrentMFE} currentMFE={currentMFE} />
      <Layout>
        <div>
          {currentMFE && (
            <>
              <div className="mb-4">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {currentMFE === 'inscriptions' && '💳 Gerenciamento de Ingressos'}
                  {currentMFE === 'scientific' && '📚 Plataforma de Submissões Científicas'}
                  {currentMFE === 'schedule' && '📅 Programação do Evento'}
                </h1>
                <p className="text-gray-600">Carregando módulo remoto...</p>
              </div>
              <MFEContainer mfeName={mfeRoutes[currentMFE]} />
            </>
          )}
        </div>
      </Layout>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/inscriptions"
            element={
              <AuthGuard>
                <AppContent />
              </AuthGuard>
            }
          />
          <Route
            path="/scientific"
            element={
              <AuthGuard>
                <AppContent />
              </AuthGuard>
            }
          />
          <Route
            path="/schedule"
            element={
              <AuthGuard>
                <AppContent />
              </AuthGuard>
            }
          />
          <Route path="/" element={<Navigate to="/inscriptions" replace />} />
          <Route path="*" element={<Navigate to="/inscriptions" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}
