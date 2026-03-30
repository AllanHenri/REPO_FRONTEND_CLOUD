export type Role = 'Admin' | 'Author' | 'Reviewer' | 'Guest'

export interface User {
  id: string
  name: string
  email: string
  role: Role
  avatar?: string
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
  token: string | null
}

export interface MFEConfig {
  name: 'inscriptions' | 'scientific' | 'schedule'
  label: string
  icon: string
  path: string
  remoteUrl: string
  port: number
  requiredRoles: Role[]
}
