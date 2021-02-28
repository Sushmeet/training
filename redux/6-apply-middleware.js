const { createStore, applyMiddleware } = require("redux");

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

// middleware is a function that returns another function
const logger = ({ getState }) => {
  return (next) => (action) => {
    console.log("Middleware State:", getState(), "Action object:", action);
    const value = next(action);
    return value;
  };
};

const store = createStore(reducer, applyMiddleware(logger));
// const store = createStore(reducer);

store.dispatch(incrementAction());
console.log('Store getstate val:', store.getState());
