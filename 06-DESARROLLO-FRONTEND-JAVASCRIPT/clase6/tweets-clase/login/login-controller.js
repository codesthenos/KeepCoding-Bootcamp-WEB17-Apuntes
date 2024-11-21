import { REGEXP } from "../utils/consts.js"
import { loginUser } from "./login-model.js"

export const loginController = form => {
  // obtener datos del formulario
  form.addEventListener("submit", event => {
    event.preventDefault()
    const userEmailElement = document.getElementById('email')
    const passwordElement = document.getElementById('password')
    
    const userEmail = userEmailElement.value
    const password = passwordElement.value

    // validarlos
    // regexp para validar EMAIL
    const emailRegExp = new RegExp(REGEXP.email)
    if (!emailRegExp.test(userEmail)) {
      // notificaciones
      alert('Formato de email incorrecto')
    } else {
      handleLoginUser(userEmail, password)
    }
  })
}
const handleLoginUser = async (userEmail, password) => {
  try {
    const token = await loginUser(userEmail, password)
    window.localStorage.setItem('jwt', token)
    window.location.href = 'http://127.0.0.1:5500/06-DESARROLLO-FRONTEND-JAVASCRIPT/clase6/tweets-clase/index.html'
  } catch (error) {
    alert(error.message)
  }
}