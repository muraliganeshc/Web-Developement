console.log("In JS File");
var express = require("express");
var app = express();



app.get("/",function(req,res){
    res.render("t.ejs");
    //res.send("Welcome to the page");
});

app.get("/test/:value",function(req,res){
    var value = req.params.value;
    res.render("test.ejs",{testvalue:value});
});




app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Sever is running");
});