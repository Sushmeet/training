
const square = x => x * x;
console.log(square(5));

const user = {
    name: 'Andrew',
    sayHi: () => {
        console.log(arguments);
        console.log(`HI. I am ${this.name}`);
    },
    sayHiAlt () {
        console.log(arguments);
        console.log(`HI. I am ${this.name}`);
    }
}

//user.sayHi();
user.sayHiAlt(1,2,3);