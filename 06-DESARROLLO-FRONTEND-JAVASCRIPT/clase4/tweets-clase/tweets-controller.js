// nexo de unión entre el modelo y la vista

import { getTweets } from "./tweets-model.js";
import { buildTweet, buildEmptyTweetList } from "./tweets-view.js";

function drawTweets(tweets, tweetsContainer) {
  if(!tweets.length) {
    tweetsContainer.innerHTML = buildEmptyTweetList();
  } else {
    tweets.forEach(tweet => {
      const newTweet = buildTweet(tweet);
      tweetsContainer.appendChild(newTweet);
    })
  }
}

const fireEvent = (message, type, element) => {
  // CREO EVENTO CUSTOM
  const customEventSuccess = new CustomEvent('loading-tweets-info', {
    detail: { message, type }
  });
  // DISPARO EL CUSTOM EVENT
  element.dispatchEvent(customEventSuccess)
  return
}

export async function tweetsController(tweetsContainer) {
  const spinner = document.querySelector('.spinner')
  tweetsContainer.innerHTML = "";

  spinner.classList.toggle('hidden')
  let tweets = []
  try {
    tweets = await getTweets();
    drawTweets(tweets, tweetsContainer);
    // DISPARO EL CUSTOM EVENT
    fireEvent('TWEETS CARGADOS', 'success', tweetsContainer)
  } catch (error) {
    // DISPARO EL CUSTOM EVENT
    fireEvent(error.message, 'error', tweetsContainer)
  } finally {
    spinner.classList.toggle('hidden');
  }
}
