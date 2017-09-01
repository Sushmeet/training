const express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.send('hi');
})

app.get('/home', function(req, res){
    var obj = {
        name: 'Sushi',
        age: 10
    };

    res.send(obj);
});

app.listen(1234, function () {
    console.log('server is running');
})

module.exports.app = app;