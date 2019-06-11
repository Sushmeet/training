// const fetch = require('node-fetch')
const API_URL = "https://swapi.co/api/films/";
const output = document.getElementById("output");

output.innerText = "Loading...";

 // .then is a fulfillment handler
fetch(API_URL)
  .then(res => {
      if (!res.ok) throw Error(`No response was returned from ${API_URL}`);
      return res.json()
    })  
  .then(films => {
    output.innerText = getFilmTitles(films.results);
  })
  .catch(error => {
    console.log(error)
    output.innerText = ':('     
  })

function getFilmTitles(filmTitles) {
 return filmTitles
    .sort((a, b) => a.episode_id - b.episode_id)
    .map(result => `${result.episode_id}. ${result.title}`)
    .join("\n");
}
