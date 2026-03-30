export const mockTalks = [
  {
    id: 'talk-1',
    title: 'Tendências em Inteligência Artificial 2024',
    speaker: 'Dr. João Silva',
    room: 'Auditório Principal',
    startTime: '2024-03-15T09:00:00',
    endTime: '2024-03-15T10:00:00',
    description: 'Uma exploração das tendências mais recentes em IA e suas aplicações práticas.',
    tags: ['IA', 'Tecnologia'],
  },
  {
    id: 'talk-2',
    title: 'Machine Learning na Prática',
    speaker: 'Profa. Maria Santos',
    room: 'Sala 101',
    startTime: '2024-03-15T10:30:00',
    endTime: '2024-03-15T11:30:00',
    description: 'Workshop prático de Machine Learning com exemplos reais.',
    tags: ['ML', 'Prático'],
  },
  {
    id: 'talk-3',
    title: 'Segurança em Aplicações Web',
    speaker: 'Eng. Carlos Mendes',
    room: 'Sala 102',
    startTime: '2024-03-15T14:00:00',
    endTime: '2024-03-15T15:00:00',
    description: 'Melhores práticas de segurança para desenvolvimento web moderno.',
    tags: ['Segurança', 'Web'],
  },
]

export const mockSpeakers = [
  {
    id: 'speaker-1',
    name: 'Dr. João Silva',
    bio: 'Pesquisador sênior em IA com mais de 15 anos de experiência',
    email: 'joao@university.edu',
    social: { linkedin: 'linkedin.com/in/joaosilva', twitter: '@joaosilva' },
  },
  {
    id: 'speaker-2',
    name: 'Profa. Maria Santos',
    bio: 'Especialista em Machine Learning e Ciência de Dados',
    email: 'maria@university.edu',
    social: { linkedin: 'linkedin.com/in/mariasantos', twitter: '@mariasantos' },
  },
]

export const mockRooms = [
  { id: 'room-1', name: 'Auditório Principal', capacity: 500 },
  { id: 'room-2', name: 'Sala 101', capacity: 100 },
  { id: 'room-3', name: 'Sala 102', capacity: 80 },
  { id: 'room-4', name: 'Sala 103', capacity: 60 },
]

export interface Talk {
  id: string
  title: string
  speaker: string
  room: string
  startTime: string
  endTime: string
  description: string
  tags: string[]
}

export interface Speaker {
  id: string
  name: string
  bio: string
  email: string
  social: Record<string, string>
}

export interface Room {
  id: string
  name: string
  capacity: number
}
