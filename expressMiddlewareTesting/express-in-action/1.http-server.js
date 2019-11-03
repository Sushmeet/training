/*
Express is build up on Node's http module

Request --->   Request Handler --->  Response

*/

const http = require('http');

function requestHandler(req, res) {
    if (req.url === '/home') {
        console.log('req url', req.url);
        res.end('home page')
    } else if (req.url === '/about') {
        console.log('req url', req.url);
        res.end('about')
    } else {
        res.end('go away');
    }
}


http.createServer(requestHandler).listen(3000, 'localhost')