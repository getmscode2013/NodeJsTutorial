// nodemon reload, automatically.
/*
Nodemon is a utility that will monitor for any changes in your source and automatically restart your server
Just use nodemon instead of node to run your code, and now your process will automatically restart when your code changes. 

npm install -g nodemon

run the node application

> nodemon index.js

------------------------------
If above will not work follow the below process

First, npm install --save nodemon then in package.json write the followings

"scripts": {
    "server": "nodemon server.js"
  },
then write in terimnal

npm run server
npm run server HttpNodemon.js

*/

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
