export const mockPapers = [
  {
    id: 'paper-1',
    title: 'Aplicações de IA em Educação Superior',
    authors: ['João Silva', 'Maria Santos'],
    thematiArea: 'Inteligência Artificial',
    status: 'submitted',
    createdAt: '2024-02-10',
    abstract: 'Este artigo aborda as principais aplicações de IA no contexto educacional...',
  },
  {
    id: 'paper-2',
    title: 'Machine Learning para Análise de Dados Acadêmicos',
    authors: ['Carlos Mendes'],
    thematiArea: 'Machine Learning',
    status: 'approved',
    createdAt: '2024-01-15',
    abstract: 'Exploramos técnicas de ML para melhorar análise de performance estudantil...',
  },
]

export const mockThematicAreas = [
  { id: 'area-1', name: 'Inteligência Artificial' },
  { id: 'area-2', name: 'Machine Learning' },
  { id: 'area-3', name: 'Processamento de Linguagem Natural' },
  { id: 'area-4', name: 'Computação Quântica' },
  { id: 'area-5', name: 'Cibersegurança' },
]

export const mockReviews = [
  {
    id: 'review-1',
    paperId: 'paper-1',
    reviewerId: 'reviewer-1',
    reviewerName: 'Dr. Antonio Silva',
    rating: 4.5,
    comment: 'Excelente trabalho, bem estruturado e com contribuições significativas.',
    status: 'completed',
    createdAt: '2024-02-15',
  },
]

export interface Paper {
  id: string
  title: string
  authors: string[]
  thematiArea: string
  status: 'submitted' | 'under_review' | 'approved' | 'rejected'
  createdAt: string
  abstract: string
}

export interface ThematicArea {
  id: string
  name: string
}

export interface Review {
  id: string
  paperId: string
  reviewerId: string
  reviewerName: string
  rating: number
  comment: string
  status: 'pending' | 'completed'
  createdAt: string
}
