/*
When we call the constructor function with new in front we automate 2 things
1. Create a new user object
2. return the new user object
But now we need to adjust how we write the body of userCreator - how can we:
— Refer to the auto-created object?
— Know where to put our single copies of functions?

*/

// Concern. We are still creating the increment method on each object which is a lot of waste of space
// we need to stuff increment into prototype object and then provide a link from 
// UserCreator

function UserCreator(name, score) {
    // this is an empty object
    this.name = name
    this.score = score

    this.increment = () => {
        this.score++
    }
}

const jombaa = new UserCreator('sushi', 100)
console.log(jombaa);
jombaa.increment()
console.log(jombaa);
jombaa.increment()
console.log(jombaa)

