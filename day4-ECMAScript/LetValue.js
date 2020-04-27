// Going to learn the ECMA script like Let and const

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

