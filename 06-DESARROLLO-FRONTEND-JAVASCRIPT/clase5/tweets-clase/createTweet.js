import { createController } from "./createTweet/createTweet-controller.js"

document.addEventListener('DOMContentLoaded', () => {
  const createTweetForm = document.getElementById('create-tweet-form')
  createController(createTweetForm)
})