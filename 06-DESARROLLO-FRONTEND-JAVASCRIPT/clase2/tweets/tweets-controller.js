// CONTROLADOR - nexo de union entre MODELO y VISTA
import { tweets } from "./tweets-model.js"
import { tweetView, myTweetView } from "./tweets-view.js"

const drawTweets = () => {
  const tweetList = myTweetView(tweets)

  const target = document.querySelector('div')

  target.appendChild(tweetList)
}
drawTweets()

const drawTweetsForEach = () => {
  
  const target = document.querySelector('div')
  
  tweets.forEach(tweet => {
    
    const newTweet = tweetView(tweet)

    target.appendChild(newTweet)
  })
}
drawTweetsForEach()
