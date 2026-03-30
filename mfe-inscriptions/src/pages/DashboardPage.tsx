import React, { useState } from 'react'
import { mockTickets } from '../mocks/registrationData'

export const DashboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'tickets' | 'transactions'>('tickets')

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">💳 Gerenciamento de Ingressos</h1>
        <p className="text-gray-600">Adquira seus ingressos para o congresso acadêmico</p>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="flex gap-2 border-b">
          <button
            onClick={() => setActiveTab('tickets')}
            className={`px-4 py-2 font-semibold transition ${
              activeTab === 'tickets'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Ingressos Disponíveis
          </button>
          <button
            onClick={() => setActiveTab('transactions')}
            className={`px-4 py-2 font-semibold transition ${
              activeTab === 'transactions'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Meu Histórico
          </button>
        </div>

        <div className="mt-4">
          {activeTab === 'tickets' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {mockTickets.map((ticket) => (
                <div key={ticket.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition">
                  <h3 className="font-semibold text-lg mb-2">{ticket.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{ticket.description}</p>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-primary">
                      R$ {ticket.price.toFixed(2)}
                    </span>
                  </div>
                  <ul className="text-xs text-gray-600 mb-4 space-y-1">
                    {ticket.benefits.map((benefit, idx) => (
                      <li key={idx}>✓ {benefit}</li>
                    ))}
                  </ul>
                  <button className="w-full bg-primary text-white py-2 rounded-lg hover:bg-blue-700 transition font-semibold">
                    Adicionar ao Carrinho
                  </button>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'transactions' && (
            <div className="text-center py-8">
              <p className="text-gray-600">Nenhuma transação registrada ainda.</p>
              <p className="text-sm text-gray-500 mt-2">
                Suas compras aparecerão aqui após a conclusão da inscrição.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
