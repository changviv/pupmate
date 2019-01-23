var orm = require("../config/orm.js")

var pupper = {
	create: function(table, vals, cb) {
		orm.insert("puppers",vals, function(res) {
			cb(res);
		});
	},
	all: function(cb) {
        orm.all("puppers", function(res) {
            cb(res);
        });
	}
};

module.exports = pupper;