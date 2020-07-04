// only old school function can be used
// as a constructor function (WHY??)

// so in classes too they are 

class UserCreator {
    constructor(name, score) {
        this.name = name
        this.score = score
    }

    increment() {
        this.score++
    }
}


const user = new UserCreator('sushi', 100)
console.log(user);
user.increment()
console.log(user);
user.increment()
console.log(user)

