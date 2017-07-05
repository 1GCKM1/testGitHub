var express = require("express");

var app = express();
app.get('/',function(req,res){
	res.send("ok im fukin fine");
}).listen(3000);