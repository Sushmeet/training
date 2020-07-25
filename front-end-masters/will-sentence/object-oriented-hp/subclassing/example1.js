function userCreation(name, score) {
    const user = Object.create(userFunctions) // {} proto should i thinkg point to userFunctions
    user.name = name;
    user.score = score;
    return user;
}

const userFunctions = {
    sayName: function() {
        console.log(`my name is ${this.name}`)
    },
    increment: function() {
        this.score++
    }
}

// _________________________________________________

function paidUserCreator(paidName, paidScore, accountNumber) {
    const user = userCreation(paidName, paidScore)
    Object.setPrototypeOf(user, paidUserFunctions)
    user.accountNumber = accountNumber
    return user
}

const paidUserFunctions = {
    sayAccountNumber: function() {
        console.log(`my account number is ${this.accountNumber}`)
    }
}

const sushiUser = new userCreation('sushi', 10)
sushiUser.sayName()

const sushiPaidUser = new paidUserCreator('sushiPaid', 100, 9988)
Object.setPrototypeOf(paidUserFunctions, userFunctions) // use teh proto of paidUserFunction to point to userFunctions
sushiPaidUser.sayAccountNumber()
sushiPaidUser.sayName()