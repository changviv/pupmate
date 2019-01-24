var express = require("express");
var pupper = require("../models/puppers.js");
var connection = require("../config/connection.js")
var router = express.Router();

// READ (GET) route
router.get("/", function (req, res) {
	pupper.all(function(data) {
		res.render("index", { puppers: data });
	});
});

// CREATE (POST) route
router.post("/api/pupper", function(req, res){
	var req = req.body
	var vals = [];

	for (key in req) {
		vals.push(req[key])
	}

	pupper.create(vals, function(result) {
		res.json({ id: result.insertId });
		// res.render("newview", { puppers: data });
	});
});

// Export routes for server.js to use.
module.exports = router;