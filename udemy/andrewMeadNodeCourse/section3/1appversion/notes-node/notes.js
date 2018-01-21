console.log('Starting notes.js');

const age = 10;

const addNote = () => {
    console.log('addNote Function');
    return 'addNote';
}

const add = (a, b) => {
    return  a + b;
}

module.exports = {
    age, // export properties
    addNote, // export functions
    add, // export function
}