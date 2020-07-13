function userCreator(name, score) {
    const newUser = {}

    newUser.name = name;
    newUser.score = score;
    newUser.increment = function () {
        newUser.score++
        return newUser.score
    }
    return newUser;
}

const user1 = userCreator('Will', 3);
const user2 = userCreator('Tim', 5);

const scoreUser1 = user1.increment()
const scoreUser1v2 = user1.increment() // back pack affect closures being used here.
const scoreUser2 = user2.increment()

console.log('scoreUser1--' ,scoreUser1);
console.log('scoreuser1v2', scoreUser1v2);
console.log('scoreUser2--', scoreUser2);

