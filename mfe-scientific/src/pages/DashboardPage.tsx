import React, { useState } from 'react'
import { mockPapers, mockReviews } from '../mocks/scientificData'

export const DashboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'submissions' | 'reviews' | 'approved'>(
    'submissions',
  )

  const approvedPapers = mockPapers.filter((p) => p.status === 'approved')

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">📚 Centro de Submissões Científicas</h1>
        <p className="text-gray-600">Gerencie seus artigos, avaliações e certificados</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
          <p className="text-sm text-blue-600 font-semibold">Artigos Submetidos</p>
          <p className="text-3xl font-bold text-blue-900">{mockPapers.length}</p>
        </div>
        <div className="bg-green-50 rounded-lg p-4 border border-green-200">
          <p className="text-sm text-green-600 font-semibold">Aprovados</p>
          <p className="text-3xl font-bold text-green-900">{approvedPapers.length}</p>
        </div>
        <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
          <p className="text-sm text-purple-600 font-semibold">Avaliações Concluídas</p>
          <p className="text-3xl font-bold text-purple-900">{mockReviews.length}</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="flex gap-2 border-b p-4">
          <button
            onClick={() => setActiveTab('submissions')}
            className={`px-4 py-2 font-semibold transition ${
              activeTab === 'submissions'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Meus Artigos
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`px-4 py-2 font-semibold transition ${
              activeTab === 'reviews'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Avaliações
          </button>
          <button
            onClick={() => setActiveTab('approved')}
            className={`px-4 py-2 font-semibold transition ${
              activeTab === 'approved'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Aprovados
          </button>
        </div>

        <div className="p-6">
          {activeTab === 'submissions' && (
            <div className="space-y-4">
              {mockPapers.map((paper) => (
                <div key={paper.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-lg">{paper.title}</h3>
                      <p className="text-sm text-gray-600">
                        Autores: {paper.authors.join(', ')}
                      </p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        paper.status === 'approved'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {paper.status === 'approved' ? '✓ Aprovado' : '⏳ Em revisão'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{paper.abstract}</p>
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <p>Área: {paper.thematiArea}</p>
                    <p>{new Date(paper.createdAt).toLocaleDateString('pt-BR')}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="space-y-4">
              {mockReviews.map((review) => (
                <div key={review.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold">Revisão de {review.reviewerName}</h3>
                      <p className="text-sm text-gray-600">
                        Rating: {'⭐'.repeat(Math.floor(review.rating))}
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-800">
                      ✓ Concluído
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">"{review.comment}"</p>
                  <p className="text-xs text-gray-500">{new Date(review.createdAt).toLocaleDateString('pt-BR')}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'approved' && (
            <div className="space-y-4">
              {approvedPapers.length > 0 ? (
                approvedPapers.map((paper) => (
                  <div key={paper.id} className="border-2 border-green-300 bg-green-50 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg">✅ {paper.title}</h3>
                        <p className="text-sm text-gray-600">
                          Autores: {paper.authors.join(', ')}
                        </p>
                      </div>
                      <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-sm font-semibold">
                        📜 Gerar Certificado
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-600 text-center py-8">Nenhum artigo aprovado yet.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
