console.log("App.js is running!");

// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
// live-server public

// JSX - JavaScript XML.
let template = (
  <div>
    <h1>Indecision App</h1>
    <p>paragraph from app.js</p>
    <ol>
        <li>Item one</li>
        <li>Item two</li>
    </ol>
  </div>
);

// Create a templateTwo car JSX impression
// div
// h1 -> Andrew Mead
// p -> location
// render templateTwo instead of template.

let appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
