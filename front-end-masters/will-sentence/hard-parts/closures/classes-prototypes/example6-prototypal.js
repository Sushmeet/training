function UserCreator(name, score) {
    this.name = name;
    this.score = score;
  }

UserCreator.prototype.increment = function() { 
    this.score++ 
}
UserCreator.prototype.login = function () { console.log("Logged in") }

const user1 = new UserCreator('will', 4)
user1.increment()

console.log(user1)