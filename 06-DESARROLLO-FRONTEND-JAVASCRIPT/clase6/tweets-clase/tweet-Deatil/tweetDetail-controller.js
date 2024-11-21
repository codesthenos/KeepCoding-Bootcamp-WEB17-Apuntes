import { getCurrentUserInfo } from "../auth/auth-model.js"
import { getTweet, removeTweet } from "./tweetDetail-model.js"
import { buildDeleteButton, buildTweetDetail } from "./tweetDetail-view.js"

export const tweetDetailController = async ({ element, tweetId }) => {
  try {
    const tweet = await getTweet({ tweetId })

    const tweetOwner = tweet.user.id
    const user = await getCurrentUserInfo()

    element.innerHTML = buildTweetDetail({ tweet })

    if (tweetOwner === user.id) {
      const removeButton = buildDeleteButton()
      element.appendChild(removeButton)
      removeButton.addEventListener('click', async () => {
        const shouldRemove = confirm('Seguro de BORRAR el tweet')
        if (shouldRemove) {
          await removeTweet({ tweetId: tweet.id })
          window.location.href = 'http://127.0.0.1:5500/06-DESARROLLO-FRONTEND-JAVASCRIPT/clase6/tweets-clase/index.html'
        }
      })
    }

  } catch (error) {
    alert(error.message)
    window.location.href = 'http://127.0.0.1:5500/06-DESARROLLO-FRONTEND-JAVASCRIPT/clase6/tweets-clase/index.html'
  }
}
