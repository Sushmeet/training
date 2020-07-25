function UserCreator(name, score) {
    this.name = name;
    this.score = score;
}

UserCreator.prototype.increment = function() {
    this.score++
}

UserCreator.prototype.sayName = function() {
    console.log(`this is my name ${this.name}`);
}


function paidUserCreator(paidName, paidScore, accountNumber) {
    UserCreator.call(this, paidName, paidScore)
    this.accountNumber = accountNumber
}

paidUserCreator.prototype = Object.create(UserCreator.prototype)
paidUserCreator.prototype.sayAccountNumber = function() {
    console.log(`my account number is ${this.accountNumber}`)
}



const sushiUser = new UserCreator('sushi', 100)
sushiUser.sayName()


const sushiPaidUser = new paidUserCreator('sushiPaid', 200, 8990)

sushiPaidUser.sayAccountNumber()
sushiPaidUser.sayName()