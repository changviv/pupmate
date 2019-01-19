var orm = require("../config/orm.js")

var pupper = {
	// create: function(val, cb) {
	// 	orm.insertOne("puppers", "name", val, function(res) {
	// 		cb(res);
	// 	});
	// },
	// update: function(col, val, id, cb) {
	// 	orm.updateOne("puppers", col, val, id, function(res) {
	// 		cb(res);
	// 	});
	// },
	all: function(cb) {
        orm.selectAll("puppers", function(res) {
            cb(res);
        });
	}
};

module.exports = pupper;