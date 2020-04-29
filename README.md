# NodeJs Tutorial

1. Node.js is an open-source and cross-platform JavaScript runtime environment.
2. Node.js runs the V8 JavaScript engine, the core of Google Chrome.
3. A Node.js app is run in a single process, without creating a new thread for every request. 
4. Node.js has a unique advantage devloper can write the server-side code in addition to the client-side code.
5. Node.js is born on 2009.
6. The first form of npm is created 2010.

# Hello world
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

# Function Type
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

