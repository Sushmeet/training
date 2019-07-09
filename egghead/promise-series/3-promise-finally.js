// const fetch = require('node-fetch')
const API_URL = "https://swapi.co/api/films111/";
const output = document.getElementById("output");
const spinner = document.getElementById('spinner');

output.innerText = "Loading...";

 // .then is a fulfillment handler
fetch(API_URL)
  .then(res => {
      if (!res.ok) throw Error(`No response was returned from ${API_URL}`);
      return res.json()
    })  
  .then(films => {
    output.innerText = getFilmTitles(films.results);
    return films;
  })
  .catch(error => {
    console.log(error)
    output.innerText = ':('
    return []; // return empty object in case of error.
  })
  .finally(() => spinner.remove())
  .then((films) => {
    // films is still availabel from the return on top.
    console.log(films);
  })

function getFilmTitles(filmTitles) {
 return filmTitles
    .sort((a, b) => a.episode_id - b.episode_id)
    .map(result => `${result.episode_id}. ${result.title}`)
    .join("\n");
}
