class ModelBase {
    constructor() {
        this.parentClass = 'ModelBase'
    }
    className () { console.log('holy class-------')}
    get car() {console.log('holy car')}
} 


class UserCreator extends ModelBase {
  constructor(name, score) {
    super();
    this.name = name;
    this.score = score;
    this.isLegacyModel = true;
  }

  increment() {
    this.score++;
  }

  login() {
    console.log("Logged in");
  }
}

const user1 = new UserCreator("will", 4);
user1.increment();
user1.className
user1.car

// console.log(user1)
