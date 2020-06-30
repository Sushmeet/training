// arrow functions and lexically scoped this.

function userCreator(name, score) {
  const newUser = Object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

const userFunctionStore = {
  increment: function () {
    const add1 = () => {
      this.score++;
      return this.score;
    };
    return add1(); // this works because of arrow functions and lexically scoped this
  },
  login: function () {
    console.log("Logged in");
  },
};

const user1 = userCreator("Will", 3);
const user2 = userCreator("Tim", 5);

const scoreUser1 = user1.increment();
// const scoreUser2 = user2.increment()

console.log("scoreUser1--", scoreUser1); // undefined cause we lose this context.
// console.log('scoreUser2--', scoreUser2);
