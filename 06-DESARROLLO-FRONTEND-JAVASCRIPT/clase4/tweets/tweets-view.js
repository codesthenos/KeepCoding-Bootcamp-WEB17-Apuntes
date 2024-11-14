// VISTA - genera HTML que mostramos
export const tweetView = tweet => {
  const newTweet = document.createElement('div')

  newTweet.innerHTML = `
  <h3>User: ${tweet.handler}</h3>
  <h4>Date: ${tweet.date}</h4>
  <p>Message: ${tweet.message}</p>
  <p>Likes: ${tweet.likes}</p>
  `
  return newTweet
}

export const myTweetView = tweets => {
  // creo html element que quiero renderizar
  const tweetList = document.createElement('ul')
  // quito los puntos por defecto del ul
  tweetList.style.listStyle = 'none'
  // creo string de html que va a rellenar el html element
  const stringTweetList = tweets.map(tweet => `
    <li>
      <h3>User: ${tweet.handler}</h3>
      <h4>Date: ${tweet.date}</h4>
      <p>Message: ${tweet.message}</p>
      <p>Likes: ${tweet.likes}</p>
    </li>
    `).join('\n')
  // meto el html en forma de string en el html element
  tweetList.innerHTML = `
  <h2>Tweets</h2>

  ${stringTweetList}
  `
  return tweetList
}

export const buildNoTweetsH2 = () => {
  /* devolver un HTMLElement (para usar appendChild())

  const heading2 = document.createElement('h2')
  heading2.textContent = 'No tweets'
  return heading2
  */
 // devuelvo cadena de texto para usar luego el .innerHTML
 return '<h2>No tweets</h2>'
}