var restify = require('restify');

var server = restify.createServer();

// server.pre hmm ??

// how would I prefix /api for all my routes, the base url.
//server.use('/api',)

// this is middleware which gets run all the time.
server.use(function(req, res , next) {
    console.warn('Run for all routes2.!');
    return next();
});


server.get('/', function(req, res, next) {
    res.send('hello sushi');
    return next();
});

server.get('/come/:name' , function(req, res, next) {

    if (!req.params.name) {
        console.log('u didnt put a Name2');
       // return next(false); // what does it mean to stop processing the request.
      // return next(new Error('boom!')); // sends a serialized error to the client http 500
      // return next(new NotFoundError('not here!')); // get a stack trace for this.
    }
    else {
    res.send('I am  ' + req.params.name);
    return next();
    }
});


server.listen(8080, function() {
    console.log('server is running');
});