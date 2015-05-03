var fs = require("fs");

function newlines() {
  fs.readFile(process.argv[2], function doneReading(err, fileContents) {
    segments = fileContents.toString().split("\n");
    console.log(segments.length - 1);
  });
}

newlines();
