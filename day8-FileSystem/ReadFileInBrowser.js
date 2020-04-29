// To read file system in browser we need to  import/require HTTP and Fs.
// HTTP will creatre server where we can see  browseroutput
// Fs will read the file

const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {

fs.readFile("dummyfile.txt","utf-8", (err, data) => 
{
    if(err) throw err;
    res.writeHead(200, {"content-type":"text/plain"});
    res.write(data)
    res.end();
})


}).listen("4000", console.log("Website is running on 4000 port."));
