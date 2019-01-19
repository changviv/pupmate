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
// router.post("/api/pupper", function(req, res){
// 	pupper.create(req.body.name, function(result) {
// 		res.json({ id: result.insertId });
// 	});
// });

// // Update (PUT) route
// router.put("/api/pupper/:id", function (req, res) {
// 	pupper.update("devoured", req.body.devoured, req.params.id, function(result) {
// 		if (result.changedRows === 0) {
// 			// If no rows were changed, 
// 			// then the ID must not exist, so 404
// 			return res.status(404).end();
// 		} else {
// 			res.status(200).end();
// 		}
// 		console.log(result)
// 	});
// });

// Export routes for server.js to use.
module.exports = router;