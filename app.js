var express = require("express");
var app = express();
var parser = require("body-parser");
var cookie = require("cookie-parser");
var session = require("express-session");
var flash = require("express-flash");
var cache = require("nocache");
var upload = require("express-fileupload");

app.set("view engine","ejs");

app.use(parser());
app.use(cookie());
app.use(session({secret:"123"}));
app.use(flash());
app.use(cache());
app.use(upload());
app.use(express.static(__dirname+"/public"));

app.use(function(req,res,next){
res.locals.session = req.session;
next();
});

app.use(require("./config/routes"));

app.listen(3000,function () {
	console.log("running");
});