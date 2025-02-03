import { useParams } from 'react-router-dom'
import Header from '../../components/layaout/Header'
import { useEffect, useState } from 'react'
import type { Tweet } from './types'
import { getTweet } from './service'

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
    <>
      <Header />
      {tweet ? <p>{tweet.content}</p> : <h2>Loading tweet</h2>}
    </>
  )
}
export default TweetPage
