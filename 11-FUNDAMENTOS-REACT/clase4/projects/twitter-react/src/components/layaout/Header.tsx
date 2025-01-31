import { useAuth } from '../../pages/auth/context'
import { logout } from '../../pages/auth/service'
import Button from '../Button'

export default function Header () {
  const { isLogged, onLogout } = useAuth()

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