// While creating the application we need to include  many Static files like Images, CSS , JS etc.
// In NODEJS for express  it will provide the middleware to create access the static file.
// If you will not include the middleware, it will not show the static file you included to project.

// Lets include express js in application similar way we did it on day 10
// npm install express --save


// Lets create folder name assets - Images, - style

// We will keep our static file there


const ex = require("express");
const app = ex();

app.use(ex.static('assets'))


// to include file we need to use sendfile and add the file name
app.get('/', (req, res) => { res.sendfile("index.html"); })


app.listen("4000", () => console.log("Server is running on port 4000"));