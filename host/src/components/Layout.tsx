import React from 'react'

interface LayoutProps {
  children: React.ReactNode
  showSidebar?: boolean
}

export const Layout: React.FC<LayoutProps> = ({ children, showSidebar = true }) => {
  return (
    <div className="w-full h-full flex">
      {/* Content Area */}
      <main
        className={`flex-1 overflow-auto transition-all ${showSidebar ? 'ml-64' : ''}`}
        style={{ marginTop: '64px' }}
      >
        <div className="p-6 bg-gray-50 min-h-[calc(100vh-64px)]">
          {children}
        </div>
      </main>
    </div>
  )
}
