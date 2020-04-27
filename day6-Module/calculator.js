// Insted of keeping all the code in one file we split the code into multiple file.
// To splitting the file into mutiple file we defined it as modules.
// It will be useful for code resuability nd for maintability.


// Creating a samall calculator with is having addition, substartion and defined all in diffrent file
// Need to use require to export the module.

var add = require("./addition");
var sub = require("./subtration");

console.log(`Addition  of number 10 and 12 : ${add.Addition(10, 12)}`);
console.log(`Subtration  of number 14 and 12 :  ${sub.subtration(14, 12)}`);