import { client } from '../../api/client'
import type { Tweet } from './types'

const tweetsPathname = 'api/tweets'

export const getLatestTweets = async () => {
  const tweets = await client.get<Tweet[]>(tweetsPathname)

  return tweets.data
}

export const createTweet = async (tweet: { content: string }) => {
  const response = await client.post<Tweet>(tweetsPathname, tweet)
  return response.data
}