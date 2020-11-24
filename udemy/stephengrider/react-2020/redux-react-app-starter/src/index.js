/* 
Set up the react and the redux sides of the 
app
Provider tag should be at the very top
Provider should be able to communicate
with the combined Reducers.
*/

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";

import App from "./components/App";

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
