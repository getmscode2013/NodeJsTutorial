// We will continue wih  Day15- Bodyparsing Middleware.
// To run application you need to type SET DEBUG=day16-expressvalidatormiddleware:* & npm start
// In previous chapter we have see how we are converting the data to JSOn using Body parsing and displaying in UI.
// Now in this we will see how we will validate the input which we are passing.
//  Now we have only login and login sucess
// Lets Install ExpressValidator
// npm install --save express-validator
// For more details you can see on https://express-validator.github.io/docs/
// now lets include the  Express-validator in file

var express = require('express');
var router = express.Router();
const { check, validationResult, matchedData} = require('express-validator');


/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', message : 'Checking for body paring application' });
});

// get to the page http://localhost:3000/login

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Please login', message :'Please provide login Infomration.', user: false });
});

// If you will see in Post we include it in the form of array  as a paramter.
// Finds the validation errors in this request and wraps them in an object with handy functions

/*
router.post('/login', [
  check('username',"Enter Valid Emailid").isEmail(),
  check('password').isLength({min:6})
], function(req, res, next) {
  console.log(req.body);
 const errors = validationResult(req);
console.log(errors);
 if(errors.isEmpty())
 {
  res.render('success', { title: 'login success', username: req.body.username, password: req.body.password });
 }
 else
 {
   var v = errors.mapped();
  res.render('login', { title: 'Please login', message :'Please provide login Infomration.',  error : errors.mapped() });
console.log(v.username.msg);
}
  
}); */

// Now if validation is faliing it is not showing the instead data. it is clearing that also.
// Now for that what  we need to do is to map the data and pass it throw method call.
// how can you inclue into matcheddata to matcing data and assign the value.
//const { check, validationResult, matchedData} = require('express-validator');


router.post('/login', [
  check('username',"Enter Valid Emailid").isEmail(),
  check('password').isLength({min:6})
], function(req, res, next) {
  console.log(req.body);
 const errors = validationResult(req);
console.log(errors);

 if(errors.isEmpty())
 {
// You can assign the values like that but if there are so many values it tiugh to pass as parameter.
  //res.render('success', { title: 'login success', username: req.body.username, password: req.body.password });

  // Due to that used the matched method like below
   // assigned the req data to user variable and pass it to method.
  const user = matchedData(req);
   res.render('success', { title: 'login success', user: user });
 }
 else
 {
   // same we need to do it here to.
   // Here you need to change the ejs file also and use the user
  const user = matchedData(req);
  console.log(user.username);
  res.render('login', { title: 'Please login', message :'Please provide login Infomration.', user: user,  error : errors.mapped() });

}
  
}); 

module.exports = router;
