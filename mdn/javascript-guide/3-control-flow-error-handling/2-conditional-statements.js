/*
A conditional statement is a set of commands
that execute if a specified condition is true
eg if else and switch statement
*/

// All other values, including all objects, 
//evaluate to true when passed to a conditional statement.


// Diff between primitive boolean values
// and values of the boolean object 

const bolly = () => {
    let b = new Boolean(false);
    console.log(b);
     if (b) console.log('b value', b); // this condition evaluates to true
    // //if (b == true) // this condition evaluates to false
}

bolly();

// switch statements

const switchy = (fruit) => {
    switch(fruit) {
        case 'apple':
        console.log('i got apple');
        break;
        case 'banana':
        console.log('i got banana');
        break;
        default:
        console.log(`I got no fruit like ${fruit}`);
        break;
    }
}

switchy('carrot');