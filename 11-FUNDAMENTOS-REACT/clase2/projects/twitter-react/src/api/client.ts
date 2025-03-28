import axios from 'axios'

export const client = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL
})

client.interceptors.response.use(res => res.data)