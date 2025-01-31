import { useAuth } from './pages/auth/context'
import LoginPage from './pages/auth/LoginPage'
import TweetsPage from './pages/tweets/TweetsPage'

function App() {
  const { isLogged } = useAuth()

  return isLogged ? <TweetsPage /> : <LoginPage />
  
}

export default App
