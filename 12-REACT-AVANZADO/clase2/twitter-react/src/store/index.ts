import { createStore } from "redux";

type Increment = {
  type: "increment";
  payload: number;
};

type Decrement = {
  type: "decrement";
};

type Actions = Increment | Decrement;

const initalState = 0;

const reducer = (state = initalState, action: Actions) => {
  switch (action.type) {
    case "increment":
      return state + action.payload;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

export const store = createStore(reducer);

const render = () => console.log(store.getState());

const unsubscribe = store.subscribe(render);

render();

store.dispatch({ type: "increment", payload: 2 });
store.dispatch({ type: "increment", payload: 3 });
store.dispatch({ type: "decrement" });
unsubscribe();
store.dispatch({ type: "decrement" });
