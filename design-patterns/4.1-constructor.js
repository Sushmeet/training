class Car {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
}


class Suv extends Car {
    constructor(name, color, wheels) {
        super(name, color, wheels)
        this.wheels = wheels;
    }
}

const civic = new Car('civic', 'red');
const cx5 = new Suv('mazda cx-5', 'black', 4)


console.log(civic);
console.log(cx5);