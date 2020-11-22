const { createStore, combineReducers } = require("redux");

console.clear();

// People dropping off a form (Action Creators)
const createPolicy = (name, amount) => {
  return {
    // Action (a form in our analogy)
    type: "CREATE_POLICY",
    payload: {
      name,
      amount,
    },
  };
};

const deletePolicy = (name) => {
  return {
    type: "DELETE_POLICY",
    payload: {
      name,
    },
  };
};

const createClaim = (name, amountOfMoneyToCollect) => {
  return {
    type: "CREATE_CLAIM",
    payload: {
      name,
      amountOfMoneyToCollect,
    },
  };
};

// Reducers
// they are like depts and they handle the claims based on the type.

const claimsHistory = (oldListOfClaims = [], action) => {
  if (action.type === "CREATE_CLAIM") {
    return [...oldListOfClaims, action.payload];
  }

  return oldListOfClaims;
};

const accounting = (bagOfMoney = 100, action) => {
  if (action.type === "CREATE_CLAIM") {
    return bagOfMoney - action.payload.amountOfMoneyToCollect;
  } else if (action.type === "CREATE_POLICY") {
    return bagOfMoney + action.payload.amount;
  }

  return bagOfMoney;
};

const policies = (listOfPolicies = [], action) => {
  if (action.type === "CREATE_POLICY") {
    return [...listOfPolicies, action.payload.name];
  } else if (action.type === "DELETE_POLICY") {
    return listOfPolicies.filter((name) => name !== action.payload.name);
  }

  return listOfPolicies;
};

// combine all reducers
const departments = combineReducers({
  claimsHistory,
  accounting,
  policies,
});

// pass the reducers to the store
const store = createStore(departments);

store.dispatch(createPolicy("Alex", 20));
store.dispatch(createPolicy("john", 40));
store.dispatch(createPolicy("Bob", 40));

store.dispatch(createClaim("Bob", 20));
store.dispatch(deletePolicy('Bob'))

console.log("store getstate", store.getState());
