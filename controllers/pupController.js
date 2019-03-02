var express = require("express");
var pupper = require("../models/puppers.js");
var connection = require("../config/connection.js")
var router = express.Router();

router.get("/signup", function (req, res) {
    res.render("signup");
});

router.get("/login", function (req, res) {
	res.render("login");
});


router.get("/", function(req, res) {
	pupper.all(function(data) {
		res.render("search", { puppers: data });
	});
});

router.post("/searchcity", function (req, res) {
	pupper.updateSearch(req.body.city, function(data) {
		console.log("router/post",data)
		res.render("search", { puppers: data })
		// console.log("search updated")
		// this data isn't being rendered to show the upaded list
	});
});

module.exports = router;