import LoginPage from './pages/auth/LoginPage'
import TweetsPage from './pages/tweets/TweetsPage'

function App() {


  return isLogged ? <TweetsPage /> : <LoginPage />
  
}

export default App
