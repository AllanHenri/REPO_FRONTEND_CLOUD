import React, { useEffect, useState, Suspense } from 'react'

interface MFEContainerProps {
  mfeName: 'inscriptions' | 'scientific' | 'schedule'
}

const LoadingComponent = () => (
  <div className="flex items-center justify-center min-h-[400px]">
    <div className="text-center">
      <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
      <p className="text-gray-600">Carregando módulo remoto...</p>
    </div>
  </div>
)

const ErrorComponent: React.FC<{ error: string; mfeName: string }> = ({ error, mfeName }) => (
  <div className="flex items-center justify-center min-h-[400px] bg-red-50 rounded-lg">
    <div className="text-center">
      <h3 className="text-red-600 font-semibold mb-2">❌ Erro ao carregar {mfeName}</h3>
      <p className="text-red-600 text-sm mb-4">{error}</p>
      <p className="text-gray-600 text-xs">
        Verifique se o MFE está rodando na porta correta:
        {mfeName === 'inscriptions' && ' http://localhost:5174'}
        {mfeName === 'scientific' && ' http://localhost:5175'}
        {mfeName === 'schedule' && ' http://localhost:5176'}
      </p>
    </div>
  </div>
)

export const MFEContainer: React.FC<MFEContainerProps> = ({ mfeName }) => {
  const [MFEApp, setMFEApp] = useState<React.ComponentType<any> | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true
    let timeoutId: NodeJS.Timeout

    const loadMFE = async () => {
      try {
        const mfeConfig: Record<string, { port: number; name: string }> = {
          inscriptions: { port: 5174, name: '__mfe_inscriptions__' },
          scientific: { port: 5175, name: '__mfe_scientific__' },
          schedule: { port: 5176, name: '__mfe_schedule__' },
        }

        const config = mfeConfig[mfeName]
        const mfeUrl = `http://localhost:${config.port}`

        console.log(`🔄 Tentando carregar ${mfeName} de ${mfeUrl}`)

        // Tentar acessar a app via iframe invisível ou verificar se está disponível
        const response = await fetch(`${mfeUrl}/`)
        if (!response.ok) {
          throw new Error(`MFE não está disponível. Status: ${response.status}`)
        }

        console.log(`✅ ${mfeName} disponível em ${mfeUrl}`)

        // Registrar em iframe para carregar o componente
        // Por enquanto, vamos mostrar um iframe
        if (isMounted) {
          // Criar um componente que renderiza o MFE em um iframe
          const IFrameMFE: React.FC = () => (
            <iframe
              src={mfeUrl}
              style={{
                width: '100%',
                height: '100%',
                minHeight: '600px',
                border: 'none',
                borderRadius: '0.5rem',
              }}
              title={`MFE ${mfeName}`}
            />
          )
          setMFEApp(() => IFrameMFE)
          setError(null)
        }
      } catch (err) {
        const errorMsg = err instanceof Error ? err.message : 'Erro desconhecido'
        console.error(`❌ Erro ao carregar ${mfeName}:`, errorMsg)
        if (isMounted) {
          setError(errorMsg)
        }
      }
    }

    // Aguardar 1s antes de tentar carregar (dar tempo para MFEs iniciarem)
    timeoutId = setTimeout(loadMFE, 1000)

    return () => {
      isMounted = false
      clearTimeout(timeoutId)
    }
  }, [mfeName])

  if (error) {
    return <ErrorComponent error={error} mfeName={mfeName} />
  }

  if (!MFEApp) {
    return <LoadingComponent />
  }

  return (
    <Suspense fallback={<LoadingComponent />}>
      <MFEApp />
    </Suspense>
  )
}
