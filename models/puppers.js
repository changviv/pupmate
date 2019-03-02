var orm = require("../config/orm.js")

var pupper = {
	updateSearch: function(val, cb) {
		console.log("pupper/updateSearch")
		orm.update("puppers", val, function(res) {
			console.log("pupper/updateSearch orm/update")
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