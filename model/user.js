var con = require("../config/connect");

module.exports.insert = function (obj,cb) {
	con.connect(function(err){
		var que = "INSERT INTO user(fullname,username,password,address,gender,city)VALUES('"+obj.fullname+"','"+obj.username+"','"+obj.password+"','"+obj.address+"','"+obj.gender+"','"+obj.city+"')";
		con.query(que,cb);
	});
}


// module.exports.findwhere=function(obj, cb){
// 	con.connect(function(err){
// 		var que = "SELECT * FROM user WHERE ";
// 		var counter=1;
// 		for(var k in obj){
// 			if(counter==1)
// 			{
// 				que += k+"= '"+obj[k]+"'";
// 			}
// 			else
// 			{
// 				que += " AND "+k+"= '"+obj[k]+"' ";

// 			}
// 			counter++;
// 		}


// 		// console.log(que);
// 		con.query(que, cb);
// 	});
// }

module.exports.findwhere = function(obj,cb){
	con.connect(function(err){
		var que = "SELECT * FROM user WHERE ";
		var counter = 1;
		for(var k in obj){
			if(counter == 1)
			{
				que += k+ "= '"+obj[k]+ "'";
			}
			else
			{
				que += "AND"+ k+ "= "+obj[k]+" ";
			}
			counter++;
}
		con.query(que,cb);
	});
}