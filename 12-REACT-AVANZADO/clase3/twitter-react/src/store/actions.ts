import type { Tweet } from "../pages/tweets/types";

type AuthLogin = {
  type: "auth/login";
};

type AuthLogout = {
  type: "auth/logout";
};

type TweetsLoaded = {
  type: "tweets/loaded";
  payload: Tweet[];
};

type TweetsLoadedId = {
  type: "tweets/loaded/id";
  payload: Tweet;
};

type TweetsCreated = {
  type: "tweets/created";
  payload: Tweet;
};

export type Actions =
  | AuthLogin
  | AuthLogout
  | TweetsLoaded
  | TweetsCreated
  | TweetsLoadedId;

export const authLogin = (): AuthLogin => ({
  type: "auth/login",
});

export const authLogout = (): AuthLogout => ({
  type: "auth/logout",
});

export const TweetsLoaded = (tweets: Tweet[]): TweetsLoaded => ({
  type: "tweets/loaded",
  payload: tweets,
});

export const TweetsCreated = (tweet: Tweet): TweetsCreated => ({
  type: "tweets/created",
  payload: tweet,
});

export const TweetsLoadedId = (tweet: Tweet): TweetsLoadedId => ({
  type: "tweets/loaded/id",
  payload: tweet,
});
