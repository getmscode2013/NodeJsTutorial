# Introduction : NodeJs Tutorial

1. Node.js is an open-source and cross-platform JavaScript runtime environment.
2. Node.js runs the V8 JavaScript engine, the core of Google Chrome.
3. A Node.js app is run in a single process, without creating a new thread for every request. 
4. Node.js has a unique advantage devloper can write the server-side code in addition to the client-side code.
5. Node.js is born on 2009.
6. The first form of npm is created 2010.

# Day 1 : Hello world
1. Check the nodejs installation with version by.
node -v
2. Check for NodePackageManager (npm) version.
npm -v
3. start node terminal you can type > node

It will open the Online REPL Terminal
a) Read − Reads user's input, parses the input into JavaScript data-structure, and stores in memory.
b) Eval − Takes and evaluates the data structure.
c) Print − Prints the result.
d) Loop − Loops the above command until the user presses ctrl-c twice.

like 
$ node
> 1 + 3
4 

4. Create the first application as Hellow world as.
Create folder day1--> go folder by Cd command -> Now type
>npm init
it will ask you ceratin detail, either you can provide details or just click on enter.
Now you can see the package.json file on the folder.
5. Create file Index.js
write console.log("Hello world") in index.js. 
6. Go to terminal window, go to day1 folderand type 
> node index.
you will get the output in terminal.

# Day 2 : Function Type
Lets move to day two when we will see the function type. its just basic of Java ECMA6 how we will define it.
1. Define Objects.

var obj =  {name : "satya", phoneNo : 1234567890, email : "Test@gmail.com"}

console.log(obj);
console.log(obj.name);

2. anonymous method
Function which is not having the name is called anonymous function.

var v = function() 
{
    console.log("this is anonymous function");
}

v();

3. Arrow function is based on arrow function keys

var v = () =>     console.log("this is arrow function");
v()

4. Multi line values Arrow function.

var v = (a , b) => 
{
    console.log("addition is :");
    console.log(a + b);
};

v(2,3);


# Day 3 -  Global Object
 In NodeJs Global Object, Object which we can be access by any modules.
 
 We do not need to include these objects in our application, rather we can use them directly
 
 // __dirname : it use to check  the directive name.
console.log(__dirname)

//__filename : it use to check the file name.
console.log(__filename)

// Console : it view the data in terimnal.
console.log("Satya")

// Require : include any out side module in page.
var requireTest = require("./requiretest");
console.log(requireTest.abc);
Creating your own module.

Requiretest.js
========================================================
// Arrow function is based on arrow function keys/

const name = "Satya Rathore";
var v1 = () =>     console.log("this is arrow function");
v1();

module.exports.abc = name;
========================================================

Some other global object are

//buffer
//module
//Reports
//Process


# Day 11 -  Express App Generator

1. Expression App generator is not directly working for me to Install from Terminal of Visual Studio Code.

2. I installed the nodeJsexpression from node.js commond prompt.

3. For more details about express applocation generation you can see the below URL.
https://expressjs.com/en/starter/generator.html

4. It provide the step by step way to do that.

5. After installed it successfully, used below command to get the application template.
>express E:\node_tutorial\day11-ExpressAppGenerator

6. Move to >cd E:\node_tutorial\day11-ExpressAppGenerator

7. Now run the application as below.

8. Now get the template of pug instade of creating blank and default template.
>express --view=ejs E:\node_tutorial\day11-ExpressAppGenerator

9. Than install all the packages
> npm install

10. Now we run the application by.
> SET DEBUG=day11-expressappgenerator:* & npm start

11. It create all the structure of application which is required.
a) Public -- Whch is work like assets folder having image, Script and style locations.
b) Routes -- It contain the defination of all rotings.
c) View -- All application view.

12. To add any view or update the any view you need to check the view file.

like index.ejs
=========================

<!DOCTYPE html>
<html>
  <head>
    <title><%= title %></title>
    <link rel='stylesheet' href='/stylesheets/style.css' />
  </head>
  <body>
    <h1><%= title %></h1>
    <p><%= message %></p>
  </body>
</html>
====================
 
 In above you can see the title and Message is binding dynamically and it is passing from the routes file.
 Routes/Index.js
 ===========================
 var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Satya', message : 'Welcome to NodeJs exress'  });
});

module.exports = router;

=============================

Here you can see the Title  is satya and Message is 'Welcome to NodeJs exress' 
you can see it in browser as.
<img src="https://github.com/getmscode2013/NodeJsTutorial/blob/master/day11-ExpressAppGenerator/screen.png">

 
 
