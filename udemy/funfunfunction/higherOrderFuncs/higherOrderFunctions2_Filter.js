let animals = [
  { name: "john", species: "dog" },
  { name: "gobbo", species: "cat" },
  { name: "Bubloo", species: "dog" },
  { name: "Jingi", species: "porcupine" }
];

let dogs = [];

// for (let i = 0; i < animals.length; i++) {
//   if (animals[i].species === "dog") {
//     dogs.push(animals[i]);
//   }
// }

const isDog = function (animal) {
    return animal.species === 'dog';
}

// dogs = animals.filter((animal) => {
//     return animal.species === 'dog'
// })

dogs = animals.filter(isDog)

console.log(dogs);