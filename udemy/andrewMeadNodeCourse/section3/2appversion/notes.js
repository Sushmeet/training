console.log('Starting notes.js\n');

const fs = require('fs');

const fetchNotes = () => {
    try {
        const originalFileString = fs.readFileSync('notes-data.json');
       return JSON.parse(originalFileString); // returns back an array.
    } catch (e) {
        return [];
    }
}

const saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));    
}

const addNote = (title, body) => {
    let notes = fetchNotes();
    const note = {
        title,
        body
    }
    const duplicateNotes = notes.filter((note) => note.title === title);

    if (title && body && duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
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
    let notes = fetchNotes();
    let removedNoteArr = notes.filter((note) => note.title !== title) // this only makes an array of values which evaluate to TRUE

    saveNotes(removedNoteArr);
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
}