require("dotenv").config();
var mysql = require("mysql");

var connection = mysql.createConnection({
	host: process.env.DB_HOST,
	port: 3306,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: "puppers_db"
});

connection.connect(function(err) {
	if (err) {
  	  	console.error("error occured while connecting:", err.stack);
  	  	return;
	};
	console.log("connected as id", connection.threadId);
});


module.exports = connection;
