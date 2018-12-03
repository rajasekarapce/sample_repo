var fs = require("fs"); //importing filesystem
var data = fs.readFileSync("test.txt");
console.log(data.toString());
console.log("Program Ended");