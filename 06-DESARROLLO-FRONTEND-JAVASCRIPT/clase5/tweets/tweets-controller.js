// CONTROLADOR - nexo de union entre MODELO y VISTA
import { fecthedTweets } from "./tweets-model.js"
import { tweetView, myTweetView, buildNoTweetsH2 } from "./tweets-view.js"


const showButtonId = 'show-tweets'
const loadButtonId = 'load-tweets'
// draw tweets profe
const drawTweets = async  () => {
  const target = document.querySelector('div')

  
  const spinner = document.querySelector('.loader')
  spinner.classList.toggle('hidden')
  
  const tweets = await fecthedTweets()
  
  spinner.classList.toggle('hidden')
  const tweetList = myTweetView(tweets)
  
  target.appendChild(tweetList)
}
// draw tweets mio
const drawTweetsForEach = async () => {
  const target = document.querySelector('div')
  
  const tweets = await fecthedTweets()

  if (!tweets.length) return target.innerHTML = buildNoTweetsH2()
  
    target.innerHTML = ''
  
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
