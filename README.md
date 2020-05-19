# Introduction : NodeJs Tutorial

1. Node.js is an open-source and cross-platform JavaScript runtime environment.
2. Node.js runs the V8 JavaScript engine, the core of Google Chrome.
3. A Node.js app is run in a single process, without creating a new thread for every request. 
4. Node.js has a unique advantage devloper can write the server-side code in addition to the client-side code.
5. Node.js is born on 2009.
6. The first form of npm is created 2010.

## Day 1 : Hello world
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

It will open the Online REPL Terminal<br/>
- Read − Reads user's input, parses the input into JavaScript data-structure, and stores in memory.
- Eval − Takes and evaluates the data structure.
- Print − Prints the result.
- Loop − Loops the above command until the user presses ctrl-c twice.

like 
```ruby
$ node
> 1 + 3
4 
```

4. Create the first application as Hellow world as.
Create folder day1--> go folder by Cd command -> Now type
>npm init <br/>
it will ask you ceratin detail, either you can provide details or just click on enter.
Now you can see the package.json file on the folder.
5. Create file Index.js
write ```console.log("Hello world")``` in index.js. 
6. Go to terminal window, go to day1 folderand type 
>node index <br/>
you will get the output in terminal.

## Day 2 : Function Type
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

## Day 3 -  Global Object
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

## Day 4 -  ECMA Script

ECMA  was created to standardize JavaScript to help foster multiple independent implementations.
The full form of ECMA is European Computer Manufacturer's Association.A standard for scripting languages like JavaScript, JScript is ECMAScript.

Here NodeJS follow the ECMA standard, here we are going to dicuss about Const, Let and class.

Unlike variables declared with var that are function-scoped, variables declared with let are block-scoped: they only exist in the block they are defined in.

```ruby
var a = 20
var a = 30;

console.log(a);

let x = 20;
x = "satya"; /// but you can change the datatype
//let x = 30; /// if you will defined like that it will give error

console.log(x);
var v = () => {
    let x = 50;   /// here again you can defined it and it will work like scoped variable.
    console.log(x);
}
v();

```
Diffrence in Var and Let

|Var 		   		         	| let 					|
| --------------------------------------------------------------------------|--------------------------------------------------------------------------- |
|variables belong to the global scope or local scope  if they are declared inside a function: var counter;| The let variables are blocked scopes: let counter;				 |

## Day 10 -  ExpressJs

ExpressJs use to build the Node Application, it make faster the devlopment and provide inbuild code for development.<br /><br />

1.  You can know more details about expressjs from ```https://expressjs.com/```<br />

2.  Tag of express Js is well suited "Fast, unopinionated, minimalist web framework for Node.js"<br />

3.  Install express by below command.<br />

```ruby
npm install express --save
```


4.  You can see the below code, previously when we have checked for http, it took many line of code to see in browser.<br />
- you can get same code on expressjs website. <br /><br />

```ruby
const ex = require("express");<br />
const app = ex();<br /><br />

app.get('/', (req, res) => { res.send('Hello world'); })<br />
app.listen("4000", () => console.log("Server is running on port 4000"));<br /><br />
```

5. With  expressJs you can create Web application, Middleware (API).<br />
Which is easier to interagte with application.<br /><br />


6.  Basic routing :<br />
- You can see how to handle the routing using the express JS like get/post<br />
- you can see below for more details about routing.<br />
>https://expressjs.com/en/starter/basic-routing.html 

<h3>Index.js </h3>

```ruby

const ex = require("express");
const app = ex();

app.get('/', (req, res) => { res.send('Hello world'); })

// like above you can defined with parameter
app.get('/Books', (req, res) => { res.send('Book selves'); })

// Above you can seen only te get methods, 
// What happend if there is post method like below, Then you can not access from URL.
// You can either use postmn or Fiddler to check the post methods
app.post('/Books/NewBook', (req, res) => { res.send('Book selves'); })

app.listen("4000", () => console.log("Server is running on port 4000"));
```

## Day 11 -  Express App Generator

1. Expression App generator is not directly working for me to Install from Terminal of Visual Studio Code.

2. I installed the nodeJsexpression from node.js commond prompt.

3. For more details about express applocation generation you can see the below URL.
```https://expressjs.com/en/starter/generator.html```

4. It provide the step by step way to do that.

- Open Installed Node Manager Command prompt.

- Install Application Manager based on your template requirment
like below we  use ejs  creating blank and default template. <br />
```express --view=ejs E:\node_tutorial\day11-ExpressAppGenerator```

- Open  application in visual studio Code and go to that directive ```cd E:\node_tutorial\day11-ExpressAppGenerator```<br />

- Open Terminal and than install all the packages <br />
```npm install```

- Now we run the application by.<br />
``` SET DEBUG=day11-expressappgenerator:* & npm start ```

