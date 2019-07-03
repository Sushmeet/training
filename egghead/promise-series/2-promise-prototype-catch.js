const API_URL = 'https://swapi.co/api/films/';
const output = document.getElementById('output');
output.innerText = "loading ------"
// in the then block
// u have a fulfilmment handler and a rejection handler
 fetch(API_URL)
 .then((res) => {
    // return res.json()
    return Promise.reject('Invalid JSON')
     .then((films) => {
        const filmResults =  getfilmResults(films.results)
        output.innerText = filmResults;
     }, () => {output.innerText = 'invalid json'})
 }, 
 (error) => {
    console.warn(error);
    output.innerText = 'error happened';
 },)

function getfilmResults(filmResults) {
   return filmResults
    .sort((a,b) => a.episode_id - b.episode_id)
    .map(film => `${film.episode_id} ${film.title}`)
    .join('\n')
}