import { createUser } from "./signup-model.js"

export const signupController = form => {
  // obtener datos del formulario
  form.addEventListener("submit", event => {
    event.preventDefault()
    const userEmailElement = document.getElementById('email')
    const passwordElement = document.getElementById('password')
    const confirmPasswordElement = document.getElementById('confirm-pass')
    
    const userEmail = userEmailElement.value
    const password = passwordElement.value
    const confirmPassword = confirmPasswordElement.value

    const errors = []
    // validarlos
    // regexp para validar EMAIL
    const emailRegExp = new RegExp(/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/)
    if (!emailRegExp.test(userEmail)) {
      errors.push('Formato de email incorrecto')
    }
    if (password !== confirmPassword) {
      errors.push('Las passwords no son iguales')
    }
    for (const error of errors) {
      // notificaciones
    }
    // enviarlos a la API para crear el usuario
    if (errors.length === 0) {
      handleCreateUser(userEmail, password)
    } 
  })
}
const handleCreateUser = async (userEmail, password) => {
  try {
    await createUser(userEmail, password)
    window.location.href = 'http://127.0.0.1:5500/06-DESARROLLO-FRONTEND-JAVASCRIPT/clase5/tweets-clase/index.html'
  } catch (error) {
    alert(error.message)
  }
}