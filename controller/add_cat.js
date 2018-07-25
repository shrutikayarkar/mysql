var express= require("express");
var router = express.Router();
var cat = require("../model/cat");
var filename = require("../helper/changename");
var path = require("path");

router.get("/",function (req,res) {
	var pagedata = {title:"cat page",pagename:"cat/index"};
	res.render("layout",pagedata);
});

router.post("/",function(req,res){
	var file = req.files.img;
	var name = filename(file.name);
	var filepath = path.resolve("public/images/"+name);
	file.mv(filepath);
	req.body.img = name;
	cat.insert(req.body,function(err,result){
		// console.log(result);
		res.redirect("/add");
	});
});

module.exports = router;