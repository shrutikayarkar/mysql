var express= require("express");
var router = express.Router();
var user = require("../model/user");

router.get("/",function (req,res) {
	var pagedata = {title:"login page",pagename:"login/index"};
	res.render("layout",pagedata);
});

router.post("/",function(req,res){
	var u = req.body.username;
	var p = req.body.password;

	user.findwhere({ username : u}, function(err, result){
		console.log(result[0]);
			
		if(result.length==1)
		{
			var data = JSON.parse(JSON.stringify(result[0]));
			if(data.password == p)
			{
				req.session.name = data.fullname;
				req.session.uid = data.id;
				req.session.is_user_logged_in = true;
				res.redirect("/user");
			}
			else
			{
				res.redirect("/login");	
			}
		}
		else
		{
			res.redirect("/login");
		}
	});
});
module.exports = router;