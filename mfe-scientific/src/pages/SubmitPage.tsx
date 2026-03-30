import React, { useState } from 'react'
import { mockThematicAreas } from '../mocks/scientificData'

export const SubmitPage: React.FC = () => {
  const [formData, setFormData] = useState({
    title: '',
    authors: '',
    thematicArea: '',
    abstract: '',
    file: null as File | null,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`✅ Artigo enviado:\n${formData.title}\n\n(Simulação - dados em memória)`)
    // Reset form
    setFormData({
      title: '',
      authors: '',
      thematicArea: '',
      abstract: '',
      file: null,
    })
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">📝 Enviar Novo Artigo</h1>
        <p className="text-gray-600">Preencha os dados abaixo para submeter seu trabalho científico</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 space-y-6">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Título do Artigo *
          </label>
          <input
            type="text"
            required
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder="Ex: Aplicações de IA em Educação..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Authors */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Autores (separados por vírgula) *
          </label>
          <input
            type="text"
            required
            value={formData.authors}
            onChange={(e) => setFormData({ ...formData, authors: e.target.value })}
            placeholder="João Silva, Maria Santos"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Thematic Area */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Área Temática *
          </label>
          <select
            required
            value={formData.thematicArea}
            onChange={(e) => setFormData({ ...formData, thematicArea: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Selecione uma área...</option>
            {mockThematicAreas.map((area) => (
              <option key={area.id} value={area.id}>
                {area.name}
              </option>
            ))}
          </select>
        </div>

        {/* Abstract */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Resumo (Abstract) *
          </label>
          <textarea
            required
            value={formData.abstract}
            onChange={(e) => setFormData({ ...formData, abstract: e.target.value })}
            placeholder="Descreva brevemente o conteúdo e as conclusões do seu trabalho..."
            rows={6}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-vertical"
          />
        </div>

        {/* File Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Arquivo PDF *
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary transition cursor-pointer">
            <input
              type="file"
              required
              accept=".pdf"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  file: e.target.files?.[0] || null,
                })
              }
              className="hidden"
              id="file-input"
            />
            <label htmlFor="file-input" className="cursor-pointer">
              <p className="text-gray-600 font-semibold">📄 Clique para selecionar ou arraste aqui</p>
              <p className="text-sm text-gray-500 mt-1">Apenas PDF, máx 10MB</p>
            </label>
            {formData.file && (
              <p className="text-sm text-green-600 mt-2">✓ {formData.file.name}</p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex gap-3">
          <button
            type="submit"
            className="flex-1 bg-primary text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Enviar Artigo
          </button>
          <button
            type="button"
            className="flex-1 bg-gray-200 text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
          >
            Cancelar
          </button>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-sm text-blue-800">
          <p className="font-semibold mb-1">💡 Dica:</p>
          <p>
            Seu artigo será analisado por pares (peer review). Você receberá um email com o status
            da análise em até 30 dias.
          </p>
        </div>
      </form>
    </div>
  )
}
