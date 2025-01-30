import { useState } from "react"
import Button from "../../components/Button"
import { login } from "./service"

interface Props {
  onLogin: () => void
}

function LoginPage ({ onLogin }: Props) {
  const [usernameValue, setUsernameValue] = useState('')
  const [passwordValue, setpasswordValue] = useState('')

  const isDisabled = !usernameValue || !passwordValue

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const { username, password } = event.target

    try {
      await login({ username: username.value, password: password.value})
      onLogin()
    } catch (error) {
      console.error(error)
    }
  }
  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsernameValue(event.target.value)
  }
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setpasswordValue(event.target.value)
  }
  return (
    <div className="max-w-3xl mx-auto text-center">
      <h1 className="uppercase font-bold text-2xl mb-6">Log in to Twitter</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username: </label>
          <input onChange={handleUsernameChange} value={usernameValue} type="text" id="username" name="username" className="border border-zinc-900 rounded-xl mb-2" />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input onChange={handlePasswordChange} value={passwordValue} type="password" id="password" name="password" className="border border-zinc-900 rounded-xl" />
        </div>
        <Button $variant="primary" type="submit" disabled={isDisabled}>Login</Button>
      </form>
    </div>
  )
}

export default LoginPage