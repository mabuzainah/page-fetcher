const request = require("request");
const fs = require("fs");

// to filter out and only return the arguments after calling node fetcher.js
const commandLineArgument = process.argv.slice(2);
const urlPassed = commandLineArgument[0];
const path = commandLineArgument[1];

const fetcher = function (urlPassed, path) {
    
};