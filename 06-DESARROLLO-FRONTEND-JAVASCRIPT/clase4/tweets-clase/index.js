import { notificationController } from './notification-controller.js'
import { tweetsController } from './tweets-controller.js'

document.addEventListener('DOMContentLoaded', () => {

  const tweetsContainer = document.querySelector('#tweets-container')
  const notificationContainer = document.querySelector('#notifications-container')

  tweetsController(tweetsContainer)
  const { showNotification } = notificationController(notificationContainer)
  
  tweetsContainer.addEventListener("loading-tweets-info", (event) => {
    showNotification(event.detail.message, event.detail.type)
  })
})