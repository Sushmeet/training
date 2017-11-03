console.log("App.js is running!");

// Create app object title/subtitle 
let app = {
    title: 'Indecision App',
    subtitle: 'english subtitle',
    options: ['One', 'Two']
}

// only render the subtitle (and p tag) if subtitle exists
// render new p tag - if optionas .length > 0 'your options' 'No Options'

// JSX - Javascript XML
let template2 = (
<div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>Subtitle: {app.subtitle} </p>}
    {(app.options && app.options.length > 0) ? <p>Your options</p> : <p>No Options</p> }
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

const getLocation = (location) => {
    return location ? <li>location: {location}</li> : undefined;
}

let template = (
  <div>
    <h1>{user.name.toUpperCase() + '!'}</h1>
    <p>paragraph from app.js file</p>
    <ol>
        {(user.age && user.age >= 18) && <li>Age: {user.age} </li>}
        {getLocation(user.location)}
    </ol>
  </div>
);

let appRoot = document.getElementById("app");

ReactDOM.render(template2, appRoot);
