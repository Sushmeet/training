const obliterate = (...targets) => {
  // ES 6 method to convert arguments to an actual array
  //  var targets = Array.from(arguments).join(', ')
  //console.log(`${targets} is obliterated`)
};

obliterate("sushi", "johnny");

// ES 6 classes and ES 6 modules.

// Function are like anything else in javascriot
// * You can store a function in variables
// * You can pass them as arguments to other functions
// * You can return back ak function

const log = msg => {
  // console.log(msg);
};

// passing a function log in there as a value.
const logByRandalf = (msg, logFn) => {
  logFn(`Randalg logs: ${msg}`);
};
logByRandalf("This is msg", log); // Randalg logs This is msg

const createLogBySomeone = byWho => {
  return msg => {
    console.log(`${byWho} is logging ${msg}`);
  };
};

const holdFunction = createLogBySomeone("Sushi");

holdFunction("Merry Christmas");

// Javascript variables have function scope not block scope.
// ES6 var is function scope, let is block scope.

// E6S Default Argument
// function fireball(target = 1)

// ES 6 Destructuring
// lets u unwrap any given object into a number of properties
const { hp, defense } = {
  name: "conan",
  description: "cimmerian barbarian king of thieves",
  hp: { current: 9000, max: 9000 },
  defense: 100,
  attack: 400
};
console.log(hp);
// => {current: 9000, max: 9000}
console.log(defense);
// => 100”

const calculateDamage = ({attack}, {hp, defense}) => {
    const effectiveAttacking = attack - defense
}
