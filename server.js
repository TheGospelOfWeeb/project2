var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var router = express.Router();

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ ectended: false }));
app.use(bodyParser.json());




router.get('/',function(req,res){
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

router.get('/donate',function(req,res){
  res.sendFile(path.join(__dirname + "/public/donate.html"));
});

router.get('/request',function(req,res){
  res.sendFile(path.join(__dirname + "/public/request.html"));
});

router.get('/contact',function(req,res){
  res.sendFile(path.join(__dirname + "/public/contact.html"));
});

router.get('/inventory',function(req,res){
  res.sendFile(path.join(__dirname + "/public/inventory.html"));
});


app.use(express.static(__dirname + '/public'));


app.use('/', router);
app.listen(PORT, function() {
  console.log("App lisening on PORT" + PORT);
});
