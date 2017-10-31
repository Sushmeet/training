'use strict';

console.log("App.js is running!");

// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
// live-server public

// JSX - JavaScript XML.
var userName = 'Andrew';
var userAge = 26;
var userLocation = 'Chicago';

var user = {
  name: 'John',
  age: 26,
  location: 'Chicago'
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name.toUpperCase() + '!'
  ),
  React.createElement(
    'p',
    null,
    'paragraph from app.js'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'User age is  ',
      user.age
    ),
    React.createElement(
      'li',
      null,
      user.location
    )
  )
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
