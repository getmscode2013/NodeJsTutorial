// In this session i am going to demonstrate how we can connect to database.
// I am taking the example of how we can connect to SQL database
// First you need to take the refrence of MSdatabase
// more details you will get on
//  https://www.npmjs.com/package/node-mssql - it is old ways

// Or by using mssql
// For more details you can see that
// You can work with either package npm install mssql
//https://www.npmjs.com/package/mssql
// 

// need to enable  all ssql services from services.msc which is related to network.
// enable tcp/ip protocol as like belo
//https://stackoverflow.com/questions/25577248/node-js-mssql-tedius-connectionerror-failed-to-connect-to-localhost1433-conn
// restart your systeam


var sql = require('mssql');
const config = {
    user: 'sa',
    password: 'password1',
    server: 'REETPC', // You can use 'localhost\\instance' to connect to named instance
    database: 'test12',
}


sql.connect(config).then(pool => {
    
    return pool.request()
        .input('CustName', sql.VarChar(50), "satya")
        .input('Phonenumber', sql.VarChar(10), "45677889")
        .input('Age', sql.Int, 23)
        // You can either insert records by  hard code query
        //.query("INSERT INTO [test12].[dbo].[Customer]  ([CustName] ,[Phonenumber] ,[Age])   VALUES(  @CustName,  @Phonenumber,   @Age)")
        
        // oR you can write a store procedure and call that 
         .execute('InsertCustomer',)
        // .output('output_parameter', sql.VarChar(50))
}).then(result => {
    console.dir(result)
}).catch(err => {
    console.log(err);
})


//// Here is the way you can use to  get the records  using hard coded query
/*
sql.connect(config).then(() => {
    return sql.query`select * from [dbo].[Customer]`
}).then(result => {
    console.log(result)
}).catch(err => {
    console.log(err);
})
*/


// get the result using store procedure
sql.connect(config).then(pool => {
    return pool.request().execute("GetAllCustomer")
}).then(result => {
    console.log(result)
}).catch(err => {
    console.log(err);
})

// get records using paasing paramter using store procedure
sql.connect(config).then(pool => {
    return pool.request().input('Customerid', sql.Int, 2).execute("GetCustomerbyId")
}).then(result => {
    console.log(result)
}).catch(err => {
    console.log(err);
})