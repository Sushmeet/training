let url = "https://jsonplaceholder.typicode.com/posts";


// this is how it works in browser
// fetch helper in the browser.
// every time we get the first reponse
// we have to use response.json() to actually get 
// the data that we want to work with.
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data));
