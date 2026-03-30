import React, { createContext, useCallback, useEffect, useState } from 'react'
import { User, Role } from '../types/index'

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  token: string | null
  login: (email: string) => Promise<void>
  logout: () => void
  updateUser: (user: User) => void
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)

  // Restaurar sessão do localStorage
  useEffect(() => {
    const storedToken = localStorage.getItem('auth_token')
    const storedUser = localStorage.getItem('auth_user')

    if (storedToken && storedUser) {
      try {
        const userData = JSON.parse(storedUser)
        setUser(userData)
        setToken(storedToken)
      } catch (error) {
        console.error('Erro ao restaurar sessão:', error)
        localStorage.removeItem('auth_token')
        localStorage.removeItem('auth_user')
      }
    }
  }, [])

  const login = useCallback(async (email: string) => {
    // Mock: simulação de login
    await new Promise((resolve) => setTimeout(resolve, 800))

    const role: Role =
      email === 'admin@eduevents.com'
        ? 'Admin'
        : email === 'reviewer@eduevents.com'
          ? 'Reviewer'
          : 'Author'

    const mockUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      name: email.split('@')[0].replace('.', ' ').toUpperCase(),
      email,
      role,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
    }

    const mockToken = `jwt_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`

    setUser(mockUser)
    setToken(mockToken)
    localStorage.setItem('auth_token', mockToken)
    localStorage.setItem('auth_user', JSON.stringify(mockUser))
  }, [])

  const logout = useCallback(() => {
    setUser(null)
    setToken(null)
    localStorage.removeItem('auth_token')
    localStorage.removeItem('auth_user')
  }, [])

  const updateUser = useCallback((updatedUser: User) => {
    setUser(updatedUser)
    localStorage.setItem('auth_user', JSON.stringify(updatedUser))
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        token,
        login,
        logout,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
