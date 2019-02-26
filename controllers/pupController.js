var express = require("express");
var pupper = require("../models/puppers.js");
var connection = require("../config/connection.js")
var router = express.Router();

router.get("/", function (req, res) {
	pupper.all(function(data) {
		res.render("index", { puppers: data });
	});
});


router.get("/signup", function (req, res) {
	pupper.all(function(data) {
		res.render("signup");
	});
});

// router.post("/signup")

router.get("/login", function (req, res) {
	pupper.all(function (data) {
		res.render("login");
	});
});

router.get("/search", function (req, res) {
	pupper.all(function(data) {
		res.render("search", { puppers: data });
	});
});


// ---------------------------------------
router.get("/api/pupper", function (req, res) {
	pupper.all(function(data) {
		res.render("search", { puppers: data });
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
		// res.redirect("/pupview")
	});


});

router.post("/puppylist", function(req,res) {
	res.redirect("/api/pupper");
	console.log("redirect")
})

// Export routes for server.js to use.
module.exports = router;