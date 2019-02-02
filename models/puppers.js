var orm = require("../config/orm.js")

var pupper = {
	create: function(vals, cb) {
		orm.insert("puppers", vals, function(res) {
			cb(res);
		});
		res.redirect("/pupview")
	},
	all: function(cb) {
        orm.all("puppers", function(res) {
            cb(res);
        });
	}
};

module.exports = pupper;