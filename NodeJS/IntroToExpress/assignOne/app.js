var express = require("express");
var app = express();

app.get("/",function(req,res){
   res.send("Hi, Welcome to my assignment"); 
});

app.get("/speak/:animal",function(req,res){
    var sounds = {
        DOG:"woof woof!",
        CAT:"meeow"
    }
    var animal = (req.params.animal).toUpperCase();
//   if(animal == "DOG"){
//       res.send("The Dog says 'woof woof!'");
//   }else if(animal == "CAT"){
//       res.send("The Cat says 'Meeow'");
//   }else{
//       res.send("Animal "+animal+" not handled");
//   }

    res.send("The "+animal+" says '"+sounds[animal]+"'");
});


app.get("/repeat/:value/:times",function(req, res) {
    var val = req.params.value;
    var repeatcount = Number(req.params.times);
    var sendtext = ""
    for(var i=0;i<repeatcount;i++){
        sendtext=sendtext+val+" ";
    }
    res.send(sendtext);
})


app.get("*",function(req, res) {
   res.send("Sorry!!! Page not found");
});



app.listen(process.env.PORT,process.env.IP);