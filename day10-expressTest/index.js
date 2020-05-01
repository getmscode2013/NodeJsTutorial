// You can know more details about expressjs from https://expressjs.com/
// Tag of exress Js is well suited "Fast, unopinionated, minimalist web framework for Node.js"
// You can see the below code, previously when we have checked for http, it took many line of code to see in browser.
// With  expressJs you can create Web application, Middleware (API), 
// install express by 
// $ npm install express --save
// you can get same code on expressjs website.

const ex = require("express");
const app = ex();

app.get('/', (req, res) => { res.send('Hello world'); })

// like above you can defined with parameter
app.get('/Books', (req, res) => { res.send('Book selves'); })


app.listen("4000", () => console.log("Server is running on port 4000"));