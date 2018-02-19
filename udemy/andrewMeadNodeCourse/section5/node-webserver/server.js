const express = require('express');

const app = express();

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
    res.send('about page');
});

app.get('/bad', (req, res) => {
    res.send({
        error: 'there is an error'
    })
})


app.listen(process.env.PORT || 3000, process.env.IP || 'localhost', () => {
    console.log('App has started again');
});
