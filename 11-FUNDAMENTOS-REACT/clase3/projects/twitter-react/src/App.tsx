import { useState } from 'react'
import LoginPage from './pages/auth/loginPage'
import TweetsPage from './pages/tweets/TweetsPage'

interface Props {
  defaultIsLogged: boolean
}

function App({ defaultIsLogged }: Props) {
  const [isLogged, setIslogged] = useState(defaultIsLogged)
  const handleLogin = () => {
    setIslogged(true)
  }
  const handleLogout = () => {
    setIslogged(false)
  }
  return isLogged ? <TweetsPage onLogout={handleLogout} /> : <LoginPage onLogin={handleLogin} />
  
}

export default App
