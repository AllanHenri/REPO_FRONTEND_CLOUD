import React, { useState } from 'react'

export const CheckoutPage: React.FC = () => {
  const [step, setStep] = useState<'cart' | 'shipping' | 'payment' | 'confirmation'>('cart')
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null)

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">🛒 Checkout</h1>
        <p className="text-gray-600">Finalize sua inscrição no congresso</p>
      </div>

      {/* Progress */}
      <div className="flex justify-between mb-8">
        {(['cart', 'shipping', 'payment', 'confirmation'] as const).map((s, idx) => (
          <div key={s} className="flex items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                step === s
                  ? 'bg-primary text-white'
                  : idx < (['cart', 'shipping', 'payment', 'confirmation'] as const).indexOf(step)
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 text-gray-600'
              }`}
            >
              {idx + 1}
            </div>
            <span className="ml-2 text-sm font-medium text-gray-600">
              {s === 'cart' && 'Carrinho'}
              {s === 'shipping' && 'Endereço'}
              {s === 'payment' && 'Pagamento'}
              {s === 'confirmation' && 'Confirmação'}
            </span>
          </div>
        ))}
      </div>

      {/* Content */}
      {step === 'cart' && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 space-y-4">
          <h2 className="text-xl font-semibold mb-4">Seu Carrinho</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-3 border-b">
              <div>
                <p className="font-medium">Ingresso Profissional</p>
                <p className="text-sm text-gray-600">Quantidade: 1</p>
              </div>
              <p className="font-semibold">R$ 150,00</p>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg space-y-3">
            <div className="flex justify-between text-base">
              <span>Subtotal:</span>
              <span>R$ 150,00</span>
            </div>
            {appliedCoupon && (
              <div className="flex justify-between text-green-600">
                <span>Desconto ({appliedCoupon}):</span>
                <span>-R$ 45,00</span>
              </div>
            )}
            <div className="border-t pt-3 flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span>R$ {appliedCoupon ? '105,00' : '150,00'}</span>
            </div>
          </div>

          <button
            onClick={() => setStep('shipping')}
            className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Continuar para Endereço
          </button>
        </div>
      )}

      {step === 'shipping' && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 space-y-4">
          <h2 className="text-xl font-semibold mb-4">Endereço de Entrega</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Endereço Completo
              </label>
              <input
                type="text"
                placeholder="Rua, número"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Cidade
                </label>
                <input
                  type="text"
                  placeholder="Sua cidade"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  CEP
                </label>
                <input
                  type="text"
                  placeholder="12345-678"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={() => setStep('cart')}
                className="flex-1 bg-gray-200 text-gray-900 py-2 rounded-lg font-semibold hover:bg-gray-300 transition"
              >
                Voltar
              </button>
              <button
                type="button"
                onClick={() => setStep('payment')}
                className="flex-1 bg-primary text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Continuar para Pagamento
              </button>
            </div>
          </form>
        </div>
      )}

      {step === 'payment' && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 space-y-4">
          <h2 className="text-xl font-semibold mb-4">Método de Pagamento</h2>
          <div className="space-y-3">
            <label className="flex items-center p-4 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
              <input type="radio" name="payment" defaultChecked className="mr-3" />
              <div>
                <p className="font-medium">Cartão de Crédito</p>
                <p className="text-sm text-gray-600">Visa, Mastercard, American Express</p>
              </div>
            </label>
            <label className="flex items-center p-4 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
              <input type="radio" name="payment" className="mr-3" />
              <div>
                <p className="font-medium">Pix (QR Code)</p>
                <p className="text-sm text-gray-600">Transferência instantânea</p>
              </div>
            </label>
          </div>

          <div className="space-y-3 pt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Código do Cupom (opcional)
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Ex: ESTUDANTE20"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  value={appliedCoupon || ''}
                  onChange={(e) => setAppliedCoupon(e.target.value)}
                />
                <button
                  type="button"
                  className="px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition font-semibold"
                >
                  Aplicar
                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={() => setStep('shipping')}
              className="flex-1 bg-gray-200 text-gray-900 py-2 rounded-lg font-semibold hover:bg-gray-300 transition"
            >
              Voltar
            </button>
            <button
              type="button"
              onClick={() => setStep('confirmation')}
              className="flex-1 bg-primary text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Finalizar Compra
            </button>
          </div>
        </div>
      )}

      {step === 'confirmation' && (
        <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6 text-center space-y-4">
          <div className="text-5xl mb-4">✅</div>
          <h2 className="text-2xl font-bold text-green-700">Inscrição Concluída!</h2>
          <p className="text-green-700">
            Sua inscrição foi confirmada com sucesso. Você receberá um email com os detalhes.
          </p>
          <button
            onClick={() => setStep('cart')}
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Nova Inscrição
          </button>
        </div>
      )}
    </div>
  )
}
