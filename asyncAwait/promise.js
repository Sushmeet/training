var request = require('request');
const someApi = 'https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole';

function PromisifiedRequest(url) {
    return new Promise((resolve, reject) => {
        request(someApi, function (error, response, body) {
            resolve(JSON.parse(body));
        });
    });
};

PromisifiedRequest(someApi).then(data => console.log(data[0]));