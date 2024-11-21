export const getTweet = async ({ tweetId }) => {
  try {
    const response = await fetch(`http://localhost:8000/api/tweets/${tweetId}?_expand=user`)
    const tweet = await response.json()
    if (!response.ok) {
      throw new Error('Recurso no existente')
    }

    return tweet
  } catch (error) {
    throw new Error(error.message)
  }

}

export const removeTweet = async ({ tweetId }) => {
  const token = localStorage.getItem('jwt')
  try {
    await fetch(`http://localhost:8000/api/tweets/${tweetId}`,{
      method: 'DELETE',
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
  } catch (error) {
    alert(error.message)
  }
}