import { useState } from 'react'
import LoginPage from './pages/auth/loginPage'
import TweetsPage from './pages/tweets/TweetsPage'

function App() {
  const [isLogged, setIslogged] = useState(false)
  const handleLogin = () => {
    setIslogged(true)
  }
  const handleLogout = () => {
    setIslogged(false)
  }
  return isLogged ? <TweetsPage onLogout={handleLogout} /> : <LoginPage onLogin={handleLogin} />
  
}

export default App
