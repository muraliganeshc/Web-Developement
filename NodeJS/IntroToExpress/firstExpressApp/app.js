console.log("In express App");
var express = require("express");
var app = express();
app.get("/",function(req,res){
    res.send("Hi There");
});

app.get("/bye",function(req,res){
    console.log("request made tp /bye");
    res.send("Good Bye");
});

app.get("/r/:test",function(req, res) {
    res.send("Welcome to "+req.params.test);
})

app.get("*",function(req,res){
   res.send("* page"); 
});

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Server Started");
}); 