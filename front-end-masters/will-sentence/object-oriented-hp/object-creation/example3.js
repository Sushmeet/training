
function userCreator(name, score) {
    const newUser = {}
    newUser.name = name
    newUser.score = score

    newUser.increment = function() {
        this.score++
    }
    return newUser;
}

const user = userCreator('sushi', 100)
console.log(user);
user.increment()
console.log(user);
user.increment()
console.log(user)

