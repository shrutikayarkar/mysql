var express= require("express");
var router = express.Router();
var user = require("../model/user");

router.get("/",function (req,res) {
	user.findwhere({})
	var pagedata = {title:"user page",pagename:"user/index"};
	res.render("layout",pagedata);
});


module.exports = router;