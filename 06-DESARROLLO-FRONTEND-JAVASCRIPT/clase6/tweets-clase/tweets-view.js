// cálculo del html que vamos a mostrar al usuario

export const buildTweet = (tweet) => {
  const tweetLink = document.createElement('a');
  tweetLink.setAttribute('href', `http://127.0.0.1:5500/06-DESARROLLO-FRONTEND-JAVASCRIPT/clase6/tweets-clase/tweet-detail.html?id=${tweet.id}`)
  const createdAt = new Date(tweet.updatedAt)
  tweetLink.innerHTML = `
  <div>
    <h2>${tweet.user.username}</h2>
    <span>${tweet.handler ? tweet.handler : ''}</span>
    <span>${tweet.date ? tweet.date : createdAt.toDateString()}</span>
    <p>${tweet.message}</p>
    <p>${tweet.likes ? tweet.likes : ''} likes</p>
  </div>
  `;
  return tweetLink;
}

export function buildEmptyTweetList() {
  return '<h2>No hay tweets disponibles</h2>';
}
