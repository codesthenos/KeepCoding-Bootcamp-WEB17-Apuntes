import { logout } from '../../pages/auth/service'
import Button from '../Button'

export interface HeaderProps {
  onLogout: () => void
  isLogged: boolean
}

export default function Header ({ onLogout, isLogged }: HeaderProps) {
  const handleLogoutButton = async () => {
    await logout()
    onLogout()
  }
  return (
    <header>
      <div>

      </div>
      <nav>
        {
          isLogged
            ? <Button $variant="primary" onClick={handleLogoutButton}>Logout</Button>
            : <Button $variant='secondary' onClick={() => {}}>Login</Button>
        }
      </nav>
    </header>
  )
}