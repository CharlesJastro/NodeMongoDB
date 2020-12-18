// console.log("May Node Be With You");  //Use node command run <node server.js> to output something and test that node is installed and working.

const express = require('express');   //we use express server by requiring it
const app = express();    

app.listen(3000, function(){
    console.log("listening on port 3000")
})                                    //we use Express's listen method to enable our Express server connect to the browser via a listening port

//run <node server.js> in vs-code terminal to see if the server listens.
// then open localhost:3000 on your brower and you see "Cannot Get /" message. Nothing was sent to the browser hence the message.

app.get("/", function(req, res){   //we use a get method with endpoint(what comes after domain name) and a callback function with two inputs - request(req) and respond(res). 
    res.send("Hello Jastro")       //telling the browser to respond with Hello Jastro if the endpoint matches in both server and browser.   
})                                 //function now outdated, no longer supported on get method.

app.get("/", (req, res)=>{         //same code as above, with => replacing function() in ES6 arrow fucntion
    res.send("Hello Jastro")        
})

 app.get("/", (req, res)=> {
     res.sendFile(__dirname + 'index.html') // the callback function's response tells Express server to add index.html to the directory name so we can display html in browser.
 })                                         //now we can display our html content

