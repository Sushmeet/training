var request = require('request');
const someApi = 'https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole';

function PromisifiedRequest(url) {
    return new Promise((resolve, reject) => {
        request(someApi, function (error, response, body) {
            resolve(JSON.parse(body));
        });
    });
};

async function asyncRequest(url) {
    var data = await PromisifiedRequest(someApi);
    console.log (data);
    //return data;
}

 // var results = asyncRequest(someApi);

var results =  await asyncRequest(someApi);

//console.log(results)