var express= require("express");
var router = express.Router();
var user = require("../model/user");

router.get("/",function (req,res) {
	var pagedata = {title:"signup page",pagename:"signup/index"};
	res.render("layout",pagedata);
});

router.post("/",function(req,res){
	// console.log("+++++++++"+req.body);
user.insert(req.body,function(err,result){
	// console.log(result);
	res.redirect("/signup");
});
});

module.exports = router;