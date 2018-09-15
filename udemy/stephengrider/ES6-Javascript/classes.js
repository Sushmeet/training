// classes is still underneath prototypal inheritance.
// constructor function
function Car(opts) {
    this.title = opts.title;
}

function Toyota(opts) {
    Car.call(this, opts);
    this.color = opts.color;
}

Car.prototype.drive = function() {
    return 'vroom';
}

// assign drive method to toyota
Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota

Toyota.prototype.honk = function() {
    return 'beep';
}




// const car = new Car({ title: 'Focus'});
// console.log(car.drive());

// console.log(car);

const toyota = new Toyota({color: 'red', title: 'Daily Driver'})
console.log(toyota);
console.log(toyota.honk());
console.log(toyota.drive());







