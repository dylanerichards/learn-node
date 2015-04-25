var fs = require("fs");

function newlines() {
  fs.readFile(process.argv[2], function doneReading(err, fileContents) {
    string = fileContents.toString();
    split = string.split("\n");
    console.log(split.length - 1);
  });
}

newlines();
