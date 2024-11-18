// MODELO - datos que necesita nuestra aplicacion ya sea un array aqui, o proviniente de un fetch

export const tweets = [{
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

export const fecthedTweets = async () => {
  const tweets =  await fetch('http://localhost:8000/api/tweets/')
    .then(res => res.json())
  
  return tweets
}