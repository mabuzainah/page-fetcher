const request = require("request");
const fs = require("fs");

// to filter out and only return the arguments after calling node fetcher.js
const commandLineArgument = process.argv.slice(2);
const urlPassed = commandLineArgument[0];
const path = commandLineArgument[1];
let content = "";
const fetcher = function (urlPassed, path) {
  request(urlPassed, function (error, response, body) {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    content = body;
    //console.log('body:', content); // Print the HTML for the Google homepage.
    //write to a local file path passed to the fetcher function, if error is present throw the 
    // error otherwise indicate succcess
    fs.writeFile(path, content, (err) => {
      if (err) {
        console.log("An error occurred" + err);
      } else {
        console.log("File written successfully\n");
        console.log("Downloaded and saved " + fs.statSync(path).size + " bytes to " + path);
      }
    });
  });
};

// calling fetcher function after reading the inputs from the command prompt/terminal. 
fetcher(urlPassed,path);