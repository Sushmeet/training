import  { Age }  from './6-enum'

console.log(Age);


function totalAge(age1: Age, age2: Age) {
    console.log('age1', age1);
    console.log('age2', age2);
}

const result = totalAge(10, Age.dylan);
