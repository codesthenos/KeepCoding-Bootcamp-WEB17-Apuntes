const tweets = [{
  handler: '@usuario1',
  date: new Date().toLocaleDateString(),
  message: 'Eligendi fugiat veniam a neque omnis doloribus sequi porro expedita ullam excepturi.',
  likes: 40,
},
{
  handler: '@usuario2',
  date: new Date().toLocaleDateString(),
  message: 'Laborum ad animi officia dolore nisi necessitatibus a porro! Odit!',
  likes: 3,
},
{
  handler: '@usuario3',
  date: new Date().toLocaleDateString(),
  message: 'Ayer estuve en le parque y me lo pasé genial',
  likes: 34,
},
{
  handler: '@usuario4',
  date: new Date().toLocaleDateString(),
  message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  likes: 400,
}];

const drawTweets = () => {
  // creo html element que quiero renderizar
  const tweetList = document.createElement('ul')
  // creo string de html que va a rellenar el html element
  const stringTweetList = tweets.map(tweet => `
    <li style="list-style: none;">
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
  // localizo elemento del DOM donde quiero meter el html element que he creado
  const target = document.querySelector('div')
  // meto el html element creado en el elemento del DOM encontrado
  target.appendChild(tweetList)
}

drawTweets();

const drawTweetsForEach = () => {
  
  tweets.forEach(tweet => {

    const newTweet = document.createElement('div')

    newTweet.innerHTML = `
    <h3>User: ${tweet.handler}</h3>
    <h4>Date: ${tweet.date}</h4>
    <p>Message: ${tweet.message}</p>
    <p>Likes: ${tweet.likes}</p>
    `

    const target = document.querySelector('div')

    target.appendChild(newTweet)
  })
}

drawTweetsForEach()