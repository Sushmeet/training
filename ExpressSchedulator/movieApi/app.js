var express = require('express');
var request = require('request');

var app = express();

app.set('view engine', 'ejs');


app.get('/results', function(req, res) {
    var apiurl = 'http://www.omdbapi.com/?s=star&apikey=thewdb';
    request.get(apiurl, function(error, response, body){
        var movie = JSON.parse(body);
       // res.send(movie.Search[0].Title);
       res.render('results', {data: movie});
    });
});



app.listen(process.env.PORT || 2000, function() {
    console.log('Server is running');
})