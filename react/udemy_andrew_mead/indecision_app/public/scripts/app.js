"use strict";

console.log("App.js is running!");

// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
// live-server public

// JSX - JavaScript XML.
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Indecision App"
  ),
  React.createElement(
    "p",
    null,
    "paragraph from app.js"
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "Item one"
    ),
    React.createElement(
      "li",
      null,
      "Item two"
    )
  )
);

// Create a templateTwo car JSX impression
// div
// h1 -> Andrew Mead
// p -> location
// render templateTwo instead of template.

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
