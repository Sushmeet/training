var restify = require('restify');

// respond function defined
function respond(req, res, next) {
    res.send('boat and car jock ' + req.params.name);
    return next();
}

var server = restify.createServer();

server.get('/bye/:name', respond);

// home page called.
server.get('/', function(req, res, next) {
    res.send('home page');
    return next();
});

// post request returning a string.
server.post('/foo', 
  function(req, res, next) {
    req.someData = 'foo';
    return next();
},
  function(req, res, next) {
    res.send(req.someData);
    return next();
  }
);

server.head('/bye/:name', respond);


// server listening.
server.listen(8080, function() {
    server.name = 'sushi';
    server.url = 'bone';
    console.log('%s listening at %s', server.name, server.url);
});