// the way way like file you can read the html and display it tinto broswer

const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {

fs.readFile("myfirstpage.html","utf-8", (err, data) => 
{
    if(err) throw err;
    res.writeHead(200, {"content-type":"text/html"});
    res.write(data)
    res.end();
})


}).listen("4000", console.log("Website is running on 4000 port."));
