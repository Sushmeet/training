class Car {
    constructor( { title }) {
        this.title = title;
    }

    drive() {
        return 'vroom';
    }
}

class Toyota extends Car {
    constructor(opts) {
        super(opts)
        this.color = opts.color
    }

    honk() {
        return 'beep';
    }
}

const car = new Car({title: 'Toyota'});
const toyota = new Toyota({color: 'red', title: 'Toyotaa Mannn'});
console.log(car);
console.log('car drive', car.drive());
console.log(toyota);
console.log('toyota drive', toyota.drive());