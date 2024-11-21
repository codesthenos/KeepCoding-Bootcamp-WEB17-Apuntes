import { tweetDetailController } from "./tweet-Deatil/tweetDetail-controller.js"

document.addEventListener('DOMContentLoaded', () => {
  const searchParams = new URLSearchParams(window.location.search)
  const tweetId = searchParams.get('id')

  const tweetDetailContainer = document.getElementById('tweet-detail-container')
  tweetDetailController({ element: tweetDetailContainer, tweetId })
})