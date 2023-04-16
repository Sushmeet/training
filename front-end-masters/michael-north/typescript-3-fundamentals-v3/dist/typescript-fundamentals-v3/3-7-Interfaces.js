// Interface is a way of defining an object type
// an Object type can be thoughts of as an instance of a class conceivably look like this.
const privateUserInfo = (info) => {
    info.email;
    info.name;
};
// Inheritance in interfaces
class Animal {
    eat(food) {
        return "i eat food.";
    }
}
class Dog extends Animal {
    bark() {
        return "woof woof";
    }
}
const dogInstance = new Dog();
dogInstance.bark;
dogInstance.eat;
const dogInstance2 = new Dog();
dogInstance2;
