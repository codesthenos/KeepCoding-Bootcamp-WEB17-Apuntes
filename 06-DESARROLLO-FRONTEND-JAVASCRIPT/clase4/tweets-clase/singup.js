import { signupController } from "./signup/signup-controller.js"

document.addEventListener('DOMContentLoaded', () => {
  const signUpForm = document.getElementById('register-form')
  signupController(signUpForm)
})