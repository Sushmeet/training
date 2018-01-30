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
    let notes = fetchNotes(); // get all the existing notes.
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
   return fetchNotes();
}

const getNote = (title) => {
    let notes = fetchNotes();
    let filteredNotes = notes.filter((note) => note.title === title);
    return filteredNotes[0];
}

const removeNote = (title) => {
        console.log(`Deleting note with title ${title}`);
        let notes = fetchNotes();
        let filteredNotes = notes.filter((note) => note.title !== title) // this only makes an array of values which evaluate to TRUE
    
        saveNotes(filteredNotes);

        return notes.length != filteredNotes.length 
}

const logNote = (note) => {
    //debugger;
    console.log(`Title: ${note.title} \n Body: ${note.body}\n`);
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote,
}