function printCar(car) {
    console.log("mee", car.chargeVoltage);
}
let car = {
    make: "toyota",
    model: "camry",
    year: 2012,
    id: 222,
    pizza: "yes",
};
const result = printCar(car);
console.log("result---", result);
