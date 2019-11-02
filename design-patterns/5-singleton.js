/*Singleton Pattern
only one instance of the class is created.
*/
let instance = null;
class Animal {
  constructor(name, color) {
    if (!instance) {
      this.name = name;
      this.color = color;
      instance = this;
    }
    return instance;
  }
}

const zebra = new Animal("zebra", "black");
const kangaroo = new Animal("kangaroo", "brown");
console.log(zebra, kangaroo); // doesn't print kangaroo because singleton
