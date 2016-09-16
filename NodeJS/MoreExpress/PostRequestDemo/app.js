var express = require("express")
var app = express();
var bodyparser = require("body-parser");
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended:true}));
var friends = ["abc","def","ghi","asdasd"];

app.get("/",function(req,res){
    res.render("home");
})

app.get("/friends",function(req,res){
    
    res.render("friends",{friends:friends});
})

app.post("/addFriend",function(req,res){
   //console.log(req.body.friendname);
   friends.push(req.body.friendname);
   //res.send("post route"); 
   res.redirect("/friends");
});

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Server Started");
})