const animals = [
    { name: "john", species: "dog" },
    { name: "gobbo", species: "cat" },
    { name: "Bubloo", species: "dog" },
    { name: "Jingi", species: "porcupine" }
  ];
  
const namesOfAnimals = [];
for (const animal of animals ) {
    namesOfAnimals.push[animal.name];
}
// console.log(namesOfAnimals);


// map style so easy and simple.
// u can transform the object.

let nameofAnimals3 = animals.map(animal => `${animal.name} is a ${animal.species}`);
console.log(nameofAnimals3);