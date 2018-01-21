console.log('Starting notes.js\n');

const fs = require('fs');

const addNote = (title, body) => {
    console.log('Add Note Function Starts \n');
    if (title && body) {
        console.log(title, body, '\n');
    }
}

const getAll = () => {
    console.log('Getting all notes \n');
}

const getNote = (title) => {
    console.log(`Reading note with ${title} \n`);

}

const removeNote = (title) => {
    console.log(`Removing note with ${title} \n`);

}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
}