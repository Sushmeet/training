// reference https://redux.js.org/recipes/structuring-reducers/initializing-state#combined-reducers

const { combineReducers, createStore } = require("redux");
const initialState = {
  value: 1,
};

// Reducers
const counter = (state = initialState, action) => {
  if (action.type === "Increment/Count") {
    return {
      ...state,
      value: state.value + 1,
    };
  } else if (action.type === "Decrement/Count") {
    return {
      ...state,
      value: state.value - 1,
    };
  }
  return state;
};
const todo = (state = { task: "groceries" }, action) => {
  return state;
};
const userTratis = (
  state = {
    audiences: {
      fba: true,
    },
  },
  action
) => state;

const reducer = combineReducers({
  counter,
  todo,
  userTratis,
});

const store = createStore(reducer); // creates your global store with keys counter etccc...

console.log("Global Applciatin State:", store.getState());
/*
gives you a global state object based on the stuff in 
combineReducers.

counter: {
    value: 1
}

*/
