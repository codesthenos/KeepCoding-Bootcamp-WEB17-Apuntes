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

export async function tweetsController(tweetsContainer) {
  const spinner = document.querySelector('.spinner')
  tweetsContainer.innerHTML = "";

  spinner.classList.toggle('hidden')
  let tweets = []
  try {
    tweets = await getTweets();
  } catch (error) {
    // CREO EVENTO CUSTOM
    const customEvent = new CustomEvent('loading-tweets-error', {
      detail: error.message
    });
    // DISPARO EL CUSTOM EVENT
    tweetsContainer.dispatchEvent(customEvent)
  } finally {
    drawTweets(tweets, tweetsContainer);
    spinner.classList.toggle('hidden');
  }
}
