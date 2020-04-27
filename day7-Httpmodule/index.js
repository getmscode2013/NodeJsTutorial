// NOde js are providing some of the inbuild module which we help to devlop
// http module is one of inbuild module which will help to create web server
// it will help to see the output in browser

// Improting the http module
const http = require('http')

// create the server which will take input of req and output as rs
http.createServer(function(req, res){


// Adding requst header
res.writeHead(200, {'Content-Type': 'text/html'});

// Pass query string in URL localhost:4000/123
var qs = req.url;

res.write("<h1>hello Satya<h1>" + qs);

// you need to complete the response here.
res.end();

}).listen(4000, () => console.log("Your application is running on Port 4000"));

// It will use to show that your application is running on belo port
// () => console.log("Your application is running on Port 4000" 
