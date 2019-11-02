// Factory Pattern
/*
It is a great when you need to create a mechanism
to create other objects.
*/

class Car {
  constructor(name, color, wheels) {
    this.name = name;
    this.color = color;
    this.wheels = wheels;
  }
}

class CarFactory {
  create(name) {
    switch (name) {
      case "accord":
        return new Car("honda accord", "blue", 4);

      case "civic":
        return new Car("civic", "red", 4);
    }
  }
}

const factory = new CarFactory();

const accord = factory.create('accord');
const civic = factory.create('civic');

console.log(accord);
console.log(civic);