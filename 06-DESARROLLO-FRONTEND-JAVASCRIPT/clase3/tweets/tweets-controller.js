// CONTROLADOR - nexo de union entre MODELO y VISTA
import { fecthedTweets } from "./tweets-model.js"
import { tweetView, myTweetView } from "./tweets-view.js"

const tweets = await fecthedTweets()

const showButtonId = 'show-tweets'
const loadButtonId = 'load-tweets'
// draw tweets profe
const drawTweets = () => {
  const tweetList = myTweetView(tweets)

  const target = document.querySelector('div')

  target.appendChild(tweetList)
}
// draw tweets mio
const drawTweetsForEach = () => {
  
  const target = document.querySelector('div')
  
  tweets.forEach(tweet => {
    
    const newTweet = tweetView(tweet)

    target.appendChild(newTweet)
  })
}
// load tweets button
const loadTweetButton = document.getElementById(loadButtonId)

const loadTweetsButtonHandler = () => {
  const ul = document.querySelector('ul')
  if (!ul) {
    loadTweetButton.setAttribute('disabled', true)
    drawTweets()
    drawTweetsForEach()
  }
}

loadTweetButton.addEventListener('click', loadTweetsButtonHandler)
// show tweets button
const showTweetButton = document.getElementById(showButtonId)

const showTweetButtonHandler = () => {
  const ul = document.querySelector('ul')
  if (ul) ul.toggleAttribute('hidden')
  Array.from(document.querySelectorAll('div')).map(div => div.toggleAttribute('hidden'))
  showTweetButton.textContent = ul.hasAttribute('hidden') ? 'Hide tweets' : 'Show tweets'
}

showTweetButton.addEventListener('click', showTweetButtonHandler)
