// How to call the middle ware only for one function not for all


// Let see the simple function for req and response

var express = require('express')
var app = express()


// Logging of original URL
function logOriginalUrl (req, res, next) {
    console.log('Request URL:', req.originalUrl)
    next()
  }


  // Log methods
  function logMethod (req, res, next) {
    console.log('Request Type:', req.method)
    next()
  }
  
  var logStuff = [logOriginalUrl, logMethod]
  app.get('/user/:id', logStuff, function (req, res, next) {
    res.send('User Info')
  })


app.listen(3000, () => console.log("Application running on 3000 port"))
