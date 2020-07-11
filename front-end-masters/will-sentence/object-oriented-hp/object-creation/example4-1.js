/*
to have increment method exist on the prototype now 
beign created as part of every single function.
*/

// This below is professional code and is faster to write

function UserCreator(name, score) {
    // creates this which is an empty object
    // this object contains a property called
    // proto which  is a link to the prototype object of a function userCreator
    this.name = name
    this.score = score
}

UserCreator.prototype.increment = function() {
    // this here is an implicit paramater. 
    this.score++
} // so this way u don't keey creating the function on each object. it exists in the prototype object only

const jombaa = new UserCreator('sushi', 100)
console.log(jombaa);
jombaa.increment()
console.log(jombaa);
jombaa.increment()
console.log(jombaa)

