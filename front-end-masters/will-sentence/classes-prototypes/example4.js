function userCreator(name, score) {
    const newUser = Object.create(userFunctionStore)
    newUser.name = name;
    newUser.score = score;
    return newUser;
}

const userFunctionStore = {
    increment: function() {
        function add1() {
            this.score++
            return this.score
        }
        // return add1() // this becomes the global object and u get NAN
        return add1.call(this); // bind this to the add1
    },
    login: function(){console.log('Logged in');}
}


const user1 = userCreator('Will', 3);
const user2 = userCreator('Tim', 5);

const scoreUser1 = user1.increment()
// const scoreUser2 = user2.increment()

console.log('scoreUser1--' ,scoreUser1); // undefined cause we lose this context.
// console.log('scoreUser2--', scoreUser2);
