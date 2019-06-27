// Arrow function does not have it's own this
// instead it use's the this from the outer scope.

const outerThis = this;

const func = () => {
    console.log(this === outerThis);
}

// call, bind and apply do not work on an arrow function
// this value of the arrow function is always the value 
// of the this, when the arrow function was created.

// arrow function cannot be used as an constructor function.


const counter = {
  count: 0,
  incrementPeriodically() {
    setInterval(() => {
      console.log(++this.count);
    }, 500);
  }
}

counter.incrementPeriodically();