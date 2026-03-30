import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host',
      filename: 'remoteEntry.js',
      exposes: {
        './useAuth': './src/hooks/useAuth.ts',
        './AuthContext': './src/context/AuthContext.tsx',
      },
      remotes: {
        inscriptions: 'http://localhost:5174/remoteEntry.js',
        scientific: 'http://localhost:5175/remoteEntry.js',
        schedule: 'http://localhost:5176/remoteEntry.js',
      },
      shared: ['react', 'react-dom', 'react-router-dom'],
    }),
  ],
  server: {
    port: 5173,
    strictPort: true,
    cors: true,
  },
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
})
