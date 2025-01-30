import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import storage from './utils/storage.ts'
import { setAuthorizationHeader } from './api/client.ts'
import { AuthProvider } from './pages/auth/context.ts'

const accessToken = storage.get('auth')

if (accessToken) {
  setAuthorizationHeader(accessToken)
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider defaultIsLogged={!!accessToken}>
      <App />
    </AuthProvider>
  </StrictMode>
)
