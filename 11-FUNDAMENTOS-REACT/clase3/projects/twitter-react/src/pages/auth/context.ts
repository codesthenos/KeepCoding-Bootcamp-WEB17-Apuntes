import { createContext, useContext, useState } from 'react'

interface AuthContextP {
  isLogged: boolean
  onLogin: () => void
  onLogout: () => void
}

interface Props {
  defaultIsLogged: boolean
  children: React.ReactNode
}

const AuthContext = createContext<AuthContextP>({
  isLogged: false,
  onLogin: () => {},
  onLogout: () => {}
})

export const AuthProvider = ({ defaultIsLogged }: Props) => {
  const [isLogged, setIslogged] = useState(defaultIsLogged)
  const handleLogin = () => {
    setIslogged(true)
  }
  const handleLogout = () => {
    setIslogged(false)
  }
  
  const authValue = { isLogged, handleLogin, handleLogout }

  return AuthContext.Provider
}

export function useAuth () {
  const authValue = useContext(AuthContext)
  return authValue
}