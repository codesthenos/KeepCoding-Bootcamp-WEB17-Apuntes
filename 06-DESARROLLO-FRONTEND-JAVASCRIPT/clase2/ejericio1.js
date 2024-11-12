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
  const tweetList = document.createElement('ul')

  const stringTweetList = tweets.map(tweet => `
    <li style="list-style: none;">
      <h3>User: ${tweet.handler}</h3>
      <h4>Date: ${tweet.date}</h4>
      <p>Message: ${tweet.message}</p>
      <p>Likes: ${tweet.likes}</p>
    </li>
    `).join('\n')

  tweetList.innerHTML = `
  <h2>Tweets</h2>

  ${stringTweetList}
  `

  const target = document.querySelector('div')
  target.appendChild(tweetList)
}

drawTweets();