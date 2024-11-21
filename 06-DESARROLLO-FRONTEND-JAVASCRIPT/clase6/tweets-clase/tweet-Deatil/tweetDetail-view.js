export const buildTweetDetail = ({ tweet }) => {
  const createdAt = new Date(tweet.updatedAt)
  return `
  <div>
    <span>${tweet.handler ? tweet.handler : ''}</span>
    <span>${tweet.date ? tweet.date : createdAt.toDateString()}</span>
    <p>${tweet.message}</p>
    <p>${tweet.likes ? tweet.likes : ''} likes</p>
  </div>
  `
}