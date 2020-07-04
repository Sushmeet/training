/*
Let's suppose we are building  a quiz game with users.
So our users have a name and score as property
Functionality they have is Ability to increase the score.
Objects - store functions with their associated data!
This is the principle of encapsulation
*/
const user = Object.create(null)
user.name = 'Sushi'
user.score = 100;
user.increment = () => {
// return user.score += 1 
   user.score++
}

console.log(user);
user.increment()
console.log(user);
user.increment()
console.log(user)

