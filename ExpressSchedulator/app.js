'use strict';

var express = require('express');
var app = express();

// here are the actual routres

app.get('/', function(request, response) {
        response.send('Hi There');
});

app.get('/bye', function(request, response) {
        response.send('goodbye');
});

app.get('/dog', function(request, response) {
    response.send('woof');
});

app.get('/myuni/:universityId/universities/:studentId/students', function(request, response) {
    console.log(request.params);
    response.send('The universityId is ' + request.params.universityId);
});

// runs in the end, should only be in the end.
app.get('*', function(request, response) {
    response.send("The url route does not exist");
})
// In express we have to write code
// to tell it to listen for the requests.
app.listen(2000, function(request, response) {
    console.log('server running');
});