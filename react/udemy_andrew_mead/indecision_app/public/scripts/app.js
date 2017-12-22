'use strict';

console.log("App.js is running!");

// Create app object title/subtitle 
var app = {
    title: 'Indecision App',
    subtitle: 'english subtitle',
    options: ['One', 'Two']

    // only render the subtitle (and p tag) if subtitle exists
    // render new p tag - if optionas .length > 0 'your options' 'No Options'

    // JSX - Javascript XML
};var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        'Subtitle: ',
        app.subtitle,
        ' '
    ),
    app.options && app.options.length > 0 ? React.createElement(
        'p',
        null,
        'Your options'
    ) : React.createElement(
        'p',
        null,
        'No Options'
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

var getLocation = function getLocation(location) {
    return location ? React.createElement(
        'li',
        null,
        'location: ',
        location
    ) : undefined;
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
        user.age && user.age >= 18 && React.createElement(
            'li',
            null,
            'Age: ',
            user.age,
            ' '
        ),
        getLocation(user.location)
    )
);

var appRoot = document.getElementById("app");

ReactDOM.render(template2, appRoot);
