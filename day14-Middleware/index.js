// Middleware is using between the req recive from client and before responding to it.
// In Middleware we have three paramenter req, res and the new one is next.
// You can see more detail from expressJs website
// https://expressjs.com/en/guide/writing-middleware.html
//Middleware functions can perform the following tasks:

// > Execute any code.
// > Make changes to the request and the response objects.
// > End the request-response cycle.
// > Call the next middleware in the stack.


// Let see the simple function for req and response

var express = require('express')
var app = express()


// Small middle ware for logging, but you need to include it to application.
// he next() function is not a part of the Node.js or Express API, but is the third argument that is passed to the middleware function.

var myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}

// To load the middleware function, call app.use(), specifying the middleware function.
// Calling the global
app.use(myLogger)


app.get('/', function (req, res) {
  res.send('Hello World!')
})



app.listen(3000, () => console.log("Application running on 3000 port"))
