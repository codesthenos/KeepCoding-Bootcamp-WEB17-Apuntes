import { client, removeAuthorizationHeader, setAuthorizationHeader } from "../../api/client"
import storage from "../../utils/storage"
import type { Credentials, Login } from "./types"

export const login = async (credentials: Credentials) => {
  const response = await client.post<Login>('auth/login', credentials)

  const { accessToken } = response

  storage.set('auth', accessToken)

  setAuthorizationHeader(accessToken)
}

export const logout = async () => {
  storage.remove('auth')
  removeAuthorizationHeader()
}