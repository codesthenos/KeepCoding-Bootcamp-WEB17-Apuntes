import { tweetsController } from './tweets-controller.js'

document.addEventListener('DOMContentLoaded', async () => {

  const tweetsContainer = document.querySelector('#tweets-container')
  await tweetsController(tweetsContainer)
})