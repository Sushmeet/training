// const fetch = require('node-fetch')
const API_URL = "https://swapi.co/api/films/";
const output = document.getElementById("output");

output.innerText = "Loading...";

fetch(API_URL)
  .then(res => res.json())
  .then(resJson => {
    output.innerText = getFilmTitles(resJson.results);
  });

function getFilmTitles(filmTitles) {
 return filmTitles
    .sort((a, b) => a.episode_id - b.episode_id)
    .map(result => `${result.episode_id}. ${result.title}`)
    .join("\n");
}
