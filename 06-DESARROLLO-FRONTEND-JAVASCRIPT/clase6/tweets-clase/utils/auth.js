export const isUserLogged = () => {
  const token = window.localStorage.getItem('jwt')
  // !!tranforma token a boolean
  return !!token
}