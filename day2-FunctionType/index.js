var obj =  {name : "satya", phoneNo : 1234567890, email : "Test@gmail.com"}

console.log(obj);
console.log(obj.name);

// Function whicch is not having the name is called ananomus function.
var v = function() 
{
    console.log("this is anonymous function");
}

v();

// Arrow function is based on arrow function keys/
var v = () =>     console.log("this is arrow function");

v();

var v = (a , b) => 
{
    console.log("addition is :");
    console.log(a + b);
};

v(2,3);