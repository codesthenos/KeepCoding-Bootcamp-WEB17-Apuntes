import { createTweet } from "./createTweet-model.js"

export const createController = form => {
  // escuchar al evento submit para obtener los datos de cracion del tweet
  form.addEventListener('submit', event => {
    event.preventDefault()
    const textAreaElement = form.querySelector('#tweet-content')
    const tweetMessage = textAreaElement.value

    handleTweetCreation(tweetMessage)
  })
  // crear tweet
  const handleTweetCreation = tweetMessage => {
    const token = window.localStorage.getItem('jwt')
    createTweet(tweetMessage, token)
  }
}