import { client } from '../../api/client'
import type { tweet } from './types'

const tweetsPathname = 'api/tweets'

export const getLatestTweets = async () => {
  const tweets: tweet[] = await client.get(tweetsPathname)

  return tweets
}