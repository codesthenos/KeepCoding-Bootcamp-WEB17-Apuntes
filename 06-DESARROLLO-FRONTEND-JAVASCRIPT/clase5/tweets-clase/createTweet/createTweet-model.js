export const createTweet = async (tweetMessage, token) => {
  await fetch('http://localhost:8000/api/tweets', {
    method: "POST",
    body: JSON.stringify({
      message: tweetMessage
    }),
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  })
}