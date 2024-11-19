import { buildAuthorizedButton, buildUnAuthorizedButton } from "./session-view.js"

export const sessionController = sessionContainer => {
  const isUserLogged = () => {
    const token = window.localStorage.getItem('jwt')
    // !!tranforma token a boolean
    return !!token
  }
  if (isUserLogged()) {
    // create user button
    sessionContainer.innerHTML = buildAuthorizedButton()
    sessionContainer.addEventListener('click', () => {
      window.localStorage.removeItem('jwt')
      
      // window.location.reload() funciona pero hacemos otra cosa mejor
      sessionController(sessionContainer)
    })
  } else {
    // login and register buttons
    sessionContainer.innerHTML = buildUnAuthorizedButton()
  }
}