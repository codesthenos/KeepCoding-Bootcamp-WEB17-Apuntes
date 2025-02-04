import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import type { Tweet } from './types'
import { getTweet } from './service'
import Page from '../../components/layaout/Page'

function TweetPage() {
  const { tweetId } = useParams()
  const [tweet, setTweet] = useState<Tweet | null>(null)

  useEffect(() => {
    if (tweetId) {
      getTweet(tweetId)
        .then((tweet) => setTweet(tweet))
        .catch((error) => {
          // usar apiclienterror del profe 404
          console.error(error)
        })
    }
  }, [tweetId])
  return (
    <Page title={`DETAIL tweet id: ${tweetId}`}>
      {tweet ? <p>{tweet.content}</p> : <h2>Loading tweet</h2>}
    </Page>
  )
}
export default TweetPage
