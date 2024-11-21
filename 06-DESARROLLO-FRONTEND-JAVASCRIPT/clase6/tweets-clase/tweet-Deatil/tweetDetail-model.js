export const getTweet = async ({ tweetId }) => {
  try {
    const response = await fetch(`http://localhost:8000/api/tweets/${tweetId}`)
    const tweet = await response.json()
    if (!response.ok) {
      throw new Error('Recurso no existente')
    }

    return tweet
  } catch (error) {
    throw new Error(error.message)
  }
}