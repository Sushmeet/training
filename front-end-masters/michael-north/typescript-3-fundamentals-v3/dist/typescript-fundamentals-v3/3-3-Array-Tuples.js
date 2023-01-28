// Tuple is a multi-element, ordered data structure where position of each item has
// special meaning or convention. The kind of structure is often called a tuple.
let myCar = [2002, "Toyota", "camry"];
myCar = [9, "", ""];
// Lets look at tuple restraints around lenght when we use push and pop
// here type script doesn't protect u to add more elements to ur array.
let yourCar = [1, 2];
yourCar.push(3);
yourCar.push(4);
yourCar.push(5);
console.log("yourCar----", yourCar);
