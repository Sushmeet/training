const { createStore, bindActionCreators } = require("redux");

const initialState = {
  value: 1,
};

// Action Creators
const incrementAction = () => {
  return {
    type: "Increment/Count",
  };
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

const store = createStore(reducer);

store.dispatch(incrementAction());

const dispatchAdd = bindActionCreators(incrementAction, store.dispatch);
dispatchAdd(); // so line31 done. dispatch the action for you.


console.log(store.getState());
