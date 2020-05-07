// Go to the Day 10 before this 
// There you will get the basic idea how to install express by what is expressJS.
// Here we will discuss how routing works in expressJS.
// Routing refers how the and what values we can send to endpint URL trough client.
// Based on the endpoint input application will behave.
// You can also refer to below URL of express for more details.
// https://expressjs.com/en/guide/routing.html

// The following code is an example of a very basic route.

var express = require('express')
var app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world')
})


// Mostly there are two way  method for roting Get and  post but it is allowing All also.

//<b>Route paths</b>
//Route paths, in combination with a request method, define the endpoints at which requests can be made.
// The characters ?, +, *, and () are subsets of their regular expression counterparts

//The route path will match requests to /contacts.

app.get('/about', function (req, res) {
    res.send('about')
  })

// This route path will match acd and abcd.
// Either b or not 
app.get('/ab?cd', function (req, res) {
    res.send('ab?cd')
  })

// This route path will match abcd, abxcd, abRANDOMcd, ab123cd, and so on.
// front (ab) and last(cd) and in between any random text you can put
app.get('/ab*cd', function (req, res) {
    res.send('ab*cd')
  })

// This route path will match abcd, abbcd, abbbcd, and so on.
// You can place mutiple time b
// 
app.get('/ab+cd', function (req, res) {
    res.send('ab+cd')
  })

// <b>Route parameters</b>
// Passing the parameter on Route URL
// You need to define the Route URL like below.
// Input http://localhost:4000/users/50
// output {"userId":"50"}

app.get('/users/:userId', function (req, res) {
    res.send(req.params)
})

// You can pass the mutiple paramnter on route URL as like below.
// Input http://localhost:4000/users/50/books/5
// Output {"userId":"50","bookId":"5"}
app.get('/users/:userId/books/:bookId', function (req, res) {
    res.send(req.params)
  })

// You can seperate the parameters also by using -
// Input value for that http://localhost:4000/flights/hyderabad-Cg
// output {"from":"hyderabad","to":"Cg"}
app.get('/flights/:from-:to', function (req, res) {
    res.send(req.params)
  })


  app.listen("4000", () => console.log("Web server running on 4000 port."))