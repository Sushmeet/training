// Basic principles when implementing callback functions

var allUserData = []; // global variable

// generic logging that prints to the screen.

function logStuff(userData) {
    if (typeof userData === 'string') { 
        console.log(userData);
    }

    else if (typeof userData === 'object') {
        for (var value in userData) {
            console.log('value: ' + userData[value]);
        }
    }
}

// A function that takes 2 parameters, the last one is a function
function getInput(options, callback) {
    allUserData.push (options);
    console.log(allUserData);

    if (typeof callback === 'function') {
        callback(options);
    }
}

// When we call the getInput function we call logStuff function as a parameter.
// So logStuff is the function that will be called back or executed inside the getInput function.

getInput({name:"Rich", speciality:"JavaScript"}, logStuff);

