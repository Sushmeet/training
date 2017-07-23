var request = require('request');
const someApi = 'https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole';

request(someApi, function (error,response,body) {
    jsonBody = JSON.parse(body)
    console.log(jsonBody);
})


