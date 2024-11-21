import { createController } from "./createTweet/createTweet-controller.js"
import { isUserLogged } from "./utils/auth.js"

if (!isUserLogged()) {
  window.location.href = 'http://127.0.0.1:5500/06-DESARROLLO-FRONTEND-JAVASCRIPT/clase6/tweets-clase/index.html'
}

document.addEventListener('DOMContentLoaded', () => {
  const createTweetForm = document.getElementById('create-tweet-form')
  createController(createTweetForm)
})