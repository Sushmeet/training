var restify = require('Restify');
var errs = require('restify-errors');

var server = restify.createServer();

// On all internal server error , serve a 500 page.
// so to do this u add a listener for the InternalServer error Event that is always
// fired when this Error is encountered by restify. as part of a next(error) statement.

server.get('/hello/:error', function(req, res, next){
    
  var err = new restify.errors.InternalServerError('oh noes!');
  return next(err);
});


server.get('/hello/:name', function(req, res, next) {

    var err = new restify.errors.NotFoundError('oh noes')
    return next(err);
});

server.listen(8080, function(req, res, next) {
    
    console.log("server running");
})