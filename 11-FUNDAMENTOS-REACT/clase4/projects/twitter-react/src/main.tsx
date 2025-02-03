import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import storage from './utils/storage'
import { setAuthorizationHeader } from './api/client'
import { AuthProvider } from './pages/auth/AuthProvider'
import { BrowserRouter } from 'react-router-dom'

const accessToken = storage.get('auth')

if (accessToken) {
  setAuthorizationHeader(accessToken)
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider defaultIsLogged={!!accessToken}>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
)
