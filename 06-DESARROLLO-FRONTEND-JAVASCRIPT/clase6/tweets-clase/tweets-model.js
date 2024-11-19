// modelo - obtención de datos que necesita nuestra aplicación

// los tweets tienen q venir de SPARREST

export async function getTweets() {
  try {
    const response = await fetch("http://localhost:8000/api/tweets/");

    if (!response.ok) throw new Error('Recurso no existente')
    const tweets = await response.json();
    
    return tweets;
  } catch (error) {
    if (error.message === 'Recurso no existente') throw new Error(error.message)
    throw new Error('Twitter esta fallando, intentelo mas tarde')
  }
}
