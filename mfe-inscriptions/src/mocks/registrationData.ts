export const mockTickets = [
  {
    id: 'ticket-1',
    name: 'Ingresso Estudante',
    price: 50,
    currency: 'BRL',
    description: 'Acesso a todas as palestras e workshops',
    quantity: 0,
    benefits: ['Acesso a palestras', 'Certificado digital', 'Coffee break'],
  },
  {
    id: 'ticket-2',
    name: 'Ingresso Profissional',
    price: 150,
    currency: 'BRL',
    description: 'Acesso premium + certificado físico',
    quantity: 0,
    benefits: ['Acesso prioritário', 'Certificado físico', 'Networking', 'Coffee break + Almoço'],
  },
  {
    id: 'ticket-3',
    name: 'Ingresso VIP',
    price: 300,
    currency: 'BRL',
    description: 'Acesso completo + eventos extras',
    quantity: 0,
    benefits: [
      'Acesso prioritário',
      'Certificado físico',
      'Jantar de gala',
      'Sessão privada com palestrantes',
      'Crachá VIP',
    ],
  },
]

export const mockCoupons = [
  {
    id: 'coupon-1',
    code: 'ESTUDANTE20',
    discount: 0.2,
    description: '20% off para estudantes',
    expiresAt: '2024-12-31',
  },
  {
    id: 'coupon-2',
    code: 'EARLY30',
    discount: 0.3,
    description: '30% off inscrição antecipada',
    expiresAt: '2024-03-31',
  },
]

export const mockTransactions = [
  {
    id: 'tx-1',
    date: '2024-02-15',
    amount: 50,
    status: 'completed',
    ticketName: 'Ingresso Estudante',
    ticketId: 'ticket-1',
  },
  {
    id: 'tx-2',
    date: '2024-01-20',
    amount: 150,
    status: 'completed',
    ticketName: 'Ingresso Profissional',
    ticketId: 'ticket-2',
  },
]

export interface Ticket {
  id: string
  name: string
  price: number
  currency: string
  description: string
  quantity: number
  benefits: string[]
}

export interface Coupon {
  id: string
  code: string
  discount: number
  description: string
  expiresAt: string
}

export interface Transaction {
  id: string
  date: string
  amount: number
  status: 'completed' | 'pending' | 'failed'
  ticketName: string
  ticketId: string
}
