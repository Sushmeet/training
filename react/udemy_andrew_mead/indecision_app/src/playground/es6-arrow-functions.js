console.log("arrow functions");

const squareOld = function(num) {
  return num * num;
};

const square = num => num * num;

const resultOLD = squareOld(9);
const result = square(9);
console.log(result);
console.log(resultOLD);

// Challenge

function getFirstNameOLD(name) {
  return name.split(" ")[0];
}

const getFirstName = name => {
  return name.split(" ")[0];
};

const getFirstNameShort = name => name.split(" ")[0];

// Results of above 3 functions
const resultName = getFirstName("Mike James");
const resultNameOld = getFirstNameOLD("Mike James");
console.log(resultName);
console.log(resultNameOld);
console.log(getFirstNameShort('Mike James'));
