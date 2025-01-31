import axios from 'axios'

export const client = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL
})

// Esto lo usariamos si usase los tipos custom de axios en axios.d.ts 
// client.interceptors.response.use(res => res.data)

export const setAuthorizationHeader = (accessToken: string) => {
  client.defaults.headers["authorization"] = `Bearer ${accessToken}`
}

export const removeAuthorizationHeader = () => {
  delete client.defaults.headers["authorization"]
}