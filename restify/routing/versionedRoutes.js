// Most REST APIs tend to need versioning, and restify
// ships with support for semver versioning in an Accept-Version header,
// the same way you specify NPM version dependencies:
'use strict';

var restify = require('Restify');

var server = restify.createServer();

function sendV1(req, res, next) {
    res.send(200, 'this is version 1' + req.params.name);
    return next();
}

function sendV2(req, res, next) {
    res.send(200, {hello: req.params.name});
    return next();
}

var PATH = '/hello/:name';
server.get({path: PATH, version: '1.1.3'}, sendV1);
//server.get({path: PATH, version: '2.0.0'}, sendV2);
server.get({
    path: PATH, version: ['2.2.1', '2.3.4', '2.6.7']
    }, function (req, res, next) {
        res.send(200, {
            requestedVersion: req.version(),
            matchedVersion: req.matchedVersion()
        });
        return next();
    }
);

server.listen(8080, function(req, res, next) {
    console.log('Server is running');
})