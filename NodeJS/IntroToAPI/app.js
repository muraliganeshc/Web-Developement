var express =require("express");
var request1 =require("request");
var app = express();
var bodyParser=require("body-parser");

app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,resp){
    resp.render("search")
});

app.get("/results",function(req,resp){
    // resp.send("works");
    // console.log(req);
    var movieName = req.query.movieName;
    //console.log(movieName);
    var api="http://www.omdbapi.com/?s="+movieName;
    request1(api,function(error,response,body){
        if(!error && response.statusCode == 200){
            // console.log(body);
            var data = JSON.parse(body);
            //resp.send(data["Search"][0].Title);
            resp.render("results.ejs",{results:data});
        }
    });
    // resp.send("works");

});






app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Movie App Started");
})