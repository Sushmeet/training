var express = require('express');
var request = require('request');

var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('home');
});

app.get('/results', function(req, res) {
    var movieName = req.query.search;
    var apiUrl = 'http://www.omdbapi.com/?s=' + movieName +'&apikey=thewdb';
    request.get(apiUrl, function(error, response, body){
        if(!error && response.statusCode === 200) {
            var movie = JSON.parse(body);
            // res.send(movie.Search[0].Title);
            res.render('results', {data: movie});
        }
        else{
            console.log(error);
        }
    });
});



app.listen(process.env.PORT || 2000, function() {
    console.log('Server is running');
})