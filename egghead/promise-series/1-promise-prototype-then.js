const fetch = require('node-fetch')

const API_URL = "https://jsonplaceholder.typicode.com/todos/1"

const responsePromise = fetch(API_URL);

responsePromise.then(res => res.json())
.then(res => console.log(res));