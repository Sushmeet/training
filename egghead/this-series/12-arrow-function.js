// this value of arrow function is very useful 
// when u have to access it during
// callbacks.

const counter = {
    count: 0,
    incrementCount: () => {
     console.log(`the count is ${++this.count}`);
     console.log(`the count is ${++this.count}`);
     console.log(`the count is ${++this.count}`);
     console.log(`the count is ${++this.count}`);
     console.log(`the count is ${++this.count}`);
    }
}

counter.incrementCount(); // DOESNT WORK FIGUER OUT WHYYYYYYYYYYYYY
