// const fetch = require('node-fetch')
const API_URL = "https://swapi.co/api/films/";
const output = document.getElementById("output");
const spinner = document.getElementById('spinner');

output.innerText = "Loading...";

 // .then is a fulfillment handler
$.getJSON(API_URL)
  .then(films => {
    output.innerText = getFilmTitles(films.results);
    return films;
  })
  .catch(error => {
    console.warn(error)
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
