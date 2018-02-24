const express = require('express');
const path = require('path')
const hbs = require('hbs');
const app = express();
const fs = require('fs');


const port = process.env.PORT || 4000;

hbs.registerPartials(path.join(__dirname + '/views/partials'));
app.set('view engine', 'hbs');

// logging middleware. 
app.use((req, res, next) => {
    const now = new Date().toString();
    const log = `${now} ${req.method} ${req.url}`;
    console.log(`${now} ${req.method} ${req.url}`);

    fs.appendFile('server.log', log + '\n', (err) => {
        if (err) {
            console.log('Unable to append to server.log');
        }
    })
    next();
});

// app.use((req, res, next) => {
//     res.render('maintenance.hbs');
// });

app.use(express.static(__dirname + '/public'))

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
})

app.get('/', (req, res) => {
res.render('home-page.hbs', {
    title: 'Home Page',
    desc: 'Welcome to home page',
    currentYear: new Date().getFullYear(),
})
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        title: 'About Page234',
        desc: 'this is the about page',
        currentYear: new Date().getFullYear(),
    });
});

app.get('/bad', (req, res) => {
    res.send({
        error: 'there is an error2'
    })
})


app.listen(port, process.env.IP || 'localhost', () => {
    console.log(`App has started again on port ${port}`);
});
