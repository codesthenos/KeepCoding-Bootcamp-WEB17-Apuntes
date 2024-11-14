// nexo de unión entre el modelo y la vista

import { getTweets } from "./tweets-model.js";
import { buildTweet, buildEmptyTweetList } from "./tweets-view.js";

async function showTweets() {
  const tweetsContainer = document.querySelector('#tweets-container');
  const spinner = document.querySelector('.spinner')
  tweetsContainer.innerHTML = "";

  spinner.classList.toggle('hidden')
  const tweets = await getTweets();
  spinner.classList.toggle('hidden');

  if(!tweets.length) {
    tweetsContainer.innerHTML = buildEmptyTweetList();
  } else {
    tweets.forEach(tweet => {
      const newTweet = buildTweet(tweet);
      tweetsContainer.appendChild(newTweet);
    })
  }

}

document.addEventListener("DOMContentLoaded", showTweets);
