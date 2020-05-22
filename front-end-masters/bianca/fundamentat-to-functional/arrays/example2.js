// Not a best practice to add a property on an array

// Push and Pop are added to the Arrays Prototype. 
// If u want add properties to an array then extend the array's prototype.


const who = []

who.name = 'Sushi'
console.log('who--', who);

console.log('undefined---', who[0]) 
who[0] = 'I was in the billianbord room'

console.log('who[0]', who[0]);

console.log('who---', who)