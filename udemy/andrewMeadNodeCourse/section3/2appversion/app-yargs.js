/*
To run this program with in the command line terminal pass the arguments title and body
node app-yargs.js add --title="secrets from andrew" --body="sushi body"

for debugging
nodemon --inspect-brk app-yargs.js read --title="secrets"
*/
const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");
//const argv = require("yargs").argv;

const notes = require("./notes");
const {logNote} = require('./notes');

const titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};

const bodyOptions = {
    describe: "body of title",
    demand: true,
    alias: 'b',
  };

//const argv = yargs.argv;
const argv = yargs
  .command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions,
  })
  .command('list', 'List all notes')
  .command('read', 'Read a note', {
    title: titleOptions,
  })
  .command('remove', 'Remove all notes', {
    title: titleOptions,
  })
  .help()
  .argv;

// if (process.argv[2]) {
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

    let allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`)

    allNotes.forEach((note) => notes.logNote(note))

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
// }
