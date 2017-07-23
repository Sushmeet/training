// Routing Http verbs are used with a parameterized resource to determine
// what chain of handles to run.
var restify = require('Restify')


function send(req, res, next) {
    res.send('hello ' + req.params.jaja);
    return next();
}

var server = restify.createServer();

server.use(function(req, res, next) {
    console.log('always logging');
    return next();
});

// get request
server.get('/foo/:id', 
    function(req ,res, next) {
        console.log('Authenticate');
        return next();
    },
    function(req, res, next) {
        res.send(200, 'json');
        return next();
    }
)

server.post('/foo', function create(req, res, next) {
    res.send(201, Math.random().toString(36).substr(3,8));
    return next();
});

server.get('/hello/:jaja', send);
server.put('/hello', send);
server.head('/hello/:name', send);

server.listen(8080, function() {
    console.log('server is running.')
})