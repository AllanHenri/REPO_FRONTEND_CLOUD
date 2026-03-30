import React, { useState } from 'react'
import { mockTalks, mockSpeakers } from '../mocks/scheduleData'
import { useFavorites } from '../hooks/useFavorites'

export const DashboardPage: React.FC = () => {
  const { isFavorited, toggleFavorite } = useFavorites()
  const [activeTab, setActiveTab] = useState<'upcoming' | 'all'>('upcoming')

  const now = new Date()
  const upcomingTalks = mockTalks.filter((talk) => new Date(talk.startTime) > now)
  const talksToShow = activeTab === 'upcoming' ? upcomingTalks : mockTalks

  const groupedByTime = talksToShow.reduce(
    (acc, talk) => {
      const date = new Date(talk.startTime).toLocaleDateString('pt-BR')
      if (!acc[date]) acc[date] = []
      acc[date].push(talk)
      return acc
    },
    {} as Record<string, typeof mockTalks>,
  )

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">📅 Programação do Evento</h1>
        <p className="text-gray-600">Confira as palestras e workshops agendados</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
          <p className="text-sm text-blue-600 font-semibold">Total de Palestras</p>
          <p className="text-3xl font-bold text-blue-900">{mockTalks.length}</p>
        </div>
        <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
          <p className="text-sm text-purple-600 font-semibold">Próximas Palestras</p>
          <p className="text-3xl font-bold text-purple-900">{upcomingTalks.length}</p>
        </div>
        <div className="bg-green-50 rounded-lg p-4 border border-green-200">
          <p className="text-sm text-green-600 font-semibold">Palestrantes</p>
          <p className="text-3xl font-bold text-green-900">{mockSpeakers.length}</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="flex gap-2 border-b p-4">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`px-4 py-2 font-semibold transition ${
              activeTab === 'upcoming'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Próximas
          </button>
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 font-semibold transition ${
              activeTab === 'all'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Todas
          </button>
        </div>

        <div className="p-6 space-y-8">
          {Object.entries(groupedByTime).map(([date, talks]) => (
            <div key={date}>
              <h3 className="font-bold text-lg text-gray-900 mb-4 pb-2 border-b">📅 {date}</h3>
              <div className="space-y-3">
                {talks.map((talk) => (
                  <div
                    key={talk.id}
                    className={`border rounded-lg p-4 ${
                      isFavorited(talk.id)
                        ? 'border-yellow-400 bg-yellow-50'
                        : 'border-gray-200 hover:shadow-md'
                    } transition`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg text-gray-900">{talk.title}</h4>
                        <p className="text-sm text-gray-600">
                          👤 {talk.speaker} | 🏢 {talk.room}
                        </p>
                      </div>
                      <button
                        onClick={() => toggleFavorite(talk.id)}
                        className={`text-2xl transition ${
                          isFavorited(talk.id) ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'
                        }`}
                      >
                        ⭐
                      </button>
                    </div>
                    <p className="text-sm text-gray-700 mb-3">{talk.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        {talk.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p className="text-sm text-gray-600">
                        🕐{' '}
                        {new Date(talk.startTime).toLocaleTimeString('pt-BR', {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