5. It create all the structure of application which is required.
  a) Public -- Whch is work like assets folder having image, Script and style locations. <br />
  b) Routes -- It contain the defination of all rotings. <br />
  c) View -- All application view. <br />

6. To add any view or update the any view you need to check the view file.

>index.ejs

```ruby

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
```
 
 In above you can see the title and Message is binding dynamically and it is passing from the routes file.
 
 
 <b>Routes/Index.js </b>
```ruby
 var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Satya', message : 'Welcome to NodeJs exress'  });
});

module.exports = router;
```

Here you can see the Title  is satya and Message is 'Welcome to NodeJs exress' 
you can see it in browser as.

<img src="https://github.com/getmscode2013/NodeJsTutorial/blob/master/day11-ExpressAppGenerator/screen.png">

 
 ## Day 12 -  Expressjs Inclusing Static Files
 
1.  While creating the application we need to include  many Static files like Images, CSS , JS etc.

2.  In NODEJS for express  it will provide the middleware to create access the static file.

3. If you will not include the middleware, it will not show the static file you included to project.

4. Lets include express js in application similar way we did it on day 10
``` npm install express --save```

5. Lets create folder starature with the name assets and having sub folder. <br/ >
- Images : It contain images.
- style : In contains Style sheet

6.  We will keep our static file there

7. Lets see HTML file structure with Image and CSS.

<b>index.html </b>
```ruby
<html>
<title>
    My static Page
<title>

<head>
    <link rel="stylesheet" href="/Css/style.css">
</head>

<body>
    <table>
       <tr>
            <td class="tableBody"   images about the timer control </td>
            <td  img src="/images/iconfinder_tower_748987.png" width=100 </td>
        </tr>
    </table>
   
</body>

</html>
```
8. Now include the middleware component in Index.js as below.

<b>Index.js</b>

```ruby
const ex = require("express");
const app = ex();

<b>app.use(ex.static('assets')) </b>


// to include file we need to use sendfile and add the file name
app.get('/', (req, res) => { res.sendfile("index.html"); })


app.listen("4000", () => console.log("Server is running on port 4000"));
```

 9. Output you will get in the screen as.
 
 <img src="https://github.com/getmscode2013/NodeJsTutorial/blob/master/day12-StaticFiles/staticoutput.png">
 
 
 
  ## Day 13 -  Basic Routing
  
1. Go to the Day 10 before this 
2. There you will get the basic idea how to install express by what is expressJS.
3. Here we will discuss how routing works in expressJS.
4. Routing refers how the and what values we can send to endpint URL trough client.
5. Based on the endpoint input application will behave.
 You can also refer to below URL of express for more details.
``` https://expressjs.com/en/guide/routing.html```

6. The following code is an example of a very basic route. <br /><br />

```ruby
var express = require('express')
var app = express()

// respond with "hello world" when a GET request is made to the homepage<br />
app.get('/', function (req, res) {
  res.send('hello world')
})
```

7. Mostly there are two way  method for roting Get and  post but it is allowing All also.

8. <b>Route paths</b>
 a. Route paths, in combination with a request method, define the endpoints at which requests can be made.
 b. The characters ?, +, *, and () are subsets of their regular expression counterparts
 c. The route path will match requests to about. <br />

```ruby
app.get('/about', function (req, res) {
    res.send('about')
  })
```
  
9. This route path will match acd and abcd. Either b or not.<br />

```ruby
app.get('/ab?cd', function (req, res) {
    res.send('ab?cd')
  })
```
  
 10. This route path will match ``` abcd, abxcd, abRANDOMcd, ab123cd, ``` and so on.
front (ab) and last(cd) and in between any random text you can put.<br />

```ruby
app.get('/ab*cd', function (req, res) {
    res.send('ab*cd')
  })
```
  
 11. This route path will match abcd, abbcd, abbbcd, and so on. You can place mutiple time b.<br />
```ruby
 app.get('/ab+cd', function (req, res) {
    res.send('ab+cd')
  })
```
 
 12.  <b>Route parameters</b>
 Passing the parameter on Route URL
 You need to define the Route URL like below.
 Input http://localhost:4000/users/50
 ```output {"userId":"50"}<br />```
 
```ruby
 app.get('/users/:userId', function (req, res) {
    res.send(req.params)
})
```

13. If you want passing value whould not mandatory than you can use<br />

```ruby
app.get('/users/:userId?', function (req, res) {
    res.send(req.params)
})
```

14.  You can pass the mutiple paramnter on route URL as like below.
Input http://localhost:4000/users/50/books/5
``` Output {"userId":"50","bookId":"5"}```
 
```ruby
 app.get('/users/:userId/books/:bookId', function (req, res) {
    res.send(req.params)
  })
```
  
 15.  You can seperate the parameters also by using -
 Input value for that http://localhost:4000/flights/hyderabad-Cg
 ```output {"from":"hyderabad","to":"Cg"} ```
 
