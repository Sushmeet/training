import myLocation, { message, name, greeting } from "./mymodule";
import addition, { subtract } from "./math";

console.log(message, name, myLocation);
console.log(greeting("bonziii"));
console.log(addition(7, 3));
console.log(subtract(7, 3));
