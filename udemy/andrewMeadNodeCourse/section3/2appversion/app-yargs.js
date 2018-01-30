/*
To run this program with in the command line terminal pass the arguments title and body
node app-yargs.js add --title="secrets from andrew" --body="sushi body"

for debugging
nodemon --inspect-brk app-yargs.js read --title="secrets"
*/

console.log("Starting app.js");

const fs = require("fs");
const _ = require("lodash");
const argv = require("yargs").argv;

const notes = require("./notes");
const {logNote} = require('./notes');

//const argv = yargs.argv;

if (process.argv[2]) {
  const command = argv._[0].toLowerCase();
  // console.log("Command: ", command, '\n');
  // console.log('Process.argv', process.argv);
  // console.log('Yags.argv\n', argv);

  if (command === "add") {
    let note = notes.addNote(argv.title, argv.body);
    if (note) {
      console.log("NoteAdded");
      // console.log(`title is ${note.title} and body is ${note.body}`);
      // notes.logNote(note);
      logNote(note);
    } else {
      console.log("duplicate note");
    }
  } else if (command === "list") {
    console.log("Listing all notes");

    notes.getAll();
  } else if (command === "read") {
    let noteReturned = notes.getNote(argv.title);

    if (noteReturned) {
      notes.logNote(noteReturned);
    }
    else {
      console.log('Note not found');
    }

  } else if (command === "remove") {
    let noteRemoved = notes.removeNote(argv.title);
    let message = noteRemoved ? "Note was removed" : "Note not found";

    console.log(message);
  } else {
    console.log("command not found");
  }
}
