'use strict';

var express = require('express');
var app = express();

app.get('/speak/:animalName', function(request, response) {
   
    // a Dictionary of sounds.
    var sound = {
        dog: 'woof',
        pig: 'oink',
        cow: 'moo'
    };
    var animal = request.params.animalName.toLowerCase();

    response.send('The ' + animal + ' says ' + sound[animal]);
});

app.get('/repeat/:greeting/:numberOfRepeats', function(request, response) {
    var greeting = request.params.greeting;
    var numberOfRepeats = Number(request.params.numberOfRepeats);
    var result = '';

    for(var i = 0; i <numberOfRepeats; i++){
        result += greeting + ' ';
    }
    response.send(result);
});

app.get('*', function(request,response) {
    response.send('your page is not found')
});

app.listen(2000, function(request, response){
    console.log('server running');
})