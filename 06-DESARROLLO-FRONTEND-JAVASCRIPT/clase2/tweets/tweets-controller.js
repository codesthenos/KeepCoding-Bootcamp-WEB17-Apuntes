// CONTROLADOR - nexo de union entre MODELO y VISTA
import { tweets } from "./tweets-model.js"
import { tweetView, myTweetView } from "./tweets-view.js"

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
const loadTweetsButtonHandler = () => {
  drawTweets()
  drawTweetsForEach()
}

const loadTweetButton = document.getElementById(loadButtonId)

loadTweetButton.addEventListener('click', loadTweetsButtonHandler)
// show tweets button
const showTweetButtonHandler = () => {
  const ul = document.querySelector('ul')
  if (ul) ul.toggleAttribute('hidden')
  Array.from(document.querySelectorAll('div')).map(div => div.toggleAttribute('hidden'))
}

const showTweetButton = document.getElementById(showButtonId)

showTweetButton.addEventListener('click', showTweetButtonHandler)
