const express = require('express');
const hbs = require('hbs');
const app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.send({
        name: 'Sushi2',
        likes: [
            'ice',
            'chalk',
            ]
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        title: 'About Page234',
        desc: 'this is the about page'
    });
});

app.get('/bad', (req, res) => {
    res.send({
        error: 'there is an error2'
    })
})


app.listen(process.env.PORT || 3000, process.env.IP || 'localhost', () => {
    console.log('App has started again on port 3000');
});
