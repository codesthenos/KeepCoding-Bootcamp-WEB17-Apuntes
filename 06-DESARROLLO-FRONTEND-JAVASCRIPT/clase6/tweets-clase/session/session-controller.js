import { isUserLogged } from "../utils/auth.js"
import { buildAuthorizedButton, buildUnAuthorizedButton } from "./session-view.js"

export const sessionController = sessionContainer => {
  if (isUserLogged()) {
    // create user button
    sessionContainer.innerHTML = buildAuthorizedButton()
    const logoutbutton = sessionContainer.querySelector('button')
    logoutbutton.addEventListener('click', () => {
      window.localStorage.removeItem('jwt')
      
      // window.location.reload() refresca la pantalla como f5, de la otra manera no se hace refresh
      sessionController(sessionContainer)
    })
  } else {
    // login and register buttons
    sessionContainer.innerHTML = buildUnAuthorizedButton()
  }
}