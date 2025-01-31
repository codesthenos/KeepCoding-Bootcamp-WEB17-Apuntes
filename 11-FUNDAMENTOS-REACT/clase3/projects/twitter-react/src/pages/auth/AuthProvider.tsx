import { useState } from 'react'
import { AuthContext } from './context'

interface Props {
  defaultIsLogged: boolean
  children: React.ReactNode
}

export const AuthProvider = ({ defaultIsLogged, children }: Props) => {
  const [isLogged, setIslogged] = useState(defaultIsLogged)
  const handleLogin = () => {
    setIslogged(true)
  }
  const handleLogout = () => {
    setIslogged(false)
  }
  
  const authValue = { isLogged, onLogin: handleLogin, onLogout: handleLogout }

  return <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
}