# Introduction : NodeJs Tutorial

1. Node.js is an open-source and cross-platform JavaScript runtime environment.
2. Node.js runs the V8 JavaScript engine, the core of Google Chrome.
3. A Node.js app is run in a single process, without creating a new thread for every request. 
4. Node.js has a unique advantage devloper can write the server-side code in addition to the client-side code.
5. Node.js is born on 2009.
6. The first form of npm is created 2010.

# Day 1 : Hello world
1. Check the nodejs installation with version by.
```ruby 
node -v
```
2. Check for NodePackageManager (npm) version.
```ruby
npm -v
```
3. start node terminal you can type 
```ruby
> node
```

It will open the Online REPL Terminal
a) Read − Reads user's input, parses the input into JavaScript data-structure, and stores in memory.
b) Eval − Takes and evaluates the data structure.
c) Print − Prints the result.
d) Loop − Loops the above command until the user presses ctrl-c twice.

like 
```ruby
$ node
> 1 + 3
4 
```

4. Create the first application as Hellow world as.
Create folder day1--> go folder by Cd command -> Now type
>npm init
it will ask you ceratin detail, either you can provide details or just click on enter.
Now you can see the package.json file on the folder.
5. Create file Index.js
write ```rubyconsole.log("Hello world")``` in index.js. 
6. Go to terminal window, go to day1 folderand type 
> node index.
you will get the output in terminal.

# Day 2 : Function Type
Lets move to day two when we will see the function type. its just basic of Java ECMA6 how we will define it.
1. Define Objects.

```ruby
var obj =  {name : "satya", phoneNo : 1234567890, email : "Test@gmail.com"}

console.log(obj);
console.log(obj.name);
```

2. anonymous method
Function which is not having the name is called anonymous function.
```ruby
var v = function() 
{
    console.log("this is anonymous function");
}

v();
```

3. Arrow function is based on arrow function keys
```ruby
var v = () =>     console.log("this is arrow function");
v()
```
4. Multi line values Arrow function.
```ruby
var v = (a , b) => 
{
    console.log("addition is :");
    console.log(a + b);
};

v(2,3);
```

# Day 3 -  Global Object
 In NodeJs Global Object, Object which we can be access by any modules.
 
 We do not need to include these objects in our application, rather we can use them directly
 
 ```ruby
 // __dirname : it use to check  the directive name.
console.log(__dirname)

//__filename : it use to check the file name.
console.log(__filename)

// Console : it view the data in terimnal.
console.log("Satya")

// Require : include any out side module in page.
var requireTest = require("./requiretest");
console.log(requireTest.abc);

```
Creating your own module.

Requiretest.js

```ruby
// Arrow function is based on arrow function keys/

const name = "Satya Rathore";
var v1 = () =>     console.log("this is arrow function");
v1();

module.exports.abc = name;

```

Some other global object are

- //buffer
- //module
- //Reports
- //Process

# Day 10 -  ExpressJs

ExpressJs use to build the Node Application, it make faster the devlopment and provide inbuild code for development.<br /><br />

1.  You can know more details about expressjs from https://expressjs.com/<br />

2.  Tag of express Js is well suited "Fast, unopinionated, minimalist web framework for Node.js"<br />

3.  install express by <br />
// npm install express --save<br /><br />


4.  You can see the below code, previously when we have checked for http, it took many line of code to see in browser.<br />
// you can get same code on expressjs website. <br /><br />

const ex = require("express");<br />
const app = ex();<br /><br />

app.get('/', (req, res) => { res.send('Hello world'); })<br />
app.listen("4000", () => console.log("Server is running on port 4000"));<br /><br />


4. With  expressJs you can create Web application, Middleware (API).<br />
Which is easier to interagte with application.<br /><br />


5.  Basic routing :<br />
// You can see how to handle the routing using the express JS like get/post<br />
// you can see below for more details about routing.<br />
// https://expressjs.com/en/starter/basic-routing.html<br /><br />

<h3>Index.js </h3>

========================<br />
const ex = require("express");<br />
const app = ex();<br />

app.get('/', (req, res) => { res.send('Hello world'); })<br /><br />

// like above you can defined with parameter<br />
app.get('/Books', (req, res) => { res.send('Book selves'); })<br />

// Above you can seen only te get methods, <br />
// What happend if there is post method like below, Then you can not access from URL.<br />
// You can either use postmn or Fiddler to check the post methods<br />
app.post('/Books/NewBook', (req, res) => { res.send('Book selves'); })<br /><br />

app.listen("4000", () => console.log("Server is running on port 4000"));<br />


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


index.ejs

=========================

