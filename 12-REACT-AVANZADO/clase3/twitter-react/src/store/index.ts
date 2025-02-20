import { combineReducers, createStore } from "redux";
import * as reducers from "./reducers";
import { useDispatch, useSelector } from "react-redux";
import { devToolsEnhancer } from "@redux-devtools/extension";

export default function configureStore(
  preloadedState: Partial<reducers.State>,
) {
  const rootReducer = combineReducers(reducers);
  const store = createStore(
    rootReducer,
    preloadedState,
    devToolsEnhancer({
      actionsAllowlist: [
        "auth/login",
        "auth/logout",
        "tweets/loaded",
        "tweets/created",
        "tweets/loaded/id",
      ],
    }),
  );
  return store;
}

type AppStore = ReturnType<typeof configureStore>;
type AppGetState = AppStore["getState"];
export type RootState = ReturnType<AppGetState>;
type AppDispatch = AppStore["dispatch"];

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
