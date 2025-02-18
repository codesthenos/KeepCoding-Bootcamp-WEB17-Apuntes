import { combineReducers, createStore } from "redux";
import * as reducers from "./reducers";
import { useDispatch, useSelector } from "react-redux";
import type { State } from "./reducers";

export default function configureStore(preloadedState: Partial<State>) {
  const rootReducer = combineReducers(reducers);
  const store = createStore(
    rootReducer,
    preloadedState,
    // @ts-expect-error: import devtools extension
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      // @ts-expect-error: import devtools extension
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
  return store;
}

type AppStore = ReturnType<typeof configureStore>;
type AppGetState = AppStore["getState"];
export type RootState = ReturnType<AppGetState>;
type AppDispatch = AppStore["dispatch"];

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
