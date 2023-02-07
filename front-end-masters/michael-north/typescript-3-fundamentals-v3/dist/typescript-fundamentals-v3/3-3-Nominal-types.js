// Type checking, looking for compaitbility or type equivalence
// == looks for if value is equal === strick equal looks for both value and type being equal
// 3 === '3' false
// 3 == '3' true
// Static vs dynamic
// Sorting Type Systems as static or dynamic has to do with whther type checking/equivalence is done at compile
// time or run time.
// Static type system means type check is done at compile time.
// Dynamic type system means type check is done at run time.
// java has a nominal type system, meaning it cares about which class you come from, or which
// class are u an instance of.
// typescript is a structaral type system meaning it only cares to see if the structure of ur type is the same
// it doesn't matter whether u are an instance of a class, or an object literal that is being passed in
// as long as structure matters it's all good.
// Duck typing, very similar to structural typing , is usually used to describe dynamic type systems.
// Strong typing vs weak typing. No real meaning actually in these words
// Strong generaly just means Static typing, and weak just means dynamic typing
class Car {
    make;
    model;
    year;
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
}
class Vehicle {
    make;
    model;
    year;
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
}
const ourCar = {
    make: "Honda",
    model: "Accord",
    year: 1998,
};
const printAnyCar = (car) => {
    console.log("my car is", car.make, car.model, car.year);
};
const vehicle123 = new Vehicle("toyota", "camry", 2001);
const car123 = new Vehicle("Mazda", "929", 2005);
printAnyCar(ourCar);
printAnyCar(vehicle123);
printAnyCar(car123);
