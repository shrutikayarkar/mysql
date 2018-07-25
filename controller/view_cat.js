var express= require("express");
var router = express.Router();
var cat = require("../model/cat");

router.get("/",function (req,res) {
	cat.find(function(err,result){
	var pagedata = {title:"cat page",pagename:"cat/view",data:result};
	res.render("layout",pagedata);
	});
});

router.get("/delete/:id",function(req,res){
	var id = req.params.id;
	cat.delete({id},function(err,result){
		res.redirect("/view");
	});
});
 
router.get("/edit/:id",function(req,res){
	var id = req.params.id;
	cat.findwhere({id},function(err,result){
		console.log(result);
		var data = JSON.parse(JSON.stringify(result[0]));
		// console.log("+++++"+data);
	var pagedata = {title:"cat edit page",pagename:"cat/edit",data1:data};
	res.render("layout",pagedata);
		
	});
});

router.post("/update",function(req,res){
	console.log(req.body);
	var id = req.body.id;
	// delete req.body.id;
	cat.update({id},req.body,function(err,result){
		console.log("/////////"+result);
		res.redirect("/view");
	});
});

module.exports = router;