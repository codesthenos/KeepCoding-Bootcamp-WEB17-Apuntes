import { notificationController } from './notification-controller.js'
import { tweetsController } from './tweets-controller.js'

document.addEventListener('DOMContentLoaded', async () => {

  const tweetsContainer = document.querySelector('#tweets-container')
  const notificationContainer = document.querySelector('#notifications-container')

  await tweetsController(tweetsContainer)
  const { showNotification } = notificationController(notificationContainer)
  
  tweetsContainer.addEventListener("loading-tweets-error", () => {
    showNotification()
  })
})