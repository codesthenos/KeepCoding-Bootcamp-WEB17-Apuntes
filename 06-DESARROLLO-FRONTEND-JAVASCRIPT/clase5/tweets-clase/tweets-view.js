// cálculo del html que vamos a mostrar al usuario

export const buildTweet = (tweet) => {
  const newTweet = document.createElement('div');
  newTweet.innerHTML = `
    <span>${tweet.handler}</span>
    <span>${tweet.date}</span>
    <p>${tweet.message}</p>
    <p>${tweet.likes} likes</p>
  `;
  return newTweet;
}

export function buildEmptyTweetList() {
  return '<h2>No hay tweets disponibles</h2>';
}
