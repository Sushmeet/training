/*
to have increment method exist on the prototype now 
beign created as part of every single function.
*/

// This below is professional code and is faster to write

function UserCreator(name, score) {
    // this is an empty object
    this.name = name
    this.score = score
}

UserCreator.prototype.increment = function() {
    this.score++
} // so this way u don't keey creating the function on each object. it exists in the prototype object only

const jombaa = new UserCreator('sushi', 100)
console.log(jombaa);
jombaa.increment()
console.log(jombaa);
jombaa.increment()
console.log(jombaa)

