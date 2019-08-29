function fetchAPI(url) {
  return fetch(url).then(response => {
    if (response.ok === true) {
      return response.json();
    } else {
      return Promise.reject(new Error("Unsucessful Response.."));
    }
  });
}

fetchAPI("https://swapi.co/api/films/")  // launches at same time as species
    .then(films => {
        console.log(films);
        return fetchAPI("https://swapi.co/api/people/") // launches promise only after species is done.
    })
    .then(people => console.log(people))
    .catch(err => console.warn(err));

fetchAPI("https://swapi.co/api/species/") // launches promise at same time as films.
    .then(species => console.log(species))
    .catch(err => console.warn(err));

    

