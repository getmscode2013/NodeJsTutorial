// sync method used to read the files.
// Partice we have done is all async method.
// There are both type of method avilable to read the file async and sync.

// Async Method
// Here out will first print :  File Read Successfully 
// Than content of file.

/*
const fs = require("fs");

fs.readFile("dummyfile.txt","utf-8",(err, data) =>
{
    if(err) throw err;
    console.log(data);
});

console.log("++++++++++++++");
console.log("File read successfully");
*/

// Sync method.
// In Async method we have call back but in Sync method we dont have call back.
//  Better to keep it in try catch to catch the exception.
// Here first file data will print and then "File read successfully".

const fs = require("fs");

try
{
var data = fs.readFileSync("dummyfile.txt","utf-8")
console.log(data);
}
catch(e)
{
    throw e;
}

console.log("++++++++++++++");
console.log("File read successfully");