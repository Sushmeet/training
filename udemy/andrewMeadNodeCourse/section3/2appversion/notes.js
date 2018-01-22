console.log('Starting notes.js\n');

const fs = require('fs');

const addNote = (title, body) => {
    let notes = []
    const originalNote = {
        title: title,
        body: body,
    }


    const originalFileString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(originalFileString);
    //notes.push(JSON.parse(originalFileString));
    console.log('OLD Notes Array', notes);

    if (title && body) {
        notes.push(originalNote);
    console.log('New Notes array', notes);
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