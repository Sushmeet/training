/*Singleton Pattern
only one instance of the class is created.
*/
let instance = null;
class animal {
  constructor(name, color) {
    if(!instance) {
    this.name = name;
    this.color = color;
    instance = this;
    }
   return instance;
  } 
}

const zebra = new animal('zebra', 'black')
const kangaroo = new animal('kangaroo', 'brown')
console.log(zebra, kangaroo) // doesn't print kangaroo because singleton
