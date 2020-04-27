class TestUserClass 
{
    constructor()
    {
        this.name = "Satya first ";
        this.phoneNumber = "6776777"
    }

    getName()
    {
        //console.log(name); // this will give error to access any of the class values you need to use thi.
        console.log(this.name);
        this.age = 12
        return this.name;
    }

    getAge()
    {
        return this.age;
    }
}


var tc = new TestUserClass();
//tc.getName();
console.log(tc.getAge()); // you need to call the Get name first as the Age setting their.