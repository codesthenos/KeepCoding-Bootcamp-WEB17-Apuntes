// nexo de unión entre el modelo y la vista

import { getTweets } from "./tweets-model.js";
import { buildTweet, buildEmptyTweetList } from "./tweets-view.js";

async function drawTweets(tweets, tweetsContainer) {
  if(!tweets.length) {
    tweetsContainer.innerHTML = buildEmptyTweetList();
  } else {
    tweets.forEach(tweet => {
      const newTweet = buildTweet(tweet);
      tweetsContainer.appendChild(newTweet);
    })
  }
}

export async function showTweets(tweetsContainer) {
  const spinner = document.querySelector('.spinner')
  tweetsContainer.innerHTML = "";

  spinner.classList.toggle('hidden')
  let tweets = []
  try {
    tweets = await getTweets();
  } catch (error) {
    alert(error.message)
  } finally {
    drawTweets(tweets, tweetsContainer);
    spinner.classList.toggle('hidden');
  }
}
