// cálculo del html que vamos a mostrar al usuario

export const buildTweet = (tweet) => {
  const newTweet = document.createElement('div');
  const createdAt = new Date(tweet.updatedAt)
  newTweet.innerHTML = `
    <span>${tweet.handler ? tweet.handler : ''}</span>
    <span>${tweet.date ? tweet.date : createdAt.toDateString()}</span>
    <p>${tweet.message}</p>
    <p>${tweet.likes ? tweet.likes : ''} likes</p>
  `;
  return newTweet;
}

export function buildEmptyTweetList() {
  return '<h2>No hay tweets disponibles</h2>';
}
