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

// create a global redux store, to house the global state of the applciation.
const store = createStore(reducer);

// Initial State
console.log("Initial State:", store.getState());

const unscubscribe = store.subscribe(() => console.log('Updated State:', store.getState()));

// dispatch actions
store.dispatch(incrementAction());
store.dispatch(incrementAction());

unscubscribe();
store.dispatch(incrementAction());
