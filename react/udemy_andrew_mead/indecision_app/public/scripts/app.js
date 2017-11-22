"use strict";

console.log("App.js is running!");
//Architecture
// Declared 3 functions
// Declared 3 buttons
// Just render it.

var count = 0;
var appRoot = document.getElementById("app");

var addOne = function addOne() {
  console.log('addone');
  count++;
  callbambi();
};
var minusOne = function minusOne() {
  console.log('minus one');
  count--;
  callbambi();
};
var reset = function reset() {
  console.log('reset');
  count = 0;
  callbambi();
};

var callbambi = function callbambi() {
  var template2 = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Count: ",
      count
    ),
    React.createElement(
      "button",
      { onClick: addOne },
      "Button"
    ),
    React.createElement(
      "button",
      { onClick: minusOne },
      "-1"
    ),
    React.createElement(
      "button",
      { onClick: reset },
      "reset"
    )
  );

  ReactDOM.render(template2, appRoot);
};

callbambi();
