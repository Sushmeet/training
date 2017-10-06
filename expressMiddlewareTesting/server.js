const express = require('express');

var app = express();

app.use(function (req,res, next) {
    console.log(req.method + ' ' + req.url);
    next();
});

app.get('/', function(req, res, next) {
    res.send("root page");
})

app.get('/hello', function(req, res, next) {
    res.status(200).send('hello12');
})

app.listen(1200, function () {
    console.log('Server is logging');
})