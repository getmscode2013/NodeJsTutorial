// prototype usese to extend the functionalty of exiting function.

var Employee = function()
{
this.name = "Satya";
this.age = 30;


}


var e =  new Employee();
console.log(e.age);

Employee.prototype = {
    phoneNumber : "4545454",

    GetAge : function()
    {
        return this.name;
    }
}

var e =  new Employee();
console.log(e.age);
console.log(e.phoneNumber);
console.log(e.GetAge());
