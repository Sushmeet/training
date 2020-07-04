// this solution is beautiful no problem.
// we are storing the increment function once in an object
// then passing it along to the prototype chain of the user object

const functionStore = {
    increment: function() {
        this.score++
    }
}

function userCreator(name, score) {
    const newUser = Object.create(functionStore)

    newUser.name = name
    newUser.score = score

    return newUser;
}

const user = userCreator('sushi', 100)
console.log(user);
user.increment()
console.log(user);
user.increment()
console.log(user)


const joomba = userCreator('jombaa', 50)
console.log(joomba);
joomba.increment()
console.log(joomba);
joomba.increment()
console.log(joomba)


