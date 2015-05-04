var greeting = function(name) {
  console.log("Hello, " + name);
}

var user = function(name, method) {
  method(name);
}

user("World", greeting);
