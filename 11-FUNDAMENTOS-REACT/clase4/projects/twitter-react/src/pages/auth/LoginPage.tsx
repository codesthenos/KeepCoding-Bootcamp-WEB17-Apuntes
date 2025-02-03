import { useState } from 'react'
import Button from '../../components/Button'
import { login } from './service'
import { useAuth } from './context'
import type { LoginForm } from './types'
import { Link } from 'react-router-dom'

// Esta funcion accesoria me sirve en caso de no usar inputs controlados
// const getFormData = (formData: FormData, name: string) => {
//   const data = formData.get(name)
//   if (typeof data === 'string') {
//     return data
//   }
//   return ''
// }

function LoginPage() {
  const { onLogin } = useAuth()

  const initialState: LoginForm = {
    username: '',
    password: ''
  }

  const [formData, setFormData] = useState<LoginForm>(initialState)

  const isDisabled = !formData.username || !formData.password

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // en caso de inputs no controlados
    // const formData = new FormData(event.currentTarget)

    // const username = getFormData(formData, 'username')
    // const password = getFormData(formData, 'password')

    try {
      await login({ username: formData.username, password: formData.password })
      onLogin()
    } catch (error) {
      console.error(error)
    }
  }
  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()

    setFormData((state) => {
      return { ...state, [event.target.id]: event.target.value }
    })
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
        <Button
          as={Link}
          to='/'
          $variant='primary'
          type='submit'
          disabled={isDisabled}
        >
          Login
        </Button>
      </form>
    </div>
  )
}

export default LoginPage
