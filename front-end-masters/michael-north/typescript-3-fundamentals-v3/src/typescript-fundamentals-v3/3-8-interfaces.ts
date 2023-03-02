interface AnimalLike {
  sleep(): void;
}

class Animal2 implements AnimalLike {
  eat() {
    return "I eat";
  }
  cry() {
    return "I eat";
  }
  sleep() {
    console.log("hell");
  }
}

// Recursive TYpes

type NestedNumbers = number | NestedNumbers[];

let value: NestedNumbers = 9;
let value2: NestedNumbers = [2, 3, 4.5];
