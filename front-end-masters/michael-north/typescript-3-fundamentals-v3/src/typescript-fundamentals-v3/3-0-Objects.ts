function printCar(car: {
  make: string;
  model: string;
  year: number;
  chargeVoltage?: number;
}) {
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
// const result2 = printCar({
//   make: "toyota",
//   model: "camry",
//   year: 2012,
//   pizza: "yes",  Object literal may only specify known properties, and 'pizza' does not exist in type '{ make: string; model: string; year: number; chargeVoltage?: number; }'.ts(2345)
// });

console.log("result---", result);
