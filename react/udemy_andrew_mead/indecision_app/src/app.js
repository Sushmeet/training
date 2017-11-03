console.log("App.js is running!");

// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
// live-server public

// Create app object title/subtitle 
let app = {
    title: 'Indecision App',
    subtitle: 'english subtitle'
}

// JSX - Javascript XML
let template2 = (
<div>
    <h1>{app.title}</h1>
    <p>This is some paragraph's. {app.subtitle}</p>
    <ol>
        <li>Item One</li>
        <li>Item Two</li>
    </ol>
</div>
);

let user = {
  name: 'John',
  age: 26,
  location: 'Chicago',
}

let template = (
  <div>
    <h1>{user.name.toUpperCase() + '!'}</h1>
    <p>paragraph from app.js file</p>
    <ol>
        <li>User age is  {user.age}</li>
        <li>{user.location}</li>
    </ol>
  </div>
);

let appRoot = document.getElementById("app");

ReactDOM.render(template2, appRoot);
