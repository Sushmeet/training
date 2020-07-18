/*
Let's suppose we are building  a quiz game with users.
So our users have a name and score as property
Functionality they have is Ability to increase the score.
Objects - store functions with their associated data!
This is the principle of encapsulation
*/
const functionStore = {
   increment: function() {
      this.score++
   }
}

const user = Object.create(functionStore) // always gives u an empty object back with acccess to stuff on function store
user.name = 'Sushi'
user.score = 100;


console.log(user);
user.increment()
console.log(user);
user.increment()
console.log(user)

