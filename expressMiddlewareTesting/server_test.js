// When you are testing middleware

// testing when something got added, removed, chaned on reg or on res, or whether a method is called on next.

var httpMocks = require('node-mocks-http');

describe('Auth.js unit tests', () => {
    it ('Should check if user was ever logged in', function() {
        var req =  httpMocks.createRequest({
             method: 'POST',
             url: '/someurl/home',
             body: {name: 'sushi', job: 'worker'}
         });
         console.log(req);
        //  res =    httpMocks.createResponse();
    })
})