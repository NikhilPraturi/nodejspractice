
//fs is a filesystem module require is used to import the module
//fs is a constant variable which is holding the require module
const fs = require('fs');
fs.writeFileSync("hello.txt","this file is created using node js");
fs.appendFileSync("hello.txt"," a new text was appended");


