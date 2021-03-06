// var express = require("express")
// var app = express()

// var router = express.Router()
// router.route('/products').get(function(req,res){
//     var products = [
//         {name:"Mobile",price:20000},
//         {name:"TV",price:30000},
//         {name:"laptop",price:40000}
//     ];
//     res.json(products);
    
// })
// app.use('/',router);
// app.get('/',function(req,res){
//     res.sendFile("Index.html",{root:__dirname})
// })
// app.listen(5000,()=>{
//     console.log("Server running at port 5000!")
// })


var express = require('express');
var app = express();

var router = express.Router();

router.route("/friends/:name").get(function(req,res){
    var friends = [
        {name:"Khushboo",nickName:'chotu'},
        {name:"Astha",nickName:'moti'},
        {name:"Shivanee",nickName:'tai'}
    ];

    var fName = req.params.name;
    var Name = friends.find(function(f){
        f.name==fName;
    });
    if(Name){res.json(Name)}
    else{res.json(friends);}
    
});

app.use('/',router);        //express now knows how to match the routes!
app.get("/",(req,res)=>{
    res.sendFile("index.html",{root:__dirname});
});

app.use(function(req,res){
    res.statusCode = 404;
    res.sendFile("ErrorPage.html",{root:__dirname});
});     //used for other request

app.listen(5000,()=>console.log("Server running at : 5000"));



