#!/usr/bin/env node

// Delete the 0 and 1 argument (node and script.js)
const args = process.argv.splice(process.execArgv.length + 2);

// Retrieve the first argument
const name = args[0];

const myLibrary = require("../lib/index.js");

// Displays the text in the console
const dirs = process.cwd().split("\\");
const repoName = dirs[dirs.length - 1];
myLibrary.say(name + " | " + repoName);