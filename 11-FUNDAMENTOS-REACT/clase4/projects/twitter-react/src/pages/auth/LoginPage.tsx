import { useState } from 'react'
import Button from '../../components/Button'
import { login } from './service'
import { useAuth } from './context'
import type { LoginForm } from './types'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { AxiosError } from 'axios'

// Esta funcion accesoria me sirve en caso de no usar inputs controlados
// const getFormData = (formData: FormData, name: string) => {
//   const data = formData.get(name)
//   if (typeof data === 'string') {
//     return data
//   }
//   return ''
// }

function LoginPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const { onLogin, isLogged } = useAuth()

  const [error, setError] = useState<{ message: string } | null>(null)
  const [loading, setLoading] = useState(false)

  const initialState: LoginForm = {
    username: '',
    password: ''
  }

  const [formData, setFormData] = useState<LoginForm>(initialState)

  const isDisabled = !formData.username || !formData.password || loading

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // en caso de inputs no controlados
    // const formData = new FormData(event.currentTarget)

    // const username = getFormData(formData, 'username')
    // const password = getFormData(formData, 'password')

    try {
      setLoading(true)
      await login({ username: formData.username, password: formData.password })
      onLogin()
      navigate(location.state?.from ?? '/', { replace: true })
    } catch (error) {
      if (error instanceof AxiosError) {
        setError({ message: error.response?.data?.message ?? '' })
      } else {
        console.error(error)
      }
    } finally {
      setLoading(false)
    }
  }
  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()

    setFormData((state) => {
      return { ...state, [event.target.id]: event.target.value }
    })
  }
  if (isLogged) {
    return <Navigate to='/' />
  }

  return (
    <div className='mx-auto max-w-3xl text-center'>
      <h1 className='mb-6 text-2xl font-bold uppercase'>Log in to Twitter</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='username'>Username: </label>
          <input
            onChange={handleFormChange}
            value={formData.username}
            type='text'
            id='username'
            name='username'
            className='mb-2 rounded-xl border border-zinc-900 px-2'
          />
        </div>
        <div>
          <label htmlFor='password'>Password: </label>
          <input
            onChange={handleFormChange}
            value={formData.password}
            type='password'
            id='password'
            name='password'
            className='ml-1 rounded-xl border border-zinc-900 px-2'
          />
        </div>
        <Button $variant='primary' type='submit' disabled={isDisabled}>
          Login
        </Button>
        {error && (
          <h3
            onClick={() => {
              setError(null)
            }}
            style={{ color: 'red', cursor: 'pointer' }}
          >
            {error.message}
          </h3>
        )}
      </form>
    </div>
  )
}

export default LoginPage
