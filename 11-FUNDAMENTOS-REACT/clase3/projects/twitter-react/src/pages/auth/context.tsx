import { createContext, useContext, useState } from 'react'

interface AuthContextI {
  isLogged: boolean
  onLogin: () => void
  onLogout: () => void
}

interface Props {
  defaultIsLogged: boolean
  children: React.ReactNode
}

const AuthContext = createContext<AuthContextI>({
  isLogged: false,
  onLogin: () => {},
  onLogout: () => {}
})

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

export function useAuth () {
  const authValue = useContext(AuthContext)
  return authValue
}