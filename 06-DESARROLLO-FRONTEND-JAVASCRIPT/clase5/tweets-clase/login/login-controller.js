import { loginUser } from "./login-model.js"

export const loginController = form => {
  // obtener datos del formulario
  form.addEventListener("submit", event => {
    event.preventDefault()
    const userEmailElement = document.getElementById('email')
    const passwordElement = document.getElementById('password')
    
    const userEmail = userEmailElement.value
    const password = passwordElement.value

    const errors = []
    // validarlos
    // regexp para validar EMAIL
    const emailRegExp = new RegExp(/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/)
    if (!emailRegExp.test(userEmail)) {
      errors.push('Formato de email incorrecto')
    }
    for (const error of errors) {
      // notificaciones
    }
    // enviarlos a la API para crear el usuario
    if (errors.length === 0) {
      handleLoginUser(userEmail, password)
    } 
  })
}
const handleLoginUser = async (userEmail, password) => {
  try {
    await loginUser(userEmail, password)
    window.location.href = 'http://127.0.0.1:5500/06-DESARROLLO-FRONTEND-JAVASCRIPT/clase5/tweets-clase/index.html'
  } catch (error) {
    alert(error.message)
  }
}