<!DOCTYPE html>
<html>
  <head>
    <title><%= title %></title>
    <link rel='stylesheet' href='/stylesheets/style.css' />
  </head>
  <body>
    < h1 ><%= title %>< /h1 >
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

 
 # Day 12 -  Expressjs Inclusing Static Files
 
1.  While creating the application we need to include  many Static files like Images, CSS , JS etc.

2.  In NODEJS for express  it will provide the middleware to create access the static file.

3. If you will not include the middleware, it will not show the static file you included to project.

4. Lets include express js in application similar way we did it on day 10
// npm install express --save

5. Lets create folder starature with the name assets and having sub folder. <br/ >
- Images : It contain images.
- style : In contains Style sheet

6.  We will keep our static file there

7. Lets see HTML file structure with Image and CSS.

<b>index.html </b>

===========================
html <br/>
title<br/>
    My static Page
/title<br/>

head<br/>
    link rel="stylesheet" href="/Css/style.css"<br/>
/head<br/><br/>

body<br/>
    table<br/>
        tr<br/>
            td class="tableBody"   images about the timer control /td<br/>
            td  img src="/images/iconfinder_tower_748987.png" width=100 /td<br/>
        /tr<br/>
    /table<br/><br/>
   
/body<br/><br/>

/html<br/>

8. Now include the middleware component in Index.js as below.

Index.js

======
const ex = require("express");
const app = ex();

<b>app.use(ex.static('assets')) </b>


// to include file we need to use sendfile and add the file name
app.get('/', (req, res) => { res.sendfile("index.html"); })


app.listen("4000", () => console.log("Server is running on port 4000"));

 9. Output you will get in the screen as.
 
 <img src="https://github.com/getmscode2013/NodeJsTutorial/blob/master/day12-StaticFiles/staticoutput.png">
 
 
 
  # Day 13 -  Basic Routing
  
1. Go to the Day 10 before this 
2. There you will get the basic idea how to install express by what is expressJS.
3. Here we will discuss how routing works in expressJS.
4. Routing refers how the and what values we can send to endpint URL trough client.
5. Based on the endpoint input application will behave.
 You can also refer to below URL of express for more details.
 https://expressjs.com/en/guide/routing.html

6. The following code is an example of a very basic route. <br /><br />

<b>
var express = require('express')
var app = express()

// respond with "hello world" when a GET request is made to the homepage<br />
app.get('/', function (req, res) {
  res.send('hello world')
})

</b><br /><br />

7. Mostly there are two way  method for roting Get and  post but it is allowing All also.

8. <b>Route paths</b>
 a. Route paths, in combination with a request method, define the endpoints at which requests can be made.
 b. The characters ?, +, *, and () are subsets of their regular expression counterparts
 c. The route path will match requests to about. <br />

<b>
app.get('/about', function (req, res) {
    res.send('about')
  })
    
</b><br /><br />
  
9. This route path will match acd and abcd. Either b or not.<br />

<b>
app.get('/ab?cd', function (req, res) {
    res.send('ab?cd')
  })
</b><br /><br />
  
 10. This route path will match abcd, abxcd, abRANDOMcd, ab123cd, and so on.
front (ab) and last(cd) and in between any random text you can put.<br />

<b>
app.get('/ab*cd', function (req, res) {
    res.send('ab*cd')
  })
</b><br /><br />
  
 11. This route path will match abcd, abbcd, abbbcd, and so on. You can place mutiple time b.<br />
 <b>
 app.get('/ab+cd', function (req, res) {
    res.send('ab+cd')
  })
 </b><br /><br />
 
 12.  <b>Route parameters</b>
 Passing the parameter on Route URL
 You need to define the Route URL like below.
 Input http://localhost:4000/users/50
 output {"userId":"50"}<br />
 
 <b>
 app.get('/users/:userId', function (req, res) {
    res.send(req.params)
})
</b><br /><br />

13. If you want passing value whould not mandatory than you can use<br />

<b>
app.get('/users/:userId?', function (req, res) {
    res.send(req.params)
})
</b><br /><br />

14.  You can pass the mutiple paramnter on route URL as like below.
Input http://localhost:4000/users/50/books/5
 Output {"userId":"50","bookId":"5"} <br />
 
 <b>
 app.get('/users/:userId/books/:bookId', function (req, res) {
    res.send(req.params)
  })
 </b><br /><br />
  
 15.  You can seperate the parameters also by using -
 Input value for that http://localhost:4000/flights/hyderabad-Cg
 output {"from":"hyderabad","to":"Cg"} <br />
 
 <b>
 app.get('/flights/:from-:to', function (req, res) {
    res.send(req.params)
  })
</b><br />
