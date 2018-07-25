var con = require("../config/connect");

module.exports.insert = function (obj,cb) {
	con.connect(function(err){
		var que="INSERT INTO cat(category)VALUES('"+obj.name+"')";
		con.query(que,cb);
	});
}

module.exports.find = function (cb) {
	con.connect(function(err){
		var que="SELECT * FROM cat";
		con.query(que,cb);
	});
}

module.exports.delete = function (obj,cb) {
	con.connect(function(err){
		var que="DELETE FROM cat WHERE id='"+obj.id+"'";
		con.query(que,cb);
	});
}

module.exports.findwhere = function (obj,cb) {
	con.connect(function(err){
		var que="SELECT category,id FROM cat WHERE id='"+obj.id+"'";
		con.query(que,cb);
	});
}

module.exports.update = function (where,obj,cb) {
	con.connect(function(err){
		var que="UPDATE cat SET category='"+obj.name+"' WHERE id = '"+where.id+"'";
		con.query(que,cb);
	});
}
