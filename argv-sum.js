argv = process.argv;
argv.shift();
argv.shift();

integers = argv.map(Number);

var sum = integers.reduce(function(total, num) {
  return total + num
}, 0);

console.log(sum);
