const { createStore } = require("redux");

const initialState = {
  value: 1,
};

// Reducers
const reducer = (state = initialState, action) => {
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

// Action Creators
const incrementAction = () => {
  return {
    type: "Increment/Count",
  };
};
// Action Creators
const decrementAction = () => {
  return {
    type: "Decrement/Count",
  };
};

const store = createStore(reducer);

// Initial State
console.log("Initial State", store.getState());
// Increment value in state
store.dispatch(incrementAction());
console.log("State incremented by 1", store.getState());
// Decerment value in State
store.dispatch(decrementAction());
console.log("State decremented by 1", store.getState());




// a store has dispatch, subscribe, getState, replaceReducer
/*
store.getState() this will give us the most up to date state and 
we would pass this along as props to React. And react would then go ahead
and do it's thing, and re-render the UI, and show us the latest UI
based on teh changes.

So redux will basically handle the state for u. 
*/