var restify = require('Restify');
var errs = require('restify-errors');

var server = restify.createServer();


server.get('/hello/:name', function(req, res, next) {
  return next(new errs.InvalidArgumentError("I just don't like you"));
});

