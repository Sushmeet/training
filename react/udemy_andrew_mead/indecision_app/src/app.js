console.log("App.js is running!");

// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
// live-server public

// JSX - JavaScript XML.
let userName = 'Andrew';
let userAge = 26;
let userLocation = 'Chicago'

let user = {
  name: 'John',
  age: 26,
  location: 'Chicago',
}

let template = (
  <div>
    <h1>{user.name.toUpperCase() + '!'}</h1>
    <p>paragraph from app.js</p>
    <ol>
        <li>User age is  {user.age}</li>
        <li>{user.location}</li>
    </ol>
  </div>
);

let appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
