const request = require("request");
const fs = require("fs");

// to filter out and only return the arguments after calling node fetcher.js
const commandLineArgument = process.argv.slice(2);
const urlPassed = commandLineArgument[0];
const path = commandLineArgument[1];

const fetcher = function (urlPassed, path) {
  request(urlPassed, function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  });
  //write to a local file path passed to the fetcher function. 
  fs.writeFile(path, body, (err) => {
    if (err)
      console.log(err);
    else {
      console.log("File written successfully\n");
      console.log("The written has the following contents:");
      console.log(fs.readFileSync("books.txt", "utf8"));
    }
  });
};

// calling fetcher function after reading the inputs from the command prompt/terminal. 
fetcher(urlPassed,path);