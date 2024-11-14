// modelo - obtención de datos que necesita nuestra aplicación

// los tweets tienen q venir de SPARREST

export async function getTweets() {
  const response = await fetch("http://localhost:8000/api/tweets");
  const tweets = await response.json();

  return tweets;
}
