const request = require('request');

const getExchangeRate = (from, to) =>
  new Promise((resolve, reject) => {
    request(`http://api.fixer.io/latest?base=${from}`, (error, response, body) => {
      const jsonBody = JSON.parse(body);
      if (jsonBody) {
        resolve(jsonBody);
      } else {
        reject('err');
      }
    });
  });

// console.log(jsonBody);

getExchangeRate('CAD', 'BRL').then((jsonBody) => {
  console.log(jsonBody.date);
});
