class UserCreator {
    constructor(name, score) {
        this.name = name
        this.score = score
    }

    increment() {
        this.score++
    }

    sayName() {
        console.log(`my name is ${this.name}`)
    }
}

const sushiUser = new UserCreator('sushi', 100)
sushiUser.sayName()

class PaidUser extends UserCreator {
    constructor(name, score, accountNumber) {
        super(name, score)
        this.accountNumber = accountNumber
    }
    sayAccountNumber() {
        console.log(`my account number is ${this.accountNumber}`)
    }
}

const sushiPaidUser = new PaidUser('sushiPaid', 200, 8890)
sushiPaidUser.sayName()
sushiPaidUser.sayAccountNumber()