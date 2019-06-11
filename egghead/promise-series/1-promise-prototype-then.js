// const fetch = require('node-fetch')
const API_URL = "https://jsonplaceholder.typicode.com/todos/1";

const responsePromise = fetch(API_URL);
console.log('first unresolved promise', responsePromise);

// console.log(responsePromise);

responsePromise.then(res => {
    const responseJson = res.json()
  console.log('2 nd promise of json', responseJson);
  return responseJson
}).then((resJson) => {
    console.log('finalresult JSON', resJson)
})
