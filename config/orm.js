var connection = require("./connection.js")

var queryString;

function printQuestionMarks(num) {
	var arr = [];

	for (var i = 0; i < num.length; i++) {
		arr.push("?");
	}

	return arr.toString();
}
var orm = {
	// READ (GET method)
	all: function(table, cb) {
		queryString = "SELECT * FROM ??";
		connection.query(queryString, [table], function(err, result) {
			if (err) throw err;
			cb(result);
			console.log("it's working")
			// console.log("Select All Results:");
			// console.log(result);
		});
	},
	// CREATE (POST method)
	insert: function(table, vals, cb) {
		queryString = ("INSERT INTO " + table
					   + " (name, breed, city, age, size, gender, neutered, photo) VALUES ("
					   + printQuestionMarks(vals.length)
					   + ");"
					  )
		console.log(queryString);

		connection.query(queryString, vals, function(err, result) {
			if (err) throw err;
			cb(result);
		});
	}
};

module.exports = orm;