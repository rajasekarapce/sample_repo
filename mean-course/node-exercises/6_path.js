var path = require('path');

var fileName = __filename;
console.log(fileName);

var extn = path.extname(fileName);
console.log(extn);

var baseName = path.basename(fileName);
console.log(baseName);