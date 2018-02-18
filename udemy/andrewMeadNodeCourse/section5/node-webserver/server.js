const express = require('express');

const app = express();


app.get('/', (req, res) => {
    res.send('<h1>hello</h1>');
});

app.listen('0.0.0.0:8080', () => {
    console.log('App has started');
});
