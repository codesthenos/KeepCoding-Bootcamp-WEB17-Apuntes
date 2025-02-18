import { createStore } from "redux";

type Increment = {
  type: "increment";
};

type Decrement = {
  type: "decrement";
};

type Actions = Increment | Decrement;

const initalState = 0;

const reducer = (state = initalState, action: Actions) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

export const store = createStore(reducer);

const render = () => console.log(store.getState());
// subsribe nos devuelve una funcion para desuscribirnos
const unsubscribe = store.subscribe(render);

render();

store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
unsubscribe();
store.dispatch({ type: "decrement" });