```ruby
 app.get('/flights/:from-:to', function (req, res) {
    res.send(req.params)
  })
```
  ## Day 14 -  Middleware
  
1. Middleware is using between the req recive from client and before responding(res) to it.
2.  In Middleware we have three paramenter **req**, **res** and the new one is **next**.
3. You can see more detail from `expressJs' website
```https://expressjs.com/en/guide/writing-middleware.html```

4. Middleware functions can perform the following tasks: <br />
- Execute any code.
- Make changes to the request and the response objects.
- End the request-response cycle.
- Call the next middleware in the stack.

>Let see the simple function for req and response with global middleware call

```ruby
var express = require('express')
var app = express()

var myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}

app.use(myLogger)
app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, () => console.log("Application running on 3000 port"))

```

Simple middle ware for logging, next() function is not a part of the Node.js or Express API.
but is the third argument that is passed to the middleware function.

```ruby
var express = require('express')
var app = express()

var myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}
```

To load the middleware function, call app.use(), specifying the middleware function.
Calling the global

```ruby
app.use(myLogger)
```

>Let see the simple function for req and response with  middleware call by particular method

```ruby
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


```

here we have two middleware component one for get the original URL for the requesest and another one is to get the type of method which hit there.

```ruby
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
```

Now creating the array of two middleware here  as like below.

```ruby
  var logStuff = [logOriginalUrl, logMethod]
```

Plug that method which we need to attach that middle ware
```ruby
  app.get('/user/:id', logStuff, function (req, res, next) {
    res.send('User Info')
  })

```

  ## Day 17 -  NestJs
  
```https://docs.nestjs.com/``` <br />
- It is used to build serverside application microservices and RestAPI.
- It is proper framework like Asp.net, Django. It is provide you the architecture to build a server.
- It is Extensible, Versatile and prograssive javascript.
- If you are working with NestJs, type script is the default module. If you have worked with angular than NEST js is pretty similar.
- Nest makes use of robust HTTP Server frameworks like Express (the default) and optionally can be configured to use Fastify as well!
- Nest provides an out-of-the-box application architecture which allows developers and teams to create highly testable, scalable, loosely coupled, and easily maintainable applications.

```https://docs.nestjs.com/techniques/database``` <br />
```https://docs.nestjs.com/recipes/sql-typeorm``` <br/>
- Nest is database agnostic, allowing you to easily integrate with any SQL or NoSQL database
- You can also directly use any general purpose Node.js database integration library or ORM,
- Nest provides tight integration with TypeORM and Sequelize out-of-the-box with the @nestjs/typeorm and @nestjs/sequelize packages respectively, @nestjs/mongoose package for mango DB.

```https://docs.nestjs.com/techniques/authentication```
- Passport is the most popular node.js authentication library, well-known by the community and successfully used in many production applications. It's straightforward to integrate this library with a Nest application using the @nestjs/passport module
At a high level, Passport executes a series of steps to:
a) Authenticate a user by verifying their "credentials" (such as username/password, JSON Web Token (JWT), or identity token from an Identity Provider)
b)Manage authenticated state (by issuing a portable token, such as a JWT, or creating an Express session)
c)Attach information about the authenticated user to the Request object for further use in route handlers

```https://docs.nestjs.com/techniques/logger``` <br />
- Nest comes with a built-in text-based logger which is used during application bootstrapping and several other circumstances such as displaying caught exceptions (i.e., system logging). This functionality is provided via the Logger class in the @nestjs/common package. 

```https://docs.nestjs.com/techniques/performance``` <br />
- Nest also provides compatibility with other libraries such as, for example, Fastify. 
Fastify provides a good alternative framework for Nest because it solves design issues in a similar manner to Express. However, fastify is much faster than Express, achieving almost two times better benchmarks results.

```https://docs.nestjs.com/graphql/quick-start``` <br />
- Harnessing the power of TypeScript & GraphQL.
GraphQL is a powerful query language for APIs and a runtime for fulfilling those queries with your existing data. It's an elegant approach that solves many problems typically found with REST APIs.
- GraphQL queries access not just the properties of one resource but also smoothly follow references between them. While typical REST APIs require loading from multiple URLs, GraphQL APIs get all the data your app needs in a single request. Apps using GraphQL can be quick even on slow mobile network connections.

```https://docs.nestjs.com/microservices/basics``` <br />
- Nest natively supports the microservice architectural style of development.In Nest, a microservice is fundamentally an application that uses a different transport layer than HTTP.
Nest supports several built-in transport layer implementations, called transporters, which are responsible for transmitting messages between different microservice instances. Most transporters natively support both request-response and event-based message styles. 
It uses package @nestjs/microservices.

```https://docs.nestjs.com/fundamentals/testing``` <br />
- Automated testing is considered an essential part of any serious software development effort. It is provides integration with Jest and Supertest out-of-the-box, while remaining agnostic to testing tools.
  
