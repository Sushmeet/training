const request = require('request');

const getExchangeRate = (from, to) =>
  new Promise((resolve, reject) => {
    request(`http://api.fixer.io/latest?base=${from}`, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        const jsonBody = JSON.parse(body);
        resolve(jsonBody.rates[to]);
      } else {
        reject(new Error(`Unable to get exchange rate from ${from} to ${to}`));
      }
    });
  });

const getCountries = currency =>
  new Promise((resolve, reject) => {
    request(`https://restcountries.eu/rest/v2/currency/${currency}`, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        const jsonBody = JSON.parse(body);
        resolve(jsonBody.map(country => country.name));
      } else {
        reject(new Error(`Unable to get countries with this currency ${currency}`));
      }
    });
  });

const convertCurrency = (from, to, amount) => {
  let countries;
  return getCountries(to)
    .then((tempcountries) => {
      countries = tempcountries;
      return getExchangeRate(from, to);
    })
    .then((rate) => {
      const exchangedAmount = amount * rate;

      return `${amount} ${from} is worth ${exchangedAmount} ${to} ${countries.join(' ,')}`;
    });
};

// so 1 CAD equals how much US. (exchange rate)
// getExchangeRate('CAD', 'BRL').then((rate) => {
//   console.log(rate);
// });
// in which countries is CAD used or accepted
// getCountries('CAD').then((countries) => {
//   console.log(countries);
// });

convertCurrency('MMM', 'USD', 100)
  .then((amountConverted) => {
    console.log(amountConverted);
  })
  .catch((e) => {
    console.log(e.message);
  });
