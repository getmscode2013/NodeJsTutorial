// Let go through the  day11- ExpressAppGenerator before looking to that.
// We will get the default pages like that.
// Now here we are passing the "message: also as in get method and lets see the output by ruuning application
// Added another view with the paramter of about  similar to  index

var express = require('express');
var router = express.Router();


/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', message : 'Checking for body paring application' });
});


// About screen by using the parameter - you can see the about scrren.
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About', message : 'Its about application details.' });
});

// About screen by using the parameter - you can see on the screen how it will work.
router.get('/calculation/:a-:b', function(req, res, next) {
  res.render('calculation', { title: 'Calculator', sum : parseInt(req.params.a) + parseInt(req.params.b) });
});

// now we will see how the post will
// We will see that how login form will work in post method.
// Here we will post the username and password which will validate and pass to another method by post.
// we are having login.ejs as 

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Please login', message : 'Please provide login Infomration.' });
});


// now you are displayig the data as you have insrted to form.
// But you will get error here as you need to include body parser middle ware.
// You need to run the package for bodyparser like below.
// npm install body-parser
// you can get more details from
// https://expressjs.com/en/resources/middleware/body-parser.html

// You need to include to application
// you can see the input given to the form in req .


router.post('/login', function(req, res, next) {
  console.log(req.body);
  res.render('success', { title: 'login success', username: req.body.username, password: req.body.password });
});


module.exports = router;
