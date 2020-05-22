// File system is use to read and print the content of file.
// The Node File System (fs) module can be imported using the following syntax
// var fs = require("fs")
const fs = require("fs");

console.log(__dirname + "\\dummyfile.txt");

/*
fs.readFile(__dirname + "\\dummyfile.txt","utf-8",function(err, data)
{
    if(err) throw err;
    console.log(data);
});
*/

// You can read it using the arrow function like below
fs.readFile(__dirname + "\\dummyfile.txt","utf-8",(err, data) =>
{
    if(err) throw err;
    console.log(data);
});

// You can write the data to the file
fs.writeFile('dummyfile.txt', 'Learn Node js in step by step', function(err) {
    if (err) {
       return console.error(err);
    }
});

// You can delete the file by belo command
fs.unlink('dummyfile.txt', function(err,data) {
    if (err) {
       return console.error(err);
    }

    console.log("records in file " + data);
});
