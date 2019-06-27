Function.prototype.bind = function(thisArg, ...fixedArgs) {
  const func = this;

//   return function(...args) {
//       return func.apply(thisArg, [...fixedArgs, ...args]);
//   };
};

const person = {
    firstName: 'jane',
    sayHi() {
        console.log(`hello ${this.firstName}`);
    }
}

const greet = person.sayHi.bind(person);
greet();

