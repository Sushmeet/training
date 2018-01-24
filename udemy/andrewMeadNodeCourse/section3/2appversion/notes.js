console.log('Starting notes.js\n');

const fs = require('fs');

const addNote = (title, body) => {
    let notes = [];
    const note = {
        title,
        body
    }

    try {
        const originalFileString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(originalFileString); // returns back an array.
    } catch (e) {}


    const duplicateNotes = notes.filter((note) => note.title === title);

    if (title && body && duplicateNotes.length === 0) {
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    }
}

const getAll = () => {
    console.log('Getting all notes \n');
    const notesString = fs.readFileSync('Notes.json');
    const note = JSON.parse(notesString);
    let arr = [];
    arr = note;
    console.log(arr[0]);
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