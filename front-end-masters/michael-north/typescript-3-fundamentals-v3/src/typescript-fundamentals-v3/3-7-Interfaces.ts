// Interface is a way of defining an object type
// an Object type can be thoughts of as an instance of a class conceivably look like this.

interface UserInfo {
  name: string;
  email: string;
}

const privateUserInfo = (info: UserInfo) => {
  info.email;
  info.name;
};

// Inheritance in interfaces

class Animal {
  eat(food: string) {
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

interface Animal {
  eat(food: string): string;
  sleep(food: string): string;
}

interface Dog extends Animal {
  bark(): string;
}

const dogInstance2: Dog = new Dog();

dogInstance2;
