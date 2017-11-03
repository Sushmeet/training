'use strict';

console.log("App.js is running!");

// Create app object title/subtitle 
var app = {
    title: 'Indecision App',
    subtitle: 'english subtitle'

    // JSX - Javascript XML
};var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        'This is some paragraph\'s. ',
        app.subtitle
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item One'
        ),
        React.createElement(
            'li',
            null,
            'Item Two'
        )
    )
);

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
        'paragraph from app.js file'
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

ReactDOM.render(template2, appRoot);
