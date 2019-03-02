var connection = require("./connection.js")

var queryString;

function printQuestionMarks(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push("?");
	}

	return arr.toString();
};


var orm = {
	// READ (GET method)
	all: function(table, cb) {
		queryString = "SELECT * FROM ??";
		connection.query(queryString, [table], function(err, result) {
			if (err) throw err;
			cb(result);
			console.log("orm/all")
		});
	},
	update: function(table, val, cb) {
		queryString = "SELECT * FROM ?? WHERE city= ?";
		connection.query(queryString, [table, val], function (err, result) {
			console.log("ORM/UPDATE")
			if (err) {throw err};
			cb(result);
		});
	},
	// CREATE (POST method)
	insert: function(table, vals, cb) {
		queryString = ("INSERT INTO "
					   + table
					   + " (name, breed, city, state, age, size, gender, neutered, photo) VALUES ("
					   + printQuestionMarks(vals.length)
					   + ");"
					  )
		console.log(queryString);

		connection.query(queryString, vals, function(err, result) {
			if (err) throw err;
			cb(result);
			console.log("Create new pup success")
		});
	}
};

module.exports = orm;