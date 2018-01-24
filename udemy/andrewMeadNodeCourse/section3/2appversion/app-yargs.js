/*
To run this program with in the command line terminal pass the arguments title and body
node app-yargs.js add --title="secrets from andrew" --body="sushi body"
*/

console.log("Starting app.js");

const fs = require("fs");
const _ = require("lodash");
const argv = require('yargs').argv;

const notes = require("./notes");

//const argv = yargs.argv;


if (process.argv[2]) {
    const command = argv._[0].toLowerCase();
    // console.log("Command: ", command, '\n');
    // console.log('Process.argv', process.argv);
    // console.log('Yags.argv\n', argv);

    if (command === "add") {
        let note = notes.addNote(argv.title, argv.body);
        if(note) {
            console.log(`title is ${note.title} and body is ${note.body}`)
        }
        else {
            console.log("duplicate note")
        }
    } else if (command === "list") {
        console.log("Listing all notes \n");
        notes.getAll();
    } else if (command === "read") {
        console.log("Reading all notes \n");
        notes.getNote(argv.title);
    } else if (command === "remove") {
        notes.removeNote(argv.title);
    } else {
        console.log("command not found");
    }
}
