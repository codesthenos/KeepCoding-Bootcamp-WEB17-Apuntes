import type { Tweet } from "../pages/tweets/types";
import { Actions } from "./actions";

export type State = {
  auth: boolean;
  tweets: Tweet[] | null;
};

const defaultState: State = {
  auth: false,
  tweets: null,
};

function auth(state = defaultState.auth, action: Actions): State["auth"] {
  switch (action.type) {
    case "auth/login":
      return true;
    case "auth/logout":
      return false;
    default:
      return state;
  }
}

function tweets(state = defaultState.tweets, action: Actions): State["tweets"] {
  switch (action.type) {
    case "tweets/loaded":
      return action.payload;
    case "tweets/created": {
      const newTweets = state ? [...state, action.payload] : [action.payload];
      return newTweets;
    }
    case "tweets/loaded/id":
      return [action.payload];
    default:
      return state;
  }
}

export default { auth, tweets };

// export const reducer = combineReducers({ auth, tweets });
// Lo de arriba hace esto de abajo
// export function reducer(state = defaultState, action: Actions): State {
//   return {
//     auth: auth(state.auth, action),
//     tweets: tweets(state.tweets, action),
//   };
// }
