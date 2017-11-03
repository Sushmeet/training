var nameVar = 'Andrew';
var nameVar = 'Donny';
console.log('nameVar' , nameVar);

let nameLet = 'Jen';
 nameLet = 'gony';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

// Block Scoping 
// with let and const your variables are block level scoped
// so no bleeding of variables.
const fullName = 'Andrew Mead';
let firstName;
if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);