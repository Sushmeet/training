// const obj = {
//     name: 'Andrew'
// };

// const stringObj = JSON.stringify(obj);
// console.log(typeof obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// const personString = `{
//         "name": "sushi",
//         "job": "hero"
// }`

// const person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);


const fs = require('fs');

// json object
const originalNote = {
    title: 'Title of our Note',
    body: 'Body of our Note'
};

// convert object into string. Then write to file.
const originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

// read from a file
const noteString = fs.readFileSync('notes.json');

// parse string.
const note = JSON.parse(noteString);
console.log('NoteString', typeof noteString);
console.log(note);

