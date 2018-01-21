console.log("Starting app.js");

const fs = require("fs");
const _ = require("lodash");
const yargs = require('yargs');

const notes = require("./notes");

if (process.argv[2]) {
  const command = process.argv[2].toLowerCase();
  console.log("Command: ", command);
  console.log(process.argv);

  if (command === "add") {
    console.log("Adding all notes");
  } else if (command === "list") {
    console.log("Listing all notes");
  } else if (command === "read") {
    console.log("Reading all notes");
  } else if (command === "remove") {
    console.log("Removing Note");
  } else {
    console.log("command not found");
  }
}


