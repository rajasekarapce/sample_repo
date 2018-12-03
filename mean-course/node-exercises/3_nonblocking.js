var fs = require("fs");
var data = fs.readFile('test.txt', (err, data) => {
    if(err){
        return console.log(err);
    }
    console.log(data.toString());
});

console.log("Program Ended");