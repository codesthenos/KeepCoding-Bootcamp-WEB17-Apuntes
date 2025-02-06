import { client } from "../../api/client";
import type { Tweet, TweetContent } from "./types";

const tweetsUrl = "/api/tweets";

export const getLatestTweets = async () => {
  const url = `${tweetsUrl}?_expand=user&_embed=likes&_sort=updatedAt&_order=desc`;
  const response = await client.get<Tweet[]>(url);
  // validate with zod
  return response.data;
};

export const createTweet = async (tweet: TweetContent) => {
  const response = await client.post<Tweet>(tweetsUrl, tweet);
  // validate with zod
  return response.data;
};

export const getTweet = async (tweetId: string) => {
  const url = `${tweetsUrl}/${tweetId}`;
  const response = await client.get<Tweet>(url);
  // validate with zod
  return response.data;
};
