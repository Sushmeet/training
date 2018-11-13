// constructor class
function Dog(name, breed) {
  this.name = name;
  this.breed = breed;
}

// instance method
Dog.prototype.speak = function () {
    return 'Speak';
}

Dog.prototype.dance = function () {
    return 'dance all night long';
}

Dog.prototype.diet = 'diet';

const dog = new Dog("joomba", "pominerian");
const poodle = new Dog('poodle', 'cute')

dog.dance = function() {
    return 'dance'
}

/*
When JavaScript sees an object property name, 
such as “color,” in object.color it looks to 
the object for a property of that name. 
If the name does not exist it looks to the
object’s prototype for a property of that name.
(The prototype is another object.)
*/

console.log(dog.dance()); // it looks to the object for a property of that name
console.log(poodle.dance()); // if it doesnt find it there it looks at the prototype method.


