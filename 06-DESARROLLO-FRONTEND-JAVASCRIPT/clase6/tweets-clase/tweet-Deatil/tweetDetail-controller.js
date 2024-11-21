import { getTweet } from "./tweetDetail-model.js"
import { buildTweetDetail } from "./tweetDetail-view.js"

export const tweetDetailController = async ({ element, tweetId }) => {
  try {
    const tweet = await getTweet({ tweetId })
    element.innerHTML = buildTweetDetail({ tweet })
  } catch (error) {
    alert(error.message)
    window.location.href = 'http://127.0.0.1:5500/06-DESARROLLO-FRONTEND-JAVASCRIPT/clase6/tweets-clase/index.html'
  }
}