var fs = require("fs");

file = fs.readFileSync(process.argv[2]);
string = file.toString();
split = string.split("\n");

console.log(split.length - 1);